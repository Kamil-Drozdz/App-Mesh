import { BiImageAdd, BiMicrophone, BiSolidSmile } from 'react-icons/bi';
import EmojiPicker from 'emoji-picker-react';
import './emojiPicker.css';

import { Button } from '@/UI/Button';
import { Input } from '@/UI/Input';
import { IconSize } from '@/lib/enums/iconSize';
import { handleEnterDown } from '@/lib/handleEnterDown';
import useChatInput from '@/hooks/useChatInput';

function ChatInput({ currentUser, selectedUser, chats, setChats }) {
  const {
    message,
    setMessage,
    isSpeaking,
    showEmoji,
    setShowEmoji,
    handleVoiceInput,
    handleImageInput,
    handleSendMessage,
  } = useChatInput({currentUser,selectedUser, chats, setChats});
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
}

export default ChatInput;
