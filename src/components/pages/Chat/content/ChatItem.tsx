import { Separator } from '@/UI/Separator';
import StatusBadge from '@/common/StatusBadge';
import React from 'react';

const ChatItem = ({chat,handleUserClick, activeChat}) => {
  return (
    <>
      <div
        key={chat.id}
        onClick={() => handleUserClick(chat)}
        className={`flex items-center space-x-3 rounded p-2 ${
          chat.id === activeChat?.id && 'bg-gradient-to-r from-[#7367f0] to-[#9e95f5] text-white'
        } cursor-pointer  hover:bg-gray-100 dark:hover:bg-darkBlue`}
      >
        <div className='relative flex h-10 w-10 min-w-[40px] items-center justify-center rounded-full dark:text-white'>
          <img height={40} width={40} className='rounded-full ring-2 ring-black' src={chat.photo || undefined} />
          <StatusBadge className='absolute bottom-0 right-0 ' status={chat.status} />
        </div>
        <p>{chat.name}</p>
      </div>
      <Separator />
    </>
  );
};

export default ChatItem;
