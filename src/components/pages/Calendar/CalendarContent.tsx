import CardContainer from '@/common/CardContainer';
import PageContainer from '@/common/PageContainer';
import { labels } from '@/data/pages/calendar/calendarData';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import FullCalendar from '@fullcalendar/react';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './calendar.css';
import LeftEditSidebar from './content/LeftEditSidebar';
import { v4 as uuidv4 } from 'uuid';
import CalendarAddEvent from './content/CalendarAddEvent';
import useFirebaseData from '@/hooks/useFirebaseData';
import Loader from '@/common/Loader';
import { ErrorComponent } from '@/common/ErrrorComponent';
import { Timestamp } from 'firebase/firestore';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/UI/Tooltip';
import { updateItemsFirebase } from '@/lib/firebaseHelpers/updateItemsFirebase';
import { addItemFirebase } from '@/lib/firebaseHelpers/addItemFirebase';
import { removeItemFirebase } from '@/lib/firebaseHelpers/removeItemFirebase';
import useCurrentUser from '@/store/CurrentUser';

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

export const collectionName = 'calendar';
export let docId;

const CalendarContent = () => {
  const { currentUser } = useCurrentUser();
  docId = currentUser?.uid || '';
  const today = new Date();
  const { data, loading, error } = useFirebaseData<CalendarEvent[]>(collectionName);

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

  const handleAddEvent = () => {
    if (formData.title && formData.start && formData.end && formData.label) {
      setIsOpen(false);

      if (existingEventIndex !== -1) {
        const updatedEvents = [...events];
        updatedEvents[existingEventIndex] = formData;
        setEvents(updatedEvents);
        updateItemsFirebase(collectionName, docId, updatedEvents);
      } else {
        setEvents([...events, formData]);
        addItemFirebase(collectionName, docId, formData);
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
  };

  const handleDeleteEvent = (eventId) => {
    const updatedEvents = events.filter((item) => item.id !== eventId);
    setEvents(updatedEvents);
    setIsOpen(false);
    //just for firebase one item to delete
    const removeItem = events.find((item) => item.id === eventId) as CalendarEvent;
    removeItemFirebase<CalendarEvent>(collectionName, docId, removeItem);
  };

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
    updateItemsFirebase(collectionName, docId, updatedEvents);
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
    if (selectedFilters.includes('View All')) {
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

  const renderEventContent = (eventInfo) => {
    const event = eventInfo.event;
    const color = labels.find((item) => item.name === event._def.extendedProps.label);

    const handleLinkClick = (e) => {
      e.stopPropagation();
    };

    return (
      <div>
        <Tooltip>
          <TooltipTrigger>
            <div className={`bg-opacity-[12%] ${color?.color} z-1 rounded border border-opacity-10 px-2 font-semibold`}>
              {event.title}
            </div>
          </TooltipTrigger>
          <TooltipContent className=' !bg-black !p-0' side='left'>
            <div className=' bg-lightWhite min-w-[200px] px-6 text-base text-gray-800 dark:bg-secondary dark:text-gray-300'>
              <div className='flex items-center justify-start space-x-2'>
                <span className='font-semibold'>eventURL: </span>
                <a
                  target='_blank'
                  rel='noreferrer'
                  className='!text-blue-500'
                  href={event._def.extendedProps.eventUrl}
                  onClick={handleLinkClick}
                >
                  {event._def.extendedProps.eventUrl}
                </a>
              </div>
              <div className='flex items-center justify-start space-x-2'>
                <span className='font-semibold'>Place: </span>
                <p>{event._def.extendedProps.place}</p>
              </div>
              <div className='flex items-center justify-start space-x-2'>
                <span className='font-semibold'>Description: </span>
                <p>{event._def.extendedProps.description}</p>
              </div>
            </div>
          </TooltipContent>
        </Tooltip>
      </div>
    );
  };

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
                editable={true}
                selectable={true}
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
};

export default CalendarContent;
