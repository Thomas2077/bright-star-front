import styled from "styled-components";
import { Button, Form, Input } from "antd";
import { ProForm } from "@ant-design/pro-form";
import ConsumerInfo from "../components/Consumer/ConsumerInfo";
import React from "react";
import { ConsumerType, ConsumerWithWorker, TantouList, tantouListState } from "../types/consumer";
import Search from "antd/es/input/Search";
import FormItem from "antd/es/form/FormItem";
import { getConsumer, getConsumerById, getTantou } from "../request/consumerApi";
import { useAsyncEffect, useSetState } from "ahooks";
import { useParams } from "react-router-dom";
import TantouTable from "../components/Consumer/TantouTable";
import { useRecoilState } from "recoil";

const Wrapper = styled.div`


`;

const ConsumerUpdate = () => {
  const { id } = useParams();
  const [consumerAndWorkerList, setConsumerAndWorkerState] = useSetState<ConsumerWithWorker[]>([]);
  const [appState, setAppState] = useRecoilState<TantouList>(tantouListState);
  const [form] = Form.useForm();

  useAsyncEffect(async () => {
    setConsumerAndWorkerState((await getConsumerById( id )));
    // setConsumerAndWorkerState((await getConsumer({ consumerName: name })));
    // form.setFieldsValue((await getConsumer({ consumerName: name }))[0].consumer);

    // update table
    setAppState({ list: await getTantou(0) });
  }, []);

  const submit = async (values: ConsumerType) => {
    console.log(form.getFieldsValue());

    console.log(values)
  };

  const onSearch = async (value: string) => {
    console.log(form.getFieldValue("table"));;
    console.log(form.getFieldsValue());

  };

  return (
    <Wrapper>
      <ProForm<ConsumerType>
        layout="horizontal"
        labelAlign="right"
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 8 }}
        submitter={false}
        onFinish={async (values: ConsumerType) => {
          return submit(values);
        }}
        form={form}
      >

        <FormItem label="取引先ID" name="torihikiId"
                  wrapperCol={{ span: 4 }}>
          <Input readOnly />
        </FormItem>

        <FormItem label="取引先名（全名）" name="torihikiNameAll" wrapperCol={{ span: 4 }}>
          <Search
            placeholder="取引先名"
            allowClear
            enterButton="Search"
            onSearch={onSearch}
            style={{ width: 304 }}
          />
        </FormItem>

        <TantouTable />

        <ConsumerInfo />
        <FormItem>
          <Button type="primary" htmlType="submit">登 録</Button>
        </FormItem>
      </ProForm>
    </Wrapper>

  );
};

export default ConsumerUpdate;