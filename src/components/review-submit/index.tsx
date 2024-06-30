import { Form, Modal } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { ModalProps } from 'antd/lib';
import { FC } from 'react';
import LevelButtonGroup from '../level-button-group';

const ReviewSubmitModal: FC<ModalProps> = ({ ...props }) => {
  return (
    <Modal
      // title="问题描述"
      // open={isModalOpen}
      // onOk={handleOk}
      // onCancel={handleCancel}
      okText="确定"
      cancelText="取消"
      cancelButtonProps={{ type: 'primary', ghost: true }}
      {...props}
    >
      <Form
        name="control-hooks"
        // onFinish={onFinish}
        style={{ maxWidth: 600 }}
        labelCol={{ span: 5 }}
        labelAlign="left"
      >
        <Form.Item name="gender" label="审读结果" rules={[{ required: true }]}>
          <LevelButtonGroup />
        </Form.Item>
        <Form.Item name="type" label="问题类型">
          {/* <Select options={[{ value: 'violence', label: '涉暴涉恐' }]} /> */}
        </Form.Item>

        <Form.Item name="record" label="审读建议">
          <TextArea placeholder="请输入审读建议" maxLength={200} />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ReviewSubmitModal;
