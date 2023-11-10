import ChatMessages from './ChatMessages';
import { Button } from '@/UI/Button';
import { Separator } from '@/UI/Separator';
import defaultUser from '@/assets/default-user.webp';
import CardContainer from '@/common/CardContainer';
import { ErrorComponent } from '@/common/ErrrorComponent';
import Loader from '@/common/Loader';
import { SearchInput } from '@/common/SearchInput';
import StatusBadge from '@/common/StatusBadge';
import useFirebaseData from '@/hooks/useFirebaseData';
import { IconSize } from '@/lib/enums/iconSize';
import { UserStatuses } from '@/lib/enums/user';
import useCurrentUser from '@/store/CurrentUser';
import { useEffect, useState } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';
import ChatContactItem from './ChatContactItem';
import ChatItem from './ChatItem';

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
  content: string;
  timestamp: Date | string;
  photo: string;
};

export const collectionPathChats = 'chats';
export const docIdChats = 'lEFHCaKnPUzcoGY1iSwe';
const collectionPathContacts = 'contatcs';
const docIdContacts = 'qQ5RBDGRrJ0d4CvalQEL';

const Chat = () => {
  const { currentUser } = useCurrentUser();
  const {
    data: dataChats,
    loading: loadingChats,
    error: errorChats,
  } = useFirebaseData<ChatData[]>(collectionPathChats, docIdChats);
  const {
    data: dataContacts,
    loading: loadingContats,
    error: errorContats,
  } = useFirebaseData<Contact[]>(collectionPathContacts, docIdContacts);
  const [isOpen, setIsOpen] = useState(false);
  const [chats, setChats] = useState<ChatData[]>([]);
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [activeChat, setActiveChat] = useState<ChatData | null>(null);
  const [search, setSearch] = useState('');

  useEffect(() => {
    if (dataChats && dataChats.length > 0) {
      setChats(dataChats);
      if (activeChat === null) setActiveChat(dataChats[0]);
    }
  }, [dataChats]);

  useEffect(() => {
    if (dataContacts) {
      setContacts(dataContacts);
    }
  }, [dataContacts]);

  function handleUserClick(selectedUser) {
    const existChat = chats.find((chat) => chat.id === selectedUser.id);
    if (existChat) setActiveChat(existChat);
    else {
      setActiveChat(selectedUser);
    }
    setIsOpen(false);
  }

  const filteredChats = chats.filter((chat) => chat.name.toLowerCase().includes(search.toLowerCase()));
  const filteredContact = contacts.filter((contact) => contact.name.toLowerCase().includes(search.toLowerCase()));

  if (loadingChats || loadingContats) {
    return <Loader />;
  }

  if (errorChats || errorContats) {
    return <ErrorComponent error={errorChats || errorContats} />;
  }

  return (
    <CardContainer className='flex space-y-0 !p-0'>
      <div
        className={`${
          isOpen ? 'translate-x-0' : '-translate-x-[110%]'
        } ease border-r-none absolute z-[1] h-full w-full rounded-r-lg rounded-l-lg border-r-gray-300 transition-transform duration-300 dark:border-r-gray-600 md:relative md:h-auto md:w-1/4 md:min-w-[300px] md:translate-x-0 md:rounded-r-none md:border-r-[1px]`}
      >
        <div className='flex w-full items-center justify-center space-x-2 p-4'>
          <div
            className={`relative flex h-10 w-10 min-w-[40px] items-center justify-center rounded-full dark:text-white ${
              currentUser?.photoURL || 'bg-secondary'
            }`}
          >
            <img
              height={40}
              width={40}
              className='rounded-full ring-2 ring-secondary'
              src={currentUser?.photoURL || defaultUser}
            />
            <StatusBadge className='absolute bottom-0 right-0' status={UserStatuses.Online} />
          </div>
          <SearchInput search={search} setSearch={setSearch} className='m-0 w-full' />
          <Button onClick={() => setIsOpen((prev) => !prev)} className='block !p-2 md:hidden' variant='empty'>
            <AiFillCloseCircle className='hover:text-red-500' size={IconSize.basic} />
          </Button>
        </div>
        <Separator />
        <div className='p-4'>
          <h2 className='!text-buttonPrimary my-3 text-lg font-semibold'>Chats</h2>
          <div className=' max-h-[300px] overflow-y-auto'>
            {filteredChats.length ? (
              <>
                {filteredChats.map((chat) => (
                  <ChatItem key={chat.id} chat={chat} activeChat={activeChat} handleUserClick={handleUserClick} />
                ))}
              </>
            ) : (
              <div>Chat not found</div>
            )}
          </div>
          <h2 className='!text-buttonPrimary my-3 text-lg font-semibold'>Contacts</h2>
          <div className='mt-4 max-h-[300px] overflow-y-auto'>
            {filteredContact.length ? (
              <>
                {filteredContact.map((contact) => (
                  <ChatContactItem key={contact.id} handleUserClick={handleUserClick} contact={contact} />
                ))}
              </>
            ) : (
              <div>Contact not found</div>
            )}
          </div>
        </div>
      </div>
      <div className='w-full rounded-lg  md:w-3/4 '>
        <div className='rounded-t-lg border-b-[1px] border-b-gray-300 p-4 dark:border-b-gray-600 md:rounded-t-none md:rounded-tr-lg'>
          <div className='flex items-center space-x-4'>
            <Button onClick={() => setIsOpen((prev) => !prev)} className='block !p-2 md:hidden' variant='empty'>
              <GiHamburgerMenu size={IconSize.basic} />
            </Button>
            <div className='relative flex h-10 w-10 min-w-[40px] items-center justify-center rounded-full dark:text-white'>
              <img
                height={40}
                width={40}
                className='rounded-full ring-2 ring-secondary'
                src={activeChat?.photo || undefined}
              />
              <StatusBadge className='absolute bottom-0 right-0 ' status={activeChat?.status as UserStatuses} />
            </div>
            <h1 className='font-bold'>{activeChat?.name}</h1>
          </div>
        </div>
        <ChatMessages currentUser={currentUser} activeChat={activeChat} setChats={setChats} chats={chats} />
      </div>
    </CardContainer>
  );
};

export default Chat;
