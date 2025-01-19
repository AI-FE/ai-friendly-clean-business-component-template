import { TaskItem } from './interface';

export const filterTasks = (tasks: TaskItem[], keyword: string) => {
  return tasks.filter(task => 
    task.title.toLowerCase().includes(keyword.toLowerCase())
  );
};