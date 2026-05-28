import Navbar from "../components/Navbar";

import {
  FaUniversity,
  FaShieldAlt,
  FaMobileAlt,
  FaChartLine,
  FaMoneyCheckAlt,
  FaBell,
} from "react-icons/fa";

const Features = () => {

  const features = [
    {
      icon: <FaUniversity />,
      title: "Secure Banking",
      desc: "Advanced encrypted banking system with high-level protection.",
    },
    {
      icon: <FaMoneyCheckAlt />,
      title: "Instant Transfers",
      desc: "Send money instantly using account number and IFSC code.",
    },
    {
      icon: <FaChartLine />,
      title: "AI Analytics",
      desc: "Track spending, savings and financial growth visually.",
    },
    {
      icon: <FaMobileAlt />,
      title: "Responsive Design",
      desc: "Works perfectly on mobile, tablet and desktop devices.",
    },
    {
      icon: <FaBell />,
      title: "Email Notifications",
      desc: "Get instant alerts for transactions and account activity.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Transaction PIN",
      desc: "Extra layer of protection for secure transactions.",
    },
  ];

  return (

    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white">

      <Navbar />

      <div className="px-6 py-20">

        <h1 className="text-5xl md:text-7xl font-bold text-center mb-6">
          SmartBank Features
        </h1>

        <p className="text-center text-gray-300 max-w-3xl mx-auto text-lg md:text-2xl mb-20">
          Experience next-generation digital banking with secure transfers,
          AI-powered analytics and modern responsive technology.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">

          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/10 border border-white/20 backdrop-blur-md p-8 rounded-3xl hover:scale-105 transition duration-300 shadow-2xl"
            >

              <div className="text-5xl text-cyan-400 mb-6">
                {feature.icon}
              </div>

              <h2 className="text-3xl font-bold mb-4">
                {feature.title}
              </h2>

              <p className="text-gray-300 text-lg leading-8">
                {feature.desc}
              </p>

            </div>
          ))}

        </div>

      </div>

    </div>
  );
};

export default Features;