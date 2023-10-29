import ChatMessages from './ChatMessages';
import { Separator } from '@/UI/Separator';
import defaultUser from '@/assets/default-user.webp';
import CardContainer from '@/common/CardContainer';
import StatusBadge from '@/common/StatusBadge';
import { generateChatData, generateContact } from '@/data/pages/chat/chatData';
import useSearch from '@/hooks/useSearch';
import { UserStatuses } from '@/lib/enums/user';
import { generateData } from '@/lib/generateData';
import useCurrentUser from '@/store/CurrentUser';
import { useMemo, useState } from 'react';

const Chat = () => {
  const { currentUser } = useCurrentUser();
  const chatsData = useMemo(() => generateData(2, () => generateChatData(currentUser?.displayName)), [currentUser]);
  const [chats, setChats] = useState(chatsData);
  const contacts = useMemo(() => generateData(5, generateContact), []);
  const [activeChat, setActiveChat] = useState(chatsData[0]);
  const { search, SearchInput } = useSearch();

  function handleUserClick(selectedUser) {
    setActiveChat(selectedUser);
  }

  const filteredChats = chats.filter((chat) => chat.name.toLowerCase().includes(search.toLowerCase()));
  const filteredContact = contacts.filter((contact) => contact.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <CardContainer className='flex p-0 space-y-0 '>
      <div className='w-1/4 md:min-w-[300px] bg-lightBlue text-white border-r-gray-600 rounded-l-lg border-r-[1px]'>
        <div className='flex p-4 justify-center items-center w-full space-x-2 '>
          <div
            className={`min-w-[40px] relative hidden lg:flex h-10 w-10 items-center justify-center rounded-full dark:text-white ${
              currentUser?.photoURL || 'bg-darkBlue'
            }`}
          >
            <img height={40} width={40} className='rounded-full' src={currentUser?.photoURL || defaultUser} />
            <StatusBadge className='absolute bottom-0 right-0 ' status={UserStatuses.Online} />
          </div>
          <SearchInput className='w-full m-0 ' />
        </div>
        <Separator />
        <div className='px-4'>
          <h2 className='!text-violet-500 text-lg font-semibold my-3'>Chats</h2>
          <div className=' max-h-[300px] overflow-y-auto'>
            {filteredChats.length ? (
              <>
                {filteredChats.map((chat) => (
                  <>
                    <div
                      key={chat.id}
                      onClick={() => handleUserClick(chat)}
                      className={`p-2 flex items-center space-x-3 rounded ${
                        chat.id === activeChat.id && 'bg-gradient-to-r from-[#7367f0] to-[#9e95f5]'
                      } cursor-pointer hover:bg-darkBlue`}
                    >
                      <img height={40} width={40} className='rounded-full' src={chat.photo || undefined} />
                      <p className='font-bold'>{chat.name}</p>
                    </div>
                    <Separator />
                  </>
                ))}
              </>
            ) : (
              <div>Chat not found</div>
            )}
          </div>
          <h2 className='!text-violet-500 text-lg font-semibold my-3'>Contacts</h2>
          <div className='mt-4 max-h-[300px] overflow-y-auto'>
            {filteredContact.length ? (
              <>
                {filteredContact.map((contact) => (
                  <>
                    <div
                      key={contact.id}
                      onClick={() => handleUserClick(contact)}
                      className='p-2 flex items-center space-x-3 rounded cursor-pointer hover:bg-darkBlue'
                    >
                      <img height={40} width={40} className='rounded-full' src={contact.photo || undefined} />
                      <p className='font-bold'>{contact.name}</p>
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
      <div className='w-3/4 bg-darkBlue '>
        <div className=' text-white p-4 bg-lightBlue border-b-gray-600 rounded-tr-lg border-b-[1px]'>
          <div className='flex items-center space-x-4 '>
            <div className='min-w-[40px] relative hidden lg:flex h-10 w-10 items-center justify-center rounded-full dark:text-white'>
              <img height={40} width={40} className='rounded-full' src={activeChat.photo || undefined} />
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
