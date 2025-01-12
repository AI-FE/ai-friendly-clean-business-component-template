export interface Task {
  id: string;
  content: string;
  completed: boolean;
}

export interface TaskManagerProps {
  // 初始任务列表
  initialTasks: Task[];
  // 搜索回调
  onSearch: (keyword: string) => void;
  // 新增任务回调
  onTaskAdd: (content: string) => void;
  // 删除任务回调
  onTaskDelete: (taskId: string) => void;
  // 任务状态变更回调
  onTaskStatusChange: (taskId: string, completed: boolean) => void;
}
