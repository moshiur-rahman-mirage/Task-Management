import React from "react";
import banner1 from "../../../public/banner2.jpg";
import { GoArrowRight } from "react-icons/go";
import { Link as ScrollLink } from "react-scroll";
import { LuArrowDown } from "react-icons/lu";
import AnimatedText from "../AnimatedText/AnimatedText";
import { NavLink } from "react-router-dom";
const Hero = () => {
  return (
    <div className="carousel w-full min-h-screen ">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={banner1} className="w-full h-screen" />
        <div
          className="absolute  pl-12   flex items-center transform left-0 top-0 h-full gap-2  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]);

]"
        >
          <div className=" text-white  space-y-7 w-1/2">
            <AnimatedText
              varitants="quote"
              className="text-xl md:text-4xl lg:text-6xl flex-wrap w-3/4  md:w-1/2 font-semibold uppercase whitespace-pre-wrap"
              text="Managing Task Just become easier"
            />

            {/* <button className="btn  border-lime-50 rounded-r-full rounded-l-full w-60">
              Lets Explore */}
              <NavLink to="/Dashboard" className="btn  border-lime-50 rounded-r-full rounded-l-full w-60">
                Lets Explore <GoArrowRight />
                </NavLink>
              
            {/* </button> */}

            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
