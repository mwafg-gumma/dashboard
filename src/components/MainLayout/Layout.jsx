import { Outlet } from "react-router-dom"
import SideDashboard from "../SideDashboard"
const Layout = () => {
    return (
    <>
    {/* <SideDashboard /> */}
    <Outlet />
    </>
)
}

export default Layout
