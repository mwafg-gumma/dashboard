
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from "react-router-dom"
import TablePage from "./components/Links/TablePage"
import MainLayout from "./components/Main/MainLayout"
import HomePage from "./components/Home/HomePage"
import BillingPage from "./components/Links/BillingPage"
import ProfilePage from "./components/Links/ProfilePage"
import Form from "./components/Form"
import SingUp from "./components/SingUp"

console.log('homepage')

const router = createBrowserRouter(
  createRoutesFromElements(
    <>

    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/table" element={<TablePage />} />
      <Route path="/bill" element={<BillingPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/signin" element={<Form />} />
      <Route path="/signup" element={<SingUp />} />
    </Route>
    </>
  ),
  {
    basename: import.meta.env.BASE_URLn
  }
)

const App = () => {
  return <RouterProvider router={router} />
}

export default App
