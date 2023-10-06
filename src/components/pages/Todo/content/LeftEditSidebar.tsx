import { Button } from '@/UI/Button';
import { Calendar } from '@/UI/Calendar';
import { Input } from '@/UI/Input';
import { Popover, PopoverContent, PopoverTrigger } from '@/UI/Popover';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/UI/Select';
import { tags } from '@/data/pages/todo/todoData';
import clsx from '@/lib/clsx';
import { format } from 'date-fns';
import { BiCalendar } from 'react-icons/bi';
import { GoDotFill } from 'react-icons/go';

const LeftEditSidebar = ({ isOpen, setIsOpen, newTask, setNewTask, handleAddTodo }) => {
	return (
		<>
			<div className={`fixed z-[51] ${isOpen ? 'translate-x-0' : 'translate-x-full'} space-y-4 text-gray-900 dark:text-white transition-transform duration-300 ease-in-out p-6 right-0 max-w-[24rem] h-full w-3/4 dark:bg-mediumBlue bg-white`}>
				<div className='relative'>
					<Input type='text' id='location' value={newTask.title} onChange={e => setNewTask({ ...newTask, title: e.target.value })} className='block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer' placeholder=' ' />
					<label htmlFor='location' className='absolute text-sm duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-mediumBlue px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1'>
						Title
					</label>
				</div>
				<Select value={newTask.tag} onValueChange={e => setNewTask({ ...newTask, tag: e })}>
					<SelectTrigger className='w-full !border-gray-300 !border-opacity-25 whitespace-nowrap'>
						<SelectValue placeholder='choose tag' />
					</SelectTrigger>
					<SelectContent className='border-gray-300 z-[52]'>
						<SelectGroup className='dark:bg-mediumBlue bg-lightWhite dark:text-gray-200'>
							{tags.map((item, index) => (
								<SelectItem value={item.name} key={index}>
									<div className='flex items-center space-x-2 '>
										<GoDotFill size={8} className={clsx('rounded-full', item.color)} />
										<div> {item.name}</div>
									</div>
								</SelectItem>
							))}
						</SelectGroup>
					</SelectContent>
				</Select>
				<Popover>
					<PopoverTrigger asChild>
						<div>
							<p>Due Date</p>
							<Button variant={'outline'} className={clsx('w-full pl-3 !bg-transparent !border-gray-300 !border-opacity-25 text-left font-normal', !newTask.date && 'text-muted-foreground')}>
								{newTask.date ? format(newTask.date, 'PPP') : <span>Pick a date</span>} <BiCalendar className='ml-auto h-4 w-4 opacity-50' />
							</Button>
						</div>
					</PopoverTrigger>
					<PopoverContent className='w-auto p-0 z-[52]' align='start'>
						<Calendar mode='single' initialFocus selected={newTask.date} onSelect={date => setNewTask({ ...newTask, date })} className='rounded-md border bg-white dark:bg-mediumBlue' />
					</PopoverContent>
				</Popover>
				<textarea id='message' rows={4} value={newTask.description} onChange={e => setNewTask({ ...newTask, description: e.target.value })} className='block p-2.5 w-full text-sm text-gray-900 rounded-lg border bg-transparent border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='Write your thoughts here...'></textarea>
				<div className='flex space-x-4'>
					<Button onClick={handleAddTodo} className='!bg-violet-500 mb-4 hover:bg-violet-400 !text-white'>
						Add
					</Button>
					<Button variant='destructive'>Cancel</Button>
				</div>
			</div>
			{isOpen && <div className='bg-black opacity-50 fixed inset-0 z-50' onClick={() => setIsOpen(false)}></div>}
		</>
	);
};

export default LeftEditSidebar;
