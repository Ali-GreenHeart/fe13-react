import { useContext } from "react"
import { FN_Context } from "../../context/FullNameContext"

const Footer = ({ }) => {

    const { email } = useContext(FN_Context)


    return (
        <div style={{ backgroundColor: 'red', margin: '20px 0' }}>
            <p>{email}</p>
            footer
        </div>
    )
}
export default Footer
