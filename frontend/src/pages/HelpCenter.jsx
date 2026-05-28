import { motion } from "framer-motion";

import AuroraBackground from "../components/AuroraBackground";

const HelpCenter = () => {

  const cards = [

    "Account Support",

    "Transaction Issues",

    "Loan Support",

    "Card Problems",

    "Technical Help",

    "24/7 Assistance"

  ];

  return (

    <div
      className="
      relative
      min-h-screen
      overflow-hidden
      bg-gradient-to-br
      from-slate-950
      via-blue-950
      to-cyan-950
      text-white
      px-4
      md:px-10
      py-16
      "
    >

      <AuroraBackground />

      <div className="relative z-10">

        <motion.h1

          initial={{
            opacity: 0,
            y: 40
          }}

          animate={{
            opacity: 1,
            y: 0
          }}

          className="
          text-3xl
          sm:text-4xl
          md:text-6xl
          lg:text-7xl
          font-black
          text-center
          "

        >

          Help Center

        </motion.h1>

        <img

          src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200"

          alt="support"

          className="
          w-full
          max-w-5xl
          mx-auto
          rounded-3xl
          mt-10
          shadow-2xl
          "

        />

        <p
          className="
          text-center
          text-slate-300
          mt-8
          max-w-3xl
          mx-auto
          text-lg
          "
        >

          Need help? Our banking support team is available anytime.

        </p>

        <div
          className="
          grid
          grid-cols-1
          md:grid-cols-2
          xl:grid-cols-3
          gap-8
          mt-20
          "
        >

          {cards.map((item, index) => (

            <motion.div

              key={index}

              whileHover={{
                y: -10,
                scale: 1.03
              }}

              className="
              bg-white/10
              rounded-3xl
              p-8
              backdrop-blur-xl
              shadow-xl
              "

            >

              <h2 className="text-2xl font-bold">

                {item}

              </h2>

              <p className="mt-4 text-slate-300">

                Get quick support for banking services and account issues.

              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </div>

  );

};

export default HelpCenter;