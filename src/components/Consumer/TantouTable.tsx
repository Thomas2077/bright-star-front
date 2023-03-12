import styled from "styled-components";
import { ProColumns, ProTable } from "@ant-design/pro-table";
import { TorihikisakiTantou } from "../../types/consumer";
import { Button } from "antd";
import React, { useState } from "react";
import { useAsyncEffect } from "ahooks";
import { getTantou } from "../../request/consumerApi";

const Wrapper = styled.div`

`;
const columns: ProColumns<TorihikisakiTantou>[] = [
  {
    dataIndex: "torihikiId",
    valueType: "indexBorder",
    width: 48
  },
  {
    dataIndex: "To",
    title: "To"

  },
  {
    title: "CC",
    dataIndex: "CC"
  },
  {
    title: "姓",
    dataIndex: "firstName",
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
    dataIndex: "lastName",
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
    title: "メールアドレス",
    dataIndex: "mail"
  },
  {
    title: "所属",
    dataIndex: "syozoku"
  },
  {
    title: "役職",
    dataIndex: "yakusyoku"
  },
  {
    title: "個人電話番号",
    dataIndex: "tel"
  },
  {
    title: "備考",
    dataIndex: "bikou"
  }

];

const TantouTable = () =>{
  const[tanTouList, setTantouState] = useState<TorihikisakiTantou[]>()
  useAsyncEffect(async () => {
    const t =  await getTantou(0)
    setTantouState([...t]);
  },[])


  return(
    <Wrapper>
      <h2>総務担当者情報</h2>
      <ProTable<TorihikisakiTantou>
        style={{ width: 1000 }}
        columns={columns}
        dataSource={tanTouList}
        cardBordered
        rowKey={columns=>columns.tantouId}
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
  )
}
export default TantouTable;