export interface Task {
  id: string;
  content: string;
  completed: boolean;
}

export interface TaskPanelProps {
  tasks: Task[];
  onAddTask: (content: string) => void;
  onDeleteTask: (id: string) => void;
  onToggleTask: (id: string) => void;
}
