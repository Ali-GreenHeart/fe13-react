import Footer from "../Footer"
import Header from "../Header"

const PageContainer = ({ children }) => {
    return (
        <>
            <Header />
            <p>bread crumb</p>
            <div>{children}</div>
            <Footer />
        </>
    )
}
export default PageContainer
