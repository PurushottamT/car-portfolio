// interface scrollProps {
//   background: string,
//   scrollIndex: number,
//   overlayDark: number
// }

const CarPromotion: React.FC = () => {
    return (
        <>
            <div
                className={`relative mt-20 bg-cover bg-fixed bg-center bg-no-repeat p-10`}
                style={{
                    backgroundImage: `url('src/assets/images/rental.jpg)`,
                }}
                data-scroll-index="1"
                data-overlay-dark="5"
                data-background="src/assets/images/rental.jpg"
            >
                <h1>Car is promoting bruh</h1>
            </div>
        </>
    )
}

export default CarPromotion
