import { motion } from "framer-motion";

const letter = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const AnimatedText = ({ text }) =>
  text.split("").map((char: string, idx: number) => (
    <motion.span key={`${char}-${idx}`} variants={letter}>
      {char}
    </motion.span>
  ));

export default AnimatedText;
