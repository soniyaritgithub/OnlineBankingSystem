import Navbar from "../components/Navbar";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import API from "../services/api";

const Register = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  const handleRegister = async () => {

  try {

    const response = await API.post(
      "/auth/register",
      formData
    );

    console.log(
      response.data
    );

    alert(
      "Account Created Successfully"
    );

    navigate(
      "/login"
    );

  } catch (err) {

    console.log(
      err.response?.data ||
      err.message
    );

    alert(
      err.response?.data?.message ||
      "Registration Failed"
    );

  }

};

  return (

    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-950 overflow-x-hidden">

      <Navbar />

      <div className="flex justify-center items-center px-4 py-20">

        <div className="w-full max-w-md px-4">

          <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 md:p-8 rounded-3xl shadow-2xl">

            <h1 className="text-3xl md:text-4xl font-bold text-center text-white">

              Register

            </h1>

            <div className="mt-8">

              <input
                type="text"
                name="username"
                placeholder="Username"
                onChange={handleChange}
                className="w-full p-4 rounded-xl bg-white/20 text-white outline-none mb-5"
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
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
                onClick={handleRegister}
                className="w-full mt-6 bg-purple-500 hover:bg-purple-400 transition duration-300 py-4 rounded-xl text-white text-lg font-semibold"
              >

                Register

              </button>

              <p className="text-gray-300 text-center mt-6">

                Already have an account?

              </p>

              <Link to="/login">

                <button className="w-full mt-4 bg-cyan-500 hover:bg-cyan-400 transition duration-300 py-4 rounded-xl text-white text-lg font-semibold">

                  Login

                </button>

              </Link>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

};

export default Register;