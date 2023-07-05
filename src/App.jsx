import { useState } from "react";
import Circle from "./components/Circle";

function App() {
    const [showCircle, setShowCircle] = useState(false)
    return (
        <>
            <button onClick={() => setShowCircle(!showCircle)}>toggle</button>
            {showCircle && <Circle />}
        </>
    )
}
export default App;
