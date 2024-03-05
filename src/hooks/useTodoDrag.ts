import { toast } from 'react-toastify';
import { useRef, useState } from 'react';

import { updateDocumentFirebase } from '@/lib/firebaseHelpers/updateDocumentFirebase';
import { removeDocumentFirebase } from '@/lib/firebaseHelpers/removeDocumentFirebase';
import { Collections } from '@/lib/enums/collections';
import { docId } from '@/hooks/useTodo';
import { initializeNewTask } from '@/components/pages/Todo/content/Todo';

function useTodoDrag({ filteredTasks, isSorted, tasks, setTasks, setIsSorted, setActiveTag, setIsOpen, setNewTask }) {
  const [search, setSearch] = useState('');
  const filterTasks = tasks.filter(
    (task) =>
      task.title.toLowerCase().includes(search.toLocaleLowerCase()) ||
      task.description.toLowerCase().includes(search.toLocaleLowerCase())
  );

  const mapedtasks = search
    ? filterTasks
    : filteredTasks !== null
    ? filteredTasks
    : isSorted
    ? tasks.sort((a, b) => a.date.getTime() - b.date.getTime())
    : tasks;

  const playerRefs = useRef(new Map()).current;

  const handleSearchChange = (e) => {
    const searchText = e.target.value;
    setSearch(searchText);
    if (searchText.trim() !== '') {
      setActiveTag('');
    }
  };

  const handleCheckTodo = (id) => {
    const checkedTodo = tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task));
    setTasks(checkedTodo);
    updateDocumentFirebase(Collections.todos, docId, checkedTodo);
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
    const deletedTodo = tasks.filter((task) => task.id !== id);
    setTasks(deletedTodo);
    // just usecase for firebase
    const deleteItem = tasks.find((task) => task.id === id);
    removeDocumentFirebase(Collections.todos, docId, deleteItem).then(() =>
      toast.success('Task deleted successfully!')
    );
  };

  setTimeout(
    () =>
      playerRefs.forEach((player) => {
        player?.goToLastFrame();
      }),
    0
  );
  return {
    search,
    playerRefs,
    mapedtasks,
    handleSearchChange,
    handleCheckTodo,
    handleEditTask,
    onDragEnd,
    handleDeleteTodo,
  };
}

export default useTodoDrag;
