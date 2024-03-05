import { Timestamp } from 'firebase/firestore';

import LeftEditSidebar from './LeftEditSidebar';
import CardContainer from '@/common/CardContainer';
import PageContainer from '@/common/PageContainer';
import TodoAddEvent from './TodoAddEvent';
import TodoDrag from './TodoDrag';
import Loader from '@/common/Loader';
import { ErrorComponent } from '@/common/ErrrorComponent';
import useTodo from '@/hooks/useTodo';

export interface Task {
  id: string;
  title: string;
  description: string;
  tag: string;
  completed: boolean;
  date?: Date | Timestamp;
}
export const initializeNewTask = {
  id: '',
  title: '',
  completed: false,
  description: '',
  tag: '',
  date: new Date(),
};

function Todo() {
  const {
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
  } = useTodo();

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
}

export default Todo;
