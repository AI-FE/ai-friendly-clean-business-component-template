import { Task } from './interface';

export const filterTasks = (tasks: Task[], searchText: string): Task[] => {
  if (!searchText) return tasks;

  const lowercaseSearch = searchText.toLowerCase();
  return tasks.filter((task) => task.content.toLowerCase().includes(lowercaseSearch));
};
