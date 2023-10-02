import LeftEditSidebar from './LeftEditSidebar';
import { Button } from '@/UI/Button';
import { Input } from '@/UI/Input';
import CompletedStamp from '@/assets/completed-stamp.png';
import CardContainer from '@/common/CardContainer';
import PageContainer from '@/common/PageContainer';
import { initialTasks, tags } from '@/data/pages/todo/todoData';
import { IconSize } from '@/lib/entities/iconSize';
import { format } from 'date-fns';
import { useState } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { AiFillCloseSquare } from 'react-icons/ai';
import { BiEdit, BiSearch } from 'react-icons/bi';
import { v4 as uuidv4 } from 'uuid';

interface Task {
	id: string;
	title: string;
	description: string;
	tag: string;
	completed: boolean;
	date: Date;
}
const CardTodo = () => {
	const [tasks, setTasks] = useState<Task[]>(initialTasks);
	const [isOpen, setIsOpen] = useState(false);
	const [newTask, setNewTask] = useState({ id: '', title: '', completed: false, description: '', tag: '', date: new Date() });
	const [filteredTasks, setFilteredTasks] = useState<Task[] | null>(null);
	const [search, setSearch] = useState('');
	const [activeTag, setActiveTag] = useState('');

	const filterTasks = tasks.filter(task => task.title.toLowerCase().includes(search.toLocaleLowerCase()) || task.description.toLowerCase().includes(search.toLocaleLowerCase()));

	const onDragEnd = result => {
		if (!result.destination) return;
		const newTasks = [...tasks];
		const [reorderedTask] = newTasks.splice(result.source.index, 1);
		newTasks.splice(result.destination.index, 0, reorderedTask);
		setTasks(newTasks);
	};

	const handleDeleteTodo = id => {
		setTasks(tasks.filter(task => task.id !== id));
	};

	const handleAddTodo = () => {
		if (newTask.title === '' || newTask.description === '') {
			return;
		}
		const existingTask = tasks.find(task => task.id === newTask.id);
		if (existingTask) {
			setTasks(tasks.map(task => (task.id === newTask.id ? newTask : task)));
		} else {
			newTask.id = uuidv4();
			newTask.completed = false;
			setTasks([...tasks, newTask]);
		}
		setNewTask({ id: '', title: '', completed: false, description: '', tag: '', date: new Date() });
		setIsOpen(false);
	};
	const handleSearchChange = e => {
		const searchText = e.target.value;
		setSearch(searchText);

		if (searchText.trim() !== '') {
			setActiveTag('');
		}
	};

	const handleChecked = id => {
		setTasks(tasks.map(task => (task.id === id ? { ...task, completed: !task.completed } : task)));
	};
	const handleEditTask = id => {
		setIsOpen(true);
		setNewTask(tasks.find(task => task.id === id) || { id: '', title: '', completed: false, description: '', tag: '', date: new Date() });
	};

	const handleOpenSideBar = () => {
		setNewTask({ id: '', title: '', completed: false, description: '', tag: '', date: new Date() });
		setIsOpen(true);
	};
	const filterByTag = tag => {
		if (activeTag === tag) {
			setFilteredTasks(null);
			setActiveTag('');
		} else {
			setFilteredTasks(tasks.filter(task => task.tag === tag));
		}
	};

	const mapedtasks = search ? filterTasks : filteredTasks !== null ? filteredTasks : tasks.sort((a, b) => a.date.getTime() - b.date.getTime());

	return (
		<>
			<LeftEditSidebar isOpen={isOpen} setIsOpen={setIsOpen} newTask={newTask} setNewTask={setNewTask} handleAddTodo={handleAddTodo} />
			<PageContainer>
				<CardContainer className='flex w-full md:space-x-4 space-y-0  text-gray-700 dark:text-gray-300'>
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
											setActiveTag(item.name);
										}}
										className={`${activeTag === item.name ? `${item.color} ` : 'border-transparent'} flex space-x-2 p-2 !bg-transparent border-l-[1px] items-center cursor-pointer`}
										key={index}>
										<div className={`w-3 h-3 rounded-full ${item.color} `}></div>
										<p> {item.name}</p>
									</button>
								</li>
							))}
						</ul>
					</div>
					<div className='w-full '>
						<DragDropContext onDragEnd={onDragEnd}>
							<div className='relative mb-2'>
								<BiSearch size={IconSize.basic} className='absolute -translate-y-1/2 top-1/2 left-2' /> <Input value={search} onChange={handleSearchChange} className='pl-8' placeholder='Search todo' />
							</div>
							<Droppable droppableId='todolist'>
								{provided => (
									<ul className='space-y-2' {...provided.droppableProps} ref={provided.innerRef}>
										{mapedtasks.length ? (
											mapedtasks.map((task, index) => (
												<Draggable key={task.id} draggableId={task.id} index={index}>
													{provided => (
														<li className='px-2 py-1 border-[1px] rounded-lg flex items-center justify-between ' {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
															<div className=' flex items-center space-x-3 md:space-x-6 '>
																<Input type='checkbox' className='w-4 h-4  accent-green-500 cursor-pointer' checked={task.completed} onChange={() => handleChecked(task.id)} />
																<div className={`${task.completed ? 'text-green-500' : ''} space-y-2`}>
																	<p className='break-all'>{task.title.charAt(0).toLocaleUpperCase() + task.title.slice(1)}</p>
																</div>
																<img className={`w-12 h-12 	${task.completed ? 'opacity-100 scale-100' : 'opacity-0 scale-0'} md:block hidden transition-all duration-100 ease-in rounded-full object-contain`} src={CompletedStamp} />
															</div>
															<div className='md:space-x-4 flex md:flex-row flex-col items-center justify-center'>
																<ul className='flex md:space-x-2 w-full md:w-fit items-center justify-center'>
																	{task.tag &&
																		tags.map(
																			(tag, tagIndex) =>
																				tag.name === task.tag && (
																					<li key={tagIndex}>
																						<div className={`px-2 py-0.5 bg-opacity-20 rounded-full ${tag.color}`}>{tag.name}</div>
																					</li>
																				)
																		)}
																</ul>
																<div className='text-gray-600'>{format(task.date, 'MMMM d ')}</div>
																<div className='space-x-1'>
																	<Button className='w-fit h-fit !p-0 rounded-none border-none !bg-transparent' onClick={() => handleEditTask(task.id)}>
																		<BiEdit size={IconSize.basic} className='text-orange-500 ' />
																	</Button>
																	<Button className='w-fit h-fit !p-0 rounded-none border-none !bg-transparent' onClick={() => handleDeleteTodo(task.id)}>
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
				</CardContainer>
			</PageContainer>
		</>
	);
};

export default CardTodo;
