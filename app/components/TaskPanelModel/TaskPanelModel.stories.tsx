import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { TaskPanelModel } from './';
import type { TaskPanelProps } from './interface';

export default {
  title: 'Components/TaskPanelModel',
  component: TaskPanelModel,
} as Meta;

const Template: StoryFn<TaskPanelProps> = (args) => <TaskPanelModel {...args} />;

export const Default = Template.bind({});
Default.args = {
  tasks: [
    { id: '1', content: '任务一', completed: true },
    { id: '2', content: '任务二', completed: true },
    { id: '3', content: '任务三', completed: false },
    { id: '4', content: '任务四', completed: false },
  ],
  onSearch: (keyword: string) => console.log('搜索:', keyword),
  onAddTask: (content: string) => console.log('新增:', content),
  onDeleteTask: (id: string) => console.log('删除:', id),
  onToggleTask: (id: string, completed: boolean) => console.log('切换状态:', id, completed),
};
