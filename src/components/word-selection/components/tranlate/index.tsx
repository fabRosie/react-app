import React from 'react';
import { Modal } from 'antd';
import styles from './index.module.css';

interface ITranslateModalProps {
  open: boolean;
  // onOk?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onCancel?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  text: string;
  [property: string]: any;
}

const Translate: React.FC<ITranslateModalProps> = ({ text, ...props }) => {
  // console.log(props.style)
  return (
    <Modal title="划词翻译" {...props} className={styles.translate_modal} footer={null} mask={false}>
      <div className={styles.text_title}> 译文 </div>
      <div className={styles.text}>{text}</div>
    </Modal>
  );
};

export default Translate;
