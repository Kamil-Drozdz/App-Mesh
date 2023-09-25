import PageContainer from '@/common/PageContainer';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import FullCalendar from '@fullcalendar/react';
import React, { useState } from 'react';

interface CalendarEvent {
	title: string;
	start: Date;
	label: string | null;
}

const CalendarContent = () => {
	const [events, setEvents] = useState<CalendarEvent[]>([{ title: 'Meeting', start: new Date(), label: 'Praca' }]);
    
	const handleEventClick = info => {
		console.log(info);
		const newTitle = prompt('', info.event.title);
		const newLabel = prompt('', info.event.label);

		if (newTitle !== null) {
			info.event.setProp('title', newTitle);
			info.event.setExtendedProp('label', newLabel);
		}
	};

	const handleDateSelect = info => {
		const title = prompt('Wprowadź tytuł nowego zdarzenia:');
		const label = prompt('Wprowadź etykietę nowego zdarzenia:');

		if (title !== null) {
			setEvents([...events, { title, start: info.start, label }]);
		}
	};

	const renderEventContent = eventInfo => {
		const event = eventInfo.event;

		return <div className=' bg-blue-500'>{event.title}</div>;
	};

	return (
		<PageContainer>
			<FullCalendar
				plugins={[dayGridPlugin, interactionPlugin]}
				initialView='dayGridMonth'
				datesSet={e => {
					console.log(e);
				}}
				editable={true}
				selectable={true}
				events={events}
				eventClick={handleEventClick}
				eventContent={renderEventContent}
				select={handleDateSelect}
			/>
		</PageContainer>
	);
};

export default CalendarContent;
