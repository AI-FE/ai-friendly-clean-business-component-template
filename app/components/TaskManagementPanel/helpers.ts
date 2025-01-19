import { Task } from './interface';

/**
 * 过滤任务列表
 */
export const filterTasks = (tasks: Task[], searchValue: string): Task[] => {
  if (!searchValue) return tasks;
  return tasks.filter(task => 
    task.content.toLowerCase().includes(searchValue.toLowerCase())
  );
};

/**
 * 验证新任务输入
 */
export const validateNewTask = (value: string): boolean => {
  return value.trim().length > 0;
};