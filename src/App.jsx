
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from "react-router-dom"
import TablePage from "./components/Links/TablePage"
import HomePage from "./components/Home/HomePage"
import BillingPage from "./components/Links/BillingPage"
import ProfilePage from "./components/Links/ProfilePage"
import Form from "./components/Form"
import SingUp from "./components/SingUp"

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route index element={<HomePage />} />
      <Route path="/" element={<TablePage />} />
      <Route path="/table" element={<TablePage />} />
      <Route path="/bill" element={<BillingPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/SigIn" element={<Form />} />
      <Route path="/SigUp" element={<SingUp />} />
    </>
  )
)

const App = () => {
  return <RouterProvider router={router} />
}

export default App
