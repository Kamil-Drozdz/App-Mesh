import { Button } from '@/UI/Button';
import { Input } from '@/UI/Input';
import defaultUser from '@/assets/default-user.webp';
import { IconSize } from '@/lib/enums/iconSize';
import { handleEnterDown } from '@/lib/handleEnterDown';
import { synchronizeEntireCollection } from '@/lib/synchronizeEntireCollection';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BiImageAdd, BiMicrophone } from 'react-icons/bi';
import { collectionPathChats, docIdChats } from './Chat';
import { uploadImageAndGetURL } from '@/lib/uploadImageAndGetURL';
const ChatInput = ({ currentUser, setMessages, activeChat, chats, setChats }) => {
  const { i18n } = useTranslation();
  const [message, setMessage] = useState<string>('');
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

  const handleImageInput = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const allowedImageTypes = ['image/jpeg', 'image/png', 'image/gif'];
      if (allowedImageTypes.includes(file.type)) {
        const imageUrl = await uploadImageAndGetURL(file);
        //adding file to storage and returning image url
        if (imageUrl !== null) setMessage(imageUrl);
      } else {
        alert('Please upload a valid image file.');
      }
    }
  };

  async function handleSendMessage(sender, content) {
    if (typeof content === 'string' && content.trim() === '') return;

    const newMessage = {
      photo: currentUser?.photoURL || defaultUser,
      sender: sender,
      content: content,
      timestamp: new Date().toISOString(),
    };

    if (!chats.find((chat) => chat.id === activeChat.id)) {
      setChats((prevChats) => [activeChat, ...prevChats]);
    }

    if (newMessage) {
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    }
    //added only to updated new chat and messages to firebase
    const updatedActiveChat = {
      ...activeChat,
      messages: [...activeChat.messages, newMessage],
    };

    const updatedChats = chats.map((chat) => (chat.id === activeChat.id ? updatedActiveChat : chat));
    const activeChatIncluded = updatedChats.some((chat) => chat.id === activeChat.id);

    if (!activeChatIncluded) {
      updatedChats.unshift(updatedActiveChat);
    }

    synchronizeEntireCollection(collectionPathChats, docIdChats, updatedChats);
    setMessage('');
  }

  return (
    <div className='relative flex w-full space-x-2 rounded-br px-2 pt-6 pb-2 md:px-4'>
      <Button variant='empty' onClick={handleVoiceInput} className='absolute left-6 px-2'>
        <BiMicrophone className={isSpeaking ? 'animate-pulse text-red-500' : ''} size={IconSize.basic} />
      </Button>
      <Input
        className='bottom-2 w-full pl-10'
        value={typeof message === 'string' ? message : ''}
        onKeyDown={(e) => handleEnterDown(e, () => handleSendMessage(currentUser?.displayName, message))}
        onChange={(e) => setMessage(e.target.value)}
        placeholder='Type your message or use speech to text'
      />
      <label className='absolute right-24 top-1/2 flex cursor-pointer' htmlFor='imageInput'>
        <BiImageAdd size={IconSize.basic} />
      </label>
      <Input type='file' accept='image/*' onChange={handleImageInput} className='hidden' id='imageInput' />
      <Button
        onClick={() => handleSendMessage(currentUser?.displayName, message)}
        className='!bg-violet-500 !text-white hover:!bg-violet-400'
      >
        Send
      </Button>
    </div>
  );
};

export default ChatInput;
