import React from "react";
import { createBrowserRouter } from "react-router-dom";
import WorkerSearchPage from "./pages/WorkerSearchPage";
import WorkerInsertPage from "./pages/WorkerInsertPage";

const routes = createBrowserRouter([
  {
    path: "/worker/search",
    element: <WorkerSearchPage />
  },
  {
    path:"/worker/insert",
    element:<WorkerInsertPage/>
  }
  ]
);


export default routes;
