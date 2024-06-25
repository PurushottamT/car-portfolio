import { NavLink } from 'react-router-dom'

interface blogType {
  date: number,
  month: string,
  image: string,
  title: string,
  subTitle?: string
}

const BlogComponent: React.FC<blogType> = ({date, month, image, title, subTitle}) => {
  return (
    <>
     <div className={`relative mb-4 overflow-hidden`}>
                <img
                    src={image}
                    alt=""
                    className={`rounded-3xl brightness-75 filter transition-transform hover:scale-105`}
                />
                <div
                    className={`absolute bottom-0 right-2 pb-3 pl-28 pr-10 text-right`}
                >
                    <h3 className={`text-sm text-customOrange`}>{subTitle}</h3>
                    <h2 className={`text-2xl text-white`}>
                       {title}
                    </h2>
                </div>
                <div
                    className={`absolute bottom-0 left-0 h-[100px] w-[100px] rounded-tr-[45px] bg-white text-center leading-[100px]`}
                >
                    <NavLink
                        to={'#'}
                        className={`absolute bottom-4 left-4 right-4 top-4 rounded-full text-center text-white`}
                    >
                        <div
                            className={`h-[70px] w-[70px] rounded-full border border-customOrange bg-customOrange text-sm leading-loose text-black`}
                        >
                            <i className={`align-bottom font-light`}>
                                <span
                                    className={`align-bottom text-xl font-semibold leading-4`}
                                >
                                    {date}
                                </span>{' '}
                                <br />
                                <i>{month}</i>
                            </i>
                        </div>
                    </NavLink>
                    <div
                        className={`shape-top-left absolute -left-[1px] -top-6 -rotate-90`}
                    >
                        <svg
                            viewBox="0 0 11 11"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className={`h-6 w-6`}
                        >
                            <path
                                d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"
                                fill="#ffffff"
                            ></path>
                        </svg>
                    </div>
                    <div
                        className={`shape-bottom-right absolute -bottom-[1px] -right-6 -rotate-90`}
                    >
                        <svg
                            viewBox="0 0 11 11"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className={`h-6 w-6`}
                        >
                            <path
                                d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"
                                fill="#ffffff"
                            ></path>
                        </svg>
                    </div>
                </div>
            </div>
    </>
  )
}
export default BlogComponent