import TextBox from "../../components/cards.components"

const RentalProcess: React.FC = () => {
   return (
    <>
    <div className={`container mx-auto mt-20`}>
        <h3 className={`text-sm text-customOrange text-center`}>Steps</h3>
        <h1 className={`text-2xl text-center`}>Car Rental <span className={`text-customOrange`}>Process</span></h1>
        <div>
        <TextBox title="Choose A Car" text="View our range of cars, find your perfect car for the coming days." />
        <TextBox title="Choose A Car" text="View our range of cars, find your perfect car for the coming days." />
        <TextBox title="Choose A Car" text="View our range of cars, find your perfect car for the coming days." />
        </div>
    </div>
    </>
   )
}

export default RentalProcess