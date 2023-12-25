import { motion } from "framer-motion";

const quote = {
  initial: {
    // y: 50,
    opacity: 0,
  },
  animate: {
    opacity: 1,
    // y: 0,
    transition: {
      delay: 0.3,
      staggerChildren: 1,
    },
  },
};
const fadein = {
  initial: {
    // y: 50,
    opacity: 0,
  },
  animate: {
    opacity: 1,
    // y: 0,
    transition: {
      delay: 0.3,
      // staggerChildren: 1,
    },
  },
};
const signelWord = {
  initial: {
    y: 50,
    opacity: 0,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

const AnimatedText = ({ variants, text, className = "" }) => {
  return (
    <div className="">
      <motion.h1
        className={` w-full text-white  ${className}`}
        variants={variants}
        initial="initial"
        animate="animate"
      >
        {text.split(" ").map((word, index) => {
          return (
            <motion.span
              key={word + "-" + index}
              className=""
              variants={variants}
              initial="initial"
              animate="animate"
            >
              {word}&nbsp;
            </motion.span>
          );
        })}
      </motion.h1>
    </div>
  );
};

export default AnimatedText;
