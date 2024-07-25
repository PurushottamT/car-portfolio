import { FaWhatsapp } from 'react-icons/fa6'
import { IoMdArrowUp } from 'react-icons/io'

interface backgroundImage {
    background: string
}

const InterestRent: React.FC<backgroundImage> = ({ background }) => {
    return (
        <>
            <div
                className={`relative mt-20 bg-cover bg-fixed bg-center bg-no-repeat p-10`}
                style={{ backgroundImage: `url(${background})` }}
                data-background={background}
            >
                <div
                    className={`my-20 flex flex-col items-center justify-center`}
                >
                    <h3 className={`text-sm text-customOrange`}>
                        RENT YOUR CAR
                    </h3>
                    <h1 className={`text-3xl font-bold text-white`}>
                        Interested in Renting?
                    </h1>
                    <h3 className={`text-xs text-white`}>
                        Don't hesitate and send us a message.
                    </h3>
                    <div className={`mt-10 flex space-x-4`}>
                        <button
                            className={`rounded-3xl bg-customOrange px-4 py-4 text-white hover:-translate-y-2 hover:bg-white hover:text-black`}
                        >
                            <FaWhatsapp
                                className={`inline-block text-green-400`}
                            />{' '}
                            <span className={`inline-block`}>WhatsApp</span>
                        </button>
                        <button
                            className={`rounded-3xl bg-white px-4 py-4 text-black hover:-translate-y-2 hover:bg-customOrange hover:text-white`}
                        >
                            <IoMdArrowUp className={`inline-block rotate-45`} />{' '}
                            <span className={`inline-block`}>Rent Now</span>
                        </button>{' '}
                    </div>
                </div>
            </div>
        </>
    )
}

export default InterestRent
