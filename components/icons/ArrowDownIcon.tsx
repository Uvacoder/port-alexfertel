import { motion } from "framer-motion";

export const ArrowDownIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <motion.path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 14l-7 7m0 0l-7-7m7 7V3"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      exit={{ pathLength: 0 }}
      transition={{ duration: 0.75 }}
    />
  </svg>
);
