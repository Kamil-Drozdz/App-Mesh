import { useCallback, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import useFirebaseData from '@/hooks/reusable/useFirebaseData';
import useCurrentUser from '@/store/CurrentUser';
import { Collections } from '@/lib/enums/collections';
import { ChatData, Contact } from '@/components/pages/Chat/ChatContent';

export let docId;
function useChatContent() {
  const { currentUser } = useCurrentUser();
  docId = currentUser?.uid || '';
  const { data: dataChats, loading: loadingChats, error: errorChats } = useFirebaseData<ChatData[]>(Collections.chats);
  const {
    data: dataContacts,
    loading: loadingContats,
    error: errorContats,
  } = useFirebaseData<Contact[]>('users', 'btRsHRNa7gSCKkWxLXltVbGsCI93');

  const [isOpen, setIsOpen] = useState(false);
  const [chats, setChats] = useState<ChatData[]>([]);
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [selectedUser, setSelectedUser] = useState<ChatData | null>(null);
  const [search, setSearch] = useState('');

  useEffect(() => {
    if (dataChats && dataChats.length > 0) {
      setChats(dataChats);
    }
  }, [dataChats]);

  useEffect(() => {
    if (dataContacts && currentUser !== null) {
      const testUsers = dataContacts.filter((contact) => currentUser.uid !== contact.id);
      setContacts(testUsers);
    }
  }, [dataContacts]);

  const handleUserClick = useCallback(
    (selectedContact: Contact) => {
      try {
        if (selectedContact.members && Array.isArray(selectedContact.members)) {
          const memberId = selectedContact.members.find((memberId) => memberId !== currentUser?.uid);
          const member = contacts.find((user) => user.id === memberId);
          if (member) setSelectedUser(member);
        } else if (selectedUser?.id !== selectedContact.id) {
          setSelectedUser(selectedContact);
        }
      } catch (error) {
        toast.error('Something went wrong');
      }

      setIsOpen(false);
    },
    [currentUser, contacts, selectedUser]
  );

  const filteredChats = chats.filter((chat) => chat?.displayName.toLowerCase().includes(search.toLowerCase()));

  const filteredContact = contacts.filter((contact) =>
    contact.displayName.toLowerCase().includes(search.toLowerCase())
  );

  return {
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
    setSelectedUser,
    search,
    setSearch,
    chats,
    setChats,
  };
}
export default useChatContent;
