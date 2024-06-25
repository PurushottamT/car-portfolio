import AboutSection from './components/about.component'
import Blog from './components/blog.page.component'
import CarPromotion from './components/carPromotion.component'
import HomeBanner from './components/home.banner.component'
import Rental from './components/rental.component'
// import RentalProcess from "./components/rentalProcess.component";
import CarSlider from './components/slider.component'
import Testimonial from './components/testimonials.component'

const HomePage = () => {
    return (
        <>
            <HomeBanner />
            <AboutSection />
            <Rental
                scrollIndex={'1'}
                background={'src/assets/images/rental.jpg'}
                overlayDark={5}
            />
            <CarSlider />
            {/* <RentalProcess/> */}
            <CarPromotion
                scrollIndex={'1'}
                background={'src/assets/images/1.jpg'}
                overlayDark={5}
            />
            <Testimonial />
            <Blog />
        </>
    )
}
export default HomePage
