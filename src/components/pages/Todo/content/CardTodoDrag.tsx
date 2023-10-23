import { initializeNewTask } from './CardTodo';
import { Button } from '@/UI/Button';
import { Input } from '@/UI/Input';
import CompletedStamp from '@/assets/completed-stamp.webp';
import { tags } from '@/data/pages/todo/todoData';
import { IconSize } from '@/lib/iconSize';
import { format } from 'date-fns';
import { useMemo, useState } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { AiFillCloseSquare } from 'react-icons/ai';
import { BiEdit, BiSearch } from 'react-icons/bi';

const CardTodoDrag = ({
  tasks,
  setTasks,
  filteredTasks,
  isSorted,
  setActiveTag,
  setIsOpen,
  setNewTask,
  setIsSorted,
}) => {
  const [search, setSearch] = useState('');
  const filterTasks = useMemo(() => {
    return tasks.filter(
      (task) =>
        task.title.toLowerCase().includes(search.toLocaleLowerCase()) ||
        task.description.toLowerCase().includes(search.toLocaleLowerCase())
    );
  }, [tasks, search]);

  const mapedtasks = search
    ? filterTasks
    : filteredTasks !== null
    ? filteredTasks
    : isSorted
    ? tasks.sort((a, b) => a.date.getTime() - b.date.getTime())
    : tasks;

  const handleSearchChange = (e) => {
    const searchText = e.target.value;
    setSearch(searchText);
    if (searchText.trim() !== '') {
      setActiveTag('');
    }
  };

  const handleCheckTodo = (id) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)));
  };

  const handleEditTask = (id) => {
    setIsOpen(true);
    setNewTask(tasks.find((task) => task.id === id) || initializeNewTask);
  };

  const onDragEnd = (result) => {
    if (!result.destination) return;
    setIsSorted(false);
    const newTasks = [...tasks];
    const [reorderedTask] = newTasks.splice(result.source.index, 1);
    newTasks.splice(result.destination.index, 0, reorderedTask);
    setTasks(newTasks);
  };

  const handleDeleteTodo = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className='w-full '>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className='relative mb-2'>
          <BiSearch size={IconSize.basic} className='absolute -translate-y-1/2 top-1/2 left-2' />{' '}
          <Input value={search} onChange={handleSearchChange} className='pl-8 w-full h-9' placeholder='Search todo' />
        </div>
        <Droppable droppableId='todolist'>
          {(provided) => (
            <ul className='space-y-2' {...provided.droppableProps} ref={provided.innerRef}>
              {mapedtasks.length ? (
                mapedtasks.map((task, index) => (
                  <Draggable key={task.id} draggableId={task.id} index={index}>
                    {(provided) => (
                      <li
                        className='px-2 py-1 border-[1px] rounded-lg flex items-center justify-between '
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                      >
                        <div className=' flex items-center space-x-3 md:space-x-6 '>
                          <Input
                            type='checkbox'
                            className='w-4 h-4 accent-green-500 cursor-pointer'
                            checked={task.completed}
                            onChange={() => handleCheckTodo(task.id)}
                          />
                          <div className={`${task.completed ? 'text-green-500' : ''} space-y-2`}>
                            <p className='break-all'>
                              {task.title.charAt(0).toLocaleUpperCase() + task.title.slice(1)}
                            </p>
                          </div>
                          <img
                            height={48}
                            width={48}
                            className={`w-12 h-12 ${
                              task.completed ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                            } md:block hidden transition-all duration-100 ease-in rounded-full object-contain`}
                            src={CompletedStamp}
                          />
                        </div>
                        <div className='md:space-x-4 flex md:flex-row flex-col items-center justify-center'>
                          <ul className='flex md:space-x-2 w-full md:w-fit items-center justify-center'>
                            {task.tag &&
                              tags.map(
                                (tag, tagIndex) =>
                                  tag.name === task.tag && (
                                    <li key={tagIndex}>
                                      <div className={`px-2 py-0.5 bg-opacity-20 rounded-full ${tag.color}`}>
                                        {tag.name}
                                      </div>
                                    </li>
                                  )
                              )}
                          </ul>
                          <div className='text-gray-600'>{format(task.date, 'MMMM d ')}</div>
                          <div className='space-x-1'>
                            <Button
                              className='w-fit h-fit !p-0 rounded-none border-none !bg-transparent'
                              onClick={() => handleEditTask(task.id)}
                            >
                              <BiEdit size={IconSize.basic} className='text-orange-500 ' />
                            </Button>
                            <Button
                              className='w-fit h-fit !p-0 rounded-none border-none !bg-transparent'
                              onClick={() => handleDeleteTodo(task.id)}
                            >
                              <AiFillCloseSquare size={IconSize.basic} className='text-red-500 ' />
                            </Button>
                          </div>
                        </div>
                      </li>
                    )}
                  </Draggable>
                ))
              ) : (
                <div>oh we dont have any task for today!</div>
              )}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default CardTodoDrag;
