import React, { useState } from "react";
import { useTranslation } from "../providers/TranslationProvider";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  AreaChart,
  Area,
  BarChart,
  Bar,
  Tooltip,
} from "recharts";
import { FaHome, FaBuilding, FaFileAlt, FaBell, FaUser, FaTrash, FaSearch } from "react-icons/fa";
import { PiEyeFill } from "react-icons/pi";
import { IoPersonSharp } from "react-icons/io5";
import { CiCirclePlus } from "react-icons/ci";
import { LiaStarSolid } from "react-icons/lia";
import WebsiteVisitorsChart from "../components/WebsiteVisitorsChart/WebsiteVisitorsChart";
import LatestTransactions from "../components/LatestTransactions/LatestTransactions";

const HomePage = () => {
  const [selectedYear, setSelectedYear] = useState("2024");
  const { translate } = useTranslation();

  // Sample data
  const totalRevenueData = [
    { month: "Jan", revenue: 10000, expenses: 5000 },
    { month: "Feb", revenue: 30000, expenses: 15000 },
    { month: "Mar", revenue: 20000, expenses: 10000 },
    { month: "Apr", revenue: 40000, expenses: 20000 },
    { month: "May", revenue: 100000, expenses: 30000 },
    { month: "Jun", revenue: 125200, expenses: 40000 },
    { month: "Jul", revenue: 180000, expenses: 50000 },
    { month: "Aug", revenue: 150000, expenses: 60000 },
    { month: "Sep", revenue: 180000, expenses: 70000 },
    { month: "Oct", revenue: 200000, expenses: 65000 },
    { month: "Nov", revenue: 220000, expenses: 70000 },
    { month: "Dec", revenue: 250000, expenses: 80000 },
  ];

  const totalProfitData = [
    { name: "11 AM", profit: 200, loss: 100 },
    { name: "12 AM", profit: 250, loss: 120 },
    { name: "1 PM", profit: 180, loss: 90 },
    { name: "2 PM", profit: 300, loss: 150 },
    { name: "3 PM", profit: 220, loss: 110 },
    { name: "4 PM", profit: 280, loss: 140 },
    { name: "5 PM", profit: 230, loss: 115 },
    { name: "6 PM", profit: 190, loss: 95 },
    { name: "7 PM", profit: 270, loss: 135 },
    { name: "8 PM", profit: 210, loss: 105 },
    { name: "9 PM", profit: 260, loss: 130 },
    { name: "10 PM", profit: 240, loss: 120 },
    { name: "11 PM", profit: 290, loss: 145 },
  ];

  const totalSessionsData = [
    { time: "12 AM", sessions: 50 },
    { time: "1 AM", sessions: 70 },
    { time: "2 AM", sessions: 60 },
    { time: "3 AM", sessions: 90 },
    { time: "4 AM", sessions: 80 },
    { time: "5 AM", sessions: 120 },
    { time: "6 AM", sessions: 110 },
    { time: "7 AM", sessions: 150 },
    { time: "8 AM", sessions: 130 },
    { time: "9 AM", sessions: 180 },
    { time: "10 AM", sessions: 160 },
    { time: "11 AM", sessions: 200 },
  ];

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-gray-800 text-white p-2 rounded shadow-lg">
          <p className="text-sm">{`June 21, 2023`}</p>
          <p className="text-lg font-bold">{`$${payload[0].value / 1000}K`}</p>
          <p className="text-green-400 text-xs">{`2.5%`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="p-4 md:p-6 overflow-auto">
      {/* Main Content */}
      <div className="w-full">
        {/* Total Revenue Chart Section */}
        <div className="w-full bg-black/60 rounded-lg p-4 md:p-6 mb-6 shadow-[inset_0_0_19px_0_rgba(179,244,86,0.5)] flex flex-col lg:flex-row gap-4">
          {/* Left Chart - Main Revenue */}
          <div className="w-full lg:w-[60%] flex flex-col">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
              <h3 className="text-lg font-semibold text-white">Total revenue</h3>
              <div className="flex flex-wrap items-center gap-2 md:gap-4">
                <span className="flex items-center text-sm text-white">
                  <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                  Revenue
                </span>
                <span className="flex items-center text-sm text-white">
                  <span className="w-2 h-2 rounded-full bg-red-500 mr-2"></span>
                  Expenses
                </span>
                <select
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="bg-gray-800 text-white border border-gray-700 rounded-lg px-3 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-green-500"
                >
                  <option value="2024">Jan 2024 - Dec 2024</option>
                  <option value="2023">Jan 2023 - Dec 2023</option>
                  <option value="2025">Jan 2025 - Dec 2025</option>
                </select>
              </div>
            </div>
            
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">
              $240.8K <span className="text-green-500 text-lg font-medium">24.8%</span>
            </div>
            
            <div className="h-64 sm:h-80 md:h-96">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={totalRevenueData}
                  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                  <XAxis
                    dataKey="month"
                    tick={{ fill: "#6b7280", fontSize: 12 }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <YAxis
                    tickFormatter={(value) => `${value / 1000}K`}
                    tick={{ fill: "#6b7280", fontSize: 12 }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Area
                    type="monotone"
                    dataKey="revenue"
                    stroke="#4ade80"
                    fill="rgba(74, 222, 128, 0.3)"
                    strokeWidth={2}
                  />
                  <Area
                    type="monotone"
                    dataKey="expenses"
                    stroke="#f87171"
                    fill="rgba(248, 113, 113, 0.3)"
                    strokeWidth={2}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Right Side Sections */}
          <div className="w-full lg:w-[40%] lg:border-l lg:border-primary grid grid-cols-1 gap-4 lg:gap-1">
            {/* Total Profit Section */}
            <div className="bg-black/50 p-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-white">Total profit</h3>
                <span className="text-green-500 text-sm font-medium">18.5%</span>
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-4">$144.6K</div>
              <div className="h-32 sm:h-40">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={totalProfitData}
                    margin={{ top: 5, right: 0, left: 0, bottom: 5 }}
                  >
                    <XAxis
                      dataKey="name"
                      tick={{ fill: "#6b7280", fontSize: 10 }}
                      axisLine={false}
                      tickLine={false}
                    />
                    <YAxis hide domain={[0, 350]} />
                    <Tooltip cursor={{ fill: "transparent" }} />
                    <Bar dataKey="profit" fill="#82ca9d" barSize={10} />
                    <Bar dataKey="loss" fill="#ff7300" barSize={10} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className="flex items-center justify-between mt-2">
                <span className="text-sm text-gray-500">Last 12 months</span>
                <button className="text-green-500 text-sm">View report</button>
              </div>
            </div>

            <div className="w-full border-t border-primary hidden lg:block"></div>

            {/* Total Sessions Section */}
            <div className="bg-black/50 p-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-white">Total sessions</h3>
                <span className="text-green-500 text-sm font-medium">35.8%</span>
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-4">400</div>
              <div className="h-32 sm:h-40">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={totalSessionsData}
                    margin={{ top: 5, right: 0, left: 0, bottom: 5 }}
                  >
                    <XAxis dataKey="time" hide />
                    <YAxis hide domain={[0, 250]} />
                    <Tooltip cursor={{ strokeDasharray: "3 3" }} />
                    <Line
                      type="monotone"
                      dataKey="sessions"
                      stroke="#82ca9d"
                      strokeWidth={2}
                      dot={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <div className="flex items-center justify-between mt-2">
                <span className="text-green-500 text-sm">Live: 10k visitors</span>
                <button className="text-green-500 text-sm">View report</button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="w-full flex flex-col lg:flex-row justify-center items-stretch gap-4">
          <div className="w-full h-full lg:w-1/2">
            <WebsiteVisitorsChart />
          </div>
          <div className="w-full lg:w-1/2">
            <LatestTransactions />
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomePage;