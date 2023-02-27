import React from "react";
import { DatePicker, Form, Input, Radio, Select } from "antd";
import styled from "styled-components";
import FormItem from "antd/es/form/FormItem";
import TextArea from "antd/es/input/TextArea";


const Wrapper = styled.div`
`;


const BaseInfo = () => {


  // const user = useRecoilState()
  return (
    <Wrapper>
      <h2>基本情報</h2>
      <FormItem label="社員名（漢字）" style={{ marginBottom: 0 }}>
        <FormItem
          label="姓"
          name="year"
          // rules={[{ required: true }]}
          style={{ display: "inline-block", width: "calc(50% - 8px)" }}
        >
          <Input placeholder="" />
        </FormItem>
        <Form.Item
          label="名"
          name="名"
          // rules={[{ required: true }]}
          style={{ display: "inline-block", width: "calc(50% - 8px)", margin: "0 8px" }}
        >
          <Input placeholder="" />
        </Form.Item>
      </FormItem>

      <FormItem label="社員名（カタカナ）" style={{ marginBottom: 0 }}>
        <FormItem
          label="ｾｲ"
          name=""
          // rules={[{ required: true }]}
          style={{ display: "inline-block", width: "calc(50% - 8px)" }}
        >
          <Input />
        </FormItem>
        <Form.Item
          label="ﾒｲ"
          name=""
          // rules={[{ required: true }]}
          style={{ display: "inline-block", width: "calc(50% - 8px)", margin: "0 8px" }}
        >
          <Input placeholder="Input birth month" />
        </Form.Item>
      </FormItem>

      <FormItem label="社員名（英語）" style={{ marginBottom: 0 }}>
        <FormItem
          label="first name"
          name=""
          // rules={[{ required: true }]}
          style={{ display: "inline-block", width: "calc(50% - 8px)" }}
        >
          <Input />
        </FormItem>

        <Form.Item
          label="last name"
          name=""
          // rules={[{ required: true }]}
          style={{ display: "inline-block", width: "calc(50% - 8px)", margin: "0 8px" }}
        >
          <Input placeholder="Input birth month" />
        </Form.Item>

      </FormItem>
      <FormItem label="性别">
        <Radio.Group>
          <Radio value={1}>男</Radio>
          <Radio value={2}>女</Radio>
        </Radio.Group>
      </FormItem>

      <Form.Item label="誕生日">
        <DatePicker />
      </Form.Item>

      <Form.Item label="国籍">
        <Select />
      </Form.Item>

      <Form.Item label="出身地">
        <Input />
      </Form.Item>

      <FormItem label="配偶者有り無し">
        <Radio.Group>
          <Radio value={1}>有</Radio>
          <Radio value={2}>無</Radio>
        </Radio.Group>
      </FormItem>


      <h2>個人証明情報</h2>

      <Form.Item label="パスポート番号">
        <Input />
      </Form.Item>

      <Form.Item label="パスポート有効日">
        <DatePicker />
      </Form.Item>

      <Form.Item label="ビザ期間">
        <Select />
      </Form.Item>

      <Form.Item label="ビザ有効日">
        <DatePicker />
      </Form.Item>

      <Form.Item label="在留資格名称">
        <Select />
      </Form.Item>

      <Form.Item label="マイナンバー">
        <Input />
      </Form.Item>

      <Form.Item label="在留番号">
        <Input />
      </Form.Item>


      <h2>会社関連情報</h2>


      <Form.Item label="所属会社">
        <Select />
      </Form.Item>
      <Form.Item label="入社日">
        <DatePicker />
      </Form.Item>

      <Form.Item label="退社日">
        <DatePicker />
      </Form.Item>

      <Form.Item label="職業種類">
        <Select />
      </Form.Item>

      <Form.Item label="来日時期">
        <DatePicker />
      </Form.Item>

      <Form.Item label="備考" name="comment">
        <TextArea />
      </Form.Item>
    </Wrapper>
  );
};

export default BaseInfo;