import React from 'react'
import { Table } from 'antd';

export default ({columns=[], data=[]}) => <Table columns={columns} dataSource={data} />;