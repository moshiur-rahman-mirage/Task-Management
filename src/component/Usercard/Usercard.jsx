import React from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import "./Card.css";
//import contest_image from "../../public/banner1.jpg"
import { Link } from "react-router-dom";
const Usercard = ({  user_type,user_img,color }) => {

  return (
    <motion.div className=" mx-auto listing border bg-white relative cursor-pointer w-[25%] max-w-sm min-w-[300px] m-5 shadow-slate-500  rounded-xl overflow-hidden" whileHover={{ scale: 1.01 }}>
      <div  className="absolute left-0 top-0 w-full h-full bg-white rounded-lg overflow-hidden">
        <div className="w-full h-[85%] overflow-hidden ">
          <img
            className="w-full h-full object-cover"
            alt="Contest Card"
            src={user_img}
          />
        </div>
        <div className="flex flex-col relative justify-evenly py-0 px-4">
          {/* <div className={`absolute text-xs right-2 top-2 ${color} py-1.5 px-2.5 rounded-md `}>
            {user_type}
          </div> */}
          <div className="my-3 font-bold mx-0 flex items-center">
            <span className="text-[#737373]">{user_type}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Usercard;
