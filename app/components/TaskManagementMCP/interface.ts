export interface TaskItem {
  id: string;
  title: string;
  status: 'done' | 'pending';
}

export interface TaskManagementProps {
  // 初始数据
  initialTasks: TaskItem[];
  // 数据变更回调
  onTasksChange: (tasks: TaskItem[]) => void;
  // 搜索回调
  onSearch: (keyword: string) => void;
  // 新增任务回调
  onAddTask: (task: Omit<TaskItem, 'id'>) => void;
  // 删除任务回调
  onDeleteTask: (taskId: string) => void;
}