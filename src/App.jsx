import Button from "./components/Button"
import Header from "./components/Header"
import Home from "./Home"

function App() {
    return (
        <>
            <Header title="welcome react!" />
            <Button
                title="click me"
                text="salam ay react!"
            />
            <Button
                title="click me2"
                text="react-a xos gelmisiniz!"
            />

            <Home />
        </>
    )
}
export default App;
