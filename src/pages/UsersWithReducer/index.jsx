import axios from "axios"
import { useEffect, useReducer } from "react"
import { v4 as genId } from "uuid"

const url = 'https://jsonplaceholder.typicode.com/users'

const usersReducer = (state, action) => {
    switch (action.type) {
        case "get_users":
            return action.payload;
        case 'remove_user':
            return state.filter((user) => user.id !== action.payload)
        case 'edit_user':
            return state.map((user) => {
                if (user.id === action.payload) {
                    const newUsername = prompt('enter new user name: ', user.username)
                    return { ...user, username: newUsername }
                }
                return user;
            })
        case 'add_user':
            const username = prompt('enter new username: ')
            const id = genId()
            return state.concat({ id, username })
        case 'remove_first':
            return state.slice(1)
        default:
            throw new Error('ay qardas, bele action tip-i yoxdur!')
    }
}

const UsersWithReducer = ({ }) => {
    const [state, dispatch] = useReducer(usersReducer, [])

    useEffect(() => {
        axios.get(url).then(({ data }) => {
            dispatch({ type: "get_users", payload: data })
        })
    }, [])


    return (
        <>
            <button onClick={() => dispatch({ type: 'add_user' })}>add user</button>
            <button onClick={() => dispatch({ type: 'remove_first' })}>remove first user</button>

            {
                state.map((user) => {
                    return <div key={user.id}>
                        <p>{user.username}
                            <button
                                onClick={() => {
                                    dispatch({ type: "remove_user", payload: user.id })
                                }}>
                                x
                            </button>
                            <button
                                onClick={() => dispatch({ type: 'edit_user', payload: user.id })}>
                                edit
                            </button>
                        </p>
                    </div>
                })
            }

        </>
    )
}
export default UsersWithReducer
