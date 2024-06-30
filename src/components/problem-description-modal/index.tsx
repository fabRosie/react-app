import React, { useEffect } from 'react';
import { Button, Col, Form, Modal, Row, Select } from 'antd';
import styles from './index.module.css';
import TextArea from 'antd/es/input/TextArea';
import { CloseOutlined } from '@ant-design/icons';

interface ITranslateModalProps {
  open: boolean;
  // onOk?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onCancel?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  text: string;
  [property: string]: any;
}

const ProblemDescModal: React.FC<ITranslateModalProps> = ({ text, open, left, top, onCancel }) => {
  useEffect(() => {
    const modal = document.querySelector('.ant-modal');
    modal?.addEventListener('mousedown', (e) => {
      e.preventDefault();
    });
  }, []);

  return (
    <div
      style={{
        display: open ? 'block' : 'none',
        left,
        top,
      }}
      className={styles.problem_modal}
    >
      <div className={styles.header}>
        {' '}
        问题描述 <CloseOutlined style={{ color: '#4E5969' }} onClick={onCancel} />{' '}
      </div>

      <div className={styles.body}>
        <Row className={styles.selected_text}>
          <Col span={5}>
            <div className="title">选中文本：</div>
          </Col>
          <Col>
            <div className="content">{text}</div>
          </Col>
        </Row>

        <Form
          name="control-hooks"
          // onFinish={onFinish}
          style={{ maxWidth: 600 }}
          labelCol={{ span: 5 }}
          labelAlign="left"
        >
          <Form.Item name="gender" label="问题类型" rules={[{ required: true }]}>
            <Select options={[{ value: 'violence', label: '涉暴涉恐' }]} />
          </Form.Item>

          <Form.Item name="record" label="问题记录">
            <TextArea placeholder="最多输入200个中文字" maxLength={200} />
          </Form.Item>
        </Form>
      </div>
      <div className={styles.footer}>
        <Button type="primary" ghost>
          取消
        </Button>
        <Button type="primary" style={{ marginLeft: 16 }}>
          确定
        </Button>
      </div>
    </div>
  );
};

export default ProblemDescModal;
