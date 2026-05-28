import Navbar from "../components/Navbar";

const About = () => {

  return (

    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white">

      <Navbar />

      <div className="px-6 py-20">

        <div className="max-w-6xl mx-auto">

          <h1 className="text-5xl md:text-7xl font-bold text-center mb-10">
            About SmartBank
          </h1>

          <p className="text-center text-gray-300 text-xl md:text-2xl leading-10 max-w-4xl mx-auto">
            SmartBank is a modern online banking platform designed to provide
            secure, fast and intelligent banking services with beautiful UI,
            responsive experience and real-time transactions.
          </p>

          <div className="grid md:grid-cols-3 gap-10 mt-24">

            <div className="bg-white/10 border border-white/20 p-10 rounded-3xl backdrop-blur-md hover:scale-105 transition duration-300">

              <h2 className="text-3xl font-bold text-cyan-400 mb-6">
                Our Mission
              </h2>

              <p className="text-gray-300 leading-8 text-lg">
                To simplify digital banking with secure technology and modern
                user experience.
              </p>

            </div>

            <div className="bg-white/10 border border-white/20 p-10 rounded-3xl backdrop-blur-md hover:scale-105 transition duration-300">

              <h2 className="text-3xl font-bold text-cyan-400 mb-6">
                Our Vision
              </h2>

              <p className="text-gray-300 leading-8 text-lg">
                Building the future of AI-powered smart financial systems for
                everyone.
              </p>

            </div>

            <div className="bg-white/10 border border-white/20 p-10 rounded-3xl backdrop-blur-md hover:scale-105 transition duration-300">

              <h2 className="text-3xl font-bold text-cyan-400 mb-6">
                Security
              </h2>

              <p className="text-gray-300 leading-8 text-lg">
                Advanced transaction PIN, JWT authentication and OTP-based
                protection.
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default About;