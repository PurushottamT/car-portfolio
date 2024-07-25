import car1 from '../../../assets/images/service.jpeg'
const Hero = () => {
  return (
    <>
    <div className="flex h-[90svh] items-center justify-items-start bg-gray-950 opacity-85">
                <img
                    src={car1}
                    alt=""
                    className={`absolute top-0 h-full w-full`}
                />
                <div
                    className={`absolute top-0 h-screen w-screen bg-black opacity-40`}
                ></div>
                <div className="container z-10 mx-auto w-3/4">
                    <h3 className="z-10 text-customOrange">
                        Sherpa Vehicle Service
                    </h3>
                    <h1 className={`text-4xl font-bold text-white`}>
                        Our <span className={`text-customOrange`}>Services</span>
                    </h1>
                </div>
            </div>
    </>
  )
}
export default Hero