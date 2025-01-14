import React, { useState } from 'react';
import { Input, Button, List } from 'antd';
import { SearchOutlined, CheckCircleFilled, CheckCircleOutlined } from '@ant-design/icons';
import { TaskManagementProps, Task } from './interface';

const TaskManagement: React.FC<TaskManagementProps> = ({
  tasks,
  onSearch,
  onAdd,
  onDelete,
  onToggleComplete,
}) => {
  const [newTask, setNewTask] = useState('');
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = (value: string) => {
    setSearchValue(value);
    onSearch(value);
  };

  const handleAdd = () => {
    if (newTask.trim()) {
      onAdd(newTask.trim());
      setNewTask('');
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-4">
      <h1 className="text-xl font-bold mb-4">任务管理面板</h1>
      
      <div className="mb-4">
        <Input
          placeholder="请输入任务进行搜索"
          prefix={<SearchOutlined />}
          value={searchValue}
          onChange={(e) => handleSearch(e.target.value)}
          className="mb-4"
        />
        
        <div className="flex gap-2 mb-4">
          <Input
            placeholder="请输入新增的任务信息"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <Button type="primary" onClick={handleAdd}>
            新增任务
          </Button>
        </div>
      </div>

      <List
        dataSource={tasks}
        renderItem={(task: Task) => (
          <List.Item
            className="flex items-center justify-between p-3 hover:bg-gray-50 border rounded-lg mb-2"
            key={task.id}
          >
            <div className="flex items-center gap-2">
              <span
                className="cursor-pointer"
                onClick={() => onToggleComplete(task.id)}
              >
                {task.completed ? (
                  <CheckCircleFilled className="text-green-500 text-xl" />
                ) : (
                  <CheckCircleOutlined className="text-gray-400 text-xl" />
                )}
              </span>
              <span className={task.completed ? 'line-through text-gray-400' : ''}>
                {task.content}
              </span>
            </div>
            <Button
              type="link"
              danger
              onClick={() => onDelete(task.id)}
            >
              删除
            </Button>
          </List.Item>
        )}
      />
    </div>
  );
};

export default TaskManagement; 