import React from "react";
import { Content, Footer, Header } from "antd/es/layout/layout";
import { Breadcrumb, Form, Layout, Menu, Select } from "antd";
import styled from "styled-components";
import FormItem from "antd/es/form/FormItem";

export interface CommonItem {
  id: number,
  name: string,
  visible: boolean
}


const Wrapper = styled.div`


`;


const WorkerSearch = () => {

  // const user = useRecoilState()

  return (
    <Wrapper>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        // onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <FormItem
          label="所属会社"
          name="companyInfo"
          rules={[{required:true}]}
        >
          <Select
            placeholder='全て'
          >

          </Select>

        </FormItem>
      </Form>

    </Wrapper>
  );
};

export default WorkerSearch;