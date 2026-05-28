import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";

import API from "../services/api";

const Login = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  const handleLogin = async () => {

    try {

      const response = await API.post(
        "/auth/login",
        formData
      );

      console.log(
        response.data
      );

      localStorage.setItem(
        "user",
        JSON.stringify(
          response.data.user
        )
      );

      localStorage.setItem(
        "token",
        "loggedin"
      );

      alert(
        "Login Successful"
      );

      navigate(
        "/dashboard"
      );

    } catch (error) {

      console.log(
        error.response?.data ||
        error.message
      );

      alert(
        error.response?.data?.message ||
        "Invalid Credentials"
      );

    }

  };

  return (

    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-950 overflow-x-hidden">

      <Navbar />

      <div className="flex justify-center items-center px-4 py-20">

        <div className="w-full max-w-md px-4">

          <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 md:p-8 rounded-3xl shadow-2xl">

            <h1 className="text-3xl md:text-4xl font-bold text-center text-white">

              Login

            </h1>

            <div className="mt-8">

              <input
                type="text"
                name="email"
                placeholder="Username or Email"
                onChange={handleChange}
                className="w-full p-4 rounded-xl bg-white/20 text-white outline-none mb-5"
              />

              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
                className="w-full p-4 rounded-xl bg-white/20 text-white outline-none"
              />

              <button
                onClick={handleLogin}
                className="w-full mt-6 bg-cyan-500 hover:bg-cyan-400 transition duration-300 py-4 rounded-xl text-white text-lg font-semibold"
              >

                Login

              </button>

              <div className="text-center mt-4">

                <Link
                  to="/forgot-password"
                  className="text-cyan-400 hover:text-cyan-300 transition duration-300"
                >

                  Forgot Password?

                </Link>

              </div>

              <p className="text-gray-300 text-center mt-6">

                Don&apos;t have an account?

              </p>

              <Link to="/register">

                <button className="w-full mt-4 bg-purple-500 hover:bg-purple-400 transition duration-300 py-4 rounded-xl text-white text-lg font-semibold">

                  Register

                </button>

              </Link>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

};

export default Login;