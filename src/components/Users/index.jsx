import axios from "axios"
import { useState } from "react"
import "./index.css"

const url = `https://jsonplaceholder.typicode.com/users`
let componentYarandimi = false
const Users = () => {
    const [users, setUsers] = useState([])
    const [isDark, setIsDark] = useState(false)


    if (componentYarandimi === false) {
        axios.get(url).then(({ data }) => {
            setUsers(data)
            componentYarandimi = true
            let fromStorage = localStorage.getItem('isDark')
            setIsDark(fromStorage === "true" ? true : false)
        })
    }



    return (
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
                    return <div key={user.id}>
                        <h1>
                            <button
                                onClick={() => {
                                    setUsers(users.filter((deletedUser) => deletedUser.id !== user.id))
                                }}
                            >x</button>
                            {user.username}
                        </h1>
                    </div>
                })
            }
        </div>
    )
}
export default Users
