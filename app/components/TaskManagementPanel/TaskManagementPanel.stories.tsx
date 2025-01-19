import React, { useState } from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { TaskManagementPanel, TaskManagementPanelProps } from './index';
import { validateNewTask } from './helpers';

export default {
  title: 'Components/TaskManagementPanel',
  component: TaskManagementPanel,
} as Meta;

const Template: StoryFn<TaskManagementPanelProps> = (args) => {
  const [tasks, setTasks] = useState(args.tasks);
  const [searchValue, setSearchValue] = useState('');
  const [newTaskValue, setNewTaskValue] = useState('');

  const handleTaskSubmit = () => {
    if (!validateNewTask(newTaskValue)) return;
    
    setTasks([
      ...tasks,
      {
        id: Date.now().toString(),
        content: newTaskValue,
        completed: false,
      }
    ]);
    setNewTaskValue('');
  };

  const handleTaskDelete = (taskId: string) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const handleTaskToggle = (taskId: string) => {
    setTasks(tasks.map(task =>
      task.id === taskId
        ? { ...task, completed: !task.completed }
        : task
    ));
  };

  return (
    <TaskManagementPanel
      {...args}
      tasks={tasks}
      searchValue={searchValue}
      newTaskValue={newTaskValue}
      onSearchChange={setSearchValue}
      onNewTaskChange={setNewTaskValue}
      onTaskSubmit={handleTaskSubmit}
      onTaskDelete={handleTaskDelete}
      onTaskToggle={handleTaskToggle}
      onCancel={() => setNewTaskValue('')}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  tasks: [
    { id: '1', content: '任务一', completed: true },
    { id: '2', content: '任务二', completed: true },
    { id: '3', content: '任务三', completed: false },
    { id: '4', content: '任务四', completed: false },
  ],
};