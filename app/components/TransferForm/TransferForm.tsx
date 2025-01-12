import React from 'react';
import { Form, Steps, Select, Input, Button } from 'antd';
import type { TransferFormProps } from './interface';

const { Step } = Steps;

const TransferForm: React.FC<TransferFormProps> = ({
  initialValues,
  payAccountList,
  current = 0,
  onStepChange,
  onSubmit,
}) => {
  const [form] = Form.useForm();

  const handleNext = async () => {
    try {
      await form.validateFields();
      onStepChange?.(current + 1);
    } catch (error) {
      console.error('Validation failed:', error);
    }
  };

  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();
      onSubmit?.(values);
    } catch (error) {
      console.error('Validation failed:', error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <Steps current={current} className="mb-8">
        <Step title="填写转账信息" />
        <Step title="确认转账信息" />
        <Step title="完成" />
      </Steps>

      <Form
        form={form}
        layout="vertical"
        initialValues={initialValues}
        className="px-4"
      >
        <Form.Item
          name="payAccount"
          label="付款账户"
          required
          rules={[{ required: true, message: '请选择付款账户' }]}
        >
          <Select options={payAccountList} />
        </Form.Item>

        <Form.Item label="收款账户">
          <Form.Item
            name="receiveAccount"
            rules={[
              { required: true, message: '请输入收款账户' },
              { type: 'email', message: '请输入有效的邮箱地址' }
            ]}
          >
            <Input placeholder="请输入收款账户" />
          </Form.Item>
        </Form.Item>

        <Form.Item
          name="receiveName"
          label="收款人姓名"
          rules={[{ required: true, message: '请输入收款人姓名' }]}
        >
          <Input placeholder="请输入收款人姓名" />
        </Form.Item>

        <Form.Item
          name="amount"
          label="转账金额"
          rules={[
            { required: true, message: '请输入转账金额' },
            { type: 'number', message: '请输入有效的金额' }
          ]}
        >
          <Input
            prefix="￥"
            placeholder="请输入转账金额"
            type="number"
          />
        </Form.Item>

        <Form.Item className="mt-8">
          {current < 2 ? (
            <Button type="primary" onClick={handleNext}>
              下一步
            </Button>
          ) : (
            <Button type="primary" onClick={handleSubmit}>
              提交
            </Button>
          )}
        </Form.Item>
      </Form>
    </div>
  );
};

export default TransferForm; 