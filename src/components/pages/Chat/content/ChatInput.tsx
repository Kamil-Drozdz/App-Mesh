import { Button } from '@/UI/Button';
import { Input } from '@/UI/Input';
import { IconSize } from '@/lib/enums/iconSize';
import { handleEnterDown } from '@/lib/handleEnterDown';
import { useState } from 'react';
import defaultUser from '@/assets/default-user.webp';
import { BiImageAdd, BiMicrophone } from 'react-icons/bi';
import { useTranslation } from 'react-i18next';

const ChatInput = ({ currentUser, setMessages, activeChat, chats, setChats }) => {
  const { i18n } = useTranslation();
  const [message, setMessage] = useState<File | string>('');
  const [isSpeaking, setIsSpeaking] = useState(false);

  const handleVoiceInput = () => {
    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = i18n.language;
    recognition.onstart = () => {
      setIsSpeaking(true);
    };
    recognition.onend = () => {
      setIsSpeaking(false);
    };
    recognition.onresult = function (event) {
      const speechResult = event.results[0][0].transcript;
      setMessage(speechResult);
    };
    recognition.start();
  };

  const handleImageInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setMessage(file);
    }
  };

  function handleSendMessage(sender, content) {
    if (typeof content === 'string' && content.trim() === '') return;
    let newMessage;

    if (content instanceof File) {
      newMessage = {
        photo: currentUser?.photoURL || defaultUser,
        sender: sender,
        content: content,
        timestamp: new Date().toISOString(),
      };
    } else {
      newMessage = {
        photo: currentUser?.photoURL || defaultUser,
        sender: sender,
        content: content,
        timestamp: new Date().toISOString(),
      };
    }

    if (!chats.find((chat) => chat.id === activeChat.id)) {
      setChats((prevChats) => [activeChat, ...prevChats]);
    }
    
    if (newMessage) {
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    }
    setMessage('');
  }

  return (
    <div className='pt-6 pb-2 rounded-br relative px-4 w-full flex space-x-2'>
      <Button variant='empty' onClick={handleVoiceInput} className='absolute left-6 px-2'>
        <BiMicrophone className={isSpeaking ? 'animate-pulse text-red-500' : ''} size={IconSize.basic} />
      </Button>
      <Input
        className='w-full bottom-2 pl-10'
        value={typeof message === 'string' ? message : ''}
        onKeyDown={(e) => handleEnterDown(e, () => handleSendMessage(currentUser?.displayName, message))}
        onChange={(e) => setMessage(e.target.value)}
        placeholder='Type your message or use speech to text'
      />
      <label className='absolute right-24 top-1/2 cursor-pointer flex' htmlFor='imageInput'>
        <BiImageAdd size={IconSize.basic} />
        {message instanceof File && <span className='text-xs ml-2'>{message.name}</span>}
      </label>
      <Input type='file' accept='image/*' onChange={handleImageInput} className='hidden' id='imageInput' />
      <Button
        onClick={() => handleSendMessage(currentUser?.displayName, message)}
        className='!bg-violet-500 hover:!bg-violet-400 !text-white'
      >
        Send
      </Button>
    </div>
  );
};

export default ChatInput;
