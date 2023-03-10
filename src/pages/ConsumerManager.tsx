import styled from "styled-components";
import { Button, Form, Input, Select, Space, Table } from "antd";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import FormItem from "antd/es/form/FormItem";
import { ConsumerQueryCommand, ConsumerWithWorker } from "../types/consumer";
import { getConsumer } from "../request/consumerApi";
import { useAsyncEffect, useSetState } from "ahooks";
import { getCompanyName } from "../request/settingApi";
import { TgSetting } from "../types/tgSetting";

const Wrapper = styled.div`


`;

const tableTitle = [
  {
    title: "取引先名",
    dataIndex: "担当者名",
    key: "torihikiNameAll"
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
  const[customerList, setState] = useState<ConsumerWithWorker[]>()
  const [{ companySelector }, setCompanyInfo] = useSetState<{ companySelector: TgSetting[] }>({ companySelector: [] });

  const [form] = Form.useForm();
  const submit = async (command:ConsumerQueryCommand) => {
    setState(await getConsumer(command));
  };

  useAsyncEffect(async () => {
    setCompanyInfo({ companySelector: await getCompanyName({ category1: "1" }) });
  }, []);
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
        <FormItem label="取引先名" name="cusname" >
          <Input/>
        </FormItem>
        <FormItem label="取引元名" name="test" >
          <Select
            style={{ width: 80, margin: '0 8px' }}
            options={
              companySelector.length > 0 ?
                companySelector.map(item => {
                  return { value: item.category2, label: item.value1 };
                }) : []
            }
          />
        </FormItem>
        <FormItem shouldUpdate>
            <Button
              type="primary"
              htmlType="submit"
            >
              検索
            </Button>
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