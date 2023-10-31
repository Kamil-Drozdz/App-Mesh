import CardContainer from '@/common/CardContainer';
import PageContainer from '@/common/PageContainer';
import { data, labels } from '@/data/pages/calendar/calendarData';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import FullCalendar from '@fullcalendar/react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './calendar.css';
import LeftEditSidebar from './content/LeftEditSidebar';
import { v4 as uuidv4 } from 'uuid';
import CalendarAddEvent from './content/CalendarAddEvent';

interface CalendarEvent {
  id: string;
  title: string;
  start?: Date;
  label: string | null;
}
export interface FormDataProps {
  id: string;
  title: string;
  start?: Date;
  label: string;
  end?: Date;
  eventUrl: string;
  location: string;
  description: string;
}

const CalendarContent = () => {
  const today = new Date();
  const [events, setEvents] = useState<CalendarEvent[]>(data);
  const [selectedFilters, setSelectedFilters] = useState<string[]>(labels.map((item) => item.name));
  const [formData, setFormData] = useState<FormDataProps>({
    id: uuidv4(),
    title: '',
    start: today,
    end: today,
    eventUrl: '',
    location: '',
    description: '',
    label: '',
  });
  const [isOpen, setIsOpen] = useState(false);
  const [isAddEventOpen, setIsAddEventOpen] = useState(false);
  const { i18n } = useTranslation();

  const handleAddEvent = () => {
    if (formData.title && formData.start && formData.end && formData.label) {
      setIsOpen(false);
      const existingEventIndex = events.findIndex((event) => event.id === formData.id);

      if (existingEventIndex !== -1) {
        const updatedEvents = [...events];
        updatedEvents[existingEventIndex] = formData;
        setEvents(updatedEvents);
      } else {
        setEvents([...events, formData]);
      }
      setFormData({
        id: uuidv4(),
        title: '',
        start: today,
        end: today,
        eventUrl: '',
        location: '',
        description: '',
        label: '',
      });
    } else {
      alert('Please fill in all required fields (Title, Start Date, End Date,label).');
    }
  };

  const handleSelectEvent = (info) => {
    setIsOpen(true);
    setFormData({
      id: info.event._def.publicId,
      title: info.event._def.title,
      start: info.event._instance.range.start,
      end: info.event._instance.range.end,
      eventUrl: info.event._def.extendedProps.eventUrl,
      location: info.event._def.extendedProps.location,
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
      location: '',
      description: '',
      label: '',
    });
  };

  const renderEventContent = (eventInfo) => {
    const event = eventInfo.event;
    const color = labels.find((item) => item.name === event._def.extendedProps.label);
    return (
      <div className={`bg-opacity-[12%] ${color?.color}border-opacity-10 rounded border px-2 font-semibold`}>
        {event.title}
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
      />
      <PageContainer>
        <CardContainer className='flex w-full space-x-8'>
          <CalendarAddEvent
            setIsAddEventOpen={setIsAddEventOpen}
            isAddEventOpen={isAddEventOpen}
            setIsOpen={setIsOpen}
            labels={labels}
            selectedFilters={selectedFilters}
            setSelectedFilters={setSelectedFilters}
          />
          <div className='h-full w-full'>
            <FullCalendar
              dayMaxEventRows={2}
              locale={i18n.language}
              plugins={[dayGridPlugin, interactionPlugin]}
              initialView='dayGridMonth'
              editable={true}
              selectable={true}
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
        </CardContainer>
      </PageContainer>
    </>
  );
};

export default CalendarContent;
