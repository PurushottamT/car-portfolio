import { FaPlay } from "react-icons/fa"

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
      <div className={`flex flex-col mt-20 justify-center items-center`}>
        <h3 className={`text-customOrange text-sm`}>Explore</h3>
        <h1 className={`text-2xl font-bold text-white`}>Car <span className={`text-customOrange`}> Promotion</span> Video</h1>
        <FaPlay className={`border rounded-full border-customOrange text-3xl p-1`} />
      </div>
    </div>
    </>
  )
}

export default CarPromotion