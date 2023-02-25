import React from "react";
import {
  BrowserRouter,
  BrowserRouter as Router, createBrowserRouter, createRoutesFromElements,
  Route, Routes, useLoaderData
} from "react-router-dom";
import styled from "styled-components";
import WorkerSearch from "./components/Worker/WorkerSearch";
import { Switch } from "antd";
import { getCompanyName } from "./request/settingApi";
import { settingParam } from "./types/tgSetting";


const Layout = styled.div`
  
  
`
const router = createBrowserRouter([
    {
      path: "/v1",
      loader: ()=>{return getCompanyName({ category1: "1" })},
      element: <WorkerSearch />,
    }]
)




export default router;
