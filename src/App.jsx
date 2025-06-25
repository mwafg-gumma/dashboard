import { Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from "react-router-dom"
import TablePage from "./components/Links/TablePage"
import Layout from "./components/MainLayout/Layout"
import HomePage from "./components/Home/HomePage"
import BillingPage from "./components/Links/BillingPage"
import ProfilePage from "./components/Links/ProfilePage"
import Sigin from "./components/Sigin"
import SingUp from "./components/SingUp"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="" element={<Layout />}>
    <Route index element={<HomePage />} />
    <Route path="/table" element={<TablePage />} />
    <Route path="/bill" element={<BillingPage />} />
    <Route path="/profile" element={<ProfilePage />} />
    <Route path="/SigIn" element={<Sigin />} />
    <Route path="/SigUp" element={<SingUp />} />
    </Route>
)
)

const App = () => {
  return <RouterProvider router={router} />
}

export default App

