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
                <h1>Car is promoting bruh</h1>
            </div>
        </>
    )
}

export default CarPromotion
