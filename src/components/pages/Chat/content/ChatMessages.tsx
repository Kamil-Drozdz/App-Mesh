import ChatInput from './ChatInput';
import beginChat from '@/assets/begin-chat.svg';
import defaultUser from '@/assets/default-user.webp';
import { CustomUser } from '@/store/CurrentUser';
import { useState, useEffect, useRef } from 'react';
import ChatZoomImage from './ChatZoomImage';
import { createPortal } from 'react-dom';
import { ChatData, Message } from './Chat';

interface Messages {
  activeChat: ChatData | null;
  currentUser: CustomUser | null;
  chats: ChatData[];
  setChats: React.Dispatch<React.SetStateAction<ChatData[]>>;
}

const ChatMessages = ({ activeChat, currentUser, chats, setChats }: Messages) => {
  const [messages, setMessages] = useState<Message[]>(activeChat?.messages || []);
  const chatContainerRef = useRef<HTMLDivElement | null>(null);
  const [zoomImage, setZoomImage] = useState<null | string>(null);
  const [infoImage, setInfoImage] = useState({});

  const storageBaseURL = `https://firebasestorage.googleapis.com/v0/b/${
    import.meta.env.VITE_APP_FIREBASE_STORAGE_BUCKET
  }`;

  useEffect(() => {
    if (activeChat !== null) setMessages(activeChat?.messages);
  }, [activeChat?.messages]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleImageError = (index) => {
    setInfoImage((prevState) => ({
      ...prevState,
      [index]: true,
    }));
  };

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
      <div className='relative mt-4 h-[70vh] w-full space-y-2 overflow-y-auto'>
        {messages.length ? (
          messages.map((message, index) =>
            message.sender === currentUser?.displayName ? (
              <div ref={chatContainerRef} key={index} className='flex w-full justify-end px-3 md:px-6'>
                <div className=' group flex w-fit items-start justify-center py-1'>
                  {typeof message.content === 'string' && message.content.startsWith(storageBaseURL) ? (
                    infoImage[index] ? (
                      <span className='mr-2  self-center'>image was deleted.</span>
                    ) : (
                      <div onClick={() => setZoomImage(message.content)}>
                        <img
                          className='mr-2 max-w-[200px] cursor-zoom-in'
                          src={message.content}
                          alt='Uploaded file'
                          onError={() => handleImageError(index)}
                        />
                      </div>
                    )
                  ) : (
                    <p className='mr-2 w-full break-all rounded-l-lg rounded-tr-lg  bg-gradient-to-r from-[#7367f0] to-[#9e95f5] p-2'>
                      {message.content}
                    </p>
                  )}
                  <div
                    className={`relative flex  h-10 w-10 min-w-[40px] items-center justify-center rounded-full dark:text-white ${
                      currentUser?.photoURL || 'bg-secondary'
                    }`}
                  >
                    <img
                      height={40}
                      width={40}
                      className='rounded-full ring-2 ring-secondary'
                      src={currentUser?.photoURL || defaultUser}
                    />
                  </div>
                </div>
                <div className='hidden group-hover:block'>{new Date(message.timestamp).toLocaleString()}</div>
              </div>
            ) : (
              <div key={index} className='relative flex w-full flex-col  justify-start px-3 md:px-6'>
                <div className='group flex w-fit items-start py-1'>
                  <img
                    height={40}
                    width={40}
                    className='min-w-[40px] rounded-full ring-2 ring-secondary'
                    src={message.photo}
                  />
                  {typeof message.content === 'string' && message.content.startsWith(storageBaseURL) ? (
                    <img className='ml-2 max-w-[200px]' src={message.content} alt='Uploaded file' />
                  ) : (
                    <p className='ml-2 w-full break-all rounded-r-lg rounded-tl-lg bg-muted-foreground p-2 text-primary'>
                      {message.content}
                    </p>
                  )}
                </div>
                <div className='text- absolute hidden group-hover:block'>
                  {new Date(message.timestamp).toLocaleString()}
                </div>
              </div>
            )
          )
        ) : (
          <div className='flex h-full w-full flex-col items-center justify-center'>
            <img className=' aspect-square px-8 md:max-w-[450px]' src={beginChat} />
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
      {zoomImage && createPortal(<ChatZoomImage setZoomImage={setZoomImage} zoomImage={zoomImage} />, document.body)}
    </>
  );
};

export default ChatMessages;
