import { Outlet } from 'react-router-dom'
import Header from '../pages/components/header.component'
import Footer from '../pages/footer'

const HomePageLayouts = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}
export default HomePageLayouts
