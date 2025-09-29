
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from "react-router-dom";
import TablePage from "./components/Links/TablePage";
import HomePage from "./components/Home/HomePage";
import BillingPage from "./components/Links/BillingPage";
import ProfilePage from "./components/Links/ProfilePage";
import Form from "./components/Form";
import SingUp from "./components/SingUp";
import DetailsDashoardPage from "./components/Links/DetailsDashoardPage";


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<HomePage />} />
      <Route path="/table" element={<TablePage />} />
      <Route path="/bill" element={<BillingPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/home" element={<DetailsDashoardPage />} />
      <Route path="/sigIn" element={<Form />} />
      <Route path="/sigUp" element={<SingUp />} />
    </>
  ),
  {
    basename: "/dashboard", 
  }
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

