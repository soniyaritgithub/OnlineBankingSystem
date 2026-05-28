import { motion } from "framer-motion";

const habits = [
  "Track Monthly Expenses",
  "Create Emergency Funds",
  "Automate Savings",
  "Avoid Impulse Buying",
  "Invest Early",
];

export default function SavingHabits() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-950 to-cyan-950 text-white px-5 md:px-12 lg:px-20 py-16">

      <motion.img
        initial={{ opacity:0, scale:.9 }}
        animate={{ opacity:1, scale:1 }}
        transition={{ duration:1 }}
        src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=1600"
        className="w-full h-[250px] md:h-[450px] object-cover rounded-[40px]"
      />

      <motion.h1
        initial={{ opacity:0,y:40 }}
        animate={{ opacity:1,y:0 }}
        className="text-4xl md:text-7xl font-black mt-12"
      >
        5 Smart Saving Habits
      </motion.h1>

      <p className="mt-6 text-lg md:text-2xl text-slate-300 leading-relaxed">
        Smart financial habits help you build long-term wealth and financial stability.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">

        {habits.map((item,index)=>(

          <motion.div
            key={index}
            whileHover={{ y:-8 }}
            className="bg-white/5 border border-cyan-500/20 p-6 rounded-3xl backdrop-blur-xl"
          >
            <h3 className="text-xl font-bold text-cyan-400">
              {item}
            </h3>

            <p className="mt-3 text-slate-300">
              Improve your money management with practical strategies.
            </p>

          </motion.div>

        ))}

      </div>

      <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">

        {[
          ["35%","+ Savings"],
          ["50K+","Users"],
          ["24/7","Tracking"],
          ["AI","Insights"]
        ].map((stat,index)=>(

          <motion.div
            whileHover={{ scale:1.05 }}
            key={index}
            className="bg-cyan-500/10 rounded-3xl p-6 text-center"
          >
            <h2 className="text-3xl font-black">{stat[0]}</h2>
            <p>{stat[1]}</p>
          </motion.div>

        ))}

      </div>

    </div>
  );
}