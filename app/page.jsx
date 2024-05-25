import React from "react";
import { RxCross2 } from "react-icons/rx";
import { GoThumbsup } from "react-icons/go";
import { LuThumbsDown } from "react-icons/lu";
import { MdOutlineNetworkWifi } from "react-icons/md";
import { GiNetworkBars } from "react-icons/gi";
import { FaBatteryFull } from "react-icons/fa6";
import Rating from "./Rating";
const page = () => {
  return (
    <div className="mt-8 container rounded-xl h-[70vh] max-w-[350px] mx-auto border-2 border-black">
      <div className="flex justify-between mx-1">
        <div>9:45</div>
        <div className="flex gap-2">
          <FaBatteryFull size={20} />
          <GiNetworkBars size={20} />
          <MdOutlineNetworkWifi size={20} />
        </div>
      </div>
      <div>
        <RxCross2 size={30} className="ml-3 mt-2" />
      </div>
      <div>
        <h1 className="text-xl font-bold ml-3 mt-1">Leave a Review</h1>
      </div>
      <div>
        <h1 className="text-xl font-bold ml-3 mt-3 mt-4">Safety</h1>
      </div>
      <div>
        <p className="text-base font-medium ml-2">
          Lorem ipsum dolor sit amet consectetur.
        </p>
      </div>
      <h1 className="text-xl font-bold ml-4 mt-4 ">Review</h1>

      <p className="text-base font-medium ml-2">
        Lorem ipsum dolor sit amet consectetur.
      </p>
      <div className="ml-2">
        <Rating />
      </div>

      <h1 className="text-xl font-bold ml-3 mt-4 ">Communication</h1>
      <div className="ml-2">
        <Rating />
      </div>

      <h1 className="text-xl font-bold ml-3 mt-4 ">Would you recommend Trausti?</h1>

      <p className="text-base font-medium ml-2">
        Lorem ipsum dolor sit amet consectetur.
      </p>
      <div className="flex items-center gap-4 mx-10 mt-2">
  
      <LuThumbsDown size={30}/> <span>Yes</span>
      <GoThumbsup size={30}/><span>No</span>
      </div>
      <h1 className="text-xl font-bold ml-3 mt-4">
        Praise
      </h1>
  <p className="text-base font-medium ml-2">
        Lorem ipsum dolor sit amet consectetur.
      </p>
    </div>
  );
};

export default page;
