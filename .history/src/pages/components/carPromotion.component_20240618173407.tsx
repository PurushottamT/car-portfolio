import { FaPlay } from "react-icons/fa"
import { NavLink } from "react-router-dom"

interface scrollProps {
  background: string,
  scrollIndex: string,
  overlayDark: number
}

const CarPromotion: React.FC<scrollProps> = ({
  background, scrollIndex, overlayDark
}) => {
  return (
    <>
    <div className={`mt-20 relative bg-cover bg-center bg-no-repeat bg-fixed p-10`} style={{backgroundImage: `url(${background})`}} data-scroll-index={scrollIndex}
        data-overlay-dark={overlayDark}
        data-background={background}>
      <div className={`flex flex-col my-20 justify-center items-center`}>
        <h3 className={`text-customOrange text-sm`}>Explore</h3>
        <h1 className={`text-2xl font-bold text-white`}>Car <span className={`text-customOrange`}> Promotion</span> Video</h1>
        <NavLink to={"https://www.youtube.com/watch?v=1LxcTt1adfY"}>
            <FaPlay className={`border rounded-full border-customOrange text-7xl p-3 text-white hover:text-customOrange`} />
        </NavLink>
      </div>
    </div>
    </>
  )
}

export default CarPromotion