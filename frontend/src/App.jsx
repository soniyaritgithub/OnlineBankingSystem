import { Routes, Route } from "react-router-dom";

import ProtectedRoute from "./components/ProtectedRoute";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Features from "./pages/Features";
import About from "./pages/About";
import ForgotPassword from "./pages/ForgotPassword";
import AdminDashboard from "./pages/AdminDashboard";
import AdminLogin from "./pages/AdminLogin";
import UpiPayment from "./pages/UpiPayment";
import EmiCalculator from "./pages/EmiCalculator";
import DebitCard from "./pages/DebitCard";
import Loan from "./pages/Loan";
import Careers from "./pages/Careers";
import SavingHabits from "./pages/SavingHabits";
import AIBanking from "./pages/AIBanking";
import SecurePayments from "./pages/SecurePayments";
import Terms from "./pages/Terms";

import Privacy from "./pages/Privacy";

import Security from "./pages/Security";

import HelpCenter from "./pages/HelpCenter";


function App() {

  return (

    <Routes>

      {/* HOME PAGE */}

      <Route
        path="/"
        element={<Home />}
      />

      {/* LOGIN PAGE */}

      <Route
        path="/login"
        element={<Login />}
      />

      {/* ADMIN LOGIN PAGE 😎 */}

      <Route
        path="/admin-login"
        element={<AdminLogin />}
      />

      {/* REGISTER PAGE */}

      <Route
        path="/register"
        element={<Register />}
      />

      {/* FORGOT PASSWORD PAGE */}

      <Route
        path="/forgot-password"
        element={<ForgotPassword />}
      />

      {/* FEATURES PAGE */}

      <Route
        path="/features"
        element={<Features />}
      />

      {/* ABOUT PAGE */}

      <Route
        path="/about"
        element={<About />}
      />

      {/* PROTECTED DASHBOARD */}

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>

            <Dashboard />

          </ProtectedRoute>
        }
      />

      {/* ADMIN DASHBOARD 😎 */}

      <Route
        path="/admin-dashboard"
        element={<AdminDashboard />}
      />
<Route
    path="/loan"
    element={<Loan />}
/>
      <Route
    path="/upi-payment"
    element={<UpiPayment />}
/>

<Route
    path="/emi-calculator"
    element={<EmiCalculator />}
/>
<Route
    path="/debit-card"
    element={<DebitCard />}
/>
<Route path="/careers" element={<Careers />} />

 <Route
    path="/blogs/saving-habits"
    element={<SavingHabits />}
  />

  <Route
    path="/blogs/ai-banking"
    element={<AIBanking />}
  />

  <Route
    path="/blogs/secure-payments"
    element={<SecurePayments />}
  />

<Route path="/terms" element={<Terms />} />

<Route path="/privacy" element={<Privacy />} />

<Route path="/security" element={<Security />} />

<Route path="/help-center" element={<HelpCenter />} />

    </Routes>
      
      
  );

}

export default App;