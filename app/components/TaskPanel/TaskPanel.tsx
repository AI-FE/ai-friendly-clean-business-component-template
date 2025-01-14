import React, { useState } from 'react';
import { Input, Button, Checkbox, message } from 'antd';
import { DeleteOutlined, SearchOutlined } from '@ant-design/icons';
import { TaskPanelProps, Task } from './interface';
import { filterTasks } from './helpers';

const TaskPanel: React.FC<TaskPanelProps> = ({
  tasks,
  onAddTask,
  onDeleteTask,
  onToggleTask,
}) => {
  const [searchText, setSearchText] = useState('');
  const [newTaskText, setNewTaskText] = useState('');
  const [isAdding, setIsAdding] = useState(false);

  const filteredTasks = filterTasks(tasks, searchText);

  const handleAddTask = () => {
    if (!newTaskText.trim()) {
      message.warning('请输入任务内容');
      return;
    }
    onAddTask(newTaskText.trim());
    setNewTaskText('');
    setIsAdding(false);
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-4 bg-white rounded-lg shadow">
      <h1 className="text-xl font-bold mb-4">任务管理面板</h1>
      
      <div className="flex gap-4 mb-4">
        <Input 
          placeholder="请输入任务进行搜索"
          prefix={<SearchOutlined />}
          value={searchText}
          onChange={e => setSearchText(e.target.value)}
          className="flex-1"
        />
        <Button 
          type="primary"
          onClick={() => setIsAdding(true)}
        >
          新增任务
        </Button>
      </div>

      {isAdding && (
        <div className="flex gap-2 mb-4">
          <Input
            placeholder="请输入新增的任务信息"
            value={newTaskText}
            onChange={e => setNewTaskText(e.target.value)}
          />
          <Button type="primary" onClick={handleAddTask}>确认</Button>
          <Button onClick={() => setIsAdding(false)}>取消</Button>
        </div>
      )}

      <div className="space-y-2">
        {filteredTasks.map(task => (
          <div 
            key={task.id}
            className="flex items-center p-3 border rounded hover:bg-gray-50"
          >
            <Checkbox
              checked={task.completed}
              onChange={() => onToggleTask(task.id)}
              className="mr-2"
            />
            <span className={`flex-1 ${task.completed ? 'line-through text-gray-400' : ''}`}>
              {task.content}
            </span>
            <Button 
              type="link"
              danger
              icon={<DeleteOutlined />}
              onClick={() => onDeleteTask(task.id)}
            >
              删除
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskPanel; 