import { faker } from '@faker-js/faker';

export const generateMeetupData = () => {
	const meetup = {
		photo: faker.image.avatarLegacy(),
		name: faker.person.fullName(),
	};
	return meetup;
};
