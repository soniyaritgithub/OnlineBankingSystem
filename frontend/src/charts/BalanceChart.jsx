import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", balance: 4000 },
  { month: "Feb", balance: 7000 },
  { month: "Mar", balance: 10000 },
  { month: "Apr", balance: 9000 },
  { month: "May", balance: 14000 },
];

const BalanceChart = () => {
  return (
    <div className="bg-white/10 backdrop-blur-lg p-6 rounded-3xl border border-white/20 h-[400px] mt-10">

      <h2 className="text-2xl text-white mb-6">
        Balance Analytics
      </h2>

      <ResponsiveContainer width="100%" height="85%">
        <LineChart data={data}>
          <XAxis dataKey="month" stroke="#fff" />
          <YAxis stroke="#fff" />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="balance"
            stroke="#22d3ee"
            strokeWidth={4}
          />
        </LineChart>
      </ResponsiveContainer>

    </div>
  );
};

export default BalanceChart;