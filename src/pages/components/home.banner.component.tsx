import React from "react";
import mp4Video from "../../assets/video/video.mp4";
import webmVideo from "../../assets/video/video.webm";
import { Link } from "react-router-dom";
import TextBox from "../../components/cards.components";

const HomeBanner: React.FC = () => {
  return (
    <>
      <div className="h-[90svh] flex items-center justify-center text-center bg-gray-950 opacity-85">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
        >
          <source src={mp4Video} type="video/mp4" />
          <source src={webmVideo} type="video/webm" />
        </video>
        <div className="relative z-10 p-6 bg-opacity-50 rounded-md">
          <h1 className="text-white text-7xl font-bold mb-12">Rent A Car</h1>
          <div className="flex space-x-4 justify-center">
            <Link
              to="/explore"
              className="bg-customOrange text-white py-6 px-12 rounded-full hover:bg-white hover:text-gray-900"
            >
              View Detail
            </Link>
            <Link
              to="/rent"
              className="bg-white text-customOrange py-6 px-12 rounded-full hover:bg-customOrange hover:text-white"
            >
              Rent Now
            </Link>
          </div>
        </div>
      </div>
      <div className="flex -mt-20 gap-2 w-3/4 container mx-auto">
        <TextBox
          title="Choose A Car"
          text="View our range of cars, find your perfect car for the coming days."
          rank={1}
        />
        <TextBox
          title="Choose A Car"
          text="View our range of cars, find your perfect car for the coming days."
          rank={2}
        />
        <TextBox
          title="Choose A Car"
          text="View our range of cars, find your perfect car for the coming days."
          rank={3}
        />
      </div>
    </>
  );
};

export default HomeBanner;
