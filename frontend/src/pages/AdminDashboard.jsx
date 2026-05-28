import {
  useEffect,
  useState
} from "react";

import API from "../services/api";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const AdminDashboard = () => {

  // DASHBOARD DATA 😎

  const [dashboardData, setDashboardData] = useState({

    total_users: 0,

    total_loans: 0,

    total_transactions: 0,

    fraud_alerts: 0

  });

  // FETCH DASHBOARD 😎


  // USE EFFECT 😎

 useEffect(() => {

  let mounted = true;

  const loadDashboard = async () => {

    try {

      const response = await API.get(
        "/admin-dashboard"
      );

      if (mounted) {

        setDashboardData(
          response.data
        );

      }

    } catch (error) {

      console.log(
        "Dashboard Error:",
        error.response?.data ||
        error.message
      );

    }

  };

  loadDashboard();

  return () => {

    mounted = false;

  };

}, []);
  // CHART DATA 😎

  const chartData = [

    {
      name: "Users",
      value: dashboardData.total_users
    },

    {
      name: "Loans",
      value: dashboardData.total_loans
    },

    {
      name: "Transactions",
      value: dashboardData.total_transactions
    },

    {
      name: "Frauds",
      value: dashboardData.fraud_alerts
    }

  ];

  return (

    <div
      className="p-4 md:p-8"
      style={{
        color: "white",
        background: "#0f172a",
        minHeight: "100vh"
      }}
    >

      <h1 className="text-3xl md:text-5xl font-bold">
        Admin Dashboard 🚀
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
          marginTop: "30px"
        }}
      >

        <div
          className="card p-4 md:p-8"
          style={{
            background: "#1e293b",
            borderRadius: "15px",
            textAlign: "center"
          }}
        >

          <h2 className="text-xl md:text-2xl">
            Total Users
          </h2>

          <h1 className="text-3xl md:text-5xl font-bold mt-4">
            {dashboardData.total_users}
          </h1>

        </div>

        <div
          className="card p-4 md:p-8"
          style={{
            background: "#1e293b",
            borderRadius: "15px",
            textAlign: "center"
          }}
        >

          <h2 className="text-xl md:text-2xl">
            Total Loans
          </h2>

          <h1 className="text-3xl md:text-5xl font-bold mt-4">
            {dashboardData.total_loans}
          </h1>

        </div>

        <div
          className="card p-4 md:p-8"
          style={{
            background: "#1e293b",
            borderRadius: "15px",
            textAlign: "center"
          }}
        >

          <h2 className="text-xl md:text-2xl">
            Total Transactions
          </h2>

          <h1 className="text-3xl md:text-5xl font-bold mt-4">
            {dashboardData.total_transactions}
          </h1>

        </div>

        <div
          className="card p-4 md:p-8"
          style={{
            background: "#1e293b",
            borderRadius: "15px",
            textAlign: "center"
          }}
        >

          <h2 className="text-xl md:text-2xl">
            Fraud Alerts
          </h2>

          <h1 className="text-3xl md:text-5xl font-bold mt-4">
            {dashboardData.fraud_alerts}
          </h1>

        </div>

      </div>

      {/* CHART SECTION 😎🔥 */}

      <div
        className="p-4 md:p-8"
        style={{
          marginTop: "50px",
          background: "#1e293b",
          borderRadius: "20px"
        }}
      >

        <h2
          className="text-2xl md:text-4xl font-bold"
          style={{ marginBottom: "20px" }}
        >
          Banking Analytics 📊
        </h2>

        <ResponsiveContainer
          width="100%"
          height={300}
        >

          <BarChart data={chartData}>

            <XAxis dataKey="name" />

            <YAxis />

            <Tooltip />

            <Bar
              dataKey="value"
              fill="#06b6d4"
            />

          </BarChart>

        </ResponsiveContainer>

      </div>

    </div>

  );

};

export default AdminDashboard;