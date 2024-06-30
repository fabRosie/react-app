import React, { ReactNode } from 'react';
import type { PopconfirmProps } from 'antd';
import { Button, message, Popconfirm } from 'antd';

// const confirm: PopconfirmProps['onConfirm'] = (e) => {
//   message.success('Click on Yes');
// };

// const cancel: PopconfirmProps['onCancel'] = (e) => {
//   message.error('Click on No');
// };

type IApprovePopProps = Omit<PopconfirmProps, 'title'> & {
  tagName: string;
  triggerNode: ReactNode;
};

const ApprovePop: React.FC<IApprovePopProps> = ({ tagName, triggerNode, ...props }) => (
  <Popconfirm
    title={`机审标签：${tagName}`}
    // onConfirm={confirm}
    // onCancel={cancel}
    okText="认可"
    cancelText="不认可"
    cancelButtonProps={{ type: 'primary', style: { background: '#F2F3F5', color: 'rgba(0, 0, 0, 0.64)' } }}
    {...props}
  >
    {triggerNode}
  </Popconfirm>
);

export default ApprovePop;
