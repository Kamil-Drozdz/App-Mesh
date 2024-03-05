import { toast } from 'react-toastify';
import { useCallback, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { updateDocumentFirebase } from '@/lib/firebaseHelpers/updateDocumentFirebase';
import { addDocumentFirebase } from '@/lib/firebaseHelpers/addDocumentFirebase';
import useCurrentUser from '@/store/CurrentUser';
import useFirebaseCachedData from '@/hooks/reusable/useFirebaseCachedData';
import { Collections } from '@/lib/enums/collections';
import { Timestamp } from 'firebase/firestore';
import { Task, initializeNewTask } from '@/components/pages/Todo/content/Todo';

export let docId;
function useTodo() {
  const { currentUser } = useCurrentUser();
  docId = currentUser?.uid || '';
  const { data, loading, error } = useFirebaseCachedData<Task[]>(Collections.todos);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isAddEventOpen, setIsAddEventOpen] = useState(false);
  const [newTask, setNewTask] = useState<Task>(initializeNewTask);
  const [filteredTasks, setFilteredTasks] = useState<Task[] | null>(null);
  const [activeTag, setActiveTag] = useState('');
  const [isSorted, setIsSorted] = useState(true);

  useEffect(() => {
    // conversion from Timestamp when need to Date - necessary to show data or parse it in format from date-fns
    if (data) {
      const convertedTasks = data.map((task) => ({
        ...task,
        date: task.date instanceof Timestamp ? task.date.toDate() : task.date,
      }));
      setTasks(convertedTasks);
    }
  }, [data]);

  const handleAddTodo = useCallback(() => {
    if (newTask.title === '' || newTask.description === '') {
      return;
    }
    const existingTask = tasks.find((task) => task.id === newTask.id);
    if (existingTask) {
      const changedTask = tasks.map((task) => (task.id === newTask.id ? newTask : task));
      setTasks(changedTask);
      updateDocumentFirebase(Collections.todos, docId, changedTask).then(() =>
        toast.success('Task updated successfully!')
      );
    } else {
      newTask.id = uuidv4();
      newTask.completed = false;
      setTasks([...tasks, newTask]);
      addDocumentFirebase(Collections.todos, docId, newTask).then(() => toast.success('Task added successfully!'));
    }
    setNewTask({
      id: '',
      title: '',
      completed: false,
      description: '',
      tag: '',
      date: new Date(),
    });
    setIsOpen(false);
  }, [newTask, tasks, isOpen, docId]);

  const handleOpenSideBar = useCallback(() => {
    setNewTask({
      id: '',
      title: '',
      completed: false,
      description: '',
      tag: '',
      date: new Date(),
    });
    setIsOpen(true);
    setIsAddEventOpen(false);
  }, [newTask, isOpen]);

  const filterByTag = useCallback(
    (tag: string) => {
      setIsSorted(true);
      if (activeTag === tag) {
        setFilteredTasks(null);
        setActiveTag('');
      } else {
        setFilteredTasks(tasks.filter((task) => task.tag === tag));
        setActiveTag(tag);
      }
      setIsAddEventOpen(false);
    },
    [activeTag]
  );
  return{
    error,
    loading,
    tasks,
    setTasks,
    handleAddTodo,
    handleOpenSideBar,
    isOpen,
    setIsOpen,
    isAddEventOpen,
    setIsAddEventOpen,
    newTask,
    setNewTask,
    filteredTasks,
    activeTag,
    setActiveTag,
    filterByTag,
    isSorted,
    setIsSorted,
  };
}

export default useTodo;
