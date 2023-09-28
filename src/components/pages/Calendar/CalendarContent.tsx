import { Button } from '@/UI/Button';
import { Input } from '@/UI/Input';
import calendarIllustration from '@/assets/calendar-illustration.png';
import CardContainer from '@/common/CardContainer';
import PageContainer from '@/common/PageContainer';
import { data, labels } from '@/data/pages/calendar/calendarData';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import FullCalendar from '@fullcalendar/react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './calendar.css';
import { v4 as uuidv4 } from 'uuid';
import LeftEditSidebar from './content/LeftEditSidebar';

interface CalendarEvent {
	id: any;
	title: string;
	start: Date;
	label: string | null;
}

const CalendarContent = () => {
	const today = new Date();
	const [events, setEvents] = useState<CalendarEvent[]>(data);
	const [selectedFilters, setSelectedFilters] = useState<string[]>(labels.map(item => item.name));
	const [formData, setFormData] = useState({ id: uuidv4(), title: '', start: today, end: today, eventUrl: '', location: '', description: '', label: '' });
	const [isOpen, setIsOpen] = useState(false);
	const { i18n } = useTranslation();

	const handleAddEvent = () => {
		if (formData.title && formData.start && formData.end && formData.label) {
			setIsOpen(false);
			const existingEventIndex = events.findIndex(event => event.id === formData.id);

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

	const handleSelectEvent = info => {
		setIsOpen(true);
		setFormData({
			id: info.event._def.publicId,
			title: info.event._def.title,
			start: info.event._instance.range.start,
			end: info.event._instance.range.end,
			eventUrl: info.event._def.extendedProps.eventUrl,
			location: info.event._def.extendedProps.location,
			description: info.event._def.extendedProps.label.description,
			label: info.event._def.extendedProps.label,
		});
	};

	const handleFilterChange = event => {
		const filterName = event.target.id;

		if (filterName === 'View All') {
			if (selectedFilters.includes('View All')) {
				setSelectedFilters([]);
			} else {
				setSelectedFilters(labels.map(item => item.name));
			}
		} else {
			if (selectedFilters.includes(filterName)) {
				setSelectedFilters(selectedFilters.filter(filter => filter !== 'View All' && filter !== filterName));
			} else {
				setSelectedFilters([...selectedFilters, filterName]);
			}
		}
	};

	const filteredEvents = events.filter(event => {
		if (selectedFilters.includes('View All')) {
			return true;
		}
		if (event.label !== null) {
			return selectedFilters.includes(event.label);
		}
	});

	const handleDateSelect = info => {
		console.log(info);
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

	const renderEventContent = eventInfo => {
		const event = eventInfo.event;
		const color = labels.find(item => item.name === event._def.extendedProps.label);
		return <div className={`bg-opacity-[12%] ${color?.color}border-opacity-10 px-2 rounded border font-semibold`}>{event.title}</div>;
	};

	return (
		<>
			<LeftEditSidebar isOpen={isOpen} formData={formData} handleAddEvent={handleAddEvent} setFormData={setFormData} setIsOpen={setIsOpen} />
			<PageContainer>
				<CardContainer className='flex w-full space-x-8'>
					<div className='md:flex hidden min-w-[12rem]  mt-3  justify-between flex-col'>
						<div className='h-full'>
							<Button onClick={() => setIsOpen(true)} className='!bg-violet-500 mb-4 hover:bg-violet-400 w-full !text-white'>
								Add Event
							</Button>
							<p className='text-gray-400'>FILTER</p>
							{labels.map((item, index) => (
								<div className='flex space-x-2 items-center' key={index}>
									<Input id={item.name} className={`w-4 h-4 ${item.color}`} defaultChecked={true} type='checkbox' checked={selectedFilters.includes(item.name)} onChange={handleFilterChange} />
									<label htmlFor={item.name}> {item.name}</label>
								</div>
							))}
						</div>
						<img src={calendarIllustration} />
					</div>
					<div className='w-full h-full'>
						<FullCalendar dayMaxEventRows={2} locale={i18n.language} plugins={[dayGridPlugin, interactionPlugin]} initialView='dayGridMonth' editable={true} selectable={true} events={filteredEvents} eventClick={handleSelectEvent} eventContent={renderEventContent} select={handleDateSelect} />
					</div>
				</CardContainer>
			</PageContainer>
		</>
	);
};

export default CalendarContent;
