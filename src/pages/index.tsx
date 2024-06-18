import AboutSection from "./components/about.component";
import HomeBanner from "./components/home.banner.component";
import Rental from "./components/rental.component";
import CarSlider from "./components/slider.component";

const HomePage = () => {
  return (
    <>
      <HomeBanner />
      <AboutSection />
      <Rental
        scrollIndex={"1"}
        background={"src/assets/images/rental.jpg"}
        overlayDark={5}
      />
      <CarSlider />
    </>
  );
};
export default HomePage;
