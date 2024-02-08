import { Separator } from '@/UI/Separator';
import StatusBadge from '@/common/StatusBadge';

function ChatItem({ chat, handleUserClick, selectedUser }) {
  return (
    <>
      <div
        key={chat.id}
        onClick={() => handleUserClick(chat)}
        className={`flex items-center space-x-3 rounded p-2 ${
          chat.members.includes(selectedUser?.id) && 'bg-gradient-to-r from-[#7367f0] to-[#9e95f5] text-white'
        } cursor-pointer hover:bg-hover`}
      >
        <div className='relative flex h-10 w-10 min-w-[40px] items-center justify-center rounded-full'>
          <img height={40} width={40} className='rounded-full ring-2 ring-black' src={chat.photoURL} />
          <StatusBadge className='absolute bottom-0 right-0 ' status={chat.status} />
        </div>
        <p>{chat.displayName}</p>
      </div>
      <Separator />
    </>
  );
}

export default ChatItem;
