import React, { useState } from 'react';
import { Input, Button, List, Checkbox } from 'antd';
import { DeleteOutlined, SearchOutlined } from '@ant-design/icons';
import { TaskManagerProps } from './interface';
import { filterTasks } from './helpers';

const TaskManager: React.FC<TaskManagerProps> = ({
  tasks,
  searchKeyword,
  onSearchChange,
  onAddTask,
  onDeleteTask,
  onToggleTask,
}) => {
  const [newTaskTitle, setNewTaskTitle] = useState('');

  const handleAddTask = () => {
    if (newTaskTitle.trim()) {
      onAddTask(newTaskTitle);
      setNewTaskTitle('');
    }
  };

  const filteredTasks = filterTasks(tasks, searchKeyword);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">任务管理面板</h1>
      
      {/* 搜索栏 */}
      <div className="mb-6">
        <Input
          placeholder="请输入任务进行搜索"
          value={searchKeyword}
          onChange={(e) => onSearchChange(e.target.value)}
          prefix={<SearchOutlined className="text-gray-400" />}
          className="mb-4"
        />
        
        {/* 添加任务输入框 */}
        <div className="flex gap-2">
          <Input
            placeholder="请输入新增的任务信息"
            value={newTaskTitle}
            onChange={(e) => setNewTaskTitle(e.target.value)}
            onPressEnter={handleAddTask}
          />
          <Button 
            type="primary"
            onClick={handleAddTask}
          >
            新增任务
          </Button>
        </div>
      </div>

      {/* 任务列表 */}
      <List
        dataSource={filteredTasks}
        renderItem={(task) => (
          <List.Item
            className="flex items-center py-3 px-4 hover:bg-gray-50 rounded-lg"
          >
            <Checkbox
              checked={task.completed}
              onChange={() => onToggleTask(task.id)}
              className="mr-3"
            />
            <span className={`flex-1 ${task.completed ? 'line-through text-gray-400' : ''}`}>
              {task.title}
            </span>
            <Button
              type="link"
              danger
              icon={<DeleteOutlined />}
              onClick={() => onDeleteTask(task.id)}
              className="text-gray-400 hover:text-red-500"
            >
              删除
            </Button>
          </List.Item>
        )}
      />
    </div>
  );
};

export default TaskManager;