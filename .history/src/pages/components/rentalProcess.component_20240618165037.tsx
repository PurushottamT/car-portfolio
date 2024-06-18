import { FaExclamation } from "react-icons/fa6"
import TextBox from "../../components/cards.components"

const RentalProcess: React.FC = () => {
   return (
    <>
    <div className={`container mx-auto mt-20`}>
        <h3 className={`text-sm text-customOrange text-center`}>Steps</h3>
        <h1 className={`text-2xl text-center`}>Car Rental <span className={`text-customOrange`}>Process</span></h1>
        <div className={`flex space-x-8 mt-20`}>
          <TextBox title="Choose A Car" text="View our range of cars, find your perfect car for the coming days." />
          <TextBox title="Come In Contact" text="Our advisor team is ready to help you with the booking process or any questions." />
          <TextBox title="Enjoy Driving" text="Receive the key and enjoy your car. We treat all our cars with respect." />
        </div>
        <FaExclamation className={`text-center rounded-full bg-customOrange p-1`} />
    </div>
    </>
   )
}

export default RentalProcess