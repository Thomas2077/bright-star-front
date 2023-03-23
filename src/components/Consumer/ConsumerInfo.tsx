import styled from "styled-components";
import { Input } from "antd/lib";
import React from "react";
import FormItem from "antd/es/form/FormItem";
import TextArea from "antd/es/input/TextArea";
import { ProFormRadio, ProFormText } from "@ant-design/pro-form";
import { Button, Checkbox, Select } from "antd";
import CompanySelector from "../CompanySelector/CompmaySelector";
import TantouTable from "./TantouTable";

const Wrapper = styled.div`

`;

const ConsumerInfo = () => {


  return (
    <Wrapper>
      <h2>取引先登録</h2>

      {/*<FormItem label="取引先名（全名）" name="torihikiNameAll"  wrapperCol={{ span: 4 }}>*/}
      {/*  <Input />*/}
      {/*</FormItem>*/}

      <FormItem label="会社名（略名）" name="torihikiNameRyaku" wrapperCol={{ span: 4 }}>
        <Input />
      </FormItem>

      <FormItem label="jyusyo1" name="4" wrapperCol={{ span: 2 }}>
        <Input />
      </FormItem>

      <ProFormText
        width={"md"}
        name="jyusyo2"
        addonAfter="番地まで"
        label=" "
        colon={false}
        placeholder={""}
      />

      <ProFormText
        width={"md"}
        name="jyusyo3"
        addonAfter="マンション名・号室など"
        label=" "
        colon={false}
        placeholder={""}
      />


      <FormItem label={"電話"} name="tel" wrapperCol={{ span: 3 }}>
        <Input />
      </FormItem>

      <FormItem label={"FAX"} name="fax" wrapperCol={{ span: 3 }}>
        <Input />
      </FormItem>

      <FormItem label={"ホームページ"} name="url" wrapperCol={{ span: 5 }}>
        <Input />
      </FormItem>

      <FormItem label={"備考"} name="bikou" wrapperCol={{ span: 8 }}>
        <TextArea />
      </FormItem>

      <h2>振込先情報</h2>



      <h2>請求設定</h2>
      <FormItem>
        <Checkbox name={"1"}>請求書の郵送</Checkbox>
        <Checkbox name={"2"}>特定ファイル名</Checkbox>
        <Checkbox name={"3"}>案件名請求</Checkbox>
        <Checkbox name={"5"}>納品書付き</Checkbox>
      </FormItem>

      <ProFormRadio.Group
        labelAlign={"left"}
        wrapperCol={{ offset: 1 }}
        labelCol={{ offset: 0 }}
        label="发票类型"
        name="invoiceType"
        initialValue="发票"
        options={["发票", "普票", "无票"]}
      />

      <ProFormRadio.Group
        labelAlign={"left"}
        wrapperCol={{ offset: 1 }}
        labelCol={{ offset: 0 }}
        label="发票类型"
        name="invoiceType1"
        initialValue="無し"
        options={["無し", "本体", "フォーマット"]}
      />

      <ProFormRadio.Group
        labelAlign={"left"}
        wrapperCol={{ offset: 1 }}
        labelCol={{ offset: 0 }}
        label="請求単位"
        name="invoiceType2"
        initialValue="普通"
        options={["普通", "単体別", "現場別", "職部別"]}
      />

      <FormItem label={"備考"} name="10" wrapperCol={{ span: 4 }}>
        <Select />
      </FormItem>

      <CompanySelector />


    </Wrapper>
  );

};

export default ConsumerInfo;