import styled from "styled-components";
import { Col, Form, Input, Row } from "antd/lib";
import React from "react";
import FormItem from "antd/es/form/FormItem";
import TextArea from "antd/es/input/TextArea";

const Wrapper = styled.div`
`;

const ConsumerInfo = () => {


  return (
    <Wrapper>
      <h2>取引先登録</h2>

      <FormItem label="取引先名（全名）" name="1" wrapperCol={{span:5}}>
        <Input />
      </FormItem>

      <FormItem label="会社名（略名）" name="2">
        <Input />
      </FormItem>

      <FormItem label="住所" name="4">
        <Input />
      </FormItem>

      <Col>
        <FormItem label={"番地まで"} name="5">
          <Input />
        </FormItem>
      </Col>


      <FormItem label={"マンション名・号室など"} name="6">
        <Input />
      </FormItem>
      <FormItem label={"電話"} name="7">
        <Input />
      </FormItem>
      <FormItem label={"FAX"} name="8">
        <Input />
      </FormItem>
      <FormItem label={"ホームページ"} name="9">
        <Input />
      </FormItem>
      <FormItem label={"備考"} name="10">
        <TextArea />
      </FormItem>

      <h2>振込先情報</h2>
      <h2>総務担当者情報</h2>

    </Wrapper>
  );

};

export default ConsumerInfo;