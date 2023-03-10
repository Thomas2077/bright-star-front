import styled from "styled-components";
import { Button, Form, Input, Select, Space, Table } from "antd";
import FormItem from "antd/es/form/FormItem";
import React, { useState } from "react";
import { EmployeePreviewInfoVO, EmployeeQueryCommand, TgSetting } from "../types/tgSetting";
import { useAsyncEffect } from "ahooks";
import { getCompanyName } from "../request/settingApi";
import { getWorkerInfo } from "../request/workInfo";

const Wrapper = styled.div`

`;
const title = [
  {
    title: "所属会社",
    dataIndex: "companyName",
    key: "companyName"
  },
  {
    title: "社員名",
    dataIndex: "workerName",
    key: "workerName"
  },
  {
    title: "性別",
    dataIndex: "genderStr",
    key: "genderStr"
  },
  {
    title: "職業種類",
    dataIndex: "jobCategory",
    key: "jobCategory"
  },

  {
    title: "編集",
    dataIndex: "x",
    key: "x",
    // render:(() =>(
    //   <Button>選択<Link to = '/index'></Link></Button>
    // ))
  }

  ];
const FreelancerPage = () => {
  const [companyList, setCompanyState] = useState<TgSetting[]>([]);
  const [tableDate, setTableState] = useState<EmployeePreviewInfoVO[]>([]);
  useAsyncEffect(async () => {
    setCompanyState(await getCompanyName({ category1: "1" }));
  }, []);

  const submit = async (command: EmployeeQueryCommand) => {
    command.onDuty = "true";
    const workerInfo = getWorkerInfo(command);
    setTableState( await workerInfo)
  };

  return (
    <Wrapper>
      <Form
        name="basic"
        onFinish={submit}
        autoComplete="off"
      >

        <FormItem label="所属会社" name="companyId">
          <Select options={companyList.map(company => ({ value: company.category2, label: company.value1 }))} />
        </FormItem>

        <FormItem label="社員名" name="workerName">
          <Input />

        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit">検索</Button>
        </FormItem>

        <FormItem>
          <Table columns={title} dataSource={tableDate}/>
        </FormItem>
      </Form>

    </Wrapper>
  );
};

export default FreelancerPage;