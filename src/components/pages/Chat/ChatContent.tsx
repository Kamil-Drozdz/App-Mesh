import { AiFillCloseCircle } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';

import ChatMessages from './content/ChatMessages';
import { Button } from '@/UI/Button';
import { Separator } from '@/UI/Separator';
import defaultUser from '@/assets/default-user.webp';
import CardContainer from '@/common/CardContainer';
import { ErrorComponent } from '@/common/ErrrorComponent';
import Loader from '@/common/Loader';
import { SearchInput } from '@/common/SearchInput';
import StatusBadge from '@/common/StatusBadge';
import { IconSize } from '@/lib/enums/iconSize';
import { UserStatuses } from '@/lib/enums/user';
import ChatContactItem from './content/ChatContactItem';
import ChatItem from './content/ChatItem';
import PageContainer from '@/common/PageContainer';
import useChatContent from '@/hooks/useChatContent';
import useCurrentUser from '@/store/CurrentUser';

export type BaseUser = {
  id: string;
  photo: string;
  userId: string;
  displayName: string;
  status: UserStatuses;
  photoURL: string;
  members: string[];
};

export type ChatData = BaseUser & {
  messages: Message[];
};

export type Contact = BaseUser & {
  messages: Message[];
};

export type Message = {
  sender: string | undefined;
  content: string;
  timestamp: Date | string;
  photoURL: string;
};

function Chat() {
  const { currentUser } = useCurrentUser();
  const {
    loadingChats,
    loadingContats,
    errorChats,
    errorContats,
    filteredChats,
    filteredContact,
    isOpen,
    setIsOpen,
    handleUserClick,
    selectedUser,
    search,
    setSearch,
    chats,
    setChats,
  } = useChatContent();

  if (loadingChats || loadingContats) {
    return <Loader />;
  }

  if (errorChats || errorContats) {
    return <ErrorComponent error={errorChats || errorContats} />;
  }

  return (
    <PageContainer>
      <CardContainer className='flex space-y-0 !p-0'>
        <div
          className={`${
            isOpen ? 'translate-x-0' : '-translate-x-[110%]'
          } ease border-r-none absolute z-[1] h-full w-full rounded-r-lg rounded-l-lg border-r-gray-300 bg-secondary transition-transform duration-300 dark:border-r-gray-600 md:relative md:h-auto md:w-1/4 md:min-w-[300px] md:translate-x-0 md:rounded-r-none md:border-r-[1px]`}
        >
          <div className='flex w-full items-center justify-center space-x-2 p-4'>
            <div
              className={`relative flex h-10 w-10 min-w-[40px] items-center justify-center rounded-full dark:text-white ${
                currentUser?.photoURL || 'bg-secondary'
              }`}
            >
              <img
                height={40}
                width={40}
                className='rounded-full ring-2 ring-secondary'
                src={currentUser?.photoURL || defaultUser}
              />
              <StatusBadge className='absolute bottom-0 right-0' status={UserStatuses.Online} />
            </div>
            <SearchInput search={search} setSearch={setSearch} className='m-0 w-full' />
            <Button onClick={() => setIsOpen((prev) => !prev)} className='block !p-2 md:hidden' variant='empty'>
              <AiFillCloseCircle className='hover:text-red-500' size={IconSize.basic} />
            </Button>
          </div>
          <Separator />
          <div className='p-4'>
            <h2 className='my-3 text-lg font-semibold !text-buttonPrimary'>Chats</h2>
            <div className=' max-h-[300px] overflow-y-auto'>
              {filteredChats.length ? (
                <>
                  {filteredChats.map((chat) => (
                    <ChatItem key={chat.id} chat={chat} selectedUser={selectedUser} handleUserClick={handleUserClick} />
                  ))}
                </>
              ) : (
                <div>Chat not found</div>
              )}
            </div>
            <h2 className='my-3 text-lg font-semibold !text-buttonPrimary'>Contacts</h2>
            <div className='mt-4 max-h-[300px] overflow-y-auto'>
              {filteredContact.length ? (
                <>
                  {filteredContact.map((contact) => (
                    <ChatContactItem key={contact.id} handleUserClick={handleUserClick} contact={contact} />
                  ))}
                </>
              ) : (
                <div>Contact not found</div>
              )}
            </div>
          </div>
        </div>
        <div className='w-full rounded-lg  md:w-3/4 '>
          <div
            className={`  ${
              !selectedUser && 'md:hidden'
            } rounded-t-lg border-b-[1px] border-b-gray-300 p-4 dark:border-b-gray-600 md:rounded-t-none md:rounded-tr-lg`}
          >
            <div className='flex items-center space-x-4'>
              <Button onClick={() => setIsOpen((prev) => !prev)} className='block !p-2 md:hidden' variant='empty'>
                <GiHamburgerMenu size={IconSize.basic} />
              </Button>
              <div
                className={`${
                  !selectedUser && 'hidden'
                } relative flex h-10 w-10 min-w-[40px] items-center justify-center rounded-full dark:text-white`}
              >
                <img
                  height={40}
                  width={40}
                  className='rounded-full ring-2 ring-secondary'
                  src={selectedUser?.photoURL}
                />
                <StatusBadge className='absolute bottom-0 right-0 ' status={selectedUser?.status as UserStatuses} />
              </div>
              <h1 className='font-bold'>{selectedUser?.displayName}</h1>
            </div>
          </div>
          <ChatMessages currentUser={currentUser} selectedUser={selectedUser} setChats={setChats} chats={chats} />
        </div>
      </CardContainer>
    </PageContainer>
  );
}

export default Chat;
