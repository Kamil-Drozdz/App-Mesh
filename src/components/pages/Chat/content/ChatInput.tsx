import { Button } from '@/UI/Button';
import { Input } from '@/UI/Input';
import { IconSize } from '@/lib/enums/iconSize';
import { handleEnterDown } from '@/lib/handleEnterDown';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BiImageAdd, BiMicrophone, BiSolidSmile } from 'react-icons/bi';
import { uploadImageAndGetURL } from '@/lib/firebaseHelpers/uploadImageAndGetURL';
import { updateItemsFirebase } from '@/lib/firebaseHelpers/updateItemsFirebase';
import { v4 as uuidv4 } from 'uuid';
import { collectionNameChats } from './Chat';
import { addItemFirebase } from '@/lib/firebaseHelpers/addItemFirebase';
import EmojiPicker from 'emoji-picker-react';
import './emojiPicker.css';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ChatInput = ({ currentUser, selectedUser, chats, setChats }) => {
  const { i18n } = useTranslation();
  const [message, setMessage] = useState<string>('');
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [showEmoji, setShowEmoji] = useState(false);

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
    if (!content.trim()) return;

    const newMessage = {
      photoURL: currentUser?.photoURL,
      sender: sender,
      content: content,
      timestamp: new Date().toISOString(),
    };

    const chatExist = chats.find((chat) => chat?.members.includes(selectedUser?.id));
    if (chatExist) {
      const updatedChats = chats.map((chat) => {
        if (chat.id === chatExist.id) {
          return {
            ...chat,
            messages: [...chat.messages, newMessage],
          };
        }
        return chat;
      });

      await updateItemsFirebase(collectionNameChats, currentUser.uid, updatedChats);
      await updateItemsFirebase(collectionNameChats, selectedUser?.id, updatedChats);
    } else {
      const newChat = {
        id: uuidv4(),
        members: [currentUser.uid, selectedUser?.id],
        messages: [newMessage],
        displayName: currentUser.displayName,
        photoURL: currentUser.photoURL,
      };

      await addItemFirebase(collectionNameChats, selectedUser?.id, newChat);
      await updateItemsFirebase(collectionNameChats, currentUser.uid, [...chats, newChat]);

      setChats([
        ...chats,
        {
          ...newChat,
          displayName: selectedUser?.displayName,
          photoURL: selectedUser?.photoURL,
        },
      ]);
    }

    setMessage('');
  }

  return (
    <div className='relative flex w-full space-x-2 rounded-br px-2 pt-6 pb-2 md:px-4'>
      <Button variant='empty' onClick={handleVoiceInput} className='absolute left-8 px-1'>
        <BiMicrophone className={isSpeaking ? 'animate-pulse text-red-500' : ''} size={IconSize.basic} />
      </Button>
      <Button variant='empty' onClick={() => setShowEmoji((prev) => !prev)} className='absolute left-14 px-1'>
        <BiSolidSmile size={IconSize.basic} />
      </Button>
      {showEmoji && (
        <div className='absolute bottom-12 bg-secondary'>
          <EmojiPicker onEmojiClick={(icon) => setMessage((prev) => `${prev}${icon.emoji}`)} />
        </div>
      )}

      <Input
        className='bottom-2 w-full pl-20'
        value={typeof message === 'string' ? message : ''}
        onKeyDown={(e) => handleEnterDown(e, () => handleSendMessage(currentUser?.displayName, message))}
        onChange={(e) => setMessage(e.target.value)}
      />
      <label className='absolute right-24 top-1/2 flex cursor-pointer' htmlFor='imageInput'>
        <BiImageAdd size={IconSize.basic} />
      </label>
      <Input type='file' accept='image/*' onChange={handleImageInput} className='hidden' id='imageInput' />
      <Button
        onClick={() => handleSendMessage(currentUser?.displayName, message)}
        className='!bg-buttonPrimary !text-white hover:brightness-110'
      >
        Send
      </Button>
    </div>
  );
};

export default ChatInput;
