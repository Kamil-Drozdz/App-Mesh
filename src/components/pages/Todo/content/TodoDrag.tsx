import { initializeNewTask } from './Todo';
import { Button } from '@/UI/Button';
import { Input } from '@/UI/Input';
import CompletedStamp from '@/assets/completed-stamp.webp';
import { tags } from '@/data/pages/todo/todoData';
import { IconSize } from '@/lib/enums/iconSize';
import { format } from 'date-fns';
import { useMemo, useState } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { AiFillCloseSquare } from 'react-icons/ai';
import { BiEdit, BiSearch } from 'react-icons/bi';
import { GiHamburgerMenu } from 'react-icons/gi';

const TodoDrag = ({
  tasks,
  setTasks,
  filteredTasks,
  isSorted,
  setActiveTag,
  setIsOpen,
  setNewTask,
  setIsSorted,
  setIsAddEventOpen,
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
    <div className='w-full select-none'>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className='mb-2 flex w-full items-center  space-x-2'>
          <Button onClick={() => setIsAddEventOpen((prev) => !prev)} className='block !p-2 md:hidden' variant='empty'>
            <GiHamburgerMenu size={IconSize.basic} />
          </Button>
          <div className='relative w-full'>
            <BiSearch size={IconSize.basic} className='absolute top-1/2 left-2 -translate-y-1/2' />{' '}
            <Input value={search} onChange={handleSearchChange} className='h-9 w-full pl-8' placeholder='Search todo' />
          </div>
        </div>
        <Droppable droppableId='todolist'>
          {(provided) => (
            <ul className='space-y-2' {...provided.droppableProps} ref={provided.innerRef}>
              {mapedtasks.length ? (
                mapedtasks.map((task, index) => (
                  <Draggable key={task.id} draggableId={task.id} index={index}>
                    {(provided) => (
                      <li
                        className='flex items-center justify-between rounded-lg border-[1px] px-2 py-1 '
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                      >
                        <div className=' flex items-center space-x-3 md:space-x-6 '>
                          <Input
                            type='checkbox'
                            className='h-4 w-4 cursor-pointer accent-green-500'
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
                            className={`h-12 w-12 ${
                              task.completed ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                            } hidden rounded-full object-contain transition-all duration-100 ease-in md:block`}
                            src={CompletedStamp}
                          />
                        </div>
                        <div className='flex flex-col items-center justify-center md:flex-row md:space-x-4'>
                          <ul className='flex w-full items-center justify-center md:w-fit md:space-x-2'>
                            {task.tag &&
                              tags.map(
                                (tag, tagIndex) =>
                                  tag.name === task.tag && (
                                    <li key={tagIndex}>
                                      <div className={`rounded-full bg-opacity-20 px-2 py-0.5 ${tag.color}`}>
                                        {tag.name}
                                      </div>
                                    </li>
                                  )
                              )}
                          </ul>
                          <div className='text-gray-600'>{format(task.date, 'MMMM d ')}</div>
                          <div className='space-x-1'>
                            <Button
                              className='h-fit w-fit rounded-none border-none !bg-transparent !p-0'
                              onClick={() => handleEditTask(task.id)}
                            >
                              <BiEdit size={IconSize.basic} className='text-orange-500 ' />
                            </Button>
                            <Button
                              className='h-fit w-fit rounded-none border-none !bg-transparent !p-0'
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

export default TodoDrag;
