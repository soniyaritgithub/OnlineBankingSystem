import Navbar from "../components/Navbar";
import { useState } from "react";
import { Link } from "react-router-dom";

import {
  motion,
  useMotionValue,
  useTransform,
} from "framer-motion";

import {
  FaShieldAlt,
  FaMobileAlt,
  FaChartLine,
  FaMoneyCheckAlt,
  FaWallet,
  FaChartPie,
} from "react-icons/fa";

const Home = () => {
const [contactData, setContactData] = useState({
  name: "",
  email: "",
  message: "",
});

const handleChange = (e) => {
  setContactData({
    ...contactData,
    [e.target.name]: e.target.value,
  });
};

const handleSubmit = (e) => {
  e.preventDefault();

  if (
    !contactData.name ||
    !contactData.email ||
    !contactData.message
  ) {
    alert("Please fill all fields");
    return;
  }

  alert("Message Sent Successfully 🚀");

  console.log(contactData);

  setContactData({
    name: "",
    email: "",
    message: "",
  });
};



  // 😎🔥 TRUST CARDS DATA

  const trustCards = [

    {
      icon: <FaShieldAlt />,
      title: "Bank Grade Security",
      desc: "Multi-layer authentication with OTP verification and encrypted transactions.",
      color: "text-cyan-400",
      bg: "bg-cyan-500/10",
    },

    {
      icon: <FaChartLine />,
      title: "AI Analytics",
      desc: "Track expenses and get smart financial insights with AI powered analytics.",
      color: "text-pink-400",
      bg: "bg-pink-500/10",
    },

    {
      icon: <FaMoneyCheckAlt />,
      title: "Instant Transfers",
      desc: "Send and receive money instantly with secure real-time transactions.",
      color: "text-green-400",
      bg: "bg-green-500/10",
    },

    {
      icon: <FaMobileAlt />,
      title: "Responsive Banking",
      desc: "Smooth banking experience across desktop, tablet and mobile devices.",
      color: "text-yellow-400",
      bg: "bg-yellow-500/10",
    },

  ];

  // 😎🔥 MOUSE REACTIVE GLOW

  const mouseX = useMotionValue(0);

  const mouseY = useMotionValue(0);

  const rotateX = useTransform(
    mouseY,
    [-300, 300],
    [12, -12]
  );

  const rotateY = useTransform(
    mouseX,
    [-300, 300],
    [-12, 12]
  );

  const handleMouseMove = (e) => {

    const { clientX, clientY } = e;

    const x =
      clientX - window.innerWidth / 2;

    const y =
      clientY - window.innerHeight / 2;

    mouseX.set(x);

    mouseY.set(y);
  };

  // 😎🔥 PREMIUM ANIMATION

  const animationStyle = `

  @keyframes floatBlob {

      0% {
          transform: translateY(0px) translateX(0px);
      }

      50% {
          transform: translateY(-30px) translateX(20px);
      }

      100% {
          transform: translateY(0px) translateX(0px);
      }
  }

  @keyframes pulseGlow {

      0% {
          opacity: 0.4;
      }

      50% {
          opacity: 0.8;
      }

      100% {
          opacity: 0.4;
      }
  }

  @keyframes gridMove {

      0% {
          background-position: 0 0;
      }

      100% {
          background-position: 100px 100px;
      }
  }

  @keyframes floatIcon {

      0% {
          transform: translateY(0px);
      }

      50% {
          transform: translateY(-25px);
      }

      100% {
          transform: translateY(0px);
      }
  }

  @keyframes marqueeMove {

      0% {
          transform: translateX(0%);
      }

      100% {
          transform: translateX(-50%);
      }
  }

  .animate-floatBlob {

      animation:
        floatBlob 8s ease-in-out infinite;
  }

  .animate-pulseGlow {

      animation:
        pulseGlow 5s ease-in-out infinite;
  }

  .animated-grid {

      background-image:
          linear-gradient(
              rgba(255,255,255,0.03) 1px,
              transparent 1px
          ),
          linear-gradient(
              90deg,
              rgba(255,255,255,0.03) 1px,
              transparent 1px
          );

      background-size: 60px 60px;

      animation:
        gridMove 15s linear infinite;
  }

  .floating-icon {

      animation:
          floatIcon 5s ease-in-out infinite;
  }

  .marquee-track {

      display: flex;

      width: max-content;

      animation:
        marqueeMove 20s linear infinite;
  }

  `;

  const heroAnimation = {

    hidden: {
      opacity: 0,
      y: 60
    },

    visible: {
      opacity: 1,
      y: 0,

      transition: {
        duration: 1
      }
    }
  };

  return (

    <>

      <style>{animationStyle}</style>

      <div

        onMouseMove={handleMouseMove}

        className="
          min-h-screen 
          flex flex-col
          relative
          overflow-hidden
          px-4
          py-6
          md:py-10
          text-white
          animated-grid
        "

        style={{
          background:
            "linear-gradient(to bottom right, #020617, #0f172a, #083344)"
        }}
      >

        {/* 😎🔥 MOUSE REACTIVE GLOW */}

        <motion.div

          className="
            pointer-events-none
            absolute
            w-[250px]
            h-[250px]
            md:w-[350px]
            md:h-[350px]
            rounded-full
            bg-cyan-500/10
            blur-3xl
            z-0
          "

          style={{
            x: mouseX,
            y: mouseY,
            translateX: "-50%",
            translateY: "-50%",
          }}
        />

        {/* PREMIUM FLOATING LIGHTS */}

        <div
          className="
            absolute
            top-[-120px]
            left-[-120px]
            w-[250px]
            h-[250px]
            md:w-[320px]
            md:h-[320px]
            bg-cyan-500/20
            blur-3xl
            rounded-full
            animate-floatBlob
            animate-pulseGlow
          "
        />

        <div
          className="
            absolute
            bottom-[-150px]
            right-[-100px]
            w-[250px]
            h-[250px]
            md:w-[350px]
            md:h-[350px]
            bg-blue-500/20
            blur-3xl
            rounded-full
            animate-floatBlob
          "
        />

        {/* FLOATING ICONS */}

        <div
          className="
            absolute
            top-[10%]
            left-[5%]
            text-cyan-400/20
            text-3xl
            md:text-5xl
            floating-icon
            hidden
            md:block
          "
        >
          <FaWallet />
        </div>

        <div
          className="
            absolute
            bottom-[12%]
            right-[8%]
            text-green-400/20
            text-3xl
            md:text-6xl
            floating-icon
            hidden
            lg:block
          "
        >
          <FaChartPie />
        </div>

        <Navbar />
<div className="flex-1"></div>
        {/* HERO SECTION */}

        <section
          className="
            relative
            z-10
            px-2
            md:px-10
            py-10
            md:py-16
            flex
            flex-col
            lg:flex-row
            items-center
            justify-between
            gap-10
            lg:gap-16
          "
        >

          {/* LEFT SIDE */}

          <motion.div

            variants={heroAnimation}

            initial="hidden"

            animate="visible"

            className="
              w-full
              max-w-3xl
            "
          >

            {/* HERO INTRO */}

            <motion.div

              initial={{
                opacity: 0,
                y: -40
              }}

              animate={{
                opacity: 1,
                y: 0
              }}

              transition={{
                duration: 1
              }}

              className="
                inline-flex
                items-center
                gap-3
                bg-cyan-500/10
                border
                border-cyan-400/20
                px-4
                md:px-5
                py-2
                md:py-3
                rounded-full
                mb-6
                md:mb-8
                backdrop-blur-xl
              "
            >

              <div
                className="
                  w-3
                  h-3
                  rounded-full
                  bg-cyan-400
                  animate-pulse
                "
              />

              <p className="text-cyan-300 text-xs sm:text-sm md:text-base">
                AI Powered Smart Banking Platform
              </p>

            </motion.div>

            {/* HERO TITLE */}

            <h1
              className="
                text-4xl
                sm:text-5xl
                md:text-6xl
                lg:text-7xl
                xl:text-8xl
                font-black
                leading-tight
                tracking-tight
              "
            >

              Modern Online <br />

              <span className="text-cyan-400">
                Banking System
              </span>

            </h1>

            {/* HERO DESCRIPTION */}

            <p
              className="
                text-slate-300
                text-sm
                sm:text-base
                md:text-xl
                lg:text-2xl
                mt-6
                md:mt-8
                leading-relaxed
                max-w-2xl
              "
            >

              Secure digital banking platform with AI-powered analytics,
              smart transfers, real-time balance tracking,
              OTP security and fully responsive dashboard.

            </p>

            {/* BUTTONS */}

            <div
              className="
                flex
                flex-col
                sm:flex-row
                gap-4
                sm:gap-6
                mt-8
                md:mt-10
                w-full
                sm:w-auto
              "
            >

              <Link to="/register">

                <motion.button

                  whileHover={{
                    scale: 1.08,
                  }}

                  whileTap={{
                    scale: 0.95
                  }}

                  className="
                    w-full
                    sm:w-auto
                    px-6
                    sm:px-8
                    py-4
                    rounded-2xl
                    bg-gradient-to-r
                    from-cyan-500
                    to-blue-500
                    text-white
                    font-bold
                    text-base
                    sm:text-lg
                    shadow-[0_0_30px_rgba(6,182,212,0.4)]
                  "
                >

                  Get Started 🚀

                </motion.button>

              </Link>

              <Link to="/login">

                <motion.button

                  whileHover={{
                    scale: 1.08
                  }}

                  whileTap={{
                    scale: 0.95
                  }}

                  className="
                    w-full
                    sm:w-auto
                    border
                    border-cyan-400
                    px-6
                    sm:px-8
                    py-4
                    rounded-2xl
                    text-base
                    sm:text-lg
                    font-bold
                    hover:bg-cyan-400
                    hover:text-slate-950
                    transition-all
                    duration-500
                  "
                >

                  Login

                </motion.button>

              </Link>

            </div>

          </motion.div>

          {/* RIGHT CARD */}

          <motion.div

            style={{
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
            }}

            whileHover={{
              y: -15,
              scale: 1.04,
            }}

            className="
              w-full
              max-w-full
              sm:max-w-lg
              bg-white/5
              backdrop-blur-2xl
              border
              border-cyan-400/20
              rounded-3xl
              p-5
              sm:p-6
              md:p-10
              shadow-[0_0_40px_rgba(6,182,212,0.15)]
            "
          >

            <h2
              className="
                text-2xl
                sm:text-3xl
                font-bold
                mb-6
                sm:mb-8
                text-cyan-400
              "
            >

              SmartBank Features

            </h2>

            <div className="space-y-5 sm:space-y-6">

              <div className="flex items-center gap-3 sm:gap-4">

                <FaShieldAlt
                  className="
                    text-cyan-400
                    text-2xl
                    sm:text-3xl
                  "
                />

                <p
                  className="
                    text-base
                    sm:text-lg
                    text-white
                  "
                >
                  Secure OTP Verification
                </p>

              </div>

              <div className="flex items-center gap-3 sm:gap-4">

                <FaMoneyCheckAlt
                  className="
                    text-green-400
                    text-2xl
                    sm:text-3xl
                  "
                />

                <p className="text-base sm:text-lg text-white">
                  Instant Money Transfers
                </p>

              </div>

              <div className="flex items-center gap-3 sm:gap-4">

                <FaChartLine
                  className="
                    text-pink-400
                    text-2xl
                    sm:text-3xl
                  "
                />

                <p className="text-base sm:text-lg text-white">
                  AI Expense Analytics
                </p>

              </div>

              <div className="flex items-center gap-3 sm:gap-4">

                <FaMobileAlt
                  className="
                    text-yellow-400
                    text-2xl
                    sm:text-3xl
                  "
                />

                <p className="text-base sm:text-lg text-white">
                  Fully Responsive Banking
                </p>

              </div>

            </div>

          </motion.div>

        </section>

        {/* MARQUEE SECTION */}

        <section
          className="
            relative
            z-10
            overflow-hidden
            py-6
            md:py-8
            border-y
            border-white/10
            bg-white/[0.03]
            backdrop-blur-xl
          "
        >

          <div className="marquee-track">

            <div
              className="
                flex
                items-center
                gap-10
                md:gap-20
                px-6
                md:px-10
                text-lg
                sm:text-xl
                md:text-3xl
                font-bold
                text-cyan-300
                whitespace-nowrap
              "
            >

              <span>⚡ Secure Banking</span>

              <span>🚀 AI Analytics</span>

              <span>💳 Smart Transactions</span>

              <span>📈 Real-time Insights</span>

              <span>🔐 OTP Security</span>

              <span>🌍 Responsive Experience</span>

            </div>

          </div>

        </section>

        {/* TRUST SECTION */}

        <section
          className="
            relative
            z-10
            px-4
            md:px-10
            py-16
            md:py-24
          "
        >

          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              xl:grid-cols-4
              gap-6
              md:gap-8
            "
          >

            {

              trustCards.map((card, index) => (

                <motion.div

                  key={index}

                  whileHover={{
                    y: -15,
                    scale: 1.04,
                  }}

                  className="
                    bg-white/5
                    backdrop-blur-2xl
                    border
                    border-cyan-400/20
                    rounded-3xl
                    p-6
                    md:p-8
                  "
                >

                  <div
                    className={`
                      w-16
                      h-16
                      rounded-2xl
                      ${card.bg}
                      flex
                      items-center
                      justify-center
                      ${card.color}
                      text-3xl
                      mb-6
                    `}
                  >
                    {card.icon}
                  </div>

                  <h3 className="text-2xl font-bold mb-4">
                    {card.title}
                  </h3>

                  <p className="text-slate-300 leading-relaxed">
                    {card.desc}
                  </p>

                </motion.div>

              ))

            }

          </div>

        </section>

        {/* STATS SECTION */}

        <section
          className="
            relative
            z-10
            px-4
            md:px-10
            py-16
            md:py-24
          "
        >

          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-4
              gap-6
              md:gap-8
            "
          >

            {[
              "99.9%",
              "24/7",
              "1M+",
              "₹10Cr+"
            ].map((stat, index) => (

              <motion.div

                key={index}

                whileHover={{
                  scale: 1.05
                }}

                className="
                  text-center
                  bg-white/5
                  backdrop-blur-2xl
                  border
                  border-white/10
                  rounded-3xl
                  p-6
                  md:p-8
                "
              >

                <h2
                  className="
                    text-4xl
                    md:text-5xl
                    font-black
                    text-cyan-400
                  "
                >
                  {stat}
                </h2>

                <p className="mt-4 text-slate-300">
                  SmartBank Analytics
                </p>

              </motion.div>

            ))}

          </div>

        </section>
{/* ========================= 😎🔥 AI ASSISTANT SECTION ========================= */}

<section
  className="
    relative
    z-10
    px-4
    md:px-10
    py-16
    md:py-24
  "
>

  <div
    className="
      grid
      grid-cols-1
      lg:grid-cols-2
      gap-10
      items-center
    "
  >

    {/* LEFT */}

    <div>

      <p
        className="
          text-cyan-400
          font-bold
          tracking-[4px]
          uppercase
          mb-4
          text-sm
          md:text-base
        "
      >
        AI Banking Assistant
      </p>

      <h2
        className="
          text-3xl
          sm:text-4xl
          md:text-6xl
          font-black
          leading-tight
        "
      >

        Smart AI Financial
        <span className="text-cyan-400">
          {" "}Assistant
        </span>

      </h2>

      <p
        className="
          mt-6
          text-slate-300
          text-base
          md:text-xl
          leading-relaxed
          max-w-2xl
        "
      >

        AI powered banking assistant helps users analyze expenses,
        track savings, suggest smart financial planning and monitor
        secure transactions in real time.

      </p>

      <div
        className="
          mt-10
          grid
          grid-cols-1
          sm:grid-cols-2
          gap-5
        "
      >

        <div
          className="
            bg-white/5
            border
            border-cyan-400/20
            rounded-3xl
            p-5
            backdrop-blur-2xl
          "
        >
          <h3 className="text-xl font-bold text-cyan-400">
            AI Reports
          </h3>

          <p className="text-slate-300 mt-3">
            Personalized expense and investment insights.
          </p>
        </div>

        <div
          className="
            bg-white/5
            border
            border-cyan-400/20
            rounded-3xl
            p-5
            backdrop-blur-2xl
          "
        >
          <h3 className="text-xl font-bold text-pink-400">
            Smart Alerts
          </h3>

          <p className="text-slate-300 mt-3">
            Instant fraud detection and balance notifications.
          </p>
        </div>

      </div>

    </div>

    {/* RIGHT */}

    <div>

      <div
        className="
          bg-white/5
          border
          border-cyan-400/20
          rounded-[40px]
          p-6
          md:p-10
          backdrop-blur-2xl
  
        "
      >

        <div className="space-y-6">

          <div
            className="
              bg-cyan-500/10
              rounded-2xl
              p-5
              border
              border-cyan-400/20
            "
          >

            <p className="text-cyan-300 text-sm">
              AI Suggestion
            </p>

            <h3 className="text-xl font-bold mt-2">
              Reduce Food Expenses by 12%
            </h3>

          </div>

          <div
            className="
              bg-pink-500/10
              rounded-2xl
              p-5
              border
              border-pink-400/20
            "
          >

            <p className="text-pink-300 text-sm">
              Monthly Savings
            </p>

            <h3 className="text-xl font-bold mt-2">
              ₹24,500 Saved This Month
            </h3>

          </div>

        </div>

      </div>

    </div>

  </div>

</section>

{/* ========================= 📚🔥 BLOG SECTION ========================= */}

<section
  className="
    relative
    z-10
    px-4
    md:px-10
    py-16
    md:py-24
  "
>

  <div className="text-center mb-16">

    <motion.h2
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="
        text-3xl
        sm:text-4xl
        md:text-6xl
        font-black
      "
    >
      Financial Tips & Blogs
    </motion.h2>

    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="
        mt-5
        text-slate-300
        text-base
        md:text-xl
      "
    >
      Learn smart financial management and banking tips.
    </motion.p>

  </div>

  <div
    className="
      grid
      grid-cols-1
      md:grid-cols-2
      xl:grid-cols-3
      gap-8
    "
  >

    {[

      {
        title: "5 Smart Saving Habits",

        desc:
          "Simple strategies to save more money every month.",

        image:
          "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=1200&auto=format&fit=crop",

        color:
          "from-cyan-900/40 to-blue-900/40",

        link: "/blogs/saving-habits",
      },

      {
        title: "How AI Improves Banking",

        desc:
          "Discover how AI enhances financial security and analytics.",

        image:
          "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",

        color:
          "from-purple-900/40 to-pink-900/40",

        link: "/blogs/ai-banking",
      },

      {
        title: "Secure Online Payments",

        desc:
          "Protect your transactions with modern banking security.",

        image:
          "https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1200&auto=format&fit=crop",

        color:
          "from-green-900/40 to-emerald-900/40",

        link: "/blogs/secure-payments",
      },

    ].map((blog, index) => (

      <motion.a

        href={blog.link}

        key={index}

        initial={{
          opacity: 0,
          y: 50
        }}

        whileInView={{
          opacity: 1,
          y: 0
        }}

        transition={{
          duration: 0.7,
          delay: index * 0.2
        }}

        viewport={{ once: true }}

        whileHover={{
          y: -12,
          scale: 1.03
        }}

        className={`
          bg-gradient-to-br
          ${blog.color}
          border
          border-white/10
          rounded-[32px]
          p-5
          md:p-8
          backdrop-blur-2xl
          overflow-hidden
          block
          transition-all
          duration-500
          shadow-xl
          hover:shadow-cyan-500/20
        `}
      >

        <div className="overflow-hidden rounded-3xl">

          <motion.img
            src={blog.image}
            alt={blog.title}

            whileHover={{
              scale: 1.08
            }}

            transition={{
              duration: 0.6
            }}

            className="
              w-full
              h-[220px]
              sm:h-[260px]
              md:h-[240px]
              object-cover
              rounded-3xl
              mb-6
            "
          />

        </div>

        <h3
          className="
            text-2xl
            md:text-3xl
            font-bold
            leading-tight
          "
        >
          {blog.title}
        </h3>

        <p
          className="
            text-slate-300
            mt-4
            leading-relaxed
            text-sm
            sm:text-base
            md:text-lg
          "
        >
          {blog.desc}
        </p>

        <motion.button

          whileHover={{
            x: 6
          }}

          className="
            mt-6
            text-cyan-400
            font-bold
            text-base
            md:text-lg
            hover:text-cyan-300
            transition-all
          "
        >
          Read More →
        </motion.button>

      </motion.a>

    ))}

  </div>

</section>
{/* ========================= 😎🔥 TESTIMONIAL SECTION ========================= */}

<section
  className="
    relative
    z-10
    px-4
    md:px-10
    py-16
    md:py-24
  "
>

  <div className="text-center mb-16">

    <h2
      className="
        text-3xl
        sm:text-4xl
        md:text-6xl
        font-black
      "
    >
      Trusted By Smart Users
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

    {[
      {
        name: "Priya Sharma",
        role: "UI Designer",
        review:
          "SmartBank completely changed how I manage my finances.",
        image:
          "https://randomuser.me/api/portraits/women/44.jpg",
      },

      {
        name: "Rahul Mehta",
        role: "Software Engineer",
        review:
          "The AI analytics and instant transfers feel premium.",
        image:
          "https://randomuser.me/api/portraits/men/32.jpg",
      },

      {
        name: "Ananya Verma",
        role: "Data Analyst",
        review:
          "Best responsive banking experience I’ve used.",
        image:
          "https://randomuser.me/api/portraits/women/68.jpg",
      },

    ].map((user, index) => (

      <motion.div

        key={index}

        whileHover={{
          y: -10
        }}

        className="
          bg-white/5
          border
          border-cyan-400/20
          rounded-[32px]
          p-8
          backdrop-blur-2xl
          transition-all
          duration-300
        "
      >

        <img
          src={user.image}
          alt={user.name}
          className="
            w-16
            h-16
            rounded-full
            object-cover
            border-2
            border-cyan-400
            mb-6
          "
        />

        <p className="text-slate-300 leading-relaxed text-lg">
          “{user.review}”
        </p>

        <div className="mt-8">

          <h3 className="text-xl font-bold">
            {user.name}
          </h3>

          <p className="text-cyan-400">
            {user.role}
          </p>

        </div>

      </motion.div>

    ))}

  </div>

</section>

{/* ========================= 😎🔥 FAQ SECTION ========================= */}

<section
  className="
    relative
    z-10
    px-4
    md:px-10
    py-16
    md:py-24
  "
>

  <div className="text-center mb-16">

    <h2
      className="
        text-3xl
        sm:text-4xl
        md:text-6xl
        font-black
      "
    >
      Frequently Asked Questions
    </h2>

  </div>

  <div className="max-w-5xl mx-auto space-y-6">

    {[
      {
        q: "Is SmartBank secure?",
        a: "Yes, SmartBank uses OTP verification and encrypted transactions.",
      },

      {
        q: "Can I use SmartBank on mobile?",
        a: "Yes, the platform is fully responsive for all devices.",
      },

      {
        q: "Does SmartBank support AI analytics?",
        a: "Yes, AI powered expense tracking and reports are included.",
      },

    ].map((faq, index) => (

      <motion.div

        key={index}

        whileHover={{
          scale: 1.02
        }}

        className="
          bg-white/5
          border
          border-cyan-400/20
          rounded-3xl
          p-6
          md:p-8
          backdrop-blur-2xl
        "
      >

        <h3 className="text-xl md:text-2xl font-bold">
          {faq.q}
        </h3>

        <p className="text-slate-300 mt-4 leading-relaxed">
          {faq.a}
        </p>

      </motion.div>

    ))}

  </div>

</section>

{/* ========================= 😎🔥 CAREERS SECTION ========================= */}

<section
  className="
    relative
    z-10
    px-4
    md:px-10
    py-16
    md:py-24
  "
>

  <div
    className="
      bg-gradient-to-r
      from-cyan-500/10
      to-blue-500/10
      border
      border-cyan-400/20
      rounded-[40px]
      p-8
      md:p-16
      backdrop-blur-2xl
      text-center
    "
  >

    <h2
      className="
        text-3xl
        sm:text-4xl
        md:text-6xl
        font-black
      "
    >
      Build The Future Of Banking
    </h2>

    <p
      className="
        mt-6
        text-slate-300
        text-base
        md:text-2xl
        max-w-3xl
        mx-auto
      "
    >
      Join our fintech team and create secure digital banking experiences.
    </p>

    <Link to="/careers">

  <button
      className="
        mt-10
        px-8
        py-4
        rounded-2xl
        bg-gradient-to-r
        from-cyan-500
        to-blue-500
        font-bold
        text-lg
      "
    >
      View Careers 🚀
    </button>
</Link>
  </div>

</section>

{/* ========================= 😎🔥 SUPPORT SECTION ========================= */}

<section
  className="
    relative
    z-10
    px-4
    md:px-10
    py-16
    md:py-24
  "
>

  <div
    className="
      grid
      grid-cols-1
      md:grid-cols-3
      gap-8
    "
  >

    {[
      "24/7 Customer Support",
      "Live Chat Assistance",
      "Smart Help Center",
    ].map((item, index) => (

      <motion.div

        key={index}

        whileHover={{
          y: -10
        }}

        className="
          bg-white/5
          border
          border-cyan-400/20
          rounded-3xl
          p-8
          backdrop-blur-2xl
          text-center
        "
      >

        <h3 className="text-2xl font-bold">
          {item}
        </h3>

        <p className="text-slate-300 mt-4">
          Fast and secure support for all banking services.
        </p>

      </motion.div>

    ))}

  </div>

</section>

{/* ========================= 😎🔥 CONTACT SECTION ========================= */}

<section
  className="
    relative
    z-10
    px-4
    md:px-10
    py-16
    md:py-24
  "
>

  <div
    className="
      grid
      grid-cols-1
      lg:grid-cols-2
      gap-10
    "
  >

    <div>

      <h2
        className="
          text-3xl
          sm:text-4xl
          md:text-6xl
          font-black
        "
      >
        Contact SmartBank
      </h2>

      <p
        className="
          mt-6
          text-slate-300
          text-base
          md:text-xl
          leading-relaxed
        "
      >
        Reach out to us for banking support, partnerships and assistance.
      </p>

    </div>

    <form

      onSubmit={handleSubmit}

      className="
        bg-white/5
        border
        border-cyan-400/20
        rounded-[40px]
        p-8
        backdrop-blur-md
      "
    >

      <div className="space-y-6">

        <input
          type="text"
          name="name"
          value={contactData.name}
          onChange={handleChange}
          placeholder="Your Name"
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
          value={contactData.email}
          onChange={handleChange}
          placeholder="Email Address"
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
          name="message"
          value={contactData.message}
          onChange={handleChange}
          placeholder="Your Message"
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
          Send Message 🚀
        </button>

      </div>

    </form>

  </div>

</section>
</div>
{/* ========================= 😎🔥 TERMS SECTION ========================= */}

<section
  className="
    relative
    z-10
    px-4
    md:px-10
    py-10
    border-t
    border-white/10
  "
>

  <div
    className="
      flex
      flex-col
      md:flex-row
      items-center
      justify-between
      gap-6
      text-center
      md:text-left
    "
  >

    <p className="text-slate-400">
      © 2026 SmartBank. All Rights Reserved.
    </p>

    <div
      className="
        flex
        flex-wrap
        justify-center
        gap-6
        text-slate-400
      "
    >

      <Link to="/terms">
Terms & Conditions
</Link>

<Link to="/privacy">
Privacy Policy
</Link>

<Link to="/security">
Security
</Link>

<Link to="/help-center">
Help Center
</Link>
    </div>

  </div>

</section>
         

  </>

);


  
};


export default Home;