import toast from "react-hot-toast";
import { useState } from "react";
import API from "../services/api";
import { TailSpin } from "react-loader-spinner";

const MoneyTransfer = ({ fetchProfile }) => {

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    account_number: "",
    ifsc_code: "",
    amount: "",
    transaction_pin: "",
  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  const handleTransfer = async () => {

    try {

      setLoading(true);

      const response = await API.post(
        "send-money/",
        formData
      );

      toast.success(response.data.message);

      fetchProfile();

      setLoading(false);

    } catch (err) {

      console.log(err);

      setLoading(false);

      toast.error(
  err.response?.data?.error ||
  "Transfer Failed"
);

    }
  };

  return (

    <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-6 mt-10 text-white">

      <h2 className="text-3xl font-bold mb-6">
        Bank Transfer
      </h2>

      <div className="space-y-5">

        <input
          type="text"
          name="account_number"
          placeholder="Receiver Account Number"
          onChange={handleChange}
          className="w-full p-4 rounded-xl bg-white/20 outline-none"
        />

        <input
          type="text"
          name="ifsc_code"
          placeholder="IFSC Code"
          onChange={handleChange}
          className="w-full p-4 rounded-xl bg-white/20 outline-none"
        />

        <input
          type="number"
          name="amount"
          placeholder="Amount"
          onChange={handleChange}
          className="w-full p-4 rounded-xl bg-white/20 outline-none"
        />

        <input
          type="password"
          name="transaction_pin"
          placeholder="Transaction PIN"
          onChange={handleChange}
          className="w-full p-4 rounded-xl bg-white/20 text-white outline-none"
        />

        <button
          onClick={handleTransfer}
          disabled={loading}
          className="bg-cyan-500 hover:bg-cyan-400 transition px-8 py-4 rounded-2xl w-full flex justify-center items-center"
        >

          {loading ? (

            <TailSpin
              height="25"
              width="25"
              color="#fff"
            />

          ) : (

            "Transfer Money"

          )}

        </button>

      </div>

    </div>
  );
};

export default MoneyTransfer;