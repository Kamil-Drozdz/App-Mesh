import LeftEditSidebar from './LeftEditSidebar';
import CardContainer from '@/common/CardContainer';
import PageContainer from '@/common/PageContainer';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodoAddEvent from './TodoAddEvent';
import TodoDrag from './TodoDrag';
import useFirebaseData from '@/hooks/useFirebaseData';
import { Timestamp } from 'firebase/firestore';
import { synchronizeEntireCollection } from '@/lib/synchronizeEntireCollection';
import Loader from '@/common/Loader';
import { ErrorComponent } from '@/common/ErrrorComponent';

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

const Todo = () => {
  const { data, loading, error } = useFirebaseData<Task[]>('todos', 'RJlXZ22kh2KiGWfR3x3q');
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

  //updating firestore with new task or user interaction
  const synchronizeTasks = async (tasks) => {
    if (tasks.length !== 0) await synchronizeEntireCollection('todos', 'RJlXZ22kh2KiGWfR3x3q', tasks);
  };

  const handleAddTodo = () => {
    if (newTask.title === '' || newTask.description === '') {
      return;
    }
    const existingTask = tasks.find((task) => task.id === newTask.id);
    if (existingTask) {
      const changedTask = tasks.map((task) => (task.id === newTask.id ? newTask : task));
      setTasks(changedTask);
      synchronizeTasks(changedTask);
    } else {
      newTask.id = uuidv4();
      newTask.completed = false;
      setTasks([...tasks, newTask]);
      synchronizeTasks([...tasks, newTask]);
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
        <CardContainer className='flex w-full space-y-0 text-gray-700 dark:text-gray-300 md:space-x-4'>
          <TodoAddEvent
            filterByTag={filterByTag}
            activeTag={activeTag}
            handleOpenSideBar={handleOpenSideBar}
            isAddEventOpen={isAddEventOpen}
          />
          <TodoDrag
            synchronizeTasks={synchronizeTasks}
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
