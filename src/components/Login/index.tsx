import React from "react";
import { Content, Footer, Header } from "antd/es/layout/layout";
import { Layout, Menu } from "antd";
import styled from "styled-components";

const Wrapper = styled.div`


`;

export interface CommonItem {
  id: number,
  name: string,
  visible: boolean
}

export interface CommonItemList {
  itemList: CommonItem[];
}

const CommonItemBar = ({ itemList }: CommonItemList) => {

  // const user = useRecoilState()

  return (
    <Wrapper>
      <Layout className="layout">
        <Header>
          <div className="loginTime">
            2200002
          </div>
          <div className="userPermission">
            username
          </div>
        </Header>
        <Header>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            items={itemList.filter((item) => item.visible).map((item) => {
              return {
                key: item.id,
                label: item.name,
                keyPath: item.id
              };
            })}
            onClick={({ item, key, keyPath, domEvent }) => {
            }}
          />
        </Header>
        <Content className="content">
          <div className="site-layout-content">Content</div>
        </Content>
        <Footer className="footer">Ant Design ©2023</Footer>
      </Layout>
    </Wrapper>
  );
};

export default CommonItemBar;