import LeftEditSidebar from './LeftEditSidebar';
import CardContainer from '@/common/CardContainer';
import PageContainer from '@/common/PageContainer';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodoAddEvent from './TodoAddEvent';
import TodoDrag from './TodoDrag';
import useFirebaseData from '@/hooks/useFirebaseData';
import { Timestamp } from 'firebase/firestore';
import Loader from '@/common/Loader';
import { ErrorComponent } from '@/common/ErrrorComponent';
import { updateItemsFirebase } from '@/lib/firebaseHelpers/updateItemsFirebase';
import { addItemFirebase } from '@/lib/firebaseHelpers/addItemFirebase';
import useCurrentUser from '@/store/CurrentUser';

interface Task {
  id: string;
  title: string;
  description: string;
  tag: string;
  completed: boolean;
  date: Date | Timestamp;
}
export const initializeNewTask = {
  id: '',
  title: '',
  completed: false,
  description: '',
  tag: '',
  date: new Date(),
};

export const collectionName = 'todos';
export let docId;

const Todo = () => {
  const { currentUser } = useCurrentUser();
  docId = currentUser?.uid || '';
  const { data, loading, error } = useFirebaseData<Task[]>(collectionName);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isAddEventOpen, setIsAddEventOpen] = useState(false);
  const [newTask, setNewTask] = useState(initializeNewTask);
  const [filteredTasks, setFilteredTasks] = useState<Task[] | null>(null);
  const [activeTag, setActiveTag] = useState('');
  const [isSorted, setIsSorted] = useState(true);

  useEffect(() => {
    //conversion from Timestamp when need to Date - necessary to show data or parse it in format from date-fns
    if (data) {
      const convertedTasks = data.map((task) => ({
        ...task,
        date: task.date instanceof Timestamp ? task.date.toDate() : task.date,
      }));
      setTasks(convertedTasks);
    }
  }, [data]);

  const handleAddTodo = () => {
    if (newTask.title === '' || newTask.description === '') {
      return;
    }
    const existingTask = tasks.find((task) => task.id === newTask.id);
    if (existingTask) {
      const changedTask = tasks.map((task) => (task.id === newTask.id ? newTask : task));
      setTasks(changedTask);
      updateItemsFirebase(collectionName, docId, changedTask);
    } else {
      newTask.id = uuidv4();
      newTask.completed = false;
      setTasks([...tasks, newTask]);
      addItemFirebase(collectionName, docId, newTask);
    }
    setNewTask({ id: '', title: '', completed: false, description: '', tag: '', date: new Date() });
    setIsOpen(false);
  };

  const handleOpenSideBar = () => {
    setNewTask({ id: '', title: '', completed: false, description: '', tag: '', date: new Date() });
    setIsOpen(true);
    setIsAddEventOpen(false);
  };

  const filterByTag = (tag) => {
    setIsSorted(true);
    if (activeTag === tag) {
      setFilteredTasks(null);
      setActiveTag('');
    } else {
      setFilteredTasks(tasks.filter((task) => task.tag === tag));
      setActiveTag(tag);
    }
    setIsAddEventOpen(false);
  };

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorComponent error={error} />;
  }

  return (
    <>
      <LeftEditSidebar
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        newTask={newTask}
        setNewTask={setNewTask}
        handleAddTodo={handleAddTodo}
      />
      <PageContainer>
        <CardContainer className='flex w-full space-y-0 md:space-x-4'>
          <TodoAddEvent
            filterByTag={filterByTag}
            activeTag={activeTag}
            handleOpenSideBar={handleOpenSideBar}
            isAddEventOpen={isAddEventOpen}
          />
          <TodoDrag
            setIsAddEventOpen={setIsAddEventOpen}
            tasks={tasks}
            setTasks={setTasks}
            filteredTasks={filteredTasks}
            isSorted={isSorted}
            setActiveTag={setActiveTag}
            setIsOpen={setIsOpen}
            setNewTask={setNewTask}
            setIsSorted={setIsSorted}
          />
        </CardContainer>
      </PageContainer>
    </>
  );
};

export default Todo;
