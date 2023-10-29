import defaultUser from '@/assets/default-user.webp';
import { ChatData } from '@/data/pages/chat/chatData';
import { CustomUser } from '@/store/CurrentUser';
import { useState, useEffect, useRef } from 'react';
import ChatInput from './ChatInput';
import beginChat from '@/assets/Begin-chat.svg';

interface Messages {
  activeChat: ChatData;
  currentUser: CustomUser | null;
  chats: ChatData[];
  setChats: React.Dispatch<React.SetStateAction<ChatData[]>>;
}

const ChatMessages = ({ activeChat, currentUser, chats, setChats }: Messages) => {
  const [messages, setMessages] = useState(activeChat.messages);
  const chatContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setMessages(activeChat.messages);
  }, [activeChat.messages]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    setTimeout(() => {
      if (chatContainerRef.current) {
        chatContainerRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'end',
        });
      }
    }, 500);
  };

  return (
    <>
      <div className='space-y-2 mt-4 w-full relative h-[70vh] overflow-y-auto'>
        {messages.length ? (
          messages.map((message, index) =>
            message.sender === currentUser?.displayName ? (
              <div ref={chatContainerRef} key={index} className='px-6 w-full justify-end flex'>
                <div className=' py-1 w-fit group  flex items-start'>
                  {typeof message.content === 'string' ? (
                    <p className='mr-2 rounded-l-lg rounded-br-lg bg-gradient-to-r from-[#7367f0] to-[#9e95f5] bg-lightBlue p-2 w-full break-all'>
                      {message.content}
                    </p>
                  ) : message.content instanceof File ? (
                    <img
                      className='aspect-square max-w-[200px]'
                      src={URL.createObjectURL(message.content)}
                      alt='Uploaded file'
                    />
                  ) : (
                    <div>Invalid content type</div>
                  )}
                  <div
                    className={`relative flex  min-w-[40px] h-10 w-10 items-center justify-center rounded-full dark:text-white ${
                      currentUser?.photoURL || 'bg-lightBlue'
                    }`}
                  >
                    <img height={40} width={40} className='rounded-full' src={currentUser?.photoURL || defaultUser} />
                  </div>
                </div>
                <div className='group-hover:block hidden'>{new Date(message.timestamp).toLocaleString()}</div>
              </div>
            ) : (
              <div key={index} className='px-6 w-full relative  justify-start flex flex-col'>
                <div className='py-1 w-fit group flex items-start'>
                  <img height={40} width={40} className='rounded-full min-w-[40px]' src={message.photo} />
                  {typeof message.content === 'string' ? (
                    <p className='ml-2 rounded-r-lg rounded-bl-lg bg-lightBlue p-2 w-full break-all'>
                      {message.content}
                    </p>
                  ) : message.content instanceof File ? (
                    <img
                      className='aspect-square max-w-[200px]'
                      src={URL.createObjectURL(message.content)}
                      alt='Uploaded file'
                    />
                  ) : (
                    <div>Invalid content type</div>
                  )}
                </div>
                <div className='group-hover:block hidden absolute text-'>
                  {new Date(message.timestamp).toLocaleString()}
                </div>
              </div>
            )
          )
        ) : (
          <div className='w-full h-full flex justify-center items-center flex-col'>
            <img className=' aspect-square max-w-[400px]' src={beginChat} />
            <p>Maybe its good time to start conversation?</p>
          </div>
        )}
      </div>
      <ChatInput
        currentUser={currentUser}
        chats={chats}
        setChats={setChats}
        setMessages={setMessages}
        activeChat={activeChat}
      />
    </>
  );
};

export default ChatMessages;
