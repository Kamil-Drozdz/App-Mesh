import { faker } from '@faker-js/faker';

export interface MeetupDataProps {
	photo: string;
	name: string;
}
export const generateMeetupData = () => {
	const meetup: MeetupDataProps = {
		photo: faker.image.avatarLegacy(),
		name: faker.person.fullName(),
	};
	return meetup;
};
