import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

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
  ArrowLeft,
  ArrowUpRight,
  ArrowDownRight,
  CheckCircle2,
  AlertCircle,
  Activity,
  BarChart3,
  Clock,
  Zap,
} from "lucide-react";

function FeaturePage({ type = "drift" }) {
  const navigate = useNavigate();
  const { id } = useParams();
  const [search, setSearch] = useState("");

  const config = {
    drift: {
      title: "Data Drift Detection",
      subtitle:
        "Monitor distribution changes across your datasets and identify potential data drift.",
      icon: <TrendingUp size={21} />,
      score: "12.4%",
      scoreLabel: "Current Drift Score",
      status: "Low Drift",
      statusText: "Dataset distribution is stable",
      accent: "blue",
    },

    anomalies: {
      title: "Anomaly Detection",
      subtitle:
        "Identify unusual records and suspicious data patterns in your datasets.",
      icon: <AlertTriangle size={21} />,
      score: "7",
      scoreLabel: "Active Anomalies",
      status: "Needs Attention",
      statusText: "7 unusual records detected",
      accent: "red",
    },

    recommendations: {
      title: "Recommendations",
      subtitle:
        "AI-powered suggestions to improve your data quality and reliability.",
      icon: <Lightbulb size={21} />,
      score: "12",
      scoreLabel: "Active Recommendations",
      status: "3 New",
      statusText: "Improvements are available",
      accent: "amber",
    },
  };

  const current = config[type] || config.drift;

  const navItems = [
    {
      label: "Dashboard",
      icon: <LayoutDashboard size={18} />,
      path: "/dashboard",
    },
    {
      label: "Datasets",
      icon: <Database size={18} />,
      path: "/datasets",
    },
    {
      label: "Data Quality",
      icon: <ShieldCheck size={18} />,
      path: `/datasets/${id || 1}/quality`,
    },
    {
      label: "Data Drift",
      icon: <TrendingUp size={18} />,
      path: `/datasets/${id || 1}/drift`,
      active: type === "drift",
    },
    {
      label: "Anomalies",
      icon: <AlertTriangle size={18} />,
      path: `/datasets/${id || 1}/anomalies`,
      active: type === "anomalies",
    },
    {
      label: "Recommendations",
      icon: <Lightbulb size={18} />,
      path: `/datasets/${id || 1}/recommendations`,
      active: type === "recommendations",
    },
  ];

  const driftFeatures = [
    {
      feature: "Age",
      baseline: "34.2",
      current: "35.8",
      change: "+4.7%",
      status: "Stable",
    },
    {
      feature: "Income",
      baseline: "68.4K",
      current: "72.1K",
      change: "+5.4%",
      status: "Stable",
    },
    {
      feature: "Region",
      baseline: "North 32%",
      current: "North 38%",
      change: "+18.7%",
      status: "Monitor",
    },
    {
      feature: "Tenure",
      baseline: "4.8 yrs",
      current: "5.1 yrs",
      change: "+6.2%",
      status: "Stable",
    },
    {
      feature: "Risk Score",
      baseline: "0.42",
      current: "0.49",
      change: "+16.6%",
      status: "Monitor",
    },
  ];

  const anomalyData = [
    {
      id: "#AN-1042",
      field: "Patient Age",
      value: "142",
      expected: "18–95",
      severity: "High",
      time: "8 min ago",
    },
    {
      id: "#AN-1039",
      field: "Blood Pressure",
      value: "310/190",
      expected: "90/60–180/120",
      severity: "High",
      time: "14 min ago",
    },
    {
      id: "#AN-1036",
      field: "Income",
      value: "$999,999",
      expected: "$20K–$250K",
      severity: "Medium",
      time: "21 min ago",
    },
    {
      id: "#AN-1031",
      field: "Tenure",
      value: "-4.2",
      expected: "0–40",
      severity: "Medium",
      time: "32 min ago",
    },
  ];

  const recommendations = [
    {
      title: "Review Region Distribution",
      description:
        "North region values increased by 18.7% compared with the reference dataset.",
      priority: "High",
      icon: <TrendingUp size={18} />,
    },
    {
      title: "Handle Missing Values",
      description:
        "2.1% of patient records contain missing values that should be reviewed.",
      priority: "Medium",
      icon: <AlertCircle size={18} />,
    },
    {
      title: "Investigate Duplicate Records",
      description:
        "Potential duplicate records were identified in the latest dataset.",
      priority: "Medium",
      icon: <Database size={18} />,
    },
    {
      title: "Refresh Reference Dataset",
      description:
        "The current reference dataset is older than the recommended monitoring window.",
      priority: "Low",
      icon: <Clock size={18} />,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white flex relative overflow-hidden">

      {/* ================= ANIMATED BACKGROUND ================= */}

      <style>{`
        @keyframes floatOne {
          0%, 100% {
            transform: translate(0px, 0px) scale(1);
          }
          50% {
            transform: translate(40px, -30px) scale(1.08);
          }
        }

        @keyframes floatTwo {
          0%, 100% {
            transform: translate(0px, 0px);
          }
          50% {
            transform: translate(-50px, 35px);
          }
        }

        @keyframes floatThree {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-25px);
          }
        }

        @keyframes pulseGlow {
          0%, 100% {
            opacity: .25;
          }
          50% {
            opacity: .6;
          }
        }

        @keyframes moveGrid {
          from {
            transform: translateY(0);
          }
          to {
            transform: translateY(40px);
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .feature-grid {
          background-image:
            linear-gradient(rgba(59,130,246,.055) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59,130,246,.055) 1px, transparent 1px);
          background-size: 55px 55px;
          animation: moveGrid 12s linear infinite;
        }

        .glow-one {
          animation: floatOne 9s ease-in-out infinite;
        }

        .glow-two {
          animation: floatTwo 11s ease-in-out infinite;
        }

        .glow-three {
          animation: floatThree 7s ease-in-out infinite;
        }

        .pulse-glow {
          animation: pulseGlow 4s ease-in-out infinite;
        }

        .shimmer-line {
          animation: shimmer 5s linear infinite;
        }
      `}</style>

      {/* Background grid */}
      <div className="feature-grid fixed inset-0 pointer-events-none opacity-70" />

      {/* Blue glow */}
      <div className="glow-one fixed -top-40 left-72 w-96 h-96 bg-blue-600/10 blur-3xl rounded-full pointer-events-none" />

      {/* Purple glow */}
      <div className="glow-two fixed top-1/3 right-0 w-96 h-96 bg-indigo-600/10 blur-3xl rounded-full pointer-events-none" />

      {/* Cyan glow */}
      <div className="glow-three fixed bottom-0 left-1/3 w-80 h-80 bg-cyan-500/5 blur-3xl rounded-full pointer-events-none" />

      {/* Small glowing particles */}
      <div className="pulse-glow fixed top-28 left-[42%] w-1.5 h-1.5 rounded-full bg-blue-400 shadow-lg shadow-blue-500/70" />
      <div className="pulse-glow fixed top-[62%] right-[18%] w-1 h-1 rounded-full bg-cyan-300 shadow-lg shadow-cyan-400/70" />
      <div className="pulse-glow fixed bottom-[20%] left-[30%] w-1 h-1 rounded-full bg-indigo-300 shadow-lg shadow-indigo-400/70" />

      {/* ================= SIDEBAR ================= */}

      <aside className="w-64 bg-slate-900/95 backdrop-blur-xl border-r border-slate-800 flex flex-col relative z-30">

        {/* Logo */}
        <div className="h-20 flex items-center px-6 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-600/30">
              <ShieldCheck size={21} />
            </div>

            <div>
              <div className="font-bold text-white tracking-tight">
                DataGuard
              </div>

              <div className="text-[10px] text-slate-500 uppercase tracking-wider">
                Data Intelligence
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-1">

          <div className="text-[10px] uppercase tracking-widest text-slate-600 px-3 py-3">
            Workspace
          </div>

          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => navigate(item.path)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all duration-200 ${
                item.active
                  ? "bg-blue-600/15 text-blue-400 border border-blue-500/20"
                  : "text-slate-400 hover:text-white hover:bg-slate-800"
              }`}
            >
              {item.icon}

              <span>{item.label}</span>

              {item.active && (
                <span className="ml-auto w-1.5 h-1.5 rounded-full bg-blue-400 shadow-lg shadow-blue-400/70" />
              )}
            </button>
          ))}
        </nav>

        {/* Bottom */}
        <div className="p-4 border-t border-slate-800 space-y-1">

          <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-slate-400 hover:text-white hover:bg-slate-800 transition">
            <Settings size={18} />
            <span>Settings</span>
          </button>

          <button
            onClick={() => navigate("/login")}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-slate-400 hover:text-red-400 hover:bg-red-500/5 transition"
          >
            <LogOut size={18} />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* ================= MAIN ================= */}

      <main className="flex-1 min-w-0 relative z-10">

        {/* ================= TOP HEADER ================= */}

        <header className="h-20 border-b border-slate-800 bg-slate-900/70 backdrop-blur-xl flex items-center justify-between px-8 relative z-20">

          <div className="relative w-80">
            <Search
              size={17}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"
            />

            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search..."
              className="w-full bg-slate-950/70 border border-slate-800 rounded-lg pl-10 pr-4 py-2.5 text-sm text-white placeholder:text-slate-600 outline-none focus:border-blue-500/50 transition"
            />
          </div>

          <div className="flex items-center gap-5">

            <button className="relative text-slate-400 hover:text-white transition">
              <Bell size={19} />

              <span className="absolute -top-1 -right-1 w-2 h-2 bg-blue-500 rounded-full shadow-lg shadow-blue-500/70" />
            </button>

            <div className="h-7 w-px bg-slate-800" />

            <div className="flex items-center gap-3">

              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-xs font-bold shadow-lg shadow-blue-500/20">
                IS
              </div>

              <div className="hidden md:block">
                <div className="text-sm font-medium">
                  Ishra Jain
                </div>

                <div className="text-[11px] text-slate-500">
                  Data Engineer
                </div>
              </div>

              <ChevronDown size={15} className="text-slate-500" />
            </div>
          </div>
        </header>

        {/* ================= CONTENT ================= */}

        <div className="p-8 max-w-[1500px] mx-auto">

          {/* Header */}
          <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-5 mb-8">

            <div>

              <div className="flex items-center gap-3 mb-3">

                {/* PREMIUM BACK BUTTON */}
                <button
                  onClick={() => navigate("/dashboard")}
                  className="group relative flex items-center gap-3 px-3.5 py-2.5 rounded-xl bg-slate-900/80 backdrop-blur-xl border border-slate-700/70 text-slate-300 hover:text-white hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300 shadow-lg shadow-black/20"
                >
                  <span className="absolute inset-0 rounded-xl bg-blue-500/0 group-hover:bg-blue-500/5 transition" />

                  <span className="relative w-8 h-8 rounded-lg bg-slate-800 group-hover:bg-blue-500/20 flex items-center justify-center transition-all duration-300">
                    <ArrowLeft
                      size={17}
                      className="group-hover:-translate-x-0.5 transition-transform duration-300"
                    />
                  </span>

                  <span className="relative text-sm font-medium">
                    Dashboard
                  </span>
                </button>

                <span className="text-slate-700">/</span>

                <span className="text-sm text-slate-500">
                  Patient Records
                </span>
              </div>

              <div className="flex items-center gap-3">

                <div className="w-11 h-11 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shadow-lg shadow-blue-500/10">
                  {current.icon}
                </div>

                <div>
                  <h1 className="text-2xl font-bold tracking-tight">
                    {current.title}
                  </h1>

                  <p className="text-slate-500 text-sm mt-1">
                    {current.subtitle}
                  </p>
                </div>
              </div>
            </div>

            {/* Dataset selector */}
            <div className="flex items-center gap-3 bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-xl px-4 py-3 shadow-xl">

              <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center">
                <Database size={17} className="text-blue-400" />
              </div>

              <div>
                <div className="text-[10px] uppercase tracking-wider text-slate-600">
                  Active Dataset
                </div>

                <div className="text-sm font-medium text-slate-200">
                  Patient Records
                </div>
              </div>

              <ChevronDown size={15} className="text-slate-500 ml-4" />
            </div>
          </div>

          {/* ================= TOP CARDS ================= */}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">

            {/* Main Score */}
            <div className="relative overflow-hidden bg-slate-900/80 backdrop-blur-xl border border-slate-800/80 rounded-2xl p-6 shadow-xl shadow-black/20">

              <div className="absolute -top-16 -right-16 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl" />

              <div className="flex items-center justify-between mb-6">

                <div className="text-sm text-slate-400">
                  {current.scoreLabel}
                </div>

                <div className="w-9 h-9 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center">
                  {current.icon}
                </div>
              </div>

              <div className="flex items-end gap-3">

                <div className="text-4xl font-bold tracking-tight">
                  {current.score}
                </div>

                {type === "drift" && (
                  <div className="flex items-center gap-1 text-xs text-emerald-400 pb-1">
                    <ArrowDownRight size={14} />
                    3.2%
                  </div>
                )}
              </div>

              <div className="mt-4 h-1.5 bg-slate-800 rounded-full overflow-hidden">

                <div
                  className={`h-full rounded-full ${
                    type === "drift"
                      ? "w-[24%] bg-gradient-to-r from-blue-600 to-cyan-400"
                      : type === "anomalies"
                      ? "w-[38%] bg-gradient-to-r from-red-600 to-orange-400"
                      : "w-[62%] bg-gradient-to-r from-amber-500 to-yellow-300"
                  }`}
                />
              </div>
            </div>

            {/* Status */}
            <div className="bg-slate-900/80 backdrop-blur-xl border border-slate-800/80 rounded-2xl p-6 shadow-xl shadow-black/20">

              <div className="flex items-center justify-between mb-6">

                <div className="text-sm text-slate-400">
                  Status
                </div>

                <div className="w-9 h-9 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                  <CheckCircle2 size={19} />
                </div>
              </div>

              <div className="text-2xl font-bold">
                {current.status}
              </div>

              <div className="text-sm text-slate-500 mt-2">
                {current.statusText}
              </div>

              <div className="flex items-center gap-2 mt-5 text-xs text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Monitoring active
              </div>
            </div>

            {/* System */}
            <div className="bg-slate-900/80 backdrop-blur-xl border border-slate-800/80 rounded-2xl p-6 shadow-xl shadow-black/20">

              <div className="flex items-center justify-between mb-6">

                <div className="text-sm text-slate-400">
                  System Status
                </div>

                <div className="w-9 h-9 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
                  <Activity size={19} />
                </div>
              </div>

              <div className="text-2xl font-bold">
                Operational
              </div>

              <div className="text-sm text-slate-500 mt-2">
                All monitoring services are running
              </div>

              <div className="flex items-center gap-2 mt-5 text-xs text-cyan-400">
                <Zap size={13} />
                Last scan 12 min ago
              </div>
            </div>
          </div>

          {/* ================= DRIFT PAGE ================= */}

          {type === "drift" && (
            <>
              {/* Trend */}
              <div className="bg-slate-900/80 backdrop-blur-xl border border-slate-800/80 rounded-2xl p-6 shadow-xl shadow-black/20 mb-6">

                <div className="flex items-center justify-between mb-6">

                  <div>
                    <h2 className="font-semibold text-lg">
                      Drift Trend
                    </h2>

                    <p className="text-sm text-slate-500 mt-1">
                      Drift score over the last 7 monitoring cycles
                    </p>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-emerald-400">
                    <ArrowDownRight size={14} />
                    Improving
                  </div>
                </div>

                <div className="h-44 flex items-end gap-4 px-4">

                  {[34, 30, 38, 27, 24, 20, 16].map((value, index) => (
                    <div
                      key={index}
                      className="flex-1 flex flex-col items-center gap-2"
                    >
                      <div className="w-full h-32 flex items-end">

                        <div
                          className="w-full rounded-t-lg bg-gradient-to-t from-blue-700/40 to-cyan-400/80 hover:from-blue-600 hover:to-cyan-300 transition-all duration-300 relative group"
                          style={{
                            height: `${value * 2.4}px`,
                          }}
                        >
                          <div className="absolute inset-0 bg-blue-400/10 blur-md group-hover:bg-blue-400/30 transition" />
                        </div>
                      </div>

                      <span className="text-[10px] text-slate-600">
                        {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][index]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Feature Drift + Insights */}
              <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

                {/* Feature table */}
                <div className="xl:col-span-2 bg-slate-900/80 backdrop-blur-xl border border-slate-800/80 rounded-2xl overflow-hidden shadow-xl shadow-black/20">

                  <div className="p-6 border-b border-slate-800">

                    <div className="flex items-center justify-between">

                      <div>
                        <h2 className="font-semibold text-lg">
                          Feature Drift Overview
                        </h2>

                        <p className="text-sm text-slate-500 mt-1">
                          Distribution comparison with reference dataset
                        </p>
                      </div>

                      <BarChart3
                        size={19}
                        className="text-blue-400"
                      />
                    </div>
                  </div>

                  <div className="overflow-x-auto">

                    <table className="w-full text-sm">

                      <thead>
                        <tr className="text-left text-xs text-slate-600 border-b border-slate-800">

                          <th className="px-6 py-4 font-medium">
                            Feature
                          </th>

                          <th className="px-6 py-4 font-medium">
                            Baseline
                          </th>

                          <th className="px-6 py-4 font-medium">
                            Current
                          </th>

                          <th className="px-6 py-4 font-medium">
                            Change
                          </th>

                          <th className="px-6 py-4 font-medium">
                            Status
                          </th>
                        </tr>
                      </thead>

                      <tbody>

                        {driftFeatures.map((row) => (
                          <tr
                            key={row.feature}
                            className="border-b border-slate-800/70 hover:bg-slate-800/30 transition"
                          >

                            <td className="px-6 py-4 font-medium text-slate-200">
                              {row.feature}
                            </td>

                            <td className="px-6 py-4 text-slate-400">
                              {row.baseline}
                            </td>

                            <td className="px-6 py-4 text-slate-300">
                              {row.current}
                            </td>

                            <td
                              className={`px-6 py-4 ${
                                row.status === "Monitor"
                                  ? "text-amber-400"
                                  : "text-emerald-400"
                              }`}
                            >
                              {row.change}
                            </td>

                            <td className="px-6 py-4">

                              <span
                                className={`inline-flex px-2.5 py-1 rounded-full text-[11px] font-medium ${
                                  row.status === "Monitor"
                                    ? "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                                    : "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                                }`}
                              >
                                {row.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Quick Insights */}
                <div className="bg-slate-900/80 backdrop-blur-xl border border-slate-800/80 rounded-2xl p-6 shadow-xl shadow-black/20">

                  <div className="flex items-center gap-3 mb-6">

                    <div className="w-9 h-9 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center">
                      <Lightbulb size={18} />
                    </div>

                    <div>
                      <h2 className="font-semibold">
                        Quick Insights
                      </h2>

                      <p className="text-xs text-slate-500">
                        AI analysis
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">

                    <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-800">
                      <div className="text-sm font-medium text-slate-200">
                        Overall stability
                      </div>

                      <p className="text-xs text-slate-500 mt-2 leading-5">
                        Most features remain within the expected distribution range.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-amber-500/5 border border-amber-500/10">
                      <div className="flex items-center gap-2 text-sm font-medium text-amber-300">
                        <AlertTriangle size={15} />
                        Region requires monitoring
                      </div>

                      <p className="text-xs text-slate-500 mt-2 leading-5">
                        Region distribution changed by 18.7% from the baseline.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/10">
                      <div className="flex items-center gap-2 text-sm font-medium text-emerald-300">
                        <CheckCircle2 size={15} />
                        Low overall drift
                      </div>

                      <p className="text-xs text-slate-500 mt-2 leading-5">
                        Current drift remains below the alert threshold.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* ================= ANOMALIES PAGE ================= */}

          {type === "anomalies" && (
            <div className="bg-slate-900/80 backdrop-blur-xl border border-slate-800/80 rounded-2xl overflow-hidden shadow-xl shadow-black/20">

              <div className="p-6 border-b border-slate-800">

                <div className="flex items-center justify-between">

                  <div>
                    <h2 className="font-semibold text-lg">
                      Detected Anomalies
                    </h2>

                    <p className="text-sm text-slate-500 mt-1">
                      Unusual records detected in Patient Records
                    </p>
                  </div>

                  <div className="px-3 py-1.5 rounded-lg bg-red-500/10 text-red-400 border border-red-500/20 text-xs">
                    7 Active
                  </div>
                </div>
              </div>

              <div className="overflow-x-auto">

                <table className="w-full text-sm">

                  <thead>
                    <tr className="text-left text-xs text-slate-600 border-b border-slate-800">

                      <th className="px-6 py-4">ID</th>
                      <th className="px-6 py-4">Field</th>
                      <th className="px-6 py-4">Value</th>
                      <th className="px-6 py-4">Expected</th>
                      <th className="px-6 py-4">Severity</th>
                      <th className="px-6 py-4">Detected</th>
                    </tr>
                  </thead>

                  <tbody>

                    {anomalyData.map((item) => (
                      <tr
                        key={item.id}
                        className="border-b border-slate-800/70 hover:bg-slate-800/30 transition"
                      >

                        <td className="px-6 py-5 font-mono text-blue-400">
                          {item.id}
                        </td>

                        <td className="px-6 py-5 text-slate-200 font-medium">
                          {item.field}
                        </td>

                        <td className="px-6 py-5 text-red-400 font-medium">
                          {item.value}
                        </td>

                        <td className="px-6 py-5 text-slate-500">
                          {item.expected}
                        </td>

                        <td className="px-6 py-5">

                          <span
                            className={`px-2.5 py-1 rounded-full text-[11px] ${
                              item.severity === "High"
                                ? "bg-red-500/10 text-red-400 border border-red-500/20"
                                : "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                            }`}
                          >
                            {item.severity}
                          </span>
                        </td>

                        <td className="px-6 py-5 text-slate-500">
                          {item.time}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* ================= RECOMMENDATIONS PAGE ================= */}

          {type === "recommendations" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

              {recommendations.map((item, index) => (
                <div
                  key={index}
                  className="group bg-slate-900/80 backdrop-blur-xl border border-slate-800/80 rounded-2xl p-6 shadow-xl shadow-black/20 hover:border-blue-500/30 hover:-translate-y-1 transition-all duration-300"
                >

                  <div className="flex items-start justify-between">

                    <div className="w-11 h-11 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center group-hover:bg-blue-500/20 transition">
                      {item.icon}
                    </div>

                    <span
                      className={`px-2.5 py-1 rounded-full text-[11px] ${
                        item.priority === "High"
                          ? "bg-red-500/10 text-red-400 border border-red-500/20"
                          : item.priority === "Medium"
                          ? "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                          : "bg-slate-800 text-slate-400 border border-slate-700"
                      }`}
                    >
                      {item.priority} Priority
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold mt-5">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-500 leading-6 mt-2">
                    {item.description}
                  </p>

                  <button className="mt-5 text-sm text-blue-400 hover:text-blue-300 flex items-center gap-2 transition">
                    View recommendation
                    <ArrowUpRight size={15} />
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* ================= FOOTER ================= */}

          <div className="mt-8 flex items-center justify-between text-xs text-slate-600">

            <div>
              DataGuard Intelligence Platform
            </div>

            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              Monitoring system online
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default FeaturePage;