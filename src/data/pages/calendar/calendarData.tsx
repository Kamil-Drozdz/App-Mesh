import { v4 as uuidv4 } from 'uuid';
import { FilterTypesCalendar } from '@/lib/enums/filterTypesCalendar';

export const labels = [
  { name: FilterTypesCalendar.all, color: 'bg-violet-400 border-violet-400 text-violet-400 accent-violet-400' },
  { name: FilterTypesCalendar.business, color: 'bg-violet-400 border-violet-400 text-violet-400 accent-violet-400' },
  { name: FilterTypesCalendar.holiday, color: 'bg-green-400 border-green-400 text-green-400 accent-green-400' },
  { name: FilterTypesCalendar.personal, color: 'bg-orange-400 border-orange-400 text-orange-400 accent-orange-400' },
  { name: FilterTypesCalendar.family, color: 'bg-red-400 border-red-400 text-red-400 accent-red-400' },
  { name: FilterTypesCalendar.etc, color: 'bg-sky-400 border-sky-400 text-sky-400 accent-sky-400' },
];

export const data = [
  {
    id: uuidv4(),
    title: 'Meeting',
    start: new Date('2023-11-06T09:00:00'),
    end: new Date('2023-11-06T10:00:00'),
    eventUrl: 'https://companydomain.com/meetings/strategy',
    place: 'Main Conference Room',
    description: 'Strategic planning meeting with department heads to align on upcoming quarter goals.',
    label: FilterTypesCalendar.business,
  },
  {
    id: uuidv4(),
    title: 'Holiday',
    start: new Date('2023-11-28'),
    end: new Date('2023-11-28'),
    eventUrl: '',
    place: 'All company places',
    description: 'Office closure in observance of the national holiday.',
    label: FilterTypesCalendar.holiday,
  },
  {
    id: uuidv4(),
    title: 'Personal Appointment',
    start: new Date('2023-11-30T14:00:00'),
    end: new Date('2023-11-30T15:00:00'),
    eventUrl: '',
    place: 'Downtown Clinic',
    description: 'Annual medical check-up appointment.',
    label: FilterTypesCalendar.personal,
  },
  {
    id: uuidv4(),
    title: 'Family Gathering',
    start: new Date('2023-11-05T18:00:00'),
    end: new Date('2023-11-05T21:00:00'),
    eventUrl: '',
    place: "Grandma's House",
    description: "Gathering at grandma's house for a family dinner.",
    label: FilterTypesCalendar.family,
  },
  {
    id: uuidv4(),
    title: 'Workshop',
    start: new Date('2023-11-10T13:00:00'),
    end: new Date('2023-11-10T15:00:00'),
    eventUrl: 'https://workshopdomain.com/events/innovation-workshop',
    place: 'Innovation Hub, Room 403',
    description: 'Interactive workshop on embracing innovation in daily tasks.',
    label: FilterTypesCalendar.business,
  },
  {
    id: uuidv4(),
    title: 'Birthday Party',
    start: new Date('2023-11-15T19:00:00'),
    end: new Date('2023-11-15T22:30:00'),
    eventUrl: '',
    place: '',
  },
];
