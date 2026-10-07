import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  LayoutDashboard,
  Database,
  ShieldCheck,
  TrendingUp,
  AlertTriangle,
  Lightbulb,
  Settings,
  LogOut,
  Search,
  Bell,
  ChevronDown,
  ArrowUpRight,
  ArrowDownRight,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

function Dashboard() {
  const navigate = useNavigate();

  const [activePanel, setActivePanel] = useState(null);

  return (
    <div className="min-h-screen bg-slate-950 text-white flex relative overflow-hidden">

  <style>{`
    @keyframes dashboardGrid {
      from {
        transform: translateY(0);
      }
      to {
        transform: translateY(50px);
      }
    }

    @keyframes dashboardFloat {
      0%, 100% {
        transform: translate(0, 0) scale(1);
      }
      50% {
        transform: translate(35px, -25px) scale(1.08);
      }
    }

    @keyframes dashboardFloatTwo {
      0%, 100% {
        transform: translate(0, 0);
      }
      50% {
        transform: translate(-40px, 30px);
      }
    }

    @keyframes dashboardPulse {
      0%, 100% {
        opacity: .18;
      }
      50% {
        opacity: .45;
      }
    }

    .dashboard-grid {
      background-image:
        linear-gradient(rgba(59,130,246,.045) 1px, transparent 1px),
        linear-gradient(90deg, rgba(59,130,246,.045) 1px, transparent 1px);
      background-size: 55px 55px;
      animation: dashboardGrid 14s linear infinite;
    }

    .dashboard-glow-one {
      animation: dashboardFloat 10s ease-in-out infinite;
    }

    .dashboard-glow-two {
      animation: dashboardFloatTwo 12s ease-in-out infinite;
    }

    .dashboard-pulse {
      animation: dashboardPulse 4s ease-in-out infinite;
    }
  `}</style>

  {/* Animated grid */}
  <div className="dashboard-grid fixed inset-0 pointer-events-none" />

  {/* Blue glow */}
  <div className="dashboard-glow-one fixed -top-40 left-72 w-[420px] h-[420px] bg-blue-600/10 blur-3xl rounded-full pointer-events-none" />

  {/* Purple glow */}
  <div className="dashboard-glow-two fixed top-1/3 right-0 w-[400px] h-[400px] bg-indigo-600/10 blur-3xl rounded-full pointer-events-none" />

  {/* Cyan glow */}
  <div className="dashboard-glow-one fixed bottom-[-150px] left-1/3 w-[350px] h-[350px] bg-cyan-500/5 blur-3xl rounded-full pointer-events-none" />

  {/* Small glowing particles */}
  <div className="dashboard-pulse fixed top-28 left-[43%] w-1.5 h-1.5 rounded-full bg-blue-400 shadow-lg shadow-blue-500/70 pointer-events-none" />

  <div className="dashboard-pulse fixed top-[55%] right-[20%] w-1 h-1 rounded-full bg-cyan-300 shadow-lg shadow-cyan-400/70 pointer-events-none" />

  <div className="dashboard-pulse fixed bottom-[18%] left-[32%] w-1 h-1 rounded-full bg-indigo-300 shadow-lg shadow-indigo-400/70 pointer-events-none" />

      {/* ================= SIDEBAR ================= */}

      <aside className="w-64 bg-slate-900 border-r border-slate-800 flex flex-col">

        {/* LOGO */}

        <div className="h-20 px-6 flex items-center gap-3 border-b border-slate-800">

          <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-600/20">
            <Database size={21} />
          </div>

          <div>
            <h1 className="font-semibold tracking-wide">
              DataGuard
            </h1>

            <p className="text-xs text-slate-500">
              Data Intelligence
            </p>
          </div>

        </div>


        {/* ================= NAVIGATION ================= */}

        <nav className="flex-1 px-4 py-6 space-y-1">

          <p className="text-xs font-semibold text-slate-600 uppercase tracking-wider px-3 mb-3">
            Overview
          </p>


          {/* DASHBOARD */}

          <button
            onClick={() => navigate("/dashboard")}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg bg-blue-600/10 text-blue-400"
          >

            <LayoutDashboard size={18} />

            <span className="text-sm font-medium">
              Dashboard
            </span>

          </button>


          {/* DATASETS */}

          <button
            onClick={() => navigate("/datasets")}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-400 hover:bg-slate-800 hover:text-white transition"
          >

            <Database size={18} />

            <span className="text-sm">
              Datasets
            </span>

          </button>


          <p className="text-xs font-semibold text-slate-600 uppercase tracking-wider px-3 mt-8 mb-3">
            Monitoring
          </p>


          {/* DATA QUALITY */}

          <button
  onClick={() => navigate("/datasets/1/quality")}
  className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-400 ..."
>

            <ShieldCheck size={18} />

            <span className="text-sm">
              Data Quality
            </span>

          </button>


          {/* DATA DRIFT */}

          <button
          onClick={() => navigate("/datasets/1/drift")}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-400 hover:bg-slate-800 hover:text-white transition"
          >

            <TrendingUp size={18} />

            <span className="text-sm">
              Data Drift
            </span>

          </button>


          {/* ANOMALIES */}

          <button
          onClick={() => navigate("/datasets/1/anomalies")}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-400 hover:bg-slate-800 hover:text-white transition"
          >

            <AlertTriangle size={18} />

            <span className="text-sm">
              Anomalies
            </span>

          </button>


          {/* RECOMMENDATIONS */}

          <button
          onClick={() => navigate("/datasets/1/recommendations")}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-400 hover:bg-slate-800 hover:text-white transition"
          >

            <Lightbulb size={18} />

            <span className="text-sm">
              Recommendations
            </span>

          </button>

        </nav>


        {/* ================= BOTTOM NAV ================= */}

        <div className="p-4 border-t border-slate-800 space-y-1">

          <button
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-400 hover:bg-slate-800 hover:text-white transition"
          >

            <Settings size={18} />

            <span className="text-sm">
              Settings
            </span>

          </button>


          <button
            onClick={() => navigate("/login")}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-400 hover:bg-slate-800 hover:text-white transition"
          >

            <LogOut size={18} />

            <span className="text-sm">
              Logout
            </span>

          </button>

        </div>

      </aside>


      {/* ================= MAIN AREA ================= */}

      <main className="flex-1 min-w-0">


        {/* ================= TOP NAVBAR ================= */}

        <header className="h-20 border-b border-slate-800 bg-slate-900/80 backdrop-blur flex items-center justify-between px-8">

          {/* SEARCH */}

          <div className="relative w-80">

            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"
            />

            <input
              type="text"
              placeholder="Search datasets..."
              className="w-full bg-slate-950 border border-slate-800 rounded-lg py-2.5 pl-10 pr-4 text-sm text-white placeholder-slate-600 outline-none focus:border-blue-500"
            />

          </div>


          {/* RIGHT SIDE */}

          <div className="flex items-center gap-5">

            {/* NOTIFICATIONS */}

            <button className="relative text-slate-400 hover:text-white transition">

              <Bell size={20} />

              <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-red-500" />

            </button>


            {/* PROFILE */}

            <div className="flex items-center gap-3 pl-5 border-l border-slate-800">

              <div className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center font-semibold text-sm">
                IS
              </div>

              <div className="hidden md:block">

                <p className="text-sm font-medium">
                  Ishra Jain
                </p>

                <p className="text-xs text-slate-500">
                  Data Engineer
                </p>

              </div>

              <ChevronDown
                size={16}
                className="text-slate-500"
              />

            </div>

          </div>

        </header>


        {/* ================= DASHBOARD CONTENT ================= */}

        <div className="p-8">


          {/* HEADER */}

          <div className="flex items-center justify-between mb-8">

            <div>

              <p className="text-sm text-blue-400 mb-1">
                DATA INTELLIGENCE
              </p>

              <h1 className="text-3xl font-bold">
                Dashboard
              </h1>

              <p className="text-slate-500 mt-2">
                Monitor the health and reliability of your data.
              </p>

            </div>


            {/* ADD DATASET */}

            <button
              onClick={() => navigate("/datasets")}
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 px-4 py-2.5 rounded-lg text-sm font-medium transition shadow-lg shadow-blue-600/20"
            >

              <Database size={17} />

              Add Dataset

            </button>

          </div>


          {/* ================= STAT CARDS ================= */}

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 mb-8">


            {/* QUALITY */}

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">

              <div className="flex items-center justify-between">

                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center">

                  <ShieldCheck
                    size={20}
                    className="text-emerald-400"
                  />

                </div>

                <div className="flex items-center gap-1 text-xs text-emerald-400">

                  <ArrowUpRight size={14} />

                  4.2%

                </div>

              </div>


              <p className="text-sm text-slate-500 mt-5">
                Data Quality Score
              </p>

              <h2 className="text-3xl font-bold mt-1">
                94.8%
              </h2>

              <p className="text-xs text-slate-600 mt-2">
                Across all datasets
              </p>

            </div>


            {/* DRIFT */}

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">

              <div className="flex items-center justify-between">

                <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">

                  <TrendingUp
                    size={20}
                    className="text-blue-400"
                  />

                </div>

                <div className="flex items-center gap-1 text-xs text-blue-400">

                  <ArrowDownRight size={14} />

                  2.1%

                </div>

              </div>


              <p className="text-sm text-slate-500 mt-5">
                Drift Score
              </p>

              <h2 className="text-3xl font-bold mt-1">
                12.4%
              </h2>

              <p className="text-xs text-slate-600 mt-2">
                Current distribution shift
              </p>

            </div>


            {/* ANOMALIES */}

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">

              <div className="flex items-center justify-between">

                <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center">

                  <AlertTriangle
                    size={20}
                    className="text-red-400"
                  />

                </div>

                <span className="text-xs text-red-400">
                  Needs attention
                </span>

              </div>


              <p className="text-sm text-slate-500 mt-5">
                Active Anomalies
              </p>

              <h2 className="text-3xl font-bold mt-1">
                7
              </h2>

              <p className="text-xs text-slate-600 mt-2">
                Detected in the last 24 hours
              </p>

            </div>


            {/* RECOMMENDATIONS */}

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">

              <div className="flex items-center justify-between">

                <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center">

                  <Lightbulb
                    size={20}
                    className="text-amber-400"
                  />

                </div>

                <span className="text-xs text-amber-400">
                  3 new
                </span>

              </div>


              <p className="text-sm text-slate-500 mt-5">
                Recommendations
              </p>

              <h2 className="text-3xl font-bold mt-1">
                12
              </h2>

              <p className="text-xs text-slate-600 mt-2">
                AI-generated suggestions
              </p>

            </div>

          </div>


          {/* ================= LOWER SECTION ================= */}

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-5">


            {/* DATA QUALITY CHART */}

            <div className="xl:col-span-2 bg-slate-900 border border-slate-800 rounded-xl p-6">

              <div className="flex items-center justify-between mb-6">

                <div>

                  <h2 className="font-semibold">
                    Data Quality Overview
                  </h2>

                  <p className="text-xs text-slate-500 mt-1">
                    Quality score across your datasets
                  </p>

                </div>

                <select className="bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-slate-400 outline-none">

                  <option>Last 7 days</option>

                  <option>Last 30 days</option>

                  <option>Last 90 days</option>

                </select>

              </div>


              {/* CHART */}

              <div className="h-64 flex items-end gap-4 px-4">

                {[72, 78, 74, 82, 80, 88, 86, 92, 90, 95, 93, 95].map(
                  (height, index) => (

                    <div
                      key={index}
                      className="flex-1 flex flex-col justify-end h-full"
                    >

                      <div
                        className="w-full bg-blue-500/70 rounded-t-md hover:bg-blue-400 transition"
                        style={{
                          height: `${height}%`,
                        }}
                      />

                    </div>

                  )
                )}

              </div>


              <div className="flex justify-between text-xs text-slate-600 mt-3">

                <span>Mon</span>
                <span>Tue</span>
                <span>Wed</span>
                <span>Thu</span>
                <span>Fri</span>
                <span>Sat</span>
                <span>Sun</span>

              </div>

            </div>


            {/* RECENT ALERTS */}

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">

              <div className="flex items-center justify-between mb-6">

                <div>

                  <h2 className="font-semibold">
                    Recent Alerts
                  </h2>

                  <p className="text-xs text-slate-500 mt-1">
                    Latest data issues
                  </p>

                </div>

                <button className="text-xs text-blue-400 hover:text-blue-300">
                  View all
                </button>

              </div>


              <div className="space-y-4">


                {/* ALERT 1 */}

                <div className="flex gap-3">

                  <AlertCircle
                    size={18}
                    className="text-red-400 mt-0.5"
                  />

                  <div>

                    <p className="text-sm font-medium">
                      Customer data drift detected
                    </p>

                    <p className="text-xs text-slate-600 mt-1">
                      12 minutes ago
                    </p>

                  </div>

                </div>


                {/* ALERT 2 */}

                <div className="flex gap-3">

                  <AlertTriangle
                    size={18}
                    className="text-amber-400 mt-0.5"
                  />

                  <div>

                    <p className="text-sm font-medium">
                      Missing values increased
                    </p>

                    <p className="text-xs text-slate-600 mt-1">
                      38 minutes ago
                    </p>

                  </div>

                </div>


                {/* ALERT 3 */}

                <div className="flex gap-3">

                  <CheckCircle2
                    size={18}
                    className="text-emerald-400 mt-0.5"
                  />

                  <div>

                    <p className="text-sm font-medium">
                      Data quality restored
                    </p>

                    <p className="text-xs text-slate-600 mt-1">
                      1 hour ago
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>


          {/* ================= DATASET HEALTH ================= */}

          <div className="mt-5 bg-slate-900 border border-slate-800 rounded-xl p-6">

            <div className="flex items-center justify-between mb-6">

              <div>

                <h2 className="font-semibold">
                  Dataset Health
                </h2>

                <p className="text-xs text-slate-500 mt-1">
                  Current status of monitored datasets
                </p>

              </div>

              <button
                onClick={() => navigate("/datasets")}
                className="text-sm text-blue-400 hover:text-blue-300"
              >
                View datasets →
              </button>

            </div>


            <div className="overflow-x-auto">

              <table className="w-full text-sm">

                <thead>

                  <tr className="text-left text-xs text-slate-500 border-b border-slate-800">

                    <th className="pb-3 font-medium">
                      Dataset
                    </th>

                    <th className="pb-3 font-medium">
                      Records
                    </th>

                    <th className="pb-3 font-medium">
                      Quality
                    </th>

                    <th className="pb-3 font-medium">
                      Drift
                    </th>

                    <th className="pb-3 font-medium">
                      Status
                    </th>

                  </tr>

                </thead>


                <tbody>

                  {/* CUSTOMER DATA */}

                  <tr className="border-b border-slate-800/60">

                    <td className="py-4 font-medium">
                      Customer Data
                    </td>

                    <td className="py-4 text-slate-400">
                      1.2M
                    </td>

                    <td className="py-4 text-emerald-400">
                      96.4%
                    </td>

                    <td className="py-4 text-blue-400">
                      Low
                    </td>

                    <td className="py-4">

                      <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs">
                        Healthy
                      </span>

                    </td>

                  </tr>


                  {/* TRANSACTIONS */}

                  <tr className="border-b border-slate-800/60">

                    <td className="py-4 font-medium">
                      Transactions
                    </td>

                    <td className="py-4 text-slate-400">
                      845K
                    </td>

                    <td className="py-4 text-emerald-400">
                      92.7%
                    </td>

                    <td className="py-4 text-amber-400">
                      Medium
                    </td>

                    <td className="py-4">

                      <span className="px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs">
                        Warning
                      </span>

                    </td>

                  </tr>


                  {/* PRODUCT CATALOG */}

                  <tr>

                    <td className="py-4 font-medium">
                      Product Catalog
                    </td>

                    <td className="py-4 text-slate-400">
                      320K
                    </td>

                    <td className="py-4 text-red-400">
                      81.3%
                    </td>

                    <td className="py-4 text-red-400">
                      High
                    </td>

                    <td className="py-4">

                      <span className="px-2.5 py-1 rounded-full bg-red-500/10 text-red-400 text-xs">
                        Critical
                      </span>

                    </td>

                  </tr>

                </tbody>

              </table>

            </div>

          </div>

        </div>

      </main>

    </div>
  );
}

export default Dashboard;