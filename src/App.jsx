import { Route, Routes } from "react-router";
import Calculator from "./components/Calculator";
import Home from "./pages/Home";
import About from "./pages/About";
import Users from "./components/Users";
import Header from "./components/Header";

function App() {
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
export default App;
