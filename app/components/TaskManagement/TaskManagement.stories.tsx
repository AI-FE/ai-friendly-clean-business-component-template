import type { Meta, StoryObj } from '@storybook/react';
import TaskManagement from './TaskManagement';
import { useState } from 'react';
import { Task } from './interface';

const meta: Meta<typeof TaskManagement> = {
  title: 'Components/TaskManagement',
  component: TaskManagement,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof TaskManagement>;

export const Default: Story = {
  render: () => {
    const [tasks, setTasks] = useState<Task[]>([
      { id: '1', content: '任务一任务一任务一任务一任务一', completed: true },
      { id: '2', content: '任务二任务二任务二任务二任务二任务二任务二', completed: true },
      { id: '3', content: '任务三任务三任务三任务三任务三任务三任务三任务三', completed: false },
      { id: '4', content: '任务四任务四任务四任务四任务四任务四任务四任务四', completed: false },
    ]);

    const handleSearch = (keyword: string) => {
      console.log('搜索:', keyword);
    };

    const handleAdd = (content: string) => {
      const newTask: Task = {
        id: Date.now().toString(),
        content,
        completed: false,
      };
      setTasks([...tasks, newTask]);
    };

    const handleDelete = (id: string) => {
      setTasks(tasks.filter(task => task.id !== id));
    };

    const handleToggleComplete = (id: string) => {
      setTasks(tasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      ));
    };

    return (
      <TaskManagement
        tasks={tasks}
        onSearch={handleSearch}
        onAdd={handleAdd}
        onDelete={handleDelete}
        onToggleComplete={handleToggleComplete}
      />
    );
  },
}; 