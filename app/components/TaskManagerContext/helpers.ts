import { Task } from './interface';

/** 
 * 根据关键词过滤任务列表
 */
export const filterTasks = (tasks: Task[], keyword: string): Task[] => {
  if (!keyword.trim()) return tasks;
  return tasks.filter(task => 
    task.title.toLowerCase().includes(keyword.toLowerCase())
  );
};

/**
 * 生成唯一ID
 */
export const generateId = (): string => {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
};