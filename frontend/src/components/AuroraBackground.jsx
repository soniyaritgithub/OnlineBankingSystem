import { motion } from "framer-motion";

const AuroraBackground = () => {

  return (

    <div
      className="
      absolute
      inset-0
      overflow-hidden
      z-0
      pointer-events-none
      "
    >

      <motion.div

        animate={{

          x: [0, 120, -60, 0],

          y: [0, -80, 40, 0],

          scale: [1, 1.2, 0.9, 1]

        }}

        transition={{

          duration: 14,

          repeat: Infinity,

          ease: "easeInOut"

        }}

        className="
        absolute
        top-0
        left-0
        w-[40vw]
        h-[40vw]
        min-w-[250px]
        min-h-[250px]
        rounded-full
        bg-cyan-400/35
        blur-[120px]
        "
      />

      <motion.div

        animate={{

          x: [0, -100, 60, 0],

          y: [0, 70, -50, 0],

          scale: [1, 0.8, 1.1, 1]

        }}

        transition={{

          duration: 18,

          repeat: Infinity,

          ease: "easeInOut"

        }}

        className="
        absolute
        top-20
        right-0
        w-[45vw]
        h-[45vw]
        min-w-[280px]
        min-h-[280px]
        rounded-full
        bg-purple-500/35
        blur-[140px]
        "
      />

      <motion.div

        animate={{

          x: [0, 80, -80, 0],

          y: [0, -40, 60, 0]

        }}

        transition={{

          duration: 16,

          repeat: Infinity,

          ease: "easeInOut"

        }}

        className="
        absolute
        bottom-0
        left-1/4
        w-[35vw]
        h-[35vw]
        min-w-[220px]
        min-h-[220px]
        rounded-full
        bg-blue-500/35
        blur-[120px]
        "
      />

    </div>

  );

};

export default AuroraBackground;