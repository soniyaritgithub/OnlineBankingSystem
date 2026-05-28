import { motion } from "framer-motion";
import { useState } from "react";

import {
  FaLaptopCode,
  FaUsers,
  FaRocket,
  FaBriefcase,
  FaGlobe,
  FaHeart,
} from "react-icons/fa";

const Careers = () => {

  const [showForm, setShowForm] = useState(false);

  const [selectedRole, setSelectedRole] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "",
  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = async (e) => {

  e.preventDefault();

  try {

    const response = await fetch(
      "http://localhost:5000/api/careers",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          role: selectedRole,
          ...formData,
        }),
      }
    );

    const data = await response.json();

    alert(data.message);

    setFormData({
      name: "",
      email: "",
      phone: "",
      experience: "",
    });

    setShowForm(false);

  } catch (error) {

    console.log(error);

    alert("Something went wrong");

  }

};

  const jobs = [

    {
      title: "Frontend Developer",
      desc: "Build premium banking UI experiences using React and Tailwind.",
      icon: <FaLaptopCode />,
      color: "text-cyan-400",
      bg: "bg-cyan-500/10",
    },

    {
      title: "Backend Engineer",
      desc: "Develop secure APIs and banking transaction systems.",
      icon: <FaRocket />,
      color: "text-pink-400",
      bg: "bg-pink-500/10",
    },

    {
      title: "UI/UX Designer",
      desc: "Design modern fintech dashboards and smooth user flows.",
      icon: <FaHeart />,
      color: "text-yellow-400",
      bg: "bg-yellow-500/10",
    },

  ];

  return (

    <div
      className="
        min-h-screen
        text-white
        overflow-hidden
        px-4
        md:px-10
        py-10
      "
      style={{
        background:
          "linear-gradient(to bottom right, #020617, #0f172a, #083344)"
      }}
    >

      {/* HERO */}

      <section
        className="
          flex
          flex-col
          items-center
          justify-center
          text-center
          py-20
          md:py-32
        "
      >

        <motion.p

          initial={{ opacity: 0, y: 30 }}

          animate={{ opacity: 1, y: 0 }}

          transition={{ duration: 0.8 }}

          className="
            text-cyan-400
            uppercase
            tracking-[5px]
            font-bold
            mb-6
          "
        >
          Careers At SmartBank
        </motion.p>

        <motion.h1

          initial={{ opacity: 0, y: 40 }}

          animate={{ opacity: 1, y: 0 }}

          transition={{ duration: 1 }}

          className="
            text-5xl
            sm:text-6xl
            md:text-8xl
            font-black
            leading-tight
            max-w-6xl
          "
        >

          Build The Future
          <span className="text-cyan-400">
            {" "}Of Banking
          </span>

        </motion.h1>

        <motion.p

          initial={{ opacity: 0 }}

          animate={{ opacity: 1 }}

          transition={{
            delay: 0.4,
            duration: 1
          }}

          className="
            mt-8
            text-slate-300
            text-base
            md:text-2xl
            max-w-4xl
            leading-relaxed
          "
        >

          Join our global fintech team and create secure,
          AI powered banking experiences used by millions.

        </motion.p>

      </section>

      {/* CULTURE */}

      <section className="py-20">

        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-3
            gap-8
          "
        >

          {[

            {
              icon: <FaUsers />,
              title: "Collaborative Team",
              desc: "Work with passionate engineers and designers.",
            },

            {
              icon: <FaGlobe />,
              title: "Remote Friendly",
              desc: "Flexible remote and hybrid work culture.",
            },

            {
              icon: <FaBriefcase />,
              title: "Career Growth",
              desc: "Upskill with real fintech product experience.",
            },

          ].map((item, index) => (

            <motion.div

              key={index}

              initial={{
                opacity: 0,
                y: 60
              }}

              whileInView={{
                opacity: 1,
                y: 0
              }}

              viewport={{
                once: true
              }}

              transition={{
                duration: 0.8,
                delay: index * 0.2
              }}

              whileHover={{
                y: -6,
                scale: 1.01
              }}

              className="
                bg-white/5
                border
                border-cyan-400/20
                rounded-[32px]
                p-8
              "
            >

              <div
                className="
                  w-16
                  h-16
                  rounded-2xl
                  bg-cyan-500/10
                  flex
                  items-center
                  justify-center
                  text-cyan-400
                  text-3xl
                  mb-6
                "
              >
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold">
                {item.title}
              </h3>

              <p className="text-slate-300 mt-4">
                {item.desc}
              </p>

            </motion.div>

          ))}

        </div>

      </section>

      {/* OPEN ROLES */}

      <section className="py-20">

        <div className="text-center mb-16">

          <h2
            className="
              text-4xl
              md:text-6xl
              font-black
            "
          >
            Open Positions
          </h2>

        </div>

        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-3
            gap-8
          "
        >

          {jobs.map((job, index) => (

            <motion.div

              key={index}

              initial={{
                opacity: 0,
                y: 50
              }}

              whileInView={{
                opacity: 1,
                y: 0
              }}

              viewport={{
                once: true
              }}

              transition={{
                duration: 0.8,
                delay: index * 0.2
              }}

              whileHover={{
                y: -6,
                scale: 1.01
              }}

              className="
                bg-white/5
                border
                border-cyan-400/20
                rounded-[32px]
                p-8
              "
            >

              <div
                className={`
                  w-16
                  h-16
                  rounded-2xl
                  ${job.bg}
                  flex
                  items-center
                  justify-center
                  ${job.color}
                  text-3xl
                  mb-6
                `}
              >
                {job.icon}
              </div>

              <h3 className="text-2xl font-bold">
                {job.title}
              </h3>

              <p className="text-slate-300 mt-4 leading-relaxed">
                {job.desc}
              </p>

              <button

                onClick={() => {

                  setShowForm(true);

                  setSelectedRole(job.title);

                }}

                className="
                  mt-8
                  px-6
                  py-3
                  rounded-2xl
                  bg-gradient-to-r
                  from-cyan-500
                  to-blue-500
                  font-bold
                  hover:scale-[1.02]
                  transition-all
                  duration-300
                "
              >
                Apply Now
              </button>

            </motion.div>

          ))}

        </div>

      </section>

      {/* APPLICATION FORM */}

      {

        showForm && (

          <motion.section

            initial={{
              opacity: 0,
              y: 80
            }}

            animate={{
              opacity: 1,
              y: 0
            }}

            transition={{
              duration: 0.8
            }}

            className="
              py-20
            "
          >

            <div
              className="
                max-w-3xl
                mx-auto
                bg-white/5
                border
                border-cyan-400/20
                rounded-[40px]
                p-8
                md:p-12
                backdrop-blur-md
              "
            >

              <div className="text-center mb-10">

                <h2
                  className="
                    text-4xl
                    md:text-5xl
                    font-black
                  "
                >
                  Apply For
                  <span className="text-cyan-400">
                    {" "}{selectedRole}
                  </span>
                </h2>

                <p className="text-slate-300 mt-4">
                  Fill the form to apply for this role.
                </p>

              </div>

              <form
                onSubmit={handleSubmit}
                className="space-y-6"
              >

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  required
                  className="
                    w-full
                    bg-white/5
                    border
                    border-white/10
                    rounded-2xl
                    px-5
                    py-4
                    outline-none
                  "
                />

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  required
                  className="
                    w-full
                    bg-white/5
                    border
                    border-white/10
                    rounded-2xl
                    px-5
                    py-4
                    outline-none
                  "
                />

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  required
                  className="
                    w-full
                    bg-white/5
                    border
                    border-white/10
                    rounded-2xl
                    px-5
                    py-4
                    outline-none
                  "
                />

                <textarea
                  rows="5"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  placeholder="Tell us about your experience..."
                  required
                  className="
                    w-full
                    bg-white/5
                    border
                    border-white/10
                    rounded-2xl
                    px-5
                    py-4
                    outline-none
                  "
                />

                <button
                  type="submit"
                  className="
                    w-full
                    py-4
                    rounded-2xl
                    bg-gradient-to-r
                    from-cyan-500
                    to-blue-500
                    font-bold
                    text-lg
                  "
                >
                  Submit Application 🚀
                </button>

              </form>

            </div>

          </motion.section>

        )

      }

    </div>

  );
};

export default Careers;