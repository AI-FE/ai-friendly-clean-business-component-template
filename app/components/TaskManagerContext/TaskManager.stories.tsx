import React, { useState } from 'react';
import { StoryFn, Meta } from '@storybook/react';
import TaskManager from './TaskManager';
import { TaskManagerProps, Task } from './interface';
import { generateId } from './helpers';

export default {
  title: 'Components/TaskManagerContext',
  component: TaskManager,
} as Meta;

const Template: StoryFn<TaskManagerProps> = (args) => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: '1', title: '任务一', completed: true },
    { id: '2', title: '任务二', completed: true },
    { id: '3', title: '任务三', completed: false },
    { id: '4', title: '任务四', completed: false },
  ]);
  const [searchKeyword, setSearchKeyword] = useState('');

  const handleAddTask = (title: string) => {
    setTasks([...tasks, { id: generateId(), title, completed: false }]);
  };

  const handleDeleteTask = (taskId: string) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const handleToggleTask = (taskId: string) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <TaskManager
      {...args}
      tasks={tasks}
      searchKeyword={searchKeyword}
      onSearchChange={setSearchKeyword}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      onToggleTask={handleToggleTask}
    />
  );
};

export const Default = Template.bind({});
Default.args = {};