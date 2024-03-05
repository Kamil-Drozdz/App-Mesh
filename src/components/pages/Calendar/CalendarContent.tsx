import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import FullCalendar from '@fullcalendar/react';
import { useTranslation } from 'react-i18next';

import CardContainer from '@/common/CardContainer';
import PageContainer from '@/common/PageContainer';
import { labels } from '@/data/pages/calendar/calendarData';
import LeftEditSidebar from './content/LeftEditSidebar';
import CalendarAddEvent from './content/CalendarAddEvent';
import Loader from '@/common/Loader';
import { ErrorComponent } from '@/common/ErrrorComponent';
import { TooltipProvider } from '@/UI/Tooltip';
import { renderEventContent } from './content/renderEventContent';
import './calendar.css';
import useCalendarContent from '@/hooks/useCalendarContent';
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

function CalendarContent() {
  const { i18n } = useTranslation();
  const {
    loading,
    error,
    existingEventIndex,
    selectedFilters,
    setSelectedFilters,
    filteredEvents,
    setFormData,
    formData,
    handleAddEvent,
    handleDeleteEvent,
    handleEventDrop,
    handleSelectEvent,
    handleDateSelect,
    isOpen,
    setIsOpen,
    isAddEventOpen,
    setIsAddEventOpen,
  } = useCalendarContent();

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
