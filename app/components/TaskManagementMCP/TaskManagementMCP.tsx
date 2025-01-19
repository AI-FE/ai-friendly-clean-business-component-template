import React, { useState } from 'react';
import { Input, Button, List, Avatar, Modal } from 'antd';
import { CheckCircleOutlined, UserOutlined } from '@ant-design/icons';
import type { TaskManagementProps, TaskItem } from './interface';

const TaskManagementMCP: React.FC<TaskManagementProps> = ({
  initialTasks,
  onTasksChange,
  onSearch,
  onAddTask,
  onDeleteTask,
}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [newTaskTitle, setNewTaskTitle] = useState('');

  const handleAddTask = () => {
    if (newTaskTitle.trim()) {
      onAddTask({
        title: newTaskTitle,
        status: 'pending',
      });
      setNewTaskTitle('');
      setIsModalVisible(false);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-4">
      <div className="mb-4 flex justify-between items-center">
        <Input.Search
          placeholder="请输入任务进行搜索"
          className="max-w-lg"
          onSearch={onSearch}
        />
        <Button type="primary" onClick={() => setIsModalVisible(true)}>
          新增任务
        </Button>
      </div>

      <List
        dataSource={initialTasks}
        renderItem={(item: TaskItem) => (
          <List.Item
            className="flex justify-between items-center p-4 border rounded-lg mb-2"
            key={item.id}
          >
            <div className="flex items-center">
              <Avatar icon={item.status === 'done' ? <CheckCircleOutlined /> : <UserOutlined />} 
                     className={item.status === 'done' ? 'bg-green-500' : 'bg-gray-300'} />
              <span className="ml-4">{item.title}</span>
            </div>
            <Button type="link" danger onClick={() => onDeleteTask(item.id)}>
              删除
            </Button>
          </List.Item>
        )}
      />

      <Modal
        title="新增任务"
        open={isModalVisible}
        onOk={handleAddTask}
        onCancel={() => setIsModalVisible(false)}
        okText="确认"
        cancelText="取消"
      >
        <Input
          placeholder="请输入新增的任务信息"
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
        />
      </Modal>
    </div>
  );
};

export default TaskManagementMCP;