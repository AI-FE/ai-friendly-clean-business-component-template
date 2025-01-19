export interface Task {
  id: string;
  title: string;
  completed: boolean;
}

export interface TaskManagerProps {
  /** 任务列表数据 */
  tasks: Task[];
  /** 搜索关键词 */
  searchKeyword: string;
  /** 搜索框变化回调 */
  onSearchChange: (keyword: string) => void;
  /** 添加任务回调 */
  onAddTask: (title: string) => void;
  /** 删除任务回调 */
  onDeleteTask: (taskId: string) => void;
  /** 切换任务状态回调 */
  onToggleTask: (taskId: string) => void;
}