import { v4 as uuidv4 } from 'uuid';

export const initialTasks = [
	{ id: uuidv4(), description: 'Write Report for Meeting', title: 'Meeting Preparation', completed: false, date: new Date('2023-09-04'), tag: 'Team' },
	{ id: uuidv4(), description: 'Buy Groceries', title: 'Grocery Shopping', completed: true, date: new Date('2023-09-03'), tag: 'Low' },
	{ id: uuidv4(), description: 'Plan Weekend Getaway', title: 'Weekend Planning', completed: false, date: new Date('2023-09-05'), tag: 'Medium' },
	{ id: uuidv4(), description: 'Prepare Presentation Slides', title: 'Work Presentation', completed: false, date: new Date('2023-09-04'), tag: 'Team' },
	{ id: uuidv4(), description: 'Exercise and Yoga', title: 'Health and Fitness', completed: true, date: new Date('2023-09-03'), tag: 'Low' },
	{ id: uuidv4(), description: 'Research New Project Ideas', title: 'Work Projects', completed: false, date: new Date('2023-09-05'), tag: 'Medium' },
];

export const tags = [
	{ name: 'Team', color: 'bg-violet-400 border-violet-400 text-violet-400 accent-violet-400' },
	{ name: 'Low', color: 'bg-green-400 border-green-400 text-green-400 accent-green-400' },
	{ name: 'Medium', color: 'bg-orange-400 border-orange-400 text-orange-400 accent-orange-400' },
	{ name: 'High', color: 'bg-red-400 border-red-400 text-red-400 accent-red-400' },
	{ name: 'Update', color: 'bg-sky-400 border-sky-400 text-sky-400 accent-sky-400' },
];
