import React from "react";
import {
  createBrowserRouter,
} from "react-router-dom";
import WorkerSearch from "./components/Worker/WorkerSearch";

const routes = createBrowserRouter([
    {
      path: "/v1",
      // loader: ()=> (getWorkerSearchConfig()),
      element: <WorkerSearch />,
    }]
)




export default routes;
