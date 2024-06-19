import { FaPlay } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

interface scrollProps {
    background: string
    scrollIndex: string
    overlayDark: number
}

const CarPromotion: React.FC<scrollProps> = ({
    background,
    scrollIndex,
    overlayDark,
}) => {
    return (
        <>
            <div
                className={`relative mt-20 bg-cover bg-fixed bg-center bg-no-repeat p-10`}
                style={{ backgroundImage: `url(${background})` }}
                data-scroll-index={scrollIndex}
                data-overlay-dark={overlayDark}
                data-background={background}
            >
                <div
                    className={`my-20 flex flex-col items-center justify-center`}
                >
                    <h3 className={`text-sm text-customOrange`}>Explore</h3>
                    <h1 className={`text-2xl font-bold text-white`}>
                        Car{' '}
                        <span className={`text-customOrange`}> Promotion</span>{' '}
                        Video
                    </h1>
                    <NavLink to={'https://www.youtube.com/watch?v=1LxcTt1adfY'}>
                        <FaPlay
                            className={`rounded-full border border-customOrange p-3 text-7xl text-white hover:text-customOrange`}
                        />
                    </NavLink>
                </div>
            </div>
        </>
    )
}

export default CarPromotion
