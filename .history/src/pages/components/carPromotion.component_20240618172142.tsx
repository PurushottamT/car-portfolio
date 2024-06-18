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
      <div>
        <h3 className={`text-customOrange text-sm`}>Explore</h3>
      </div>
    </div>
    </>
  )
}

export default CarPromotion