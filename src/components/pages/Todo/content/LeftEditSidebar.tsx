import { format } from 'date-fns';
import { BiCalendar } from 'react-icons/bi';
import { GoDotFill } from 'react-icons/go';

import { Button } from '@/UI/Button';
import { Calendar } from '@/UI/Calendar';
import { Input } from '@/UI/Input';
import { Popover, PopoverContent, PopoverTrigger } from '@/UI/Popover';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/UI/Select';
import { tags } from '@/data/pages/todo/tags';
import clsx from '@/lib/clsx';

const LeftEditSidebar = ({ isOpen, setIsOpen, newTask, setNewTask, handleAddTodo }) => {
  return (
    <>
      <div
        className={`fixed z-[51] ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } right-0 h-full w-3/4 max-w-[24rem] space-y-4 bg-secondary p-6 text-primary transition-transform duration-300 ease-in-out`}
      >
        <div className='relative'>
          <Input
            type='text'
            id='title'
            value={newTask.title}
            onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
            className='border-1 peer block w-full appearance-none rounded-lg border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500'
            placeholder=' '
          />
          <label
            htmlFor='title'
            className='absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform bg-secondary px-2 text-sm duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500'
          >
            Title
          </label>
        </div>
        <Select value={newTask.tag} onValueChange={(e) => setNewTask({ ...newTask, tag: e as string })}>
          <SelectTrigger className='w-full whitespace-nowrap !border-gray-300 !border-opacity-25'>
            <SelectValue placeholder='choose tag' />
          </SelectTrigger>
          <SelectContent className='z-[52] border-gray-300 bg-secondary-foreground'>
            <SelectGroup className='bg-secondary'>
              {tags.map((item, index) => (
                <SelectItem className='hover:bg-primary-foreground' value={item.name} key={index}>
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
              <Button
                variant={'outline'}
                className={clsx(
                  'w-full !border-gray-300 !border-opacity-25 !bg-transparent pl-3 text-left font-normal',
                  !newTask.date && 'text-muted-foreground'
                )}
              >
                {newTask.date ? format(newTask.date, 'PPP') : <span>Pick a date</span>}
                <BiCalendar className='ml-auto h-4 w-4 opacity-50' />
              </Button>
            </div>
          </PopoverTrigger>
          <PopoverContent className='z-[52] w-auto p-0' align='start'>
            <Calendar
              mode='single'
              initialFocus
              selected={newTask.date}
              onSelect={(date) => setNewTask({ ...newTask, date })}
              className='rounded-md border'
            />
          </PopoverContent>
        </Popover>
        <textarea
          id='message'
          rows={4}
          value={newTask.description}
          onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
          className='block w-full rounded-lg border border-gray-300 bg-transparent p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
          placeholder='Write your thoughts here...'
        ></textarea>
        <div className='flex space-x-4'>
          <Button onClick={handleAddTodo} className='mb-4 !bg-buttonPrimary !text-white hover:brightness-110'>
            Add
          </Button>
          <Button onClick={() => setIsOpen(false)} variant='destructive'>
            Cancel
          </Button>
        </div>
      </div>
      {isOpen && <div className='fixed inset-0 z-50 bg-black opacity-50' onClick={() => setIsOpen(false)}></div>}
    </>
  );
};

export default LeftEditSidebar;
