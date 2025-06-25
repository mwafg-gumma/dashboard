

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
import Sigin from "./components/Sigin"
import SingUp from "./components/SingUp"
// ...existing imports...

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="*" element={<HomePage />} />
      <Route path="/table" element={<TablePage />} />
      <Route path="/bill" element={<BillingPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/signin" element={<Sigin />} />
      <Route path="/signup" element={<SingUp />} />
    </>
  )
)

const App = () => {
  return <RouterProvider router={router} />
}

export default App
