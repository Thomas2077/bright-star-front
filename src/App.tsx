import CommonItemBar  from "./components/CommonItemBar";
import WorkerSearch from "./components/Worker/WorkerSearch";
import BaseInfo from "./components/Worker/BaseInfo";
import SalaryInfo from "./components/Worker/SalaryInfo";
import { ContactInfo } from "./components/Worker/ContactInfo";
import SkillExp from "./components/Worker/SkillExperience";
import router from "./Router";
import { RouterProvider } from "react-router-dom";

const App = () =>{
  return(
    <RouterProvider router={router}/>
  )
}

export default App
