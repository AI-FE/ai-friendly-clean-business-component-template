import { ReactNode } from 'react';

export interface Task {
  id: string;
  content: string;
  completed: boolean;
}

export interface TaskManagementPanelProps {
  /** 任务列表数据 */
  tasks: Task[];
  /** 搜索框的值 */
  searchValue: string;
  /** 新增任务输入框的值 */
  newTaskValue: string;
  /** 搜索值变化回调 */
  onSearchChange: (value: string) => void;
  /** 新增任务值变化回调 */
  onNewTaskChange: (value: string) => void;
  /** 提交新增任务回调 */
  onTaskSubmit: () => void;
  /** 删除任务回调 */
  onTaskDelete: (taskId: string) => void;
  /** 切换任务完成状态回调 */
  onTaskToggle: (taskId: string) => void;
  /** 取消新增任务回调 */
  onCancel: () => void;
  /** 加载状态 */
  loading?: boolean;
  /** 自定义任务项渲染 */
  renderTaskItem?: (task: Task) => ReactNode;
}
