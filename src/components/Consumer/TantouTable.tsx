import styled from "styled-components";
import { ActionType, EditableFormInstance, EditableProTable, ProColumns } from "@ant-design/pro-table";
import { TantouList, tantouListState, TorihikisakiTantou } from "../../types/consumer";
import { Form } from "antd";
import React, { useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { useAsyncEffect } from "ahooks";
import { ProFormInstance } from "@ant-design/pro-form";

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


const TantouTable = () => {

  const [tantouList, setTantouList] = useRecoilState<TantouList>(tantouListState);
  const [position, setPosition] = useState<"top" | "bottom" | "hidden">("bottom");

  const actionRef = useRef<ActionType>();
  const [editableKeys, setEditableRowKeys] = useState<React.Key[]>([]);
  const formRef = useRef<ProFormInstance<any>>();
  const [form] = Form.useForm();
  const editableFormRef = useRef<EditableFormInstance>();
  const [dataSource, setDataSource] = useState<readonly TorihikisakiTantou[]>([]);

  useAsyncEffect(async () => {
    setDataSource(tantouList.list);
  }, []);
  let i = 0;

  return (
    <Wrapper>

      <h2>総務担当者情報</h2>

      <EditableProTable<TorihikisakiTantou>
        style={{ width: 1000 }}
        rowKey="id"
        scroll={{
          x: true
        }}
        editableFormRef={editableFormRef}
        actionRef={actionRef}
        maxLength={10}
        name="table"
        columns={columns}

        recordCreatorProps={{
          record: (index) => {
            return { id: index + 1 };
          }
        }}
        editable={{
          type: "multiple",
          editableKeys,
          onChange: setEditableRowKeys
        }}
        value={tantouList.list}
        onChange={setDataSource}
      />
    </Wrapper>
  );
};
export default TantouTable;