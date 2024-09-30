import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const SlideAnimation = ({ isInView, duration = 0.75, children }) => {
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      slideControls.start("visible");
    }
  }, [isInView, slideControls]);

  return (
    <div style={{ position: "relative", display: "inline-block", overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: "100%" },
        }}
        initial="hidden"
        animate={slideControls}
        transition={{ duration, ease: "easeInOut" }}
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          width: "100%",
          background: "#8331EB",
          zIndex: 1,
        }}
      ></motion.div>
      <div style={{ position: "relative", zIndex: 2 }}>
        {children}
      </div>
    </div>
  );
};

export default SlideAnimation;
