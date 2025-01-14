export interface Task {
  id: string;
  content: string;
  completed: boolean;
}

export interface TaskManagementProps {
  tasks: Task[];
  onSearch: (keyword: string) => void;
  onAdd: (content: string) => void;
  onDelete: (id: string) => void;
  onToggleComplete: (id: string) => void;
}
