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

  const [activeSection, setActiveSection] = useState("dashboard");

  const fetchProfile = async () => {

    try {

      const response = await API.get("profile/");

      setUser(response.data);

    } catch (err) {

      console.log(err);

    }
  };

  // PDF DOWNLOAD 😎

  const downloadStatement = async () => {

    try {

      const token = localStorage.getItem("token");

      const response = await fetch(
        "http://127.0.0.1:8000/api/download-statement/",
        {
          method: "GET",

          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const blob = await response.blob();

      const url = window.URL.createObjectURL(blob);

      const link = document.createElement("a");

      link.href = url;

      link.download = "statement.pdf";

      document.body.appendChild(link);

      link.click();

      link.remove();

    } catch (err) {

      console.log(err);

    }
  };

  useEffect(() => {

    const getProfile = async () => {

      await fetchProfile();

    };

    getProfile();

  }, []);

  return (

    <div className="min-h-screen bg-slate-950 text-white">

      <Navbar />

      <div className="flex">

        <Sidebar setActiveSection={setActiveSection} />

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

                ₹{user?.balance}

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

          {/* ACTION BUTTONS 😎🔥 */}

          <div
            className="flex flex-wrap gap-4 mt-8"
          >

            {/* UPI PAYMENT 😎 */}

            <Link to="/upi-payment">

              <button
                className="px-5 py-3 rounded-xl text-sm md:text-lg font-bold"
                style={{
                  background: "#06b6d4",
                  color: "white",
                  border: "none",
                  cursor: "pointer"
                }}
              >

                UPI Payment 📱

              </button>

            </Link>

            {/* DEBIT CARD 😎 */}

            <Link to="/debit-card">

              <button
                className="px-5 py-3 rounded-xl text-sm md:text-lg font-bold"
                style={{
                  background: "#7c3aed",
                  color: "white",
                  border: "none",
                  cursor: "pointer"
                }}
              >

                Debit Card 💳

              </button>

            </Link>

            {/* LOAN APPLY 😎 */}

            <Link to="/loan">

              <button
                className="px-5 py-3 rounded-xl text-sm md:text-lg font-bold"
                style={{
                  background: "#16a34a",
                  color: "white",
                  border: "none",
                  cursor: "pointer"
                }}
              >

                Loan Apply 🏦

              </button>

            </Link>

            {/* EMI CALCULATOR 😎 */}

            <Link to="/emi-calculator">

              <button
                className="px-5 py-3 rounded-xl text-sm md:text-lg font-bold"
                style={{
                  background: "#ea580c",
                  color: "white",
                  border: "none",
                  cursor: "pointer"
                }}
              >

                EMI Calculator 📊

              </button>

            </Link>

            {/* ADMIN DASHBOARD 😎 */}

            <Link to="/admin-dashboard">

              <button
                className="px-5 py-3 rounded-xl text-sm md:text-lg font-bold"
                style={{
                  background: "#dc2626",
                  color: "white",
                  border: "none",
                  cursor: "pointer"
                }}
              >

                Admin Dashboard 👨‍💻

              </button>

            </Link>

          </div>

          <ProfileCard user={user} />

          <BalanceChart />

          <MoneyTransfer fetchProfile={fetchProfile} />

          <TransactionTable />

          {/* DOWNLOAD PDF BUTTON 😎 */}

          <button
            onClick={downloadStatement}
            className="bg-cyan-500 hover:bg-cyan-400 transition duration-300 px-5 py-3 md:px-6 md:py-4 rounded-2xl mt-8 text-sm md:text-lg font-bold"
          >

            Download Statement PDF

          </button>

          {/* DYNAMIC CONTENT */}

          {activeSection === "transactions" && (

            <div className="bg-white/10 border border-white/10 rounded-3xl p-6 md:p-10 mt-10">

              <h2 className="text-3xl md:text-5xl font-bold mb-8 text-cyan-400">
                Recent Transactions
              </h2>

              <div className="space-y-6">

                <div className="flex justify-between items-center bg-white/5 p-5 rounded-2xl">

                  <div>

                    <h3 className="font-bold text-lg md:text-2xl">
                      Money Transfer
                    </h3>

                    <p className="text-gray-400 text-sm md:text-base">
                      Sent to ACC4501
                    </p>

                  </div>

                  <span className="text-red-400 font-bold text-lg md:text-2xl">
                    - ₹500
                  </span>

                </div>

                <div className="flex justify-between items-center bg-white/5 p-5 rounded-2xl">

                  <div>

                    <h3 className="font-bold text-lg md:text-2xl">
                      Salary Credit
                    </h3>

                    <p className="text-gray-400 text-sm md:text-base">
                      Monthly Salary
                    </p>

                  </div>

                  <span className="text-green-400 font-bold text-lg md:text-2xl">
                    + ₹25,000
                  </span>

                </div>

              </div>

            </div>

          )}

        </div>

      </div>

    </div>

  );
};

export default Dashboard;