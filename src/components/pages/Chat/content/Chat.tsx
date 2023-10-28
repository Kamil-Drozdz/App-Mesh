import ChatMessages from './ChatMessages';
import { Separator } from '@/UI/Separator';
import defaultUser from '@/assets/default-user.webp';
import CardContainer from '@/common/CardContainer';
import StatusBadge from '@/common/StatusBadge';
import { generateChatData } from '@/data/pages/chat/chatData';
import useSearch from '@/hooks/useSearch';
import { UserStatuses } from '@/lib/enums/user';
import { generateData } from '@/lib/generateData';
import useCurrentUser from '@/store/CurrentUser';
import { useMemo, useState } from 'react';

const Chat = () => {
  const { currentUser } = useCurrentUser();
  const data = useMemo(() => generateData(5, () => generateChatData(currentUser?.displayName)), [currentUser]);
  const [activeChat, setActiveChat] = useState(data[0]);
  const { search, SearchInput } = useSearch();

  function handleUserClick(chat) {
    setActiveChat(chat);
  }
  const filteredChats = data.filter((chat) => chat.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <CardContainer className='flex p-0 space-y-0 '>
      <div className='w-1/4 md:min-w-[300px] bg-lightBlue text-white border-r-gray-600 rounded-l-lg border-r-[1px]'>
        <div className='flex p-4 justify-center items-center w-full space-x-2 '>
          <div
            className={`min-w-[40px] relative hidden lg:flex h-10 w-10 items-center justify-center rounded-full dark:text-white ${
              currentUser?.photoURL || 'bg-lightBlue'
            }`}
          >
            <img height={40} width={40} className='rounded-full' src={currentUser?.photoURL || defaultUser} />
            <StatusBadge className='absolute bottom-0 right-0 ' status={UserStatuses.Online} />
          </div>
          <SearchInput className='w-full m-0 ' />
        </div>
        <Separator />
        <div className='px-4 '>
          <h2 className='!text-violet-500 text-lg font-semibold'>Chats</h2>
          <div className='mt-4'>
            {filteredChats.length ? (
              <>
                {filteredChats.map((chat) => (
                  <>
                    <div
                      key={chat.name}
                      onClick={() => handleUserClick(chat)}
                      className='p-2 flex items-center space-x-3 rounded my-1 cursor-pointer hover:bg-darkBlue'
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
          <h2 className='!text-violet-500 text-lg font-semibold mt-4'>Contacts</h2>
          <div className='mt-4'>
            <div className='p-2 bg-gray-800 rounded mb-2'>
              <p className='font-bold'>Felicia Rower</p>
              <p>Cake pie jelly beans...</p>
            </div>
            {/* ... add other chats here */}
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
        <ChatMessages currentUser={currentUser} messagesArray={activeChat.messages} />
      </div>
    </CardContainer>
  );
};

export default Chat;
