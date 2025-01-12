export interface TransferFormData {
  payAccount: string;
  receiveAccount: string;
  receiveName: string;
  amount: number;
}

export interface TransferFormProps {
  // 初始数据
  initialValues?: Partial<TransferFormData>;
  // 支付账户列表
  payAccountList: Array<{
    label: string;
    value: string;
  }>;
  // 当前步骤
  current?: number;
  // 步骤改变回调
  onStepChange?: (step: number) => void;
  // 表单提交回调
  onSubmit?: (values: TransferFormData) => void;
}
