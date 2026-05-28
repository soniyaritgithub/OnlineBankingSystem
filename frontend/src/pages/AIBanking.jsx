import { motion } from "framer-motion";

const features = [
  "Fraud Detection",
  "Expense Analytics",
  "Smart Recommendations",
  "24/7 Support",
];

export default function AIBanking() {

  return (

    <div className="min-h-screen bg-gradient-to-br from-black via-purple-950 to-pink-950 text-white px-5 md:px-16 py-16">

      <motion.img
        initial={{opacity:0}}
        animate={{opacity:1}}
        src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600"
        className="rounded-[40px] h-[260px] md:h-[450px] object-cover w-full"
      />

      <h1 className="text-4xl md:text-7xl font-black mt-12">
        How AI Improves Banking
      </h1>

      <p className="mt-6 text-lg md:text-2xl text-slate-300">
        AI transforms banking with predictive analytics and automation.
      </p>

      <div className="grid md:grid-cols-2 gap-8 mt-14">

        {features.map((feature,index)=>(

          <motion.div
            key={index}
            whileHover={{ scale:1.03 }}
            className="p-8 rounded-3xl bg-white/5 border border-pink-500/20"
          >

            <h2 className="text-2xl font-bold text-pink-400">
              {feature}
            </h2>

            <p className="mt-4 text-slate-300">
              AI powered systems increase efficiency and improve customer experience.
            </p>

          </motion.div>

        ))}

      </div>

      <div className="mt-20 rounded-3xl bg-pink-500/10 p-10">

        <h2 className="text-3xl font-bold">
          Why AI Banking?
        </h2>

        <p className="mt-4 text-slate-300">
          Faster decisions, lower fraud risks and smarter customer interactions.
        </p>

      </div>

    </div>

  );
}