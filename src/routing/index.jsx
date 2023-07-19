import { Route, Routes } from "react-router"
import Home from "../pages/Home"
import About from "../pages/About"
import Calculator from "../components/Calculator"
import Users from "../components/Users"
import UserSingle from "../pages/UserSingle"
import UsersWithReducer from "../pages/UsersWithReducer"
import CounterWithReducer from "../components/CounterWithReducer"
import GithubFollowers from "../pages/GithubFollowers"
import CounterWithRedux from "../pages/CounterWithRedux"

const Routing = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/calculator" element={<Calculator />} />
                <Route path="/users" element={<Users />} />
                <Route path="/counter-with-reducer" element={<CounterWithReducer />} />
                <Route path="/counter-with-redux" element={<CounterWithRedux />} />
                <Route path="/github-followers" element={<GithubFollowers />} />
                <Route path="/users-with-reducer" element={<UsersWithReducer />} />
                <Route path="/users/:id" element={<UserSingle />} />
            </Routes>
        </>
    )
}
export default Routing
