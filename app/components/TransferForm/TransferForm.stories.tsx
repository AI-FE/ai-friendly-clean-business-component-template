import type { Meta, StoryObj } from '@storybook/react';
import { TransferForm } from './index';

const meta: Meta<typeof TransferForm> = {
  title: 'Components/TransferForm',
  component: TransferForm,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TransferForm>;

export const Default: Story = {
  args: {
    current: 0,
    payAccountList: [
      { label: '支付宝', value: 'ant-design@alipay.com' }
    ],
    initialValues: {
      payAccount: 'ant-design@alipay.com',
      receiveAccount: 'test@example.com',
      receiveName: 'Alex',
      amount: 500
    },
    onStepChange: (step) => console.log('Step changed:', step),
    onSubmit: (values) => console.log('Form submitted:', values)
  }
}; 