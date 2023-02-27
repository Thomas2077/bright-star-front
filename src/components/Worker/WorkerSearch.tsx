import React, { useState } from "react";
import { Button, Col, Form, Input, Radio, Row, Select, Table } from "antd";
import styled from "styled-components";
import FormItem from "antd/es/form/FormItem";
import { getCompanyName, getJobCategory } from "../../request/settingApi";
import { useAsyncEffect, useRequest, useSetState } from "ahooks";
import { EmployeePreviewInfoVO, EmployeeQueryCommand, TgSetting } from "../../types/tgSetting";
import { getWorkerInfo } from "../../request/workInfo";

export interface CommonItem {
  id: number,
  name: string,
  visible: boolean
}

const Wrapper = styled.div`

`;
const bankTableTitle = [
  {
    title: "金融機関コード",
    dataIndex: "name",
    key: "name"
  },
  {
    title: "金融機関名",
    dataIndex: "age",
    key: "age"
  },
  {
    title: "支店名コード",
    dataIndex: "address",
    key: "address"
  },
  {
    title: "支店名",
    dataIndex: "address",
    key: "address"
  },
  {
    title: "口座種類",
    dataIndex: "address",
    key: "address"
  },
  {
    title: "名義人",
    dataIndex: "address",
    key: "address"
  }
];


const WorkerSearch = () => {
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

    console.log(workerInfo);
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
            <FormItem name="onDuty" initialValue ={true}
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
      <Table columns={bankTableTitle} />
    </Wrapper>
  );
};

export default WorkerSearch;