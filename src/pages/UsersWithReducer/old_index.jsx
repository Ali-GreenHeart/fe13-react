import { useReducer } from "react"

const reducer = (state, action) => {
    if (action === 'add_user') {
        return state.concat(['ali', 'idris'])
    }
    else if (action === 'remove_user') {
        return []
    }
}

const UsersWithReducer = () => {
    const [state, dispatch] = useReducer(reducer, ['orxan'])

    return (
        <>
            <button onClick={() => {
                dispatch("add_user")
            }}>add user</button>


            <button onClick={() => {
                dispatch("remove_user")
            }}>remove user</button>

            {
                state.map((ad) => <p key={ad}>{ad}</p>)
            }


        </>
    )
}
export default UsersWithReducer
