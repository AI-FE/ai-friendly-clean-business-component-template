import React, { useState } from 'react';
import { Input, Button, List, Checkbox } from 'antd';
import { SearchOutlined, DeleteOutlined } from '@ant-design/icons';
import type { TaskPanelProps } from './interface';

const TaskPanelModel: React.FC<TaskPanelProps> = ({
  tasks,
  onSearch,
  onAddTask,
  onDeleteTask,
  onToggleTask,
}) => {
  const [newTask, setNewTask] = useState('');
  const [isAdding, setIsAdding] = useState(false);

  const handleAddTask = () => {
    if (newTask.trim()) {
      onAddTask(newTask.trim());
      setNewTask('');
      setIsAdding(false);
    }
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <h1 className="text-xl mb-4">任务管理面板</h1>
      
      {/* 搜索区域 */}
      <div className="flex gap-4 mb-4">
        <Input
          placeholder="请输入任务进行搜索"
          prefix={<SearchOutlined />}
          onChange={(e) => onSearch(e.target.value)}
          className="flex-1"
        />
        <Button 
          type="primary"
          onClick={() => setIsAdding(true)}
        >
          新增任务
        </Button>
      </div>

      {/* 新增任务输入框 */}
      {isAdding && (
        <div className="flex gap-2 mb-4">
          <Input
            placeholder="请输入新增的任务信息"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            onPressEnter={handleAddTask}
          />
          <Button type="primary" onClick={handleAddTask}>确认</Button>
          <Button onClick={() => setIsAdding(false)}>取消</Button>
        </div>
      )}

      {/* 任务列表 */}
      <List
        dataSource={tasks}
        renderItem={(task) => (
          <List.Item
            className="flex items-center gap-4 p-2 hover:bg-gray-50"
          >
            <Checkbox
              checked={task.completed}
              onChange={(e) => onToggleTask(task.id, e.target.checked)}
            />
            <span className={`flex-1 ${task.completed ? 'line-through text-gray-400' : ''}`}>
              {task.content}
            </span>
            <Button 
              type="text"
              danger
              icon={<DeleteOutlined />}
              onClick={() => onDeleteTask(task.id)}
            >
              删除
            </Button>
          </List.Item>
        )}
      />
    </div>
  );
};

export default TaskPanelModel;