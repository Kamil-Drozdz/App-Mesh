import { v4 as uuidv4 } from 'uuid';

export const labels = [
  { name: 'View All', color: 'bg-violet-400 border-violet-400 text-violet-400 accent-violet-400' },
  { name: 'Business', color: 'bg-violet-400 border-violet-400 text-violet-400 accent-violet-400' },
  { name: 'Holiday', color: 'bg-green-400 border-green-400 text-green-400 accent-green-400' },
  { name: 'Personal', color: 'bg-orange-400 border-orange-400 text-orange-400 accent-orange-400' },
  { name: 'Family', color: 'bg-red-400 border-red-400 text-red-400 accent-red-400' },
  { name: 'ETC', color: 'bg-sky-400 border-sky-400 text-sky-400 accent-sky-400' },
];

export const data = [
  { id: uuidv4(), title: 'Meeting', start: new Date('2023-09-06'), label: 'Business' },
  { id: uuidv4(), title: 'Holiday', start: new Date('2023-09-28'), label: 'Holiday' },
  { id: uuidv4(), title: 'Personal Appointment', start: new Date('2023-09-30'), label: 'Personal' },
  { id: uuidv4(), title: 'Family Gathering', start: new Date('2023-10-05'), label: 'Family' },
  { id: uuidv4(), title: 'Workshop', start: new Date('2023-10-10'), label: 'Business' },
  { id: uuidv4(), title: 'Birthday Party', start: new Date('2023-10-15'), label: 'Personal' },
  { id: uuidv4(), title: 'Conference', start: new Date('2023-10-20'), label: 'Business' },
];
