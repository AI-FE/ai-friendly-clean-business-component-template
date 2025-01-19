import { Task } from './interface';

/**
 * 过滤任务列表
 */
export const filterTasks = (tasks: Task[], keyword: string): Task[] => {
  if (!keyword) return tasks;
  return tasks.filter(task => 
    task.content.toLowerCase().includes(keyword.toLowerCase())
  );
};