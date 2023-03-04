import styled from "styled-components";
import { Button, Form, Input, Select, Space, Table } from "antd";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import FormItem from "antd/es/form/FormItem";
import { ConsumerType } from "../types/consumer";

const Wrapper = styled.div`


`;

const tableTitle = [
  {
    title: "取引先名",
    dataIndex: "担当者名",
    key: "companyName"
  },
  {
    title: "担当者名",
    dataIndex: "companyName",
    key: "companyName"
  },
  {
    title: "担当者Mail",
    dataIndex: "companyName",
    key: "companyName"
  },
  {
    title: "担当者Tel",
    dataIndex: "companyName",
    key: "companyName"
  },
  {
    title: "編集",
    dataIndex: "companyName",
    key: "companyName",
    render: (() => {
      return (
        <Space>
          <Space.Compact>
            <Button>更新<Link to="/index"></Link></Button>
            <Button>削除<Link to="/index"></Link></Button>
          </Space.Compact>
        </Space>
      );
    })
  }
];


const ConsumerManager = () => {
  const[customerList, setState] = useState<ConsumerType[]>()


  const [form] = Form.useForm();
  const submit = (command:any) => {
    setState([{}])
  };
  return (
    <Wrapper>
      <h4>检索条件</h4>
      <Form
        form={form}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{width:1000}}
        name="basic"
        onFinish={submit}
        initialValues={{ remember: true }}
        autoComplete="true"
        layout="inline"
      >
        <FormItem label="取引先名1212" name="cusname" >
          <Input/>
        </FormItem>
        <FormItem label="1取引1212先名11111" name="1" >
          <Select
            style={{ width: 80, margin: '0 8px' }}
          />
        </FormItem>
        <FormItem shouldUpdate>
          {() => (
            <Button
              type="primary"
              htmlType="submit"
            >
              Log in
            </Button>
          )}
        </FormItem>
      </Form>
      <h4>检索条件</h4>
      <Table
        columns={tableTitle}
        dataSource={customerList}
      />
    </Wrapper>
  );
};

export default ConsumerManager;