import { Separator } from '@/UI/Separator';

const ChatContactItem = ({ handleUserClick, contact }) => {
  return (
    <>
      <div
        key={contact.id}
        onClick={() => handleUserClick(contact)}
        className='flex cursor-pointer items-center space-x-3 rounded p-2 hover:bg-gray-100 dark:hover:bg-darkBlue'
      >
        <img height={40} width={40} className='rounded-full ring-2 ring-black' src={contact.photo || undefined} />
        <p>{contact.name}</p>
      </div>
      <Separator />
    </>
  );
};

export default ChatContactItem;
