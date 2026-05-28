import { useState } from "react";
import API from "../services/api";

const ForgotPassword = () => {

  const [email, setEmail] = useState("");

  const handleSendOTP = async () => {

    try {

      const response = await API.post(
        "forgot-password/",
        { email }
      );

      alert(response.data.message);

    } catch (err) {

      alert(
        err.response?.data?.error
      );

    }
  };

  return (

    <div className="min-h-screen flex justify-center items-center bg-slate-950 text-white">

      <div className="bg-white/10 p-10 rounded-3xl w-full max-w-md">

        <h1 className="text-4xl font-bold mb-8">
          Forgot Password
        </h1>

        <input
          type="email"
          placeholder="Enter Email"
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-4 rounded-2xl bg-white/10 mb-6 outline-none"
        />

        <button
          onClick={handleSendOTP}
          className="bg-cyan-500 w-full py-4 rounded-2xl"
        >

          Send OTP

        </button>

      </div>

    </div>

  );
};

export default ForgotPassword;