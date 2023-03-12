import styled from "styled-components";
import { Button, Form, Input, Select, Space, Table } from "antd";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import FormItem from "antd/es/form/FormItem";
import { ConsumerQueryCommand } from "../types/consumer";
import { getConsumer } from "../request/consumerApi";
import { useAsyncEffect, useSetState } from "ahooks";
import { getCompanyName } from "../request/settingApi";
import { TgSetting } from "../types/tgSetting";

const Wrapper = styled.div`


`;


const tableTitle = [
  {
    title: "取引先名",
    dataIndex: "torihikiNameAll",
    key: "torihikiNameAll"
  },
  {
    title: "担当者名",
    dataIndex: "tantouName",
    key: "tantouName"
  },
  {
    title: "担当者Mail",
    dataIndex: "tantouMail",
    key: "tantouMail"
  },
  {
    title: "担当者Tel",
    dataIndex: "tantouTel",
    key: "tantouTel"
  },
  {
    title: "編集",
    dataIndex: "torihikiId",
    key: "torihikiId",
    render: ((_: any, record: TableData) => {
      return (
        <Space>
          <Space.Compact>
            <Button><Link to="/consumer/update">更新</Link></Button>
            <Button onClick={() => deleteTorihiki(record)}>削除</Button>
          </Space.Compact>
        </Space>
      );
    })
  }
];

type TableData = {
  torihikiId: number,
  torihikiNameAll: string,
  tantouName: string,
  tantouMail: string,
  tantouTel: string
}

const deleteTorihiki = (record: TableData) => {

  console.log(record.torihikiId)

};


const ConsumerManager = () => {

  const [customerList, setState] = useState<TableData[]>();
  const [{ companySelector }, setCompanyInfo] = useSetState<{ companySelector: TgSetting[] }>({ companySelector: [] });
  const [form] = Form.useForm();


  const submit = async (command: ConsumerQueryCommand) => {
    const consumerWithWorkers = await getConsumer(command);
    const res: TableData[] = consumerWithWorkers.map(item => {
      return {
        torihikiId: item.consumer.torihikiId,
        torihikiNameAll: item.consumer.torihikiNameAll,
        tantouName: `${item.consumerTantouList[0]?.firstName ?? ""} ${item.consumerTantouList[0]?.lastName ?? ""}`,
        tantouMail: item.consumerTantouList[0]?.mail,
        tantouTel: item.consumerTantouList[0]?.tel
      };
    });
    setState(res);
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
        style={{ width: 1000 }}
        name="basic"
        onFinish={submit}
        initialValues={{ remember: true }}
        autoComplete="true"
        layout="inline"
      >
        <FormItem label="取引先名" name="consumerName">
          <Input />
        </FormItem>
        <FormItem label="取引元名" name="consumerAddress">
          <Select

            style={{ width: 80, margin: "0 8px" }}
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
        rowKey="torihikiId"
        columns={tableTitle}
        dataSource={customerList}
      />
    </Wrapper>
  );
};

export default ConsumerManager;