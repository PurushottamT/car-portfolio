import { useState } from 'react'
import Select from 'react-tailwindcss-select'
import { SelectValue } from 'react-tailwindcss-select/dist/components/type'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

interface scrollProps {
    scrollIndex: string
    background: string
    overlayDark: number
}

const options = [
    { value: '', label: 'Choose your best car' },
    { value: 'all', label: 'All' },
    { value: 'suv', label: 'SUVs' },
    { value: 'luxury', label: 'Luxury Cars' },
    { value: 'normal', label: 'Normal Cars' },
]

const locations = [
    { value: '', label: 'Pick Up Location' },
    { value: 'ktm', label: 'Kathmandu' },
    { value: 'bkt', label: 'Bhaktapur' },
    { value: 'lal', label: 'Lalitpur' },
    { value: 'bhr', label: 'Bharatpur' },
]

const dropLocations = [
    { value: '', label: 'Drop Off Location' },
    { value: 'ktm', label: 'Kathmandu' },
    { value: 'bkt', label: 'Bhaktapur' },
    { value: 'lal', label: 'Lalitpur' },
    { value: 'bhr', label: 'Bharatpur' },
]

const Rental: React.FC<scrollProps> = ({
    scrollIndex,
    background,
    overlayDark,
}) => {
    const [car, setCar] = useState<SelectValue>(options[0])
    const [location, setLocation] = useState<SelectValue>(locations[0])
    const [dropLocation, setDropLocation] = useState<SelectValue>(
        dropLocations[0]
    )
    const [startDate, setStartDate] = useState<Date>()
    const [endDate, setEndDate] = useState<Date>()

    const handleLocationChange = (value: SelectValue) => {
        setLocation(value)
    }

    const handleDropLocation = (value: SelectValue) => {
        setDropLocation(value)
    }
    const handleChange = (value: SelectValue) => {
        setCar(value)
    }

    return (
        <>
            <div
                className={`relative mt-20 bg-cover bg-fixed bg-center bg-no-repeat p-12`}
                style={{ backgroundImage: `url(${background})` }}
                data-scroll-index={scrollIndex}
                data-overlay-dark={overlayDark}
                data-background={background}
            >
                <div className={`container mx-auto w-4/5`}>
                    <div
                        className={`mt-10 flex flex-col items-center justify-center space-y-6`}
                    >
                        <h3 className={`text-sm text-orange-400`}>Rent Now</h3>
                        <h1 className={`text-3xl font-bold text-white`}>
                            Book Auto Rental
                        </h1>
                        <div
                            className={`flex space-x-2 rounded-full bg-white px-10 py-5`}
                        >
                            <Select
                                placeholder="Choose your best car"
                                value={car}
                                options={options}
                                onChange={handleChange}
                                primaryColor=""
                                isSearchable={true}
                            />
                            <Select
                                placeholder="Pick Up Location"
                                value={location}
                                options={locations}
                                onChange={handleLocationChange}
                                primaryColor=""
                            />
                            <DatePicker
                                selected={startDate}
                                onChange={(date: Date) => setStartDate(date)}
                                selectsStart
                                startDate={startDate}
                                endDate={endDate}
                                minDate={new Date()}
                                showMonthDropdown
                                showYearDropdown
                                placeholderText="Pick up date"
                                className={`border p-1.5`}
                            />
                            <Select
                                placeholder="Drop Location"
                                value={dropLocation}
                                options={dropLocations}
                                onChange={handleDropLocation}
                                primaryColor=""
                            />
                            <DatePicker
                                selected={endDate}
                                onChange={(date: Date) => setEndDate(date)}
                                selectsEnd
                                startDate={startDate}
                                endDate={endDate}
                                minDate={new Date()}
                                placeholderText="Return Date"
                                showMonthDropdown
                                showYearDropdown
                                className={`border p-1.5`}
                            />

                            <button className="w-auto rounded-lg bg-customOrange px-5 py-2">
                                Rent
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Rental
