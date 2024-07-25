import car1 from '../../assets/images/7.jpg'
import car2 from '../../assets/images/8.jpg'
import car3 from '../../assets/images/9.jpg'
import car4 from '../../assets/images/11.jpg'
import car5 from '../../assets/images/12.jpg'
import ImageSlider from './imageSlider.component'

type Car = {
    name: string
    image: string
    seats: number
    transmission: string
    bags: number
    age: number
    price: number
}

const cars: Car[] = [
    {
        name: 'Lamborghini Urus',
        image: car1,
        seats: 4,
        transmission: 'Auto',
        bags: 2,
        age: 25,
        price: 500,
    },
    {
        name: 'Aston Martin DBX',
        image: car2,
        seats: 2,
        transmission: 'Auto',
        bags: 2,
        age: 25,
        price: 1000,
    },
    {
        name: 'Bugatti Mistral W16',
        image: car3,
        seats: 2,
        transmission: 'Auto',
        bags: 2,
        age: 25,
        price: 1000,
    },
    {
        name: 'Bentley Bentayga',
        image: car4,
        seats: 4,
        transmission: 'Auto',
        bags: 2,
        age: 25,
        price: 700,
    },
    {
        name: 'Rolls Royce Cullinan',
        image: car5,
        seats: 4,
        transmission: 'Auto',
        bags: 2,
        age: 25,
        price: 700,
    },
]
const CarSlider: React.FC = () => {
    return (
        <>
            <div className={`container mx-auto mt-20`}>
                <h3 className={`text-center text-sm text-yellow-500`}>
                    Select Your Dream Car
                </h3>
                <h1 className={`text-center text-2xl font-extrabold`}>
                    Luxury{' '}
                    <span className={`text-customOrange`}>Car Fleet</span>
                </h1>
            </div>
            <div className="slider-container mt-10">
                <ImageSlider
                    sliderProps={cars.map((car) => ({
                        ...car,
                        name: [car.name],
                        image: [car.image],
                        seats: [car.seats],
                        transmission: [car.transmission],
                        bags: [car.bags],
                        age: [car.age],
                        price: [car.price],
                    }))}
                />
            </div>
        </>
    )
}

export default CarSlider
