import React from "react";
import { Button, Col, Form, Input, Radio, Row, Select, Table } from "antd";
import styled from "styled-components";
import FormItem from "antd/es/form/FormItem";

export interface CommonItem {
  id: number,
  name: string,
  visible: boolean
}


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

const WorkerSearch = () => {

  // const user = useRecoilState()
  return (
    <Wrapper>
      <Form
        name="basic"

        initialValues={{ remember: true }}
        // onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Row gutter={24}>
          <Col span={6}>
            <FormItem
              label="所属会社"
              name="companyInfo"
              rules={[{ required: true }]}
            >
              <Select placeholder="全て"></Select>
            </FormItem>
          </Col>

          <Col span={6}>
            <FormItem
              label="社員名"
              name="username"
              rules={[{ required: true, message: "Please input your username!" }]}
            >
              <Input />
            </FormItem>
          </Col>
        </Row>
        <Row gutter={24}>
          <Col span={6}>
            <FormItem
              label="職業種類"
              name="companyInfo"
              rules={[{ required: true }]}
            >
              <Select placeholder="全て"></Select>
            </FormItem>
          </Col>
          <Col span={6}>
            <FormItem label="">
              <Radio.Group>
                <Radio value="apple"> 在職 </Radio>
                <Radio value="pear"> 非在職 </Radio>
              </Radio.Group>
            </FormItem>
          </Col>
        </Row>

        <Row>
          <Col>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit">
                検索
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
      <Table columns={bankTableTitle}/>


    </Wrapper>
  );
};

export default WorkerSearch;