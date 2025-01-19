import React from 'react';
import { Input, Button, List, Checkbox } from 'antd';
import { SearchOutlined, DeleteOutlined } from '@ant-design/icons';
import { TaskManagementPanelProps } from './interface';
import { filterTasks, validateNewTask } from './helpers';

const TaskManagementPanel: React.FC<TaskManagementPanelProps> = ({
  tasks,
  searchValue,
  newTaskValue,
  onSearchChange,
  onNewTaskChange,
  onTaskSubmit,
  onTaskDelete,
  onTaskToggle,
  onCancel,
  loading = false,
  renderTaskItem,
}) => {
  const filteredTasks = filterTasks(tasks, searchValue);

  return (
    <div className="w-full max-w-4xl mx-auto p-4 bg-white rounded-lg shadow">
      <h1 className="text-xl font-bold mb-4">任务管理面板</h1>
      
      {/* 搜索栏 */}
      <div className="flex gap-4 mb-4">
        <Input
          placeholder="请输入任务进行搜索"
          value={searchValue}
          onChange={e => onSearchChange(e.target.value)}
          prefix={<SearchOutlined className="text-gray-400" />}
          className="flex-1"
        />
        <Button type="primary" onClick={() => onNewTaskChange('')}>
          新增任务
        </Button>
      </div>

      {/* 新增任务输入框 */}
      {newTaskValue !== undefined && (
        <div className="mb-4">
          <Input
            placeholder="请输入新增的任务信息"
            value={newTaskValue}
            onChange={e => onNewTaskChange(e.target.value)}
            className="mb-2"
          />
          <div className="flex justify-end gap-2">
            <Button onClick={onCancel}>取消</Button>
            <Button
              type="primary"
              onClick={onTaskSubmit}
              disabled={!validateNewTask(newTaskValue)}
            >
              确认
            </Button>
          </div>
        </div>
      )}

      {/* 任务列表 */}
      <List
        loading={loading}
        dataSource={filteredTasks}
        renderItem={task => (
          renderTaskItem?.(task) || (
            <div className="flex items-center p-3 border-b hover:bg-gray-50">
              <Checkbox
                checked={task.completed}
                onChange={() => onTaskToggle(task.id)}
                className="mr-3"
              />
              <span className={`flex-1 ${task.completed ? 'line-through text-gray-400' : ''}`}>
                {task.content}
              </span>
              <Button
                type="text"
                danger
                icon={<DeleteOutlined />}
                onClick={() => onTaskDelete(task.id)}
              >
                删除
              </Button>
            </div>
          )
        )}
      />
    </div>
  );
};

export default TaskManagementPanel;