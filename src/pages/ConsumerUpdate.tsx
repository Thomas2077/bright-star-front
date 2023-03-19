import styled from "styled-components";
import { Form, Input } from "antd";
import { ProForm } from "@ant-design/pro-form";
import ConsumerInfo from "../components/Consumer/ConsumerInfo";
import React, { useState } from "react";
import { ConsumerType, ConsumerWithWorker } from "../types/consumer";
import Search from "antd/es/input/Search";
import FormItem from "antd/es/form/FormItem";
import { getConsumer } from "../request/consumerApi";
import { useAsyncEffect, useSetState } from "ahooks";

const Wrapper = styled.div`


`;

const ConsumerUpdate = () => {

  useAsyncEffect(async () => {

  },[])

  const [consumerAndWorker, setConsumerAndWorker] = useState<ConsumerWithWorker>();
  const [form] = Form.useForm();

  const submit = (values: ConsumerType) => {
    console.log(values);
  };


  const onSearch = async (value: string) => {
    // setConsumerAndWorker((await getConsumer({ consumerName: value })).pop);

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
      >

        <FormItem label="取引先ID" name="torihikiId" wrapperCol={{ span: 4 }}>
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

        <ConsumerInfo />
      </ProForm>
    </Wrapper>

  );
};

export default ConsumerUpdate;