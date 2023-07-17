import { useEffect, useState } from "react"
import PageContainer from "../../components/PageContainer"
import axios from "axios"
import styles from "./index.module.css"

const url = 'https://api.github.com/users/Ali-GreenHeart/followers'

const GithubFollowers = ({ }) => {
    const [followers, setFollowers] = useState([])


    useEffect(() => {
        axios.get(url).then(({ data }) => {
            setFollowers(data)
        })
    }, [])

    return (
        <PageContainer>
            <div className={styles.pageContainer}>
                {
                    followers.map((follower) => {
                        return <div className={styles.container}>
                            <img src={follower.avatar_url} alt="" />
                            <a target="_blank" href={follower.html_url}> {follower.login} </a>
                        </div>
                    })
                }
            </div>
        </PageContainer>
    )
}
export default GithubFollowers
