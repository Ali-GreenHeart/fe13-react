import { Route, Routes } from "react-router"
import Home from "../pages/Home"
import About from "../pages/About"
import Calculator from "../components/Calculator"
import Users from "../components/Users"

const Routing = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/calculator" element={<Calculator />} />
                <Route path="/users" element={<Users />} />
            </Routes>
        </>
    )
}
export default Routing
