import { Table, Tabs } from 'antd';
import React from 'react';
import styles from './human-record.module.css';
import './human-record.module.css';

const dataSource = [
  {
    key: '1',
    name: '胡彦斌',
    age: 32,
    address: '西湖区湖底公园1号',
  },
  {
    key: '2',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号',
  },
];

const textColumns = [
  {
    title: '序号',
    dataIndex: 'name',
    key: '1',
  },
  {
    title: '原文内容',
    dataIndex: 'address',
    key: '2',
  },
  {
    title: '原文所在位置',
    dataIndex: 'position',
    key: '3',
  },
  {
    title: '问题类型',
    dataIndex: 'problemType',
    key: '4',
  },
  {
    title: '问题描述',
    dataIndex: 'problemDesc',
    key: '5',
  },
  {
    title: '审读环节',
    dataIndex: 'step',
    key: '6',
  },
  {
    title: '记录人',
    dataIndex: 'person',
    key: '6',
  },
];

const picColumns = [
  {
    title: '序号',
    dataIndex: 'name',
    key: '1',
  },
  {
    title: '图片内容',
    dataIndex: 'address',
    key: '2',
  },
  {
    title: '图片所在位置',
    dataIndex: 'position',
    key: '3',
  },
  {
    title: '问题类型',
    dataIndex: 'problemType',
    key: '4',
  },
  {
    title: '问题描述',
    dataIndex: 'problemDesc',
    key: '5',
  },
  {
    title: '审读环节',
    dataIndex: 'step',
    key: '6',
  },
  {
    title: '记录人',
    dataIndex: 'person',
    key: '6',
  },
];

const tabItems = [
  {
    label: '文本',
    key: '1',
    children: <Table dataSource={dataSource} columns={textColumns} bordered />,
  },
  {
    label: '图片',
    key: '2',
    children: <Table dataSource={dataSource} columns={picColumns} bordered />,
  },
];

const HumanRecord = () => {
  return <Tabs defaultActiveKey="1" size="middle" items={tabItems} className={styles.human_tab} />;
};
export default HumanRecord;
