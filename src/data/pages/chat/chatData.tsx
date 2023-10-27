import { UserStatuses } from '@/lib/enums/user';
import { faker } from '@faker-js/faker';

export type ChatData = {
  photo: string;
  name: string;
  status: UserStatuses;
  messages: Message[];
};
export type Message = {
  sender: string | undefined;
  content: string;
  timestamp: Date;
  photo: string;
};

export const generateChatData = (currentUserDisplayName: string | null | undefined) => {
  const userStatusesArray = Object.values(UserStatuses);
  const randomStatus = userStatusesArray[Math.floor(Math.random() * userStatusesArray.length)];
  const name = faker.person.fullName();
  const photo = faker.image.avatarLegacy();

  const messages: Message[] = [];

  for (let i = 0; i < 10; i++) {
    messages.push({
      photo: photo,
      sender: i % 2 === 0 ? name : currentUserDisplayName || undefined,
      content: faker.lorem.sentence(),
      timestamp: faker.date.recent(),
    });
  }

  const dataChat: ChatData = {
    photo: photo,
    name: name,
    status: randomStatus,
    messages: messages,
  };

  return dataChat;
};
