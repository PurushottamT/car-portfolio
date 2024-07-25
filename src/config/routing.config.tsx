import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import HomePageLayouts from '../layouts/homepage.layouts'
import HomePage from '../pages'
import About from '../pages/about'
import Services from '../pages/services'

const Routing = () => {
    return (
        <>
            <ToastContainer />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePageLayouts />}>
                        <Route index element={<HomePage />} />
                        <Route path="/about-us" element={<About />} />
                        <Route path='/services' element={<Services />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Routing
