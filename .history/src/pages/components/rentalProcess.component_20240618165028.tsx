import { FaExclamation } from 'react-icons/fa6'
import TextBox from '../../components/cards.components'

const RentalProcess: React.FC = () => {
    return (
        <>
            <div className={`container mx-auto mt-20`}>
                <h3 className={`text-center text-sm text-customOrange`}>
                    Steps
                </h3>
                <h1 className={`text-center text-2xl`}>
                    Car Rental{' '}
                    <span className={`text-customOrange`}>Process</span>
                </h1>
                <div className={`mt-20 flex space-x-8`}>
                    <TextBox
                        title="Choose A Car"
                        text="View our range of cars, find your perfect car for the coming days."
                    />
                    <TextBox
                        title="Come In Contact"
                        text="Our advisor team is ready to help you with the booking process or any questions."
                    />
                    <TextBox
                        title="Enjoy Driving"
                        text="Receive the key and enjoy your car. We treat all our cars with respect."
                    />
                </div>
                <FaExclamation
                    className={`rounded-full bg-customOrange text-center`}
                />
            </div>
        </>
    )
}

export default RentalProcess
