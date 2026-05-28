import { motion } from "framer-motion";

const security = [
  "2 Factor Authentication",
  "Encrypted Transactions",
  "AI Fraud Monitoring",
  "Real Time Alerts"
];

export default function SecurePayments() {

  return (

    <div className="min-h-screen bg-gradient-to-br from-black via-green-950 to-emerald-950 text-white px-5 md:px-16 py-16">

      <motion.img
        initial={{ opacity:0 }}
        animate={{ opacity:1 }}
        src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1600"
        className="rounded-[40px] h-[260px] md:h-[450px] object-cover w-full"
      />

      <h1 className="text-4xl md:text-7xl font-black mt-12">
        Secure Online Payments
      </h1>

      <p className="mt-6 text-lg md:text-2xl text-slate-300">
        Modern security practices keep your banking transactions protected.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">

        {security.map((item,index)=>(

          <motion.div
            key={index}
            whileHover={{ y:-10 }}
            className="rounded-3xl bg-white/5 p-6 border border-emerald-500/20"
          >

            <h3 className="font-bold text-xl text-emerald-400">
              {item}
            </h3>

          </motion.div>

        ))}

      </div>

      <motion.div
        whileHover={{ scale:1.02 }}
        className="mt-20 bg-emerald-500/10 rounded-3xl p-10"
      >

        <h2 className="text-3xl font-bold">
          Banking Security Tips
        </h2>

        <ul className="mt-5 space-y-3 text-slate-300">
          <li>✓ Never share OTP</li>
          <li>✓ Use strong passwords</li>
          <li>✓ Monitor transactions regularly</li>
          <li>✓ Enable notifications</li>
        </ul>

      </motion.div>

    </div>
  );
}