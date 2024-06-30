import { Button, Col, Form, ModalProps, Row, Select } from 'antd';
import Modal from 'antd/lib/modal/Modal';
import React, { FC, useState } from 'react';
import styles from './index.module.css';
import TextArea from 'antd/lib/input/TextArea';
import LevelButtonGroup from '../level-button-group';

type IProblemDescriptionModalProps = Omit<ModalProps, 'title'>;

const ProblemDescriptionModal: FC<ModalProps> = ({ ...props }) => {
  const [level, setLevel] = useState<number>(0);
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
      <Row className={styles.selected_img}>
        <Col span={5}>
          <div className="title">选中图片</div>
        </Col>
        <Col>
          <img src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"></img>
        </Col>
      </Row>
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
        <Form.Item name="gender" label="问题类型" rules={[{ required: true }]}>
          <Select options={[{ value: 'violence', label: '涉暴涉恐' }]} />
        </Form.Item>

        <Form.Item name="record" label="问题记录">
          <TextArea placeholder="最多输入200个中文字" maxLength={200} />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ProblemDescriptionModal;
