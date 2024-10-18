"use client";

import { useSwiper } from "swiper/react";


const WorkSliderBtns = ({ containerStyles, btnStyles, iconsStyles }) => {
    const swiper = useSwiper();
  return (
    <div className="border-gray-200 px-2 py-1 rounded-xl mt-4 flex gap-2 absolute bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none">
        <button className="bg-accent p-1 rounded-md"
        onClick={()=>swiper.slidePrev()}> Prev
         </button>
         <button className="bg-accent p-1 rounded-md"
        onClick={()=> swiper.slideNext()}> Next
         </button>
    </div>
);
};

export default WorkSliderBtns