import React from "react";
import { Form, Input } from "antd";
import styled from "styled-components";
import FormItem from "antd/es/form/FormItem";
import TextArea from "antd/es/input/TextArea";

const Wrapper = styled.div`
`;

export const ContactInfo = () => {


  return (

    <Wrapper>
      <Form
        name="basic"
        initialValues={{ remember: true }}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        // onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
        autoComplete="off"
        labelAlign="right"
      >
        <h2>連絡先</h2>
        <Form.Item label="住所">
          <Input />
        </Form.Item>
        <FormItem label="番地まで"> <Input /></FormItem>
        <FormItem label="マンション名・号室など"> <Input /></FormItem>
        <Form.Item label="最寄駅">
          <Input />
        </Form.Item>

        <Form.Item label="携帯電話">
          <Input />
        </Form.Item>

        <Form.Item label="メールアドレス">
          <Input />
        </Form.Item>
        <Form.Item label="WechatID">
          <Input />
        </Form.Item>
        <Form.Item label="LineID">
          <Input />
        </Form.Item>


        <h2>母国関連連絡先</h2>
        <Form.Item label="住所">
          <TextArea/>
        </Form.Item>
        <Form.Item label="緊急連絡先">
          <TextArea/>
        </Form.Item>


        <h2>学歴情報</h2>
        <Form.Item label="住所">
          <TextArea/>
        </Form.Item>
        <Form.Item label="緊急連絡先">
          <TextArea/>
        </Form.Item>



      </Form>
    </Wrapper>

  );
};
