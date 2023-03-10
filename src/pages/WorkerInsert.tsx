import styled from "styled-components";
import BaseInfo from "../components/Worker/BaseInfo";
import { Button, Form } from "antd";
import React, { useEffect } from "react";
import SalaryInfo from "../components/Worker/SalaryInfo";
import { ContactInfo } from "../components/Worker/ContactInfo";

const Wrapper = styled.div`

`;

const WorkerInsert = () => {
  const [form] = Form.useForm();

  const saveWorker = (props: any) => {
    console.log(props);
  };
  useEffect(() => {
    form.setFieldsValue({ SalaryTable: [{ name: "12121" }] });
  });
  return (

    <Wrapper>
      <Form
        form={form}
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 1000 }}
        initialValues={{ remember: true }}
        onFinish={saveWorker}
        autoComplete="off"
        labelAlign="right"
      >

        <BaseInfo />
        <SalaryInfo />
        <ContactInfo />

        <Form.Item>
          <Button type="primary" htmlType="submit">
            検索
          </Button>
        </Form.Item>
      </Form>
    </Wrapper>

  );

};

export default WorkerInsert;