import axios from "axios"
import { useEffect, useState } from "react"
import "./index.css"
import PageContainer from "../PageContainer"
import { Link } from "react-router-dom"

const url = `https://jsonplaceholder.typicode.com/users`
const Users = () => {
    const [users, setUsers] = useState([])
    const [isDark, setIsDark] = useState(false)


    // [] -> dep list bos olanda mount-dur
    useEffect(() => {
        console.log('men geldim....')
    }, [])
    useEffect(() => {
        console.log('users-i deyisdin aa, ele bilme gormedim!')
    }, [users])
    useEffect(() => {
        console.log('gozlerinden mugayat ol!')
    }, [isDark])

    useEffect(() => {
        axios.get(url).then(({ data }) => {
            setUsers(data)
            let fromStorage = localStorage.getItem('isDark')
            setIsDark(fromStorage === "true" ? true : false)
        })
    }, [])


    return (
        <PageContainer>

            <div
                className={isDark ? "darkContainer" : null}
            >
                <button
                    onClick={() => {
                        let newIsDark = !isDark
                        setIsDark(newIsDark)
                        localStorage.setItem('isDark', newIsDark)
                    }}
                >{isDark ? '🌞' : '🌝'}</button>
                {
                    users.map((user) => {
                        return <Link to={`/users/${user.id}`} key={user.id}>
                            <h1>
                                <button
                                    onClick={() => {
                                        setUsers(users.filter((deletedUser) => deletedUser.id !== user.id))
                                    }}
                                >x</button>
                                {user.username}
                            </h1>
                        </Link>
                    })
                }
            </div>
        </PageContainer>
    )
}
export default Users
