// 関連情報
import React from "react";
import { Form, Input, Table } from "antd";
import styled from "styled-components";
import FormItem from "antd/es/form/FormItem";


const Wrapper = styled.div`
  width: calc(50% - 8px)
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
    key: 'address',
  },
  {
    title: '支店名',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: '口座種類',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: '名義人',
    dataIndex: 'address',
    key: 'address',
  },
]

const salaryRecordTableTitle = [
  {
    title: '適用開始年月',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '適用終了年月',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '支店名コード',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: '基本給',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: '職能給',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: '雇用保険番号',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: '年金番号',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: '年金基準額',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: '健康保険番号',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: '備考',
    dataIndex: 'address',
    key: 'address',

  },

]

const SalaryInfo = () => {
  return (

    <Wrapper>
      <h2>基本情報</h2>

      <Form
        name="basic"
        initialValues={{ remember: true }}
        // labelCol={{ span: 8 }}
        // wrapperCol={{ span: 16 }}
        style={{ maxWidth: 2000 }}
        // onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
        autoComplete="off"
        labelAlign="right"
      >
        給与振込口座
        <Form.Item>
          <Table columns={bankTableTitle}/>
        </Form.Item>

        給与履歴
        <Form.Item>
          <Table columns={salaryRecordTableTitle}/>
        </Form.Item>
      </Form>
    </Wrapper>

  );
};
export default SalaryInfo;