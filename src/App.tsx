import routes from "./routes";
import { RouterProvider } from "react-router-dom";
import { RecoilRoot } from "recoil";

const App = () =>{
  return(
    <RecoilRoot>
      <RouterProvider router={routes}/>
    </RecoilRoot>
  )
}

export default App
