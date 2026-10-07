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
  CheckCircle2,
  AlertCircle,
  MoreHorizontal,
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
      qualityMessage: "Excellent data quality",
      driftMessage: "Low distribution shift",
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
      qualityMessage: "Good data quality",
      driftMessage: "Moderate distribution shift",
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
      qualityMessage: "Data quality needs attention",
      driftMessage: "High distribution shift",
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
      qualityMessage: "Excellent data quality",
      driftMessage: "Low distribution shift",
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
      qualityMessage: "Data quality needs monitoring",
      driftMessage: "Moderate distribution shift",
    },
  };

  // =========================
  // SELECT DATASET
  // =========================

  const dataset = datasets[id] || datasets[1];

  // =========================
  // STATUS
  // =========================

  const getStatus = () => {
    if (dataset.quality >= 90 && dataset.driftLevel === "Low") {
      return "Healthy";
    }

    if (
      dataset.quality >= 85 &&
      dataset.driftLevel !== "High"
    ) {
      return "Warning";
    }

    return "Critical";
  };

  const status = getStatus();

  // =========================
  // NAVIGATION FUNCTIONS
  // =========================

  const goToOverview = () => {
    navigate(`/datasets/${id}`);
  };

  const goToProfiling = () => {
    navigate(`/datasets/${id}/profiling`);
  };

  const goToQuality = () => {
    navigate(`/datasets/${id}/quality`);
  };

  const goToDrift = () => {
    navigate(`/datasets/${id}/drift`);
  };

  const goToAnomalies = () => {
    navigate(`/datasets/${id}/anomalies`);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* ========================= */}
      {/* TOP BAR */}
      {/* ========================= */}

      <header className="h-20 border-b border-slate-800 bg-slate-900 flex items-center justify-between px-8">

        <div className="flex items-center gap-4">

          <button
            type="button"
            onClick={() => navigate("/datasets")}
            className="w-9 h-9 rounded-lg border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 transition"
          >
            <ArrowLeft size={18} />
          </button>

          <div>

            <div className="flex items-center gap-2">

              <Database
                size={17}
                className="text-blue-400"
              />

              <span className="text-xs text-slate-500">
                Healthcare Datasets
              </span>

            </div>

            <h1 className="text-xl font-bold mt-1">
              {dataset.name}
            </h1>

          </div>

        </div>

        <button
          type="button"
          className="w-9 h-9 rounded-lg border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 transition"
        >
          <MoreHorizontal size={18} />
        </button>

      </header>

      {/* ========================= */}
      {/* CONTENT */}
      {/* ========================= */}

      <main className="p-8">

        {/* ========================= */}
        {/* DATASET HEADER */}
        {/* ========================= */}

        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 mb-8">

          <div>

            <div className="flex items-center gap-3">

              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">

                <FileText
                  size={23}
                  className="text-blue-400"
                />

              </div>

              <div>

                <h2 className="text-2xl font-bold">
                  {dataset.name}
                </h2>

                <p className="text-sm text-slate-500 mt-1">
                  {dataset.description}
                </p>

              </div>

            </div>

          </div>

          <div className="flex items-center gap-3">

            <span
              className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm ${
                status === "Healthy"
                  ? "bg-emerald-500/10 text-emerald-400"
                  : status === "Warning"
                  ? "bg-amber-500/10 text-amber-400"
                  : "bg-red-500/10 text-red-400"
              }`}
            >

              {status === "Healthy" && (
                <CheckCircle2 size={16} />
              )}

              {status === "Warning" && (
                <AlertTriangle size={16} />
              )}

              {status === "Critical" && (
                <AlertCircle size={16} />
              )}

              {status}

            </span>

            <span className="text-xs text-slate-600">
              Last checked {dataset.updated}
            </span>

          </div>

        </div>

        {/* ========================= */}
        {/* STAT CARDS */}
        {/* ========================= */}

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 mb-8">

          {/* RECORDS */}

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">

            <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">

              <Users
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
              Records analyzed
            </p>

          </div>

          {/* QUALITY */}

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">

            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center">

              <ShieldCheck
                size={19}
                className="text-emerald-400"
              />

            </div>

            <p className="text-xs text-slate-500 mt-5">
              Quality Score
            </p>

            <h3 className="text-2xl font-bold mt-1">
              {dataset.quality}%
            </h3>

            <p className="text-xs text-emerald-400 mt-2">
              {dataset.qualityMessage}
            </p>

          </div>

          {/* DRIFT */}

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
              {dataset.driftMessage}
            </p>

          </div>

          {/* ANOMALIES */}

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

        {/* ========================= */}
        {/* TABS */}
        {/* ========================= */}

        <div className="border-b border-slate-800 mb-6">

          <div className="flex gap-8 overflow-x-auto">

            {/* OVERVIEW */}

            <button
              type="button"
              onClick={goToOverview}
              className="pb-4 text-sm font-medium text-blue-400 border-b-2 border-blue-500 whitespace-nowrap"
            >
              Overview
            </button>

            {/* PROFILING */}

            <button
              type="button"
              onClick={goToProfiling}
              className="pb-4 text-sm text-slate-500 hover:text-white transition whitespace-nowrap"
            >
              Profiling
            </button>

            {/* DATA QUALITY */}

            <button
  type="button"
  className="pb-4 text-sm text-slate-500 hover:text-white transition whitespace-nowrap cursor-pointer"
  onMouseDown={() => {
    window.location.href = `/datasets/${id || 1}/quality`;
  }}
>
  Data Quality
</button>
            {/* DATA DRIFT */}

            <button
              type="button"
              onClick={goToDrift}
              className="pb-4 text-sm text-slate-500 hover:text-white transition whitespace-nowrap"
            >
              Data Drift
            </button>

            {/* ANOMALIES */}

            <button
              type="button"
              onClick={goToAnomalies}
              className="pb-4 text-sm text-slate-500 hover:text-white transition whitespace-nowrap"
            >
              Anomalies
            </button>

          </div>

        </div>

        {/* ========================= */}
        {/* OVERVIEW */}
        {/* ========================= */}

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-5">

          {/* DATASET INFORMATION */}

          <div className="xl:col-span-2 bg-slate-900 border border-slate-800 rounded-xl p-6">

            <div className="flex items-center justify-between mb-6">

              <div>

                <h2 className="font-semibold">
                  Dataset Overview
                </h2>

                <p className="text-xs text-slate-500 mt-1">
                  Summary of the current healthcare dataset
                </p>

              </div>

              <Activity
                size={18}
                className="text-blue-400"
              />

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              <div>

                <p className="text-xs text-slate-500">
                  Total Columns
                </p>

                <p className="text-2xl font-semibold mt-1">
                  {dataset.columns}
                </p>

              </div>

              <div>

                <p className="text-xs text-slate-500">
                  Missing Values
                </p>

                <p className="text-2xl font-semibold mt-1">
                  {dataset.missing}
                </p>

              </div>

              <div>

                <p className="text-xs text-slate-500">
                  Duplicate Records
                </p>

                <p className="text-2xl font-semibold mt-1">
                  {dataset.duplicates}
                </p>

              </div>

              <div>

                <p className="text-xs text-slate-500">
                  Dataset Type
                </p>

                <p className="text-2xl font-semibold mt-1">
                  {dataset.type}
                </p>

              </div>

            </div>

          </div>

          {/* MONITORING */}

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">

            <div className="flex items-center gap-3 mb-6">

              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center">

                <Activity
                  size={19}
                  className="text-emerald-400"
                />

              </div>

              <div>

                <h2 className="font-semibold">
                  Monitoring Status
                </h2>

                <p className="text-xs text-slate-500">
                  Dataset monitoring
                </p>

              </div>

            </div>

            <div className="space-y-5">

              <div className="flex items-center justify-between">

                <span className="text-sm text-slate-400">
                  Quality Monitoring
                </span>

                <span className="flex items-center gap-1 text-xs text-emerald-400">

                  <CheckCircle2 size={14} />

                  Active

                </span>

              </div>

              <div className="flex items-center justify-between">

                <span className="text-sm text-slate-400">
                  Drift Monitoring
                </span>

                <span className="flex items-center gap-1 text-xs text-emerald-400">

                  <CheckCircle2 size={14} />

                  Active

                </span>

              </div>

              <div className="flex items-center justify-between">

                <span className="text-sm text-slate-400">
                  Anomaly Detection
                </span>

                <span className="flex items-center gap-1 text-xs text-emerald-400">

                  <CheckCircle2 size={14} />

                  Active

                </span>

              </div>

              <div className="flex items-center justify-between">

                <span className="text-sm text-slate-400">
                  Last Analysis
                </span>

                <span className="flex items-center gap-1 text-xs text-slate-500">

                  <Clock size={14} />

                  {dataset.updated}

                </span>

              </div>

            </div>

          </div>

        </div>

        {/* ========================= */}
        {/* FEATURE SUMMARY */}
        {/* ========================= */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5">

          {/* QUALITY */}

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">

            <div className="flex items-center gap-3">

              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center">

                <ShieldCheck
                  size={19}
                  className="text-emerald-400"
                />

              </div>

              <div>

                <h3 className="font-medium">
                  Data Quality
                </h3>

                <p className="text-xs text-slate-500 mt-1">
                  {dataset.quality}% overall score
                </p>

              </div>

            </div>

            <div className="mt-5">

              <div className="flex justify-between text-xs mb-2">

                <span className="text-slate-500">
                  Quality
                </span>

                <span className="text-emerald-400">
                  {dataset.quality}%
                </span>

              </div>

              <div className="h-2 bg-slate-800 rounded-full overflow-hidden">

                <div
                  className="h-full bg-emerald-500 rounded-full"
                  style={{
                    width: `${dataset.quality}%`,
                  }}
                />

              </div>

            </div>

          </div>

          {/* DRIFT */}

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">

            <div className="flex items-center gap-3">

              <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">

                <TrendingUp
                  size={19}
                  className="text-blue-400"
                />

              </div>

              <div>

                <h3 className="font-medium">
                  Data Drift
                </h3>

                <p className="text-xs text-slate-500 mt-1">
                  {dataset.driftLevel} distribution change
                </p>

              </div>

            </div>

            <div className="mt-5">

              <div className="flex justify-between text-xs mb-2">

                <span className="text-slate-500">
                  Drift Score
                </span>

                <span
                  className={
                    dataset.driftLevel === "Low"
                      ? "text-blue-400"
                      : dataset.driftLevel === "Medium"
                      ? "text-amber-400"
                      : "text-red-400"
                  }
                >
                  {dataset.drift}%
                </span>

              </div>

              <div className="h-2 bg-slate-800 rounded-full overflow-hidden">

                <div
                  className={
                    dataset.driftLevel === "Low"
                      ? "h-full bg-blue-500 rounded-full"
                      : dataset.driftLevel === "Medium"
                      ? "h-full bg-amber-500 rounded-full"
                      : "h-full bg-red-500 rounded-full"
                  }
                  style={{
                    width: `${dataset.drift}%`,
                  }}
                />

              </div>

            </div>

          </div>

          {/* ANOMALIES */}

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">

            <div className="flex items-center gap-3">

              <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center">

                <AlertCircle
                  size={19}
                  className="text-red-400"
                />

              </div>

              <div>

                <h3 className="font-medium">
                  Anomalies
                </h3>

                <p className="text-xs text-slate-500 mt-1">
                  {dataset.anomalies} active anomalies
                </p>

              </div>

            </div>

            <div className="mt-5">

              <p className="text-sm text-red-400">
                Requires attention
              </p>

              <p className="text-xs text-slate-600 mt-2">
                Anomalous records detected during the latest analysis.
              </p>

            </div>

          </div>

        </div>

      </main>

    </div>
  );
}

export default DatasetDetails;