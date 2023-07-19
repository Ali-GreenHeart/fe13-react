import { Route, Routes } from "react-router"
import Home from "../pages/Home"
import About from "../pages/About"
import Calculator from "../components/Calculator"
import UserSingle from "../pages/UserSingle"
import UsersWithReducer from "../pages/UsersWithReducer"
import CounterWithReducer from "../components/CounterWithReducer"
import GithubFollowers from "../pages/GithubFollowers"
import CounterWithRedux from "../pages/CounterWithRedux"
import MaterialUI from "../pages/MaterialUI"
import React, { Suspense } from "react"

// code splitting
const Users = React.lazy(() => import("../components/Users"))

const Routing = () => {
    return (
        <>
            <Suspense fallback={<p>--- loading.... ---</p>}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/calculator" element={<Calculator />} />
                    <Route path="/users" element={<Users />} />
                    <Route path="/counter-with-reducer" element={<CounterWithReducer />} />
                    <Route path="/counter-with-redux" element={<CounterWithRedux />} />
                    <Route path="/material-ui" element={<MaterialUI />} />
                    <Route path="/github-followers" element={<GithubFollowers />} />
                    <Route path="/users-with-reducer" element={<UsersWithReducer />} />
                    <Route path="/users/:id" element={<UserSingle />} />
                </Routes>
            </Suspense>
        </>
    )
}
export default Routing
