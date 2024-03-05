import { Timestamp } from 'firebase/firestore';
import { useCallback, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { toast } from 'react-toastify';

import useFirebaseData from '@/hooks/reusable/useFirebaseData';
import { updateDocumentFirebase } from '@/lib/firebaseHelpers/updateDocumentFirebase';
import { addDocumentFirebase } from '@/lib/firebaseHelpers/addDocumentFirebase';
import { removeDocumentFirebase } from '@/lib/firebaseHelpers/removeDocumentFirebase';
import useCurrentUser from '@/store/CurrentUser';
import { Collections } from '@/lib/enums/collections';
import { FilterTypesCalendar } from '@/lib/enums/filterTypesCalendar';
import { CalendarEvent } from '@/components/pages/Calendar/CalendarContent';
import { labels } from '@/data/pages/calendar/calendarData';

export let docId;
function useCalendarContent() {
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
        addDocumentFirebase(Collections.calendar, docId, formData).then(() =>
          toast.success('Event added successfully!')
        );
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
  return {
    events,
    loading,
    existingEventIndex,
    error,
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
  };
}

export default useCalendarContent;
