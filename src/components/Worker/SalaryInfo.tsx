// 関連情報
import React from "react";
import { Form, Input, Table } from "antd";
import styled from "styled-components";


const Wrapper = styled.div`
`;


const bankTableTitle = [
  {
    title: '金融機関コード',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '金融機関名',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '支店名コード',
    dataIndex: 'address',
    key: '1',
  },
  {
    title: '支店名',
    dataIndex: 'address',
    key: '2',
  },
  {
    title: '口座種類',
    dataIndex: 'address',
    key: '3',
  },
  {
    title: '名義人',
    dataIndex: 'address',
    key: '4',
  },
]

const salaryRecordTableTitle = [
  {
    title: '適用開始年月',
    dataIndex: 'name',
    key: '1',
  },
  {
    title: '適用終了年月',
    dataIndex: 'age',
    key: '2',
  },
  {
    title: '支店名コード',
    dataIndex: 'address',
    key: '3',
  },
  {
    title: '基本給',
    dataIndex: 'address',
    key: '4',
  },
  {
    title: '職能給',
    dataIndex: 'address',
    key: '5',
  },
  {
    title: '雇用保険番号',
    dataIndex: 'address',
    key: '6',
  },
  {
    title: '年金番号',
    dataIndex: 'address',
    key: '7',
  },
  {
    title: '年金基準額',
    dataIndex: 'address',
    key: '8',
  },
  {
    title: '健康保険番号',
    dataIndex: 'address',
    key: '9',
  },
  {
    title: '備考',
    dataIndex: 'address',
    key: '10',

  },

]

const SalaryInfo = () => {
  return (
    <Wrapper>
      <h2>給与関連情報</h2>
        給与振込口座
        <Form.Item>
          <Table columns={bankTableTitle}/>
        </Form.Item>

        給与履歴
      <Form.Item name="SalaryTable" valuePropName="dataSource">
        <Table  columns={salaryRecordTableTitle}/>
      </Form.Item>
    </Wrapper>

  );
};
export default SalaryInfo;