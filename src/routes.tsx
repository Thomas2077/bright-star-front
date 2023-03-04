import React from "react";
import { createBrowserRouter } from "react-router-dom";
import WorkerSearchPage from "./pages/WorkerSearchPage";
import WorkerInsertPage from "./pages/WorkerInsertPage";
import FreelancerPage from "./pages/FreelancerPage";
import ConsumerManager from "./pages/ConsumerManager";

const routes = createBrowserRouter([
  {
    path: "/worker/search",
    element: <WorkerSearchPage />
  },
  {
    path:"/worker/insert",
    element:<WorkerInsertPage/>
  },
  {
    path:"/worker/freelancer",
    element:<FreelancerPage/>
  },
  {
    path:"/consumer/manager",
    element:<ConsumerManager/>
  }
  ]
);


export default routes;
