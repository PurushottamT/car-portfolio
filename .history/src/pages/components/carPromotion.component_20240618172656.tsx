import { FaPlay } from 'react-icons/fa'

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
                    className={`mt-20 flex flex-col items-center justify-center`}
                >
                    <h3 className={`text-sm text-customOrange`}>Explore</h3>
                    <h1 className={`text-2xl font-bold text-white`}>
                        Car{' '}
                        <span className={`text-customOrange`}> Promotion</span>{' '}
                        Video
                    </h1>
                    <FaPlay
                        className={`rounded-full border border-customOrange`}
                    />
                </div>
            </div>
        </>
    )
}

export default CarPromotion
