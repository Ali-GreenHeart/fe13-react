import { Route, Routes } from "react-router";
import Calculator from "./components/Calculator";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<div>this is ana sehife</div>} />
                <Route path="/about" element={<p>about</p>} />
                <Route path="/calculator" element={<Calculator />} />
            </Routes>
        </>
    )
}
export default App;
