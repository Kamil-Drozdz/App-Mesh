import ChatMessages from './ChatMessages';
import { Button } from '@/UI/Button';
import { Separator } from '@/UI/Separator';
import defaultUser from '@/assets/default-user.webp';
import CardContainer from '@/common/CardContainer';
import StatusBadge from '@/common/StatusBadge';
import { generateChatData, generateContact } from '@/data/pages/chat/chatData';
import useSearch from '@/hooks/useSearch';
import { IconSize } from '@/lib/enums/iconSize';
import { UserStatuses } from '@/lib/enums/user';
import { generateData } from '@/lib/generateData';
import useCurrentUser from '@/store/CurrentUser';
import { useMemo, useState } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';

const Chat = () => {
  const { currentUser } = useCurrentUser();
  const chatsData = useMemo(() => generateData(2, () => generateChatData(currentUser?.displayName)), [currentUser]);
  const [isOpen, setIsOpen] = useState(false);
  const [chats, setChats] = useState(chatsData);
  const contacts = useMemo(() => generateData(5, generateContact), []);
  const [activeChat, setActiveChat] = useState(chatsData[0]);
  const { search, SearchInput } = useSearch();

  function handleUserClick(selectedUser) {
    setActiveChat(selectedUser);
    setIsOpen(false);
  }

  const filteredChats = chats.filter((chat) => chat.name.toLowerCase().includes(search.toLowerCase()));
  const filteredContact = contacts.filter((contact) => contact.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <CardContainer className='flex space-y-0 !p-0'>
      <div
        className={`${
          isOpen ? 'translate-x-0' : '-translate-x-[110%]'
        } ease absolute z-[1] h-full w-full rounded-r-lg rounded-l-lg border-r-none md:border-r-[1px] border-r-gray-300 dark:border-r-gray-600  bg-white text-gray-900 transition-transform duration-300  dark:bg-mediumBlue dark:text-white md:relative md:h-auto md:w-1/4 md:min-w-[300px] md:translate-x-0 md:rounded-r-none`}
      >
        <div className='flex w-full items-center justify-center space-x-2 p-4'>
          <div
            className={`relative flex h-10 w-10 min-w-[40px] items-center justify-center rounded-full dark:text-white ${
              currentUser?.photoURL || 'bg-darkBlue'
            }`}
          >
            <img
              height={40}
              width={40}
              className='rounded-full ring-2 ring-black'
              src={currentUser?.photoURL || defaultUser}
            />
            <StatusBadge className='absolute bottom-0 right-0' status={UserStatuses.Online} />
          </div>
          <SearchInput className='m-0 w-full' />
          <Button onClick={() => setIsOpen((prev) => !prev)} className='block !p-2 md:hidden' variant='empty'>
            <AiFillCloseCircle className='hover:text-red-500' size={IconSize.basic} />
          </Button>
        </div>
        <Separator />
        <div className='p-4'>
          <h2 className='my-3 text-lg font-semibold !text-violet-500'>Chats</h2>
          <div className=' max-h-[300px] overflow-y-auto'>
            {filteredChats.length ? (
              <>
                {filteredChats.map((chat) => (
                  <>
                    <div
                      key={chat.id}
                      onClick={() => handleUserClick(chat)}
                      className={`flex items-center space-x-3 rounded p-2 ${
                        chat.id === activeChat.id && 'bg-gradient-to-r from-[#7367f0] to-[#9e95f5] text-white'
                      } dark:hover:bg-darkBlue  cursor-pointer hover:bg-gray-100`}
                    >
                      <div className='relative flex h-10 w-10 min-w-[40px] items-center justify-center rounded-full dark:text-white'>
                        <img
                          height={40}
                          width={40}
                          className='rounded-full ring-2 ring-black'
                          src={chat.photo || undefined}
                        />
                        <StatusBadge className='absolute bottom-0 right-0 ' status={chat.status} />
                      </div>
                      <p>{chat.name}</p>
                    </div>
                    <Separator />
                  </>
                ))}
              </>
            ) : (
              <div>Chat not found</div>
            )}
          </div>
          <h2 className='my-3 text-lg font-semibold !text-violet-500'>Contacts</h2>
          <div className='mt-4 max-h-[300px] overflow-y-auto'>
            {filteredContact.length ? (
              <>
                {filteredContact.map((contact) => (
                  <>
                    <div
                      key={contact.id}
                      onClick={() => handleUserClick(contact)}
                      className='flex cursor-pointer items-center space-x-3 rounded p-2 hover:bg-gray-100 dark:hover:bg-darkBlue'
                    >
                      <img
                        height={40}
                        width={40}
                        className='rounded-full ring-2 ring-black'
                        src={contact.photo || undefined}
                      />
                      <p>{contact.name}</p>
                    </div>
                    <Separator />
                  </>
                ))}
              </>
            ) : (
              <div>Contact not found</div>
            )}
          </div>
        </div>
      </div>
      <div className='w-full bg-white text-gray-900 dark:bg-mediumBlue dark:text-white rounded-lg  md:w-3/4 '>
        <div className='rounded-t-lg border-b-[1px] border-b-gray-300 dark:border-b-gray-600 p-4 md:rounded-t-none md:rounded-tr-lg'>
          <div className='flex items-center space-x-4'>
            <Button onClick={() => setIsOpen((prev) => !prev)} className='block !p-2 md:hidden' variant='empty'>
              <GiHamburgerMenu size={IconSize.basic} />
            </Button>
            <div className='relative flex h-10 w-10 min-w-[40px] items-center justify-center rounded-full dark:text-white'>
              <img
                height={40}
                width={40}
                className='rounded-full ring-2 ring-black'
                src={activeChat.photo || undefined}
              />
              <StatusBadge className='absolute bottom-0 right-0 ' status={activeChat.status} />
            </div>
            <h1 className='font-bold'>{activeChat.name}</h1>
          </div>
        </div>
        <ChatMessages currentUser={currentUser} activeChat={activeChat} setChats={setChats} chats={chats} />
      </div>
    </CardContainer>
  );
};

export default Chat;
