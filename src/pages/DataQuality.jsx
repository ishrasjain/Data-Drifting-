import { useNavigate, useParams } from "react-router-dom";

import {
  ArrowLeft,
  Database,
  ShieldCheck,
  TrendingUp,
  AlertTriangle,
  Activity,
  FileText,
  Users,
  Clock,
} from "lucide-react";

function DatasetDetails() {
  const navigate = useNavigate();
  const { id } = useParams();

  // =========================
  // MOCK HEALTHCARE DATA
  // =========================

  const datasets = {
    1: {
      name: "Patient Records",
      description:
        "Electronic health records and patient demographics",
      records: "1.2M",
      quality: 96.4,
      drift: 12.4,
      driftLevel: "Low",
      anomalies: 7,
      columns: 24,
      missing: "2.1%",
      duplicates: "0.4%",
      type: "Clinical",
      updated: "12 min ago",
    },

    2: {
      name: "Laboratory Results",
      description:
        "Clinical laboratory test results and observations",
      records: "845K",
      quality: 92.7,
      drift: 28.6,
      driftLevel: "Medium",
      anomalies: 14,
      columns: 18,
      missing: "4.8%",
      duplicates: "0.7%",
      type: "Laboratory",
      updated: "38 min ago",
    },

    3: {
      name: "Medication Records",
      description:
        "Prescriptions, medications and treatment information",
      records: "320K",
      quality: 81.3,
      drift: 67.2,
      driftLevel: "High",
      anomalies: 31,
      columns: 16,
      missing: "9.4%",
      duplicates: "2.1%",
      type: "Medication",
      updated: "1 hour ago",
    },

    4: {
      name: "Hospital Admissions",
      description:
        "Patient admission, discharge and hospitalization data",
      records: "567K",
      quality: 95.1,
      drift: 10.2,
      driftLevel: "Low",
      anomalies: 5,
      columns: 21,
      missing: "2.8%",
      duplicates: "0.3%",
      type: "Hospital",
      updated: "2 hours ago",
    },

    5: {
      name: "Clinical Observations",
      description:
        "Vital signs and clinical observations",
      records: "2.4M",
      quality: 89.6,
      drift: 34.8,
      driftLevel: "Medium",
      anomalies: 18,
      columns: 27,
      missing: "5.6%",
      duplicates: "0.9%",
      type: "Clinical",
      updated: "3 hours ago",
    },
  };

  const dataset = datasets[id] || datasets[1];

  // =========================
  // STATUS
  // =========================

  let status = "Critical";

  if (
    dataset.quality >= 90 &&
    dataset.driftLevel === "Low"
  ) {
    status = "Healthy";
  } else if (
    dataset.quality >= 85 &&
    dataset.driftLevel !== "High"
  ) {
    status = "Warning";
  }

  // =========================
  // NAVIGATION
  // =========================

  const goBack = () => {
    navigate("/datasets");
  };

  const goOverview = () => {
    navigate(`/datasets/${id}`);
  };

  const goProfiling = () => {
    navigate(`/datasets/${id}/profiling`);
  };

  const goQuality = () => {
    navigate(`/datasets/${id}/quality`);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* =========================
          HEADER
      ========================= */}

      <header className="h-20 border-b border-slate-800 bg-slate-900 flex items-center justify-between px-8">

        <div className="flex items-center gap-4">

          <button
            type="button"
            onClick={goBack}
            className="w-9 h-9 rounded-lg border border-slate-800 bg-slate-950 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-700 transition"
          >
            <ArrowLeft size={18} />
          </button>

          <div>

            <div className="flex items-center gap-2">

              <Database
                size={16}
                className="text-blue-400"
              />

              <span className="text-xs text-slate-500">
                Healthcare Dataset
              </span>

            </div>

            <h1 className="text-xl font-bold mt-1">
              {dataset.name}
            </h1>

          </div>

        </div>

        <div className="flex items-center gap-2 text-xs text-emerald-400">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          Analysis available
        </div>

      </header>


      {/* =========================
          MAIN
      ========================= */}

      <main className="p-8 max-w-[1600px] mx-auto">

        {/* INTRO */}

        <div className="mb-8">

          <p className="text-xs text-blue-400 uppercase tracking-wider">
            Dataset Details
          </p>

          <h2 className="text-2xl font-bold mt-2">
            {dataset.name}
          </h2>

          <p className="text-sm text-slate-500 mt-2">
            {dataset.description}
          </p>

        </div>


        {/* =========================
            SUMMARY CARDS
        ========================= */}

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 mb-8">

          {/* Records */}

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">

            <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
              <Database
                size={19}
                className="text-blue-400"
              />
            </div>

            <p className="text-xs text-slate-500 mt-5">
              Total Records
            </p>

            <h3 className="text-2xl font-bold mt-1">
              {dataset.records}
            </h3>

            <p className="text-xs text-slate-600 mt-2">
              Records in dataset
            </p>

          </div>


          {/* Quality */}

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">

            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center">
              <ShieldCheck
                size={19}
                className="text-emerald-400"
              />
            </div>

            <p className="text-xs text-slate-500 mt-5">
              Data Quality
            </p>

            <h3 className="text-2xl font-bold mt-1">
              {dataset.quality}%
            </h3>

            <p className="text-xs text-emerald-400 mt-2">
              {status}
            </p>

          </div>


          {/* Drift */}

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">

            <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
              <TrendingUp
                size={19}
                className="text-blue-400"
              />
            </div>

            <p className="text-xs text-slate-500 mt-5">
              Drift Score
            </p>

            <h3 className="text-2xl font-bold mt-1">
              {dataset.drift}%
            </h3>

            <p
              className={`text-xs mt-2 ${
                dataset.driftLevel === "Low"
                  ? "text-blue-400"
                  : dataset.driftLevel === "Medium"
                  ? "text-amber-400"
                  : "text-red-400"
              }`}
            >
              {dataset.driftLevel} distribution shift
            </p>

          </div>


          {/* Anomalies */}

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">

            <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center">
              <AlertTriangle
                size={19}
                className="text-red-400"
              />
            </div>

            <p className="text-xs text-slate-500 mt-5">
              Active Anomalies
            </p>

            <h3 className="text-2xl font-bold mt-1">
              {dataset.anomalies}
            </h3>

            <p className="text-xs text-red-400 mt-2">
              Detected during latest analysis
            </p>

          </div>

        </div>


        {/* =========================
            DATASET INFORMATION
        ========================= */}

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-5 mb-8">

          <div className="xl:col-span-2 bg-slate-900 border border-slate-800 rounded-xl p-6">

            <div className="flex items-center justify-between mb-6">

              <div>

                <h3 className="font-semibold">
                  Dataset Overview
                </h3>

                <p className="text-xs text-slate-500 mt-1">
                  Summary of the healthcare dataset
                </p>

              </div>

              <Activity
                size={18}
                className="text-blue-400"
              />

            </div>


            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">

              <div>
                <p className="text-xs text-slate-500">
                  Dataset Type
                </p>
                <p className="text-sm font-medium mt-1">
                  {dataset.type}
                </p>
              </div>

              <div>
                <p className="text-xs text-slate-500">
                  Columns
                </p>
                <p className="text-sm font-medium mt-1">
                  {dataset.columns}
                </p>
              </div>

              <div>
                <p className="text-xs text-slate-500">
                  Missing Values
                </p>
                <p className="text-sm font-medium mt-1">
                  {dataset.missing}
                </p>
              </div>

              <div>
                <p className="text-xs text-slate-500">
                  Duplicates
                </p>
                <p className="text-sm font-medium mt-1">
                  {dataset.duplicates}
                </p>
              </div>

            </div>

          </div>


          {/* Last Updated */}

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">

            <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center">
              <Clock
                size={19}
                className="text-purple-400"
              />
            </div>

            <p className="text-xs text-slate-500 mt-5">
              Last Analysis
            </p>

            <h3 className="text-lg font-semibold mt-1">
              {dataset.updated}
            </h3>

            <p className="text-xs text-slate-600 mt-2">
              Latest dataset analysis
            </p>

          </div>

        </div>


        {/* =========================
            TABS
        ========================= */}

        <div className="border-b border-slate-800 mb-8">

          <div className="flex gap-8 overflow-x-auto">

            {/* Overview */}

            <button
              type="button"
              onClick={goOverview}
              className="pb-4 text-sm font-medium text-blue-400 border-b-2 border-blue-500 whitespace-nowrap cursor-pointer"
            >
              Overview
            </button>


            {/* Profiling */}

            <button
              type="button"
              onClick={goProfiling}
              className="pb-4 text-sm text-slate-400 hover:text-white transition whitespace-nowrap cursor-pointer"
            >
              Profiling
            </button>


            {/* Data Quality */}

            <button
              type="button"
              onClick={goQuality}
              className="pb-4 text-sm text-slate-400 hover:text-white transition whitespace-nowrap cursor-pointer"
            >
              Data Quality
            </button>

          </div>

        </div>


        {/* =========================
            ANALYSIS CARDS
        ========================= */}

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">

          {/* Profiling */}

          <button
            type="button"
            onClick={goProfiling}
            className="text-left bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-blue-500/40 hover:bg-slate-900/80 transition cursor-pointer"
          >

            <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
              <Activity
                size={19}
                className="text-blue-400"
              />
            </div>

            <h3 className="font-semibold mt-5">
              Data Profiling
            </h3>

            <p className="text-sm text-slate-500 mt-2">
              Explore statistics, distributions and feature-level information.
            </p>

            <p className="text-xs text-blue-400 mt-5">
              Open profiling →
            </p>

          </button>


          {/* Data Quality */}

          <button
            type="button"
            onClick={goQuality}
            className="text-left bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-emerald-500/40 hover:bg-slate-900/80 transition cursor-pointer"
          >

            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center">
              <ShieldCheck
                size={19}
                className="text-emerald-400"
              />
            </div>

            <h3 className="font-semibold mt-5">
              Data Quality
            </h3>

            <p className="text-sm text-slate-500 mt-2">
              Review completeness, validity, consistency and uniqueness.
            </p>

            <p className="text-xs text-emerald-400 mt-5">
              Open quality analysis →
            </p>

          </button>


          {/* Dataset Information */}

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">

            <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center">
              <FileText
                size={19}
                className="text-purple-400"
              />
            </div>

            <h3 className="font-semibold mt-5">
              Dataset Information
            </h3>

            <div className="space-y-4 mt-5">

              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-500">
                  Records
                </span>

                <span className="text-sm">
                  {dataset.records}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-500">
                  Columns
                </span>

                <span className="text-sm">
                  {dataset.columns}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-500">
                  Type
                </span>

                <span className="text-sm">
                  {dataset.type}
                </span>
              </div>

            </div>

          </div>

        </div>


        {/* =========================
            FOOTER INFO
        ========================= */}

        <div className="mt-8 bg-slate-900 border border-slate-800 rounded-xl p-5">

          <div className="flex items-center gap-3">

            <Users
              size={18}
              className="text-slate-500"
            />

            <p className="text-xs text-slate-500">
              This is currently using frontend mock data. Backend/API integration can be connected later.
            </p>

          </div>

        </div>

      </main>

    </div>
  );
}

export default DatasetDetails;