import React, { useEffect } from 'react';
import { Modal } from 'antd';
import styles from './index.module.css';
import { CloseOutlined } from '@ant-design/icons';

interface ITranslateModalProps {
  open: boolean;
  onCancel?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  text: string;
  left: number;
  top: number;
  [property: string]: any;
}

const TranslateModal: React.FC<ITranslateModalProps> = ({ text, open, left, top, onCancel }) => {
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
      className={styles.translate_modal}
    >
      <div className={styles.header}>
        {' '}
        划词翻译 <CloseOutlined style={{ color: '#4E5969' }} onClick={onCancel} />{' '}
      </div>
      <div className={styles.text_title}> 译文 </div>
      <div className={styles.text}>{text}</div>
    </div>
  );
};

export default TranslateModal;
