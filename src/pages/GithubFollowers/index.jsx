import { useEffect, useReducer, useState } from "react"
import PageContainer from "../../components/PageContainer"
import axios from "axios"
import styles from "./index.module.css"
import { v4 } from 'uuid'

const url = 'https://api.github.com/users/Ali-GreenHeart/followers'

const _actions = {
    get_followers: 0,
    delete_follower: 1,
    edit_follower: 2,
    add_follower: 3
}

const reducer = (state, action) => {
    switch (action.type) {
        case _actions.get_followers:
            return action.payload;
        case _actions.delete_follower:
            return state.filter((follower) => follower.id !== action.payload)
        case _actions.edit_follower:
            return state.map((follower) => {
                if (follower.id === action.payload.id) {
                    return { ...follower, login: prompt('enter new name: ', follower.login) }
                }
                return follower;
            })
        case _actions.add_follower:
            return state.concat({
                id: v4(),
                login: prompt('enter follower name'),
                html_url: prompt('enter follower github url'),
                avatar_url: prompt("enter follower image")
            })
        default:
            throw new Error("ay qa, action adini sehv yazmisan!")
    }
}

const GithubFollowers = ({ }) => {
    const [followers, dispatch] = useReducer(reducer, [])


    // IIFE
    useEffect(() => {
        (async () => {
            const { data } = await axios.get(url)
            dispatch({ type: _actions.get_followers, payload: data })
        })()
    }, [])

    return (
        <PageContainer>
            <button
                onClick={() => dispatch({ type: _actions.add_follower })}
            >add follower</button>
            <div className={styles.pageContainer}>
                {
                    followers.map((follower) => {
                        return <div className={styles.container} key={follower.id}>
                            <img src={follower.avatar_url} alt="" />
                            <a target="_blank" href={follower.html_url}> {follower.login} </a>
                            <button
                                onClick={() => {
                                    dispatch({ type: _actions.delete_follower, payload: follower.id })
                                }}
                            >delete user</button>
                            <button
                                onClick={() => {
                                    dispatch({ type: _actions.edit_follower, payload: follower })
                                }}
                            >edit user</button>
                        </div>
                    })
                }
            </div>
        </PageContainer>
    )
}
export default GithubFollowers
