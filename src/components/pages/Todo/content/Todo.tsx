import LeftEditSidebar from './LeftEditSidebar';
import CardContainer from '@/common/CardContainer';
import PageContainer from '@/common/PageContainer';
import { initialTasks } from '@/data/pages/todo/todoData';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodoAddEvent from './TodoAddEvent';
import TodoDrag from './TodoDrag';

interface Task {
  id: string;
  title: string;
  description: string;
  tag: string;
  completed: boolean;
  date: Date;
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
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [isOpen, setIsOpen] = useState(false);
  const [isAddEventOpen, setIsAddEventOpen] = useState(false);
  const [newTask, setNewTask] = useState(initializeNewTask);
  const [filteredTasks, setFilteredTasks] = useState<Task[] | null>(null);
  const [activeTag, setActiveTag] = useState('');
  const [isSorted, setIsSorted] = useState(true);

  const handleAddTodo = () => {
    if (newTask.title === '' || newTask.description === '') {
      return;
    }
    const existingTask = tasks.find((task) => task.id === newTask.id);
    if (existingTask) {
      setTasks(tasks.map((task) => (task.id === newTask.id ? newTask : task)));
    } else {
      newTask.id = uuidv4();
      newTask.completed = false;
      setTasks([...tasks, newTask]);
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
