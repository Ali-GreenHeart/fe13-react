import { useEffect, useState } from "react"
import { useParams } from "react-router"
import axios from "axios"
import PageContainer from "../../components/PageContainer"


const url = `https://jsonplaceholder.typicode.com/users/`

const UserSingle = ({ }) => {
    const [user, setUser] = useState({})
    const { id } = useParams()


    useEffect(() => {
        axios.get(url + id).then(({ data }) => {
            setUser(data)
        })
    }, [])

    return (
        <PageContainer>
            <div>
                <h1>User Name: {user.name}</h1>
                <h1>UserName: {user.username}</h1>
                <h1>User SurName: {user.surname}</h1>
            </div>
        </PageContainer>
    )
}
export default UserSingle
