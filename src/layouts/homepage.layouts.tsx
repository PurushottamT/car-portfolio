import { Outlet } from 'react-router-dom'
import Header from '../pages/components/header.component'

const HomePageLayouts = () => {
    return (
        <>
            <Header />
            <Outlet />
            <footer>
                <h2 className="text-center">THis is footer</h2>
            </footer>
        </>
    )
}
export default HomePageLayouts
