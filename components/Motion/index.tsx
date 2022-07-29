import { motion } from "framer-motion";

const Motion: React.FC<{ id: string }> = (props) => {
  const variants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };
  return (
    <motion.div
      key={props.id}
      variants={variants}
      initial="initial"
      animate="animate"
      // exit="exit"
      transition={{
        delay: 0.2,
        duration: 0.3,
        staggerChildren: 0.25,
        type: "linear",
      }}
    >
      {props.children}
    </motion.div>
  );
};

export default Motion;
