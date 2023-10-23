import CardTodoDrag from './CardTodoDrag';
import LeftEditSidebar from './LeftEditSidebar';
import { Button } from '@/UI/Button';
import CardContainer from '@/common/CardContainer';
import PageContainer from '@/common/PageContainer';
import { initialTasks, tags } from '@/data/pages/todo/todoData';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

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

const CardTodo = () => {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [isOpen, setIsOpen] = useState(false);
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
        <CardContainer className='flex w-full md:space-x-4 space-y-0 text-gray-700 dark:text-gray-300'>
          <div className='h-full min-w-[12rem] md:block hidden'>
            <Button onClick={handleOpenSideBar} className='!bg-violet-500 mb-4 hover:bg-violet-400 !text-white w-full'>
              Add Event
            </Button>
            <p className='text-gray-400'>Tags</p>
            <ul className='space-y-2 mt-2'>
              {tags.map((item, index) => (
                <li>
                  <button
                    onClick={() => {
                      filterByTag(item.name);
                    }}
                    className={`${
                      activeTag === item.name ? `${item.color} ` : 'border-transparent'
                    } flex space-x-2 p-2 !bg-transparent border-l-[1px] items-center cursor-pointer`}
                    key={index}
                  >
                    <div className={`w-3 h-3 rounded-full ${item.color} `}></div>
                    <p> {item.name}</p>
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <CardTodoDrag
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

export default CardTodo;
