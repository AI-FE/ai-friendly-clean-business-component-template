import type { Meta, StoryObj } from '@storybook/react';
import { TaskManager } from './index';

const meta: Meta<typeof TaskManager> = {
  title: 'Components/TaskManager',
  component: TaskManager,
  parameters: {

  },
};

export default meta;
type Story = StoryObj<typeof TaskManager>;

const mockTasks = [
  { id: '1', content: '任务一', completed: true },
  { id: '2', content: '任务二', completed: true },
  { id: '3', content: '任务三', completed: false },
  { id: '4', content: '任务四', completed: false },
];

export const Default: Story = {
  args: {
    initialTasks: mockTasks,
    onSearch: (keyword) => console.log('Search:', keyword),
    onTaskAdd: (content) => console.log('Add task:', content),
    onTaskDelete: (taskId) => console.log('Delete task:', taskId),
    onTaskStatusChange: (taskId, completed) => 
      console.log('Task status change:', taskId, completed),
  },
}; 