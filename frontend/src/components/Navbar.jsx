import { Link } from "react-router-dom";

import { useState } from "react";

import { FaBars, FaTimes } from "react-icons/fa";

import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  return (

    <nav
      className="
        w-full
        px-4
        md:px-10
        py-5
        flex
        justify-between
        items-center
        bg-black/20
        backdrop-blur-xl
        border
        border-white/10
        text-white
        relative
        z-[999]
        rounded-2xl
      "
    >

      {/* LOGO 😎 */}

      <h1
        className="
          text-2xl
          md:text-3xl
          font-bold
          text-cyan-400
          z-[1000]
        "
      >
        SmartBank
      </h1>

      {/* DESKTOP MENU 😎 */}

      <div
        className="
          hidden
          md:flex
          items-center
          gap-8
          text-lg
        "
      >

        <Link
          to="/"
          className="
            hover:text-cyan-400
            transition-all
            duration-300
          "
        >
          Home
        </Link>

        <Link
          to="/features"
          className="
            hover:text-cyan-400
            transition-all
            duration-300
          "
        >
          Features
        </Link>

        <Link
          to="/about"
          className="
            hover:text-cyan-400
            transition-all
            duration-300
          "
        >
          About
        </Link>

        <Link
          to="/login"
          className="
            bg-cyan-500
            hover:bg-cyan-400
            transition-all
            duration-300
            px-5
            py-2
            rounded-xl
            font-semibold
            text-slate-950
          "
        >
          Login
        </Link>

      </div>

      {/* MOBILE MENU BUTTON 😎 */}

      <button
        className="
          md:hidden
          text-3xl
          z-[1000]
          text-white
        "
        onClick={() => setMenuOpen(!menuOpen)}
      >

        {menuOpen ? <FaTimes /> : <FaBars />}

      </button>

      {/* MOBILE MENU 😎🔥 */}

      <AnimatePresence>

        {menuOpen && (

          <motion.div

            initial={{ x: "-100%" }}

            animate={{ x: 0 }}

            exit={{ x: "-100%" }}

            transition={{ duration: 0.4 }}

            className="
              fixed
              top-0
              left-0
              w-[85%]
              sm:w-[70%]
              h-screen
              z-[999]
              bg-slate-950/95
              backdrop-blur-2xl
              border-r
              border-cyan-400/20
              shadow-[0_0_50px_rgba(6,182,212,0.25)]
              px-8
              py-8
              flex
              flex-col
            "
          >

            {/* MOBILE LINKS 😎 */}

            <div
              className="
                flex
                flex-col
                mt-24
                gap-8
              "
            >

              <Link
                to="/"
                onClick={() => setMenuOpen(false)}
                className="
                  text-2xl
                  font-semibold
                  text-white
                  hover:text-cyan-400
                  transition-all
                  duration-300
                "
              >
                Home
              </Link>

              <Link
                to="/features"
                onClick={() => setMenuOpen(false)}
                className="
                  text-2xl
                  font-semibold
                  text-white
                  hover:text-cyan-400
                  transition-all
                  duration-300
                "
              >
                Features
              </Link>

              <Link
                to="/about"
                onClick={() => setMenuOpen(false)}
                className="
                  text-2xl
                  font-semibold
                  text-white
                  hover:text-cyan-400
                  transition-all
                  duration-300
                "
              >
                About
              </Link>

              <Link
                to="/login"
                onClick={() => setMenuOpen(false)}
                className="
                  mt-6
                  bg-gradient-to-r
                  from-cyan-500
                  to-blue-500
                  text-white
                  text-center
                  text-xl
                  font-bold
                  py-4
                  rounded-2xl
                  shadow-[0_0_30px_rgba(6,182,212,0.4)]
                  hover:shadow-[0_0_50px_rgba(6,182,212,0.8)]
                  transition-all
                  duration-500
                "
              >
                Login
              </Link>

            </div>

          </motion.div>

        )}

      </AnimatePresence>

    </nav>

  );
};

export default Navbar;