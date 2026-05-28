import { motion } from "framer-motion";

const AnimatedBackground = () => {

  const shapes = [

    {
      size: "w-72 h-72",
      color: "bg-cyan-500/20",
      position: "top-10 left-10",
      duration: 12
    },

    {
      size: "w-96 h-96",
      color: "bg-purple-500/20",
      position: "top-40 right-10",
      duration: 15
    },

    {
      size: "w-80 h-80",
      color: "bg-blue-500/20",
      position: "bottom-10 left-1/3",
      duration: 18
    },

    {
      size: "w-64 h-64",
      color: "bg-pink-500/20",
      position: "bottom-20 right-20",
      duration: 10
    }

  ];

  return (

    <div className="absolute inset-0 overflow-hidden -z-10">

      {shapes.map((shape, index) => (

        <motion.div

          key={index}

          animate={{

            x: [0, 80, -40, 0],

            y: [0, -60, 40, 0],

            rotate: [0, 120, 240, 360],

            borderRadius: [

              "35% 65% 60% 40%",

              "60% 40% 35% 65%",

              "45% 55% 65% 35%",

              "35% 65% 60% 40%"

            ],

            scale: [1, 1.15, 0.9, 1]

          }}

          transition={{

            duration: shape.duration,

            repeat: Infinity,

            ease: "easeInOut"

          }}

          className={`

            absolute

            ${shape.size}

            ${shape.color}

            ${shape.position}

            blur-3xl

            opacity-70

          `}
        />

      ))}

      {/* glowing overlay */}

      <div className="
      absolute
      inset-0
      bg-[radial-gradient(circle_at_top,rgba(6,182,212,0.12),transparent_35%)]
      " />

      <div className="
      absolute
      inset-0
      bg-[radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.12),transparent_35%)]
      " />

    </div>

  );

};

export default AnimatedBackground;