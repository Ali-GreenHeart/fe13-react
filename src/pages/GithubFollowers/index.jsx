import { useEffect, useReducer } from "react"
import PageContainer from "../../components/PageContainer"
import axios from "axios"
import styles from "./index.module.css"
import { _actions, githubFollowersReducer } from "./reducer"

const url = 'https://api.github.com/users/Ali-GreenHeart/followers'

const GithubFollowers = ({ }) => {
    const [followers, dispatch] = useReducer(githubFollowersReducer, [])

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
