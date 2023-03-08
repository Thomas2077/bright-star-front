import styled from "styled-components";
import { Button, Form } from "antd";
import ConsumerInfo from "../components/Consumer/ConsumerInfo";
import React from "react";
import FormItem from "antd/es/form/FormItem";
import { ProForm, ProFormGroup, ProFormText } from "@ant-design/pro-form";

const Wrapper = styled.div`


`;

const ConsumerInsertPage = () => {

  const [form] = Form.useForm();

  const submit = () => {

  };

  return (
    <Wrapper>
      <Form
        form={form}
        name="basic"
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 8 }}
        style={{ maxWidth: 1000 }}
        initialValues={{ remember: true }}
        onFinish={submit}
        autoComplete="off"
        labelAlign="left"
      >
        <ConsumerInfo />

        <FormItem labelCol={{ span: 4, offset: 8 }}>
          <Button type="primary" htmlType="submit">
            登 録
          </Button>
        </FormItem>
      </Form>

      <ProForm<{
        name: string;
        company?: string;
        useMode?: string;
      }>>
        <ProFormGroup>
          <ProFormText
            width="md"
            name="name"
            required
            dependencies={[['contract', 'name']]}
            addonBefore={<a>客户名称应该怎么获得？</a>}
            addonAfter={<a>点击查看更多</a>}
            label="签约客户名称"
            tooltip="最长为 24 位"
            placeholder="请输入名称"
            rules={[{ required: true, message: '这是必填项' }]}
          />
          </ProFormGroup>
      </ProForm>
    </Wrapper>

  );
};

export default ConsumerInsertPage;