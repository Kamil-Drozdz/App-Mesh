import { Timestamp } from 'firebase/firestore';
import { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import FullCalendar from '@fullcalendar/react';
import { v4 as uuidv4 } from 'uuid';
import { toast } from 'react-toastify';

import CardContainer from '@/common/CardContainer';
import PageContainer from '@/common/PageContainer';
import { labels } from '@/data/pages/calendar/calendarData';
import LeftEditSidebar from './content/LeftEditSidebar';
import CalendarAddEvent from './content/CalendarAddEvent';
import useFirebaseData from '@/hooks/useFirebaseData';
import Loader from '@/common/Loader';
import { ErrorComponent } from '@/common/ErrrorComponent';
import { TooltipProvider } from '@/UI/Tooltip';
import { updateDocumentFirebase } from '@/lib/firebaseHelpers/updateDocumentFirebase';
import { addDocumentFirebase } from '@/lib/firebaseHelpers/addDocumentFirebase';
import { removeDocumentFirebase } from '@/lib/firebaseHelpers/removeDocumentFirebase';
import useCurrentUser from '@/store/CurrentUser';
import './calendar.css';
import { FilterTypesCalendar } from '@/lib/enums/filterTypesCalendar';
import { renderEventContent } from './content/renderEventContent';
import { Collections } from '@/lib/enums/collections';

export interface CalendarEvent {
  id: string;
  title: string;
  start?: Date;
  end?: Date;
  label: string;
  eventUrl: string;
  place: string;
  description: string;
}


export let docId;

function CalendarContent() {
  const { currentUser } = useCurrentUser();
  docId = currentUser?.uid || '';
  const today = new Date();
  const { data, loading, error } = useFirebaseData<CalendarEvent[]>(Collections.calendar);

  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const [selectedFilters, setSelectedFilters] = useState<string[]>(labels.map((item) => item.name));

  const [formData, setFormData] = useState<CalendarEvent>({
    id: uuidv4(),
    title: '',
    start: today,
    end: today,
    eventUrl: '',
    place: '',
    description: '',
    label: '',
  });

  const [isOpen, setIsOpen] = useState(false);
  const [isAddEventOpen, setIsAddEventOpen] = useState(false);
  const { i18n } = useTranslation();

  useEffect(() => {
    if (data) {
      const convertedCalendar = data.map((calendar) => ({
        ...calendar,
        start: calendar.start instanceof Timestamp ? calendar.start.toDate() : calendar.start,
        end: calendar.end instanceof Timestamp ? calendar.end.toDate() : calendar.end,
      }));
      setEvents(convertedCalendar);
    }
  }, [data]);

  const existingEventIndex = events.findIndex((event) => event.id === formData.id);

  const handleAddEvent = useCallback(() => {
    if (formData.title && formData.start && formData.end && formData.label) {
      setIsOpen(false);

      if (existingEventIndex !== -1) {
        const updatedEvents = [...events];
        updatedEvents[existingEventIndex] = formData;
        setEvents(updatedEvents);
        updateDocumentFirebase(Collections.calendar, docId, updatedEvents).then(() =>
          toast.success('Event updated successfully!')
        );
      } else {
        setEvents([...events, formData]);
        addDocumentFirebase(Collections.calendar, docId, formData).then(() => toast.success('Event added successfully!'));
      }
      setFormData({
        id: uuidv4(),
        title: '',
        start: today,
        end: today,
        eventUrl: '',
        place: '',
        description: '',
        label: '',
      });
    } else {
      alert('Please fill in all required fields (Title, Start Date, End Date,label).');
    }
  }, [formData, events, existingEventIndex, today, Collections.calendar, docId]);

  const handleDeleteEvent = useCallback(
    (eventId) => {
      const updatedEvents = events.filter((item) => item.id !== eventId);
      setEvents(updatedEvents);
      setIsOpen(false);
      // just for firebase one item to delete
      const removeItem = events.find((item) => item.id === eventId) as CalendarEvent;
      removeDocumentFirebase<CalendarEvent>(Collections.calendar, docId, removeItem).then(() =>
        toast.success('Event deleted successfully!')
      );
    },
    [events, Collections.calendar, docId]
  );

  const handleEventDrop = (info) => {
    const updatedEvents = events.map((event) => {
      if (event.id === info.event._def.publicId) {
        return {
          ...event,
          start: info.event._instance.range.start,
          end: info.event._instance.range.end,
        };
      }
      return event;
    });
    setEvents(updatedEvents);
    updateDocumentFirebase(Collections.calendar, docId, updatedEvents).then(() =>
      toast.success('Event updated successfully!')
    );
  };

  const handleSelectEvent = (info) => {
    setIsOpen(true);
    setFormData({
      id: info.event._def.publicId,
      title: info.event._def.title,
      start: info.event._instance.range.start,
      end: info.event._instance.range.end,
      eventUrl: info.event._def.extendedProps.eventUrl,
      place: info.event._def.extendedProps.place,
      description: info.event._def.extendedProps.description,
      label: info.event._def.extendedProps.label,
    });
  };

  const filteredEvents = events.filter((event) => {
    if (selectedFilters.includes(FilterTypesCalendar.all)) {
      return true;
    }
    if (event.label !== null) {
      return selectedFilters.includes(event.label);
    }
  });

  const handleDateSelect = (info) => {
    setIsOpen(true);
    setFormData({
      id: uuidv4(),
      title: '',
      start: info.start,
      end: info.end,
      eventUrl: '',
      place: '',
      description: '',
      label: '',
    });
  };

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorComponent error={error} />;
  }

  return (
    <>
      <LeftEditSidebar
        isOpen={isOpen}
        formData={formData}
        handleAddEvent={handleAddEvent}
        setFormData={setFormData}
        setIsOpen={setIsOpen}
        existingEventIndex={existingEventIndex}
        handleDeleteEvent={handleDeleteEvent}
      />
      <PageContainer>
        <CardContainer className='flex w-full space-x-0  md:space-x-8'>
          <CalendarAddEvent
            setIsAddEventOpen={setIsAddEventOpen}
            isAddEventOpen={isAddEventOpen}
            setIsOpen={setIsOpen}
            labels={labels}
            selectedFilters={selectedFilters}
            setSelectedFilters={setSelectedFilters}
          />
          <TooltipProvider>
            <div className='h-full w-full'>
              <FullCalendar
                dayMaxEventRows={2}
                locale={i18n.language}
                plugins={[dayGridPlugin, interactionPlugin]}
                initialView='dayGridMonth'
                editable
                selectable
                eventDrop={handleEventDrop}
                events={filteredEvents}
                eventClick={handleSelectEvent}
                eventContent={renderEventContent}
                select={handleDateSelect}
                customButtons={{
                  myCustomButton: {
                    text: '',
                    click: () => {
                      setIsAddEventOpen((prev) => !prev);
                    },
                  },
                }}
                headerToolbar={{
                  left: 'myCustomButton',
                  center: 'title',
                  right: 'today prev,next',
                }}
              />
            </div>
          </TooltipProvider>
        </CardContainer>
      </PageContainer>
    </>
  );
}

export default CalendarContent;
