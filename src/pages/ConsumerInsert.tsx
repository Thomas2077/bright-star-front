import styled from "styled-components";
import { Form } from "antd";
import ConsumerInfo from "../components/Consumer/ConsumerInfo";
import React from "react";
import { ProForm } from "@ant-design/pro-form";

const Wrapper = styled.div`


`;

const ConsumerInsert = () => {

  const [form] = Form.useForm();

  const submit = () => {

  };

  return (
    <Wrapper>

      <ProForm<{
        name: string;
        company?: string;
        useMode?: string;
      }>
        layout="horizontal"
        labelAlign="right"
        labelCol={{ span:4 }}
        wrapperCol={{ span:8 }}
        submitter={false}
      >
        <ConsumerInfo />
      </ProForm>


    </Wrapper>

  );
};

export default ConsumerInsert;