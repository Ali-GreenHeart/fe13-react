import { useEffect, useReducer } from "react"
import PageContainer from "../../components/PageContainer"
import axios from "axios"
import styles from "./index.module.css"
import { _actions, githubFollowersReducer } from "./reducer"
import Follower from "./Follower"

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
                    followers.map((follower) => <Follower
                        key={follower.id}
                        follower={follower}
                        dispatch={dispatch}
                        styles={styles}
                    />
                    )
                }
            </div>
        </PageContainer>
    )
}
export default GithubFollowers
