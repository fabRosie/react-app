import { Table } from 'antd';
import React from 'react';
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

const columns = [
  {
    title: '序号',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'AI标签',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '原文内容',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: '原文所在位置',
    dataIndex: 'position',
    key: 'address',
  },
  {
    title: '数据入库时间',
    dataIndex: 'time',
    key: 'address',
  },
];

const MachineRecord = () => {
  return (
    <div style={{ padding: '8px 24px' }}>
      <Table dataSource={dataSource} columns={columns} bordered />
    </div>
  );
};
export default MachineRecord;
