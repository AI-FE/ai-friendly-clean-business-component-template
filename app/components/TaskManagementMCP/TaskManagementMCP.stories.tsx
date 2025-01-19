import type { Meta, StoryObj } from '@storybook/react';
import { TaskManagementMCP } from './index';
import { TaskItem } from './interface';

const meta: Meta<typeof TaskManagementMCP> = {
  title: 'Components/TaskManagementMCP',
  component: TaskManagementMCP,
  parameters: {

  },
};

export default meta;
type Story = StoryObj<typeof TaskManagementMCP>;

export const Default: Story = {
  args: {
    initialTasks: [
      { id: '1', title: '任务一', status: 'done' },
      { id: '2', title: '任务二', status: 'done' },
      { id: '3', title: '任务三', status: 'pending' },
      { id: '4', title: '任务四', status: 'pending' },
    ],
    onTasksChange: (tasks: TaskItem[]) => console.log('Tasks changed:', tasks),
    onSearch: (keyword: string) => console.log('Search:', keyword),
    onAddTask: (task: Omit<TaskItem, 'id'>) => console.log('Add task:', task),
    onDeleteTask: (taskId: string) => console.log('Delete task:', taskId),
  },
};