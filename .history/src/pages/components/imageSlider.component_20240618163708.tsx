import { useState } from "react";
import { FaUser } from "react-icons/fa";
import { GiCarDoor, GiPaperBagOpen } from "react-icons/gi";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import { TbCircuitBattery } from "react-icons/tb";

interface ImageSliderProps {
  name: string[];
  image: string[];
  seats: number[];
  transmission: string[];
  bags: number[];
  age: number[];
  price: number[];
}
const ImageSlider = ({ sliderProps }: { sliderProps: ImageSliderProps[] }) => {
  const [imageIndex, setImageIndex] = useState(0);
  return (
    <>
      <div
        className={`flex flex-col justify-center items-center bg-blend-darken relative overflow-x-hidden overflow-y-hidden h-[36rem]`}
      >
        <img
          src={sliderProps[imageIndex].image[0]} // Assuming each sliderProps item has an array of images and we want the first one
          alt={sliderProps[imageIndex].name[0]} // Assuming name is also an array and we want the first name
          className={`w-1/2 rounded-lg`}
        />
        <div
          className={`absolute p-3 flex justify-between items-center top-[80%] left-1/2 transform -translate-x-1/2 bg-gray-100 w-[45%] rounded-lg text-black space-x-5 text-md`}
        >
          <div className={`flex flex-col`}>
            <p className={`text-2xl font-bold`}>
              {sliderProps[imageIndex].name}
            </p>
            <div className={`flex space-x-10 items-center justify-center`}>
              <div className={`flex items-center justify-center`}>
                <GiCarDoor className={`text-customOrange text-md`} />
                <p>{sliderProps[imageIndex].seats}</p>
              </div>
              <div className={`flex items-center justify-center`}>
                <FaUser className={`text-customOrange text-md`} />
                <p>{sliderProps[imageIndex].age}</p>
              </div>
              <div className={`flex items-center justify-center`}>
                <GiPaperBagOpen className={`text-customOrange text-md`} />
                <p>{sliderProps[imageIndex].bags}</p>
              </div>
              <div className={`flex items-center justify-center`}>
                <TbCircuitBattery className={`text-customOrange text-md`} />
                <p>{sliderProps[imageIndex].transmission}</p>
              </div>
            </div>
          </div>
          <div className={`flex items-center`}>
            <button className={"px-6 py-3 bg-customOrange rounded-full mr-3"}>
              Detail
            </button>
            <p className={`text-customOrange font-bold text-xl`}>
              ${sliderProps[imageIndex].price}
            </p>
            <p>/day</p>
          </div>
        </div>
        <img
          src={sliderProps[imageIndex + 1]?.image[0]}
          alt={sliderProps[imageIndex + 1]?.name[0]}
          className={`img-right w-1/2 rounded-lg absolute left-[80%]`}
        />
        <img
          src={
            sliderProps[
              imageIndex > 0 ? imageIndex - 1 : sliderProps.length - 1
            ].image[0]
          }
          alt={
            sliderProps[
              imageIndex > 0 ? imageIndex - 1 : sliderProps.length - 1
            ].name[0]
          }
          className={`img-left w-1/2 rounded-lg absolute right-[80%]`}
        />
        <IoIosArrowDropright
          className={`text-6xl text-customOrange absolute right-1/4`}
          onClick={() => setImageIndex((imageIndex + 1) % sliderProps.length)}
        />
        <IoIosArrowDropleft
          className={`text-6xl text-customOrange absolute left-1/4`}
          onClick={() =>
            setImageIndex(
              (imageIndex - 1 + sliderProps.length) % sliderProps.length
            )
          }
        />
      </div>
    </>
  );
};

export default ImageSlider;
