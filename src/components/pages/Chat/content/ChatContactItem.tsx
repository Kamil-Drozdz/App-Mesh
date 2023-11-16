import { Separator } from '@/UI/Separator';

const ChatContactItem = ({ handleUserClick, contact }) => {
  return (
    <>
      <div
        key={contact.id}
        onClick={() => handleUserClick(contact)}
        className='flex cursor-pointer items-center space-x-3 rounded p-2 hover:bg-hover'
      >
        <img
          height={40}
          width={40}
          className='rounded-full ring-2 ring-secondary'
          src={contact.photoURL || undefined}
        />
        <p>{contact.displayName}</p>
      </div>
      <Separator />
    </>
  );
};

export default ChatContactItem;
