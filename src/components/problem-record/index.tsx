import { Tabs } from 'antd';
import React from 'react';
import styles from './index.module.css';
import './index.module.css';
import MachineRecord from './machine-record';
import HumanRecord from './human-record';

const tabItems = [
  {
    label: '机审记录',
    key: '1',
    children: <MachineRecord />,
  },
  {
    label: '人审记录',
    key: '2',
    children: <HumanRecord />,
  },
];

const ProblemRecord = () => {
  return <Tabs defaultActiveKey="1" size="middle" items={tabItems} className={styles.tab} />;
};

export default ProblemRecord;
