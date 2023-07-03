import axios from "axios"
import { useState } from "react"

const url = `https://jsonplaceholder.typicode.com/users`
let componentYarandimi = false
const Users = () => {
    const [users, setUsers] = useState([])

    if (componentYarandimi === false) {
        axios.get(url).then(({ data }) => {
            setUsers(data)
            componentYarandimi = true
        })
    }


    return (
        <>
            {
                users.map((user) => {
                    return <div key={user.id}>
                        <h1>{user.username}</h1>
                        <p>{user.name}</p>
                    </div>
                })
            }
        </>
    )
}
export default Users
