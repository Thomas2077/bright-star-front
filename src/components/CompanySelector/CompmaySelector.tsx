import styled from "styled-components";
import { getCompanyName } from "../../request/settingApi";
import { useAsyncEffect, useSetState } from "ahooks";
import { TgSetting } from "../../types/tgSetting";
import { Select } from "antd";
import React from "react";
import FormItem from "antd/es/form/FormItem";

const Wrapper = styled.div`

`;

const CompanySelector = () =>{
  const [{ companySelector }, setCompanyInfo] = useSetState<{ companySelector: TgSetting[] }>({ companySelector: [] });

  useAsyncEffect(async () => {
    setCompanyInfo({ companySelector: await getCompanyName({ category1: "1" }) });
  },[])

  return(
    <Wrapper>

      <FormItem
        label="所属会社"
        name="honsya"
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
    </Wrapper>
  )
}

export default CompanySelector;