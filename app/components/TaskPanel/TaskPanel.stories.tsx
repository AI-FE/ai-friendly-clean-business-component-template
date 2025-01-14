import React, { useState } from 'react';
import { StoryFn, Meta } from '@storybook/react';
import TaskPanel from './TaskPanel';
import { TaskPanelProps, Task } from './interface';

export default {
  title: 'Components/TaskPanel',
  component: TaskPanel,
} as Meta;

const Template: StoryFn<TaskPanelProps> = (args) => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: '1', content: '任务一', completed: true },
    { id: '2', content: '任务二', completed: true },
    { id: '3', content: '任务三', completed: false },
    { id: '4', content: '任务四', completed: false },
  ]);

  const handleAddTask = (content: string) => {
    setTasks([
      ...tasks,
      {
        id: Date.now().toString(),
        content,
        completed: false,
      }
    ]);
  };

  const handleDeleteTask = (id: string) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const handleToggleTask = (id: string) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <TaskPanel
      {...args}
      tasks={tasks}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      onToggleTask={handleToggleTask}
    />
  );
};

export const Default = Template.bind({});
Default.args = {}; 