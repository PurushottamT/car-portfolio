interface scrollProps {
  background: string,
  scrollIndex: number,
  overlayDark: number
}

const CarPromotion: React.FC<scrollProps> = ({
  background, scrollIndex, overlayDark
}) => {
  return (
    <>
    <div className={`mt-20 relative bg-cover bg-center bg-no-repeat bg-fixed p-10`} style={{backgroundImage: `url('src/assets/images/rental.jpg)`}} data-scroll-index='1'
        data-overlay-dark='5'
        data-background='src/assets/images/rental.jpg'>
      <h1>Car is promoting bruh</h1>
    </div>
    </>
  )
}

export default CarPromotion