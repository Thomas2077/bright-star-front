import React, { useState } from "react";
import { Button, Col, Form, Input, Radio, Row, Select, Space, Table } from "antd";
import styled from "styled-components";
import FormItem from "antd/es/form/FormItem";
import { getCompanyName, getJobCategory } from "../request/settingApi";
import { useAsyncEffect, useRequest, useSetState } from "ahooks";
import { EmployeePreviewInfoVO, EmployeeQueryCommand, TgSetting } from "../types/tgSetting";
import { getWorkerInfo } from "../request/workInfo";
import { Link } from "react-router-dom";

export interface CommonItem {
  id: number,
  name: string,
  visible: boolean
}

const Wrapper = styled.div`

`;
const bankTableTitle = [
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
    title: "入社日",
    dataIndex: "onBoardDate",
    key: "onBoardDate"
  },
  {
    title: "退社日",
    dataIndex: "offBoardDate",
    key: "offBoardDate"
  },
  {
    title: "職務経歴書",
    dataIndex: "3",
    key: "3",
    render:(()=>{return(
      <Button >
         登録
        <Link to = '/index'></Link>
      </Button>
    )})
  },
  {
    title: "編集",
    dataIndex: "2",
    key: "2",
    render:(()=>{return(
      <Space>
        <Space.Compact>
          <Button >更新<Link to = '/index'></Link></Button>
          <Button >削除<Link to = '/index'></Link></Button>
        </Space.Compact>
      </Space>
    )})
  }
];

const WorkerSearchPage = () => {
  const [previewData, setTableState] = useState<EmployeePreviewInfoVO[]>([]);
  const [jobCategoryList, setJobCategory] = useState<TgSetting[]>([]);
  const [{ companySelector }, setCompanyInfo] = useSetState<{ companySelector: TgSetting[] }>({ companySelector: [] });

  useAsyncEffect(async () => {
    const companyInfoList = await getCompanyName({ category1: "1" });
    setCompanyInfo({ companySelector: companyInfoList });

    const categoryList = await getJobCategory({ category1: "3", category2: "4" });
    setJobCategory(categoryList);
  }, []);

  const submit = async (command: EmployeeQueryCommand)=>{
    const workerInfo = await getWorkerInfo(command);
    setTableState(workerInfo)
  }

  return (
    <Wrapper>
      <Form
        name="basic"
        initialValues={{ remember: true }}
        onFinish={submit}
        // onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Row gutter={24}>
          <Col span={6}>
            <FormItem
              label="所属会社"
              name="companyId"
              // initialValue={}
              // rules={[{ required: true }]}
            >
              <Select
                placeholder="全て"
                options={
                  companySelector.length > 0 ?
                    companySelector.map(item => {
                      return { value: item.category2, label: item.value1 };
                    }) : []
                }
              />
            </FormItem>
          </Col>
          <Col span={6}>
            <FormItem
              label="社員名"
              name="workerName"
            >
              <Input />
            </FormItem>
          </Col>
        </Row>

        <Row gutter={24}>
          <Col span={6}>
            <FormItem
              label="職業種類"
              name="jobCategoryId"
            >
              <Select
                placeholder="ITエンジニア"
                options={jobCategoryList.map(item => {
                  return { value: item.category3, label: item.value1 };
                })}
              />
            </FormItem>
          </Col>
          <Col span={6}>
            <FormItem name="onDuty"
              rules={[{ required: true }]}
            >
              <Radio.Group>
                <Radio value="true"> 在職 </Radio>
                <Radio value="false"> 非在職 </Radio>
              </Radio.Group>
            </FormItem>
          </Col>
        </Row>

        <Row>
          <Col>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit">
                検索
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
      <Table columns={bankTableTitle} dataSource={previewData}/>
    </Wrapper>
  );
};

export default WorkerSearchPage;