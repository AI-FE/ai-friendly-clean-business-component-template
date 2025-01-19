export interface Task {
  id: string;
  content: string;
  completed: boolean;
}

export interface TaskPanelProps {
  /** 任务列表数据 */
  tasks: Task[];
  /** 搜索任务回调 */
  onSearch: (keyword: string) => void;
  /** 添加任务回调 */
  onAddTask: (content: string) => void;
  /** 删除任务回调 */
  onDeleteTask: (id: string) => void;
  /** 更新任务状态回调 */
  onToggleTask: (id: string, completed: boolean) => void;
}