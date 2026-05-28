import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import BalanceChart from "../charts/BalanceChart";
import TransactionTable from "../components/TransactionTable";
import ProfileCard from "../components/ProfileCard";
import MoneyTransfer from "../components/MoneyTransfer";
import API from "../services/api";

import { Link } from "react-router-dom";

const Dashboard = () => {

  const [user, setUser] = useState(null);

  const [, setActiveSection] = useState("dashboard");

const fetchProfile = async () => {

  try {

    const savedUser =
JSON.parse(
localStorage.getItem("user")
);

const response =
await API.get(
`/profile?email=${savedUser.email}`
);

    if (response?.data) {

      setUser(response.data);

    }

  } catch (err) {

    console.log("Profile Error:", err);

  }

};

  // PDF DOWNLOAD 😎

  const downloadStatement = async () => {

    try {

      const token = localStorage.getItem("token");

      const response = await fetch(
        "https://onlinebankingsystem-qguw.onrender.com/api/download-statement",
        {
          method: "GET",

          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const blob = await response.blob();

      const fileUrl =
        window.URL.createObjectURL(blob);

      const link =
        document.createElement("a");

      link.href = fileUrl;

      link.download =
        "statement.pdf";

      document.body.appendChild(link);

      link.click();

      link.remove();

    } catch (err) {

      console.log(err);

    }

  };

 useEffect(() => {

  const loadProfile = async () => {

    try {

      await fetchProfile();

    } catch (err) {

      console.log(err);

    }

  };

  loadProfile();

}, []);

  return (

    <div className="min-h-screen bg-slate-950 text-white">

      <Navbar />

      <div className="flex">

        <Sidebar
          setActiveSection={
            setActiveSection
          }
        />

        <div className="flex-1 p-4 pt-24 md:p-8 text-white overflow-x-hidden">

          <h1 className="text-3xl md:text-5xl font-bold">

            Banking Dashboard

          </h1>

          <div className="grid md:grid-cols-3 gap-6 mt-10">

            <div className="bg-white/10 backdrop-blur-lg p-4 md:p-8 rounded-3xl border border-white/20">

              <h2 className="text-xl md:text-3xl">

                Total Balance

              </h2>

              <p className="text-3xl md:text-5xl font-bold text-cyan-400 mt-4">

                ₹{user?.balance || 0}

              </p>

            </div>

            <div className="bg-white/10 backdrop-blur-lg p-4 md:p-8 rounded-3xl border border-white/20">

              <h2 className="text-xl md:text-3xl">

                Transactions

              </h2>

              <p className="text-3xl md:text-5xl font-bold text-green-400 mt-4">

                120

              </p>

            </div>

            <div className="bg-white/10 backdrop-blur-lg p-4 md:p-8 rounded-3xl border border-white/20">

              <h2 className="text-xl md:text-3xl">

                Loans

              </h2>

              <p className="text-3xl md:text-5xl font-bold text-pink-400 mt-4">

                2 Active

              </p>

            </div>

          </div>

          <div className="flex flex-wrap gap-4 mt-8">

            <Link to="/upi-payment">

              <button className="px-5 py-3 rounded-xl text-sm md:text-lg font-bold bg-cyan-500">

                UPI Payment 📱

              </button>

            </Link>

            <Link to="/debit-card">

              <button className="px-5 py-3 rounded-xl text-sm md:text-lg font-bold bg-purple-600">

                Debit Card 💳

              </button>

            </Link>

            <Link to="/loan">

              <button className="px-5 py-3 rounded-xl text-sm md:text-lg font-bold bg-green-600">

                Loan Apply 🏦

              </button>

            </Link>

            <Link to="/emi-calculator">

              <button className="px-5 py-3 rounded-xl text-sm md:text-lg font-bold bg-orange-600">

                EMI Calculator 📊

              </button>

            </Link>

            <Link to="/admin-dashboard">

              <button className="px-5 py-3 rounded-xl text-sm md:text-lg font-bold bg-red-600">

                Admin Dashboard 👨‍💻

              </button>

            </Link>

          </div>

          <ProfileCard user={user} />

          <BalanceChart />

          <MoneyTransfer
            fetchProfile={
              fetchProfile
            }
          />

          <TransactionTable />

          <button
            onClick={
              downloadStatement
            }
            className="bg-cyan-500 hover:bg-cyan-400 px-5 py-3 rounded-2xl mt-8 font-bold"
          >

            Download Statement PDF

          </button>

        </div>

      </div>

    </div>

  );

};

export default Dashboard;