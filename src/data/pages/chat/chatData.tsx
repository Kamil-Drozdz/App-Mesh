import { UserStatuses } from '@/lib/enums/user';
import { faker } from '@faker-js/faker';
import { v4 as uuidv4 } from 'uuid';

export type BaseUser = {
  id: string;
  photo: string;
  name: string;
  status: UserStatuses;
};

export type ChatData = BaseUser & {
  messages: Message[];
};

export type Contact = BaseUser & {
  messages: Message[];
};

export type Message = {
  sender: string | undefined;
  content: string | File;
  timestamp: Date | string;
  photo: string;
};

const userStatusesArray = Object.values(UserStatuses);

export const generateChatData = (currentUserDisplayName: string | null | undefined) => {
  const name = faker.person.fullName();
  const photo = faker.image.avatarLegacy();
  const messages: Message[] = [];
  const randomStatus = userStatusesArray[Math.floor(Math.random() * userStatusesArray.length)];
  for (let i = 0; i < 10; i++) {
    messages.push({
      photo: photo,
      sender: i % 2 === 0 ? name : currentUserDisplayName || undefined,
      content: faker.lorem.sentence(),
      timestamp: faker.date.recent(),
    });
  }

  const dataChat: ChatData = {
    id: uuidv4(),
    photo: photo,
    name: name,
    status: randomStatus,
    messages: messages,
  };

  return dataChat;
};

export const generateContact = (): Contact => {
  const randomStatus = userStatusesArray[Math.floor(Math.random() * userStatusesArray.length)];
  return {
    id: uuidv4(),
    name: faker.person.fullName(),
    photo: faker.image.avatarLegacy(),
    status: randomStatus,
    messages: [],
  };
};
