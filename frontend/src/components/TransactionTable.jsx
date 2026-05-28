import { useEffect, useState } from "react";
import API from "../services/api";

const TransactionTable = () => {

  const [transactions, setTransactions] = useState([]);

  const [search, setSearch] = useState("");

  const [dateFilter, setDateFilter] = useState("");

  const [typeFilter, setTypeFilter] = useState("all");

  const fetchTransactions = async () => {

    try {

      const response = await API.get(
        "transactions/"
      );

      setTransactions(response.data);

    } catch (err) {

      console.log(err);

    }
  };

  useEffect(() => {

    const getTransactions = async () => {

      await fetchTransactions();

    };

    getTransactions();

  }, []);

  const filteredTransactions = transactions.filter((item) => {

    const matchesSearch =
  String(item.receiver_account || "")
    .toLowerCase()
    .includes(search.toLowerCase());

    const matchesDate =
      dateFilter === "" ||
      item.timestamp?.slice(0, 10) === dateFilter;

    const matchesType =
      typeFilter === "all" ||
      item.type === typeFilter;

    return (
      matchesSearch &&
      matchesDate &&
      matchesType
    );

  });

  return (

    <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-6 mt-10 overflow-x-auto">

      <h2 className="text-3xl font-bold text-white mb-6">
        Recent Transactions
      </h2>

      {/* FILTERS */}

      <div className="flex flex-col md:flex-row flex-wrap gap-4 mb-8">

        <input
          type="text"
          placeholder="Search Account Number"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-80 p-4 rounded-2xl bg-white/10 border border-white/10 outline-none text-white"
        />

        <input
          type="date"
          value={dateFilter}
          onChange={(e) => setDateFilter(e.target.value)}
          className="p-4 rounded-2xl bg-white/10 border border-white/10 outline-none text-white"
        />

        <select
          value={typeFilter}
          onChange={(e) => setTypeFilter(e.target.value)}
          className="p-4 rounded-2xl bg-white/10 border border-white/10 outline-none text-white"
        >

          <option value="all">
            All
          </option>

          <option value="credit">
            Credit
          </option>

          <option value="debit">
            Debit
          </option>

        </select>

      </div>

      <table className="w-full text-white">

        <thead>

          <tr className="border-b border-white/20 text-left">

  <th className="p-4">
    Receiver Account
  </th>

  <th className="p-4">
    Type
  </th>

  <th className="p-4">
    Amount
  </th>

  <th className="p-4">
    Date
  </th>

</tr>

        </thead>

        <tbody>

          {filteredTransactions.map((item) => (

            <tr
              key={item.id}
              className="border-b border-white/10"
            >

              <td className="p-4">
  {item.receiver_account}
</td>

<td className="p-4">

  {item.transaction_type === "credit" ? (

    <span className="text-green-400 font-bold">
      Credit
    </span>

  ) : (

    <span className="text-red-400 font-bold">
      Debit
    </span>

  )}

</td>

<td className="p-4 text-cyan-400">
  ₹{item.amount}
</td>

<td className="p-4">
  {item.timestamp}
</td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
};

export default TransactionTable;