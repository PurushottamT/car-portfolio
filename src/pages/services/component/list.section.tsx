import ServiceComponent from "../../../components/service.components"
import car1 from "../../../assets/images/corporate.jpeg"
import car2 from "../../../assets/images/airport.jpeg"

const List = () => {
  return (
    <>
    <div className="grid grid-cols-3 gap-8 container mx-auto w-3/ mt-20">
      <ServiceComponent list={1} image={car1} title={"Corporate Car Rental"} />
      <ServiceComponent list={2} image={car2} title={"Airport Pick and Drop"} />
    </div>
    </>
  )
}
export default List