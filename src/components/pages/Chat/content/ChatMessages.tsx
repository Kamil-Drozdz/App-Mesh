import defaultUser from '@/assets/default-user.webp';
import { Message } from '@/data/pages/chat/chatData';
import { CustomUser } from '@/store/CurrentUser';
import { useState, useEffect } from 'react';

interface Messages {
  messagesArray: Message[];
  currentUser: CustomUser | null;
}

const ChatMessages = ({ messagesArray, currentUser }: Messages) => {
  useEffect(() => {
    setMessages(messagesArray);
  }, [messagesArray]);
  const [messages, setMessages] = useState(messagesArray);

  //   function addMessage(sender, content) {
  //     setMessages((prevMessages) => [
  //       ...prevMessages,
  //       {
  //         sender: sender,
  //         content: content,
  //         timestamp: new Date().toISOString(),
  //       },
  //     ]);
  //   }

  return (
    <>
      <div className='space-y-2 w-full'>
        {messages.map((message, index) =>
          message.sender === currentUser?.displayName ? (
            <div key={index} className='-ml-2 w-full justify-end flex'>
              <div className=' py-1 w-fit group  flex items-center'>
                <p className='mr-2 rounded-lg bg-gradient-to-r from-[#7367f0] to-[#9e95f5] bg-lightBlue p-2'>
                  {message.content}
                </p>
                <img
                  height={40}
                  width={40}
                  className='rounded-full min-w-[40px]'
                  src={currentUser?.photoURL || defaultUser}
                />
              </div>
              <div className='group-hover:block hidden'>{new Date(message.timestamp).toLocaleString()}</div>
            </div>
          ) : (
            <div key={index} className='ml-2 w-full relative  justify-start flex flex-col'>
              <div className='py-1 w-fit group flex items-center'>
                <img height={40} width={40} className='rounded-full min-w-[40px]' src={message.photo} />
                <p className='ml-2 rounded-lg bg-lightBlue p-2'> {message.content}</p>
              </div>
              <div className='group-hover:block hidden absolute text-'>
                {new Date(message.timestamp).toLocaleString()}
              </div>
            </div>
          )
        )}
      </div>
      <div className='mt-4 p-2 bg-gray-300 rounded-b'>
        <input className='w-full p-2' placeholder='Type your message or use speech to text' />
      </div>
    </>
  );
};

export default ChatMessages;
