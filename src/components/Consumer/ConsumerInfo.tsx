import styled from "styled-components";
import { Input } from "antd/lib";
import React from "react";
import FormItem from "antd/es/form/FormItem";
import TextArea from "antd/es/input/TextArea";
import { ProFormText } from "@ant-design/pro-form";
import { ProColumns, ProTable } from "@ant-design/pro-table";
import { TorihikisakiTantou } from "../../types/consumer";
import { Button } from "antd";

const Wrapper = styled.div`

`;

const ConsumerInfo = () => {

  const columns: ProColumns<TorihikisakiTantou> = [
    {
      title: "To",
      dataIndex: "1",
    },
    {
      title: "CC",
      dataIndex: "1",
    },
    {
      title: "姓",
      dataIndex: "1",
      formItemProps: {
        rules: [
          {
            required: true,
            message: "必須"
          }
        ]
      }
    },
    {
      title: "名",
      dataIndex: "1",
      formItemProps: {
        rules: [
          {
            required: true,
            message: "必須"
          }
        ]
      }
    },

  ];


  return (
    <Wrapper>
      <h2>取引先登録</h2>

      <FormItem label="取引先名（全名）" name="1" wrapperCol={{ span: 4 }}>
        <Input />
      </FormItem>

      <FormItem label="会社名（略名）" name="2" wrapperCol={{ span: 4 }}>
        <Input />
      </FormItem>

      <FormItem label="住所" name="4" wrapperCol={{ span: 2 }}>
        <Input />
      </FormItem>

      <ProFormText
        width={"md"}
        name="name"
        addonAfter="番地まで"
        label=" "
        colon={false}
        placeholder={""}
      />

      <ProFormText
        width={"md"}
        name="name"
        addonAfter="マンション名・号室など"
        label=" "
        colon={false}
        placeholder={""}
      />


      <FormItem label={"電話"} name="7" wrapperCol={{ span: 3 }}>
        <Input />
      </FormItem>
      <FormItem label={"FAX"} name="8" wrapperCol={{ span: 3 }}>
        <Input />
      </FormItem>
      <FormItem label={"ホームページ"} name="9" wrapperCol={{ span: 5 }}>
        <Input />
      </FormItem>
      <FormItem label={"備考"} name="10" wrapperCol={{ span: 8 }}>
        <TextArea />
      </FormItem>

      <h2>振込先情報</h2>

      <h2>総務担当者情報</h2>

      <ProTable<TorihikisakiTantou>

        columns={columns}
        cardBordered
        toolbar={{

          actions: [
            <Button
              key="primary"
              type="primary"
              onClick={() => {
                alert("add");
              }}
            >
              新規行追加
            </Button>,
            <Button
              key="primary"
              type="primary"
              onClick={() => {
                alert("add");
              }}
            >
              最後行削除
            </Button>
          ]
        }}
        search={false}
      />

    </Wrapper>
  );

};

export default ConsumerInfo;