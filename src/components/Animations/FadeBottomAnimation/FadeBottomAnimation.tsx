import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const FadeBottomAnimation = ({ isInView, duration = 0.5, delay = 0.25, children }) => {
  const fadeControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      fadeControls.start("visible");
    }
  }, [isInView, fadeControls]);

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={fadeControls}
      transition={{ duration, delay }}
      style={{ position: "relative", zIndex: 2 }}
    >
      {children}
    </motion.div>
  );
};

export default FadeBottomAnimation;
