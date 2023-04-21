import React from "react";
import { createBrowserRouter } from "react-router-dom";
import WorkerSearch from "./pages/WorkerSearch";
import WorkerInsert from "./pages/WorkerInsert";
import FreelancerPage from "./pages/FreelancerPage";
import ConsumerManager from "./pages/ConsumerManager";
import ConsumerInsert from "./pages/ConsumerInsert";
import ConsumerUpdate from "./pages/ConsumerUpdate";
import TABLE from "./components/Consumer/test";

const routes = createBrowserRouter([
    {
      path: "/worker/search",
      element: <WorkerSearch />
    },
    {
      path: "/worker/insert",
      element: <WorkerInsert />
    },
    {
      path: "/worker/freelancer",
      element: <FreelancerPage />
    },
    {
      path: "/consumer/manager",
      element: <ConsumerManager />
    },
    {
      path: "/consumer/insert",
      element: <ConsumerInsert />
    },
    {
      path: "/consumer/update/:id",
      element: <ConsumerUpdate />
      // element: <TABLE />
    }
  ]
);


export default routes;
