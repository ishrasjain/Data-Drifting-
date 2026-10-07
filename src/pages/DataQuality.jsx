import { useNavigate, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ShieldCheck,
  AlertTriangle,
  Copy,
  FileWarning,
  CheckCircle2,
  XCircle,
  Activity,
  Database,
} from "lucide-react";

function DataQuality() {
  const navigate = useNavigate();
  const { id } = useParams();

  // Demo data matching the existing Dataset Details data
  const datasets = {
    1: {
      name: "Patient Records",
      quality: 96.4,
      missing: 2.1,
      duplicates: 0.4,
      anomalies: 7,
      columns: 24,
      records: "1.2M",
    },
    2: {
      name: "Laboratory Results",
      quality: 92.7,
      missing: 4.8,
      duplicates: 0.7,
      anomalies: 14,
      columns: 18,
      records: "845K",
    },
    3: {
      name: "Medication Records",
      quality: 81.3,
      missing: 9.4,
      duplicates: 2.1,
      anomalies: 31,
      columns: 16,
      records: "320K",
    },
    4: {
      name: "Hospital Admissions",
      quality: 95.1,
      missing: 2.8,
      duplicates: 0.3,
      anomalies: 5,
      columns: 21,
      records: "567K",
    },
    5: {
      name: "Clinical Observations",
      quality: 89.6,
      missing: 5.6,
      duplicates: 0.9,
      anomalies: 18,
      columns: 27,
      records: "2.4M",
    },
  };

  const dataset = datasets[id] || datasets[1];

  const completeness = (100 - dataset.missing).toFixed(1);

  const getStatus = () => {
    if (dataset.quality >= 90) return "Healthy";
    if (dataset.quality >= 85) return "Warning";
    return "Critical";
  };

  const status = getStatus();

  const goBack = () => {
    navigate(`/datasets/${id}`);
  };

  const getStatusColor = () => {
    if (status === "Healthy") return "text-emerald-400";
    if (status === "Warning") return "text-amber-400";
    return "text-red-400";
  };

  const getQualityColor = () => {
    if (dataset.quality >= 90) return "bg-emerald-500";
    if (dataset.quality >= 85) return "bg-amber-500";
    return "bg-red-500";
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* HEADER */}
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
              <ShieldCheck
                size={16}
                className="text-emerald-400"
              />

              <span className="text-xs text-slate-500">
                Data Quality Analysis
              </span>
            </div>

            <h1 className="text-xl font-bold mt-1">
              {dataset.name}
            </h1>
          </div>

        </div>

        <div className="flex items-center gap-2 text-xs text-emerald-400">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          Analysis complete
        </div>

      </header>


      {/* MAIN */}
      <main className="p-8 max-w-[1600px] mx-auto">

        {/* TITLE */}
        <div className="mb-8">

          <p className="text-xs text-emerald-400 uppercase tracking-wider">
            Data Quality
          </p>

          <h2 className="text-3xl font-bold mt-2">
            Data Quality Analysis
          </h2>

          <p className="text-sm text-slate-500 mt-2">
            Review completeness, validity, consistency and uniqueness
            of your dataset.
          </p>

        </div>


        {/* TOP CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 mb-8">

          {/* QUALITY SCORE */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">

            <div className="flex items-center justify-between">

              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                <ShieldCheck
                  size={20}
                  className="text-emerald-400"
                />
              </div>

              <span className={`text-xs ${getStatusColor()}`}>
                {status}
              </span>

            </div>

            <p className="text-xs text-slate-500 mt-5">
              Overall Quality Score
            </p>

            <h3 className="text-3xl font-bold mt-1">
              {dataset.quality}%
            </h3>

            <div className="w-full h-2 bg-slate-800 rounded-full mt-4 overflow-hidden">
              <div
                className={`h-full ${getQualityColor()} rounded-full`}
                style={{ width: `${dataset.quality}%` }}
              />
            </div>

          </div>


          {/* MISSING */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">

            <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center">
              <FileWarning
                size={20}
                className="text-amber-400"
              />
            </div>

            <p className="text-xs text-slate-500 mt-5">
              Missing Values
            </p>

            <h3 className="text-3xl font-bold mt-1">
              {dataset.missing}%
            </h3>

            <p className="text-xs text-amber-400 mt-2">
              Requires attention
            </p>

          </div>


          {/* DUPLICATES */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">

            <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
              <Copy
                size={20}
                className="text-blue-400"
              />
            </div>

            <p className="text-xs text-slate-500 mt-5">
              Duplicate Records
            </p>

            <h3 className="text-3xl font-bold mt-1">
              {dataset.duplicates}%
            </h3>

            <p className="text-xs text-blue-400 mt-2">
              Duplicate data detected
            </p>

          </div>


          {/* ANOMALIES */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">

            <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center">
              <AlertTriangle
                size={20}
                className="text-red-400"
              />
            </div>

            <p className="text-xs text-slate-500 mt-5">
              Anomalies
            </p>

            <h3 className="text-3xl font-bold mt-1">
              {dataset.anomalies}
            </h3>

            <p className="text-xs text-red-400 mt-2">
              Issues detected
            </p>

          </div>

        </div>


        {/* QUALITY DIMENSIONS */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 mb-8">

          <div className="flex items-center justify-between mb-6">

            <div>
              <h3 className="font-semibold">
                Quality Dimensions
              </h3>

              <p className="text-xs text-slate-500 mt-1">
                Key dimensions used to evaluate dataset quality
              </p>
            </div>

            <Activity
              size={19}
              className="text-emerald-400"
            />

          </div>


          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">

            {/* COMPLETENESS */}
            <div className="bg-slate-950 border border-slate-800 rounded-lg p-5">

              <div className="flex items-center justify-between">
                <span className="text-sm">
                  Completeness
                </span>

                <CheckCircle2
                  size={17}
                  className="text-emerald-400"
                />
              </div>

              <p className="text-2xl font-bold mt-4">
                {completeness}%
              </p>

              <div className="w-full h-1.5 bg-slate-800 rounded-full mt-3">
                <div
                  className="h-full bg-emerald-500 rounded-full"
                  style={{ width: `${completeness}%` }}
                />
              </div>

              <p className="text-xs text-slate-500 mt-3">
                Based on missing values
              </p>

            </div>


            {/* VALIDITY */}
            <div className="bg-slate-950 border border-slate-800 rounded-lg p-5">

              <div className="flex items-center justify-between">
                <span className="text-sm">
                  Validity
                </span>

                <CheckCircle2
                  size={17}
                  className="text-emerald-400"
                />
              </div>

              <p className="text-2xl font-bold mt-4">
                98.2%
              </p>

              <div className="w-full h-1.5 bg-slate-800 rounded-full mt-3">
                <div
                  className="h-full bg-emerald-500 rounded-full"
                  style={{ width: "98.2%" }}
                />
              </div>

              <p className="text-xs text-slate-500 mt-3">
                Values follow expected formats
              </p>

            </div>


            {/* CONSISTENCY */}
            <div className="bg-slate-950 border border-slate-800 rounded-lg p-5">

              <div className="flex items-center justify-between">
                <span className="text-sm">
                  Consistency
                </span>

                <CheckCircle2
                  size={17}
                  className="text-emerald-400"
                />
              </div>

              <p className="text-2xl font-bold mt-4">
                97.5%
              </p>

              <div className="w-full h-1.5 bg-slate-800 rounded-full mt-3">
                <div
                  className="h-full bg-emerald-500 rounded-full"
                  style={{ width: "97.5%" }}
                />
              </div>

              <p className="text-xs text-slate-500 mt-3">
                Data values remain consistent
              </p>

            </div>


            {/* UNIQUENESS */}
            <div className="bg-slate-950 border border-slate-800 rounded-lg p-5">

              <div className="flex items-center justify-between">
                <span className="text-sm">
                  Uniqueness
                </span>

                {dataset.duplicates <= 1 ? (
                  <CheckCircle2
                    size={17}
                    className="text-emerald-400"
                  />
                ) : (
                  <XCircle
                    size={17}
                    className="text-red-400"
                  />
                )}
              </div>

              <p className="text-2xl font-bold mt-4">
                {(100 - dataset.duplicates).toFixed(1)}%
              </p>

              <div className="w-full h-1.5 bg-slate-800 rounded-full mt-3">
                <div
                  className="h-full bg-blue-500 rounded-full"
                  style={{
                    width: `${100 - dataset.duplicates}%`,
                  }}
                />
              </div>

              <p className="text-xs text-slate-500 mt-3">
                Based on duplicate records
              </p>

            </div>

          </div>

        </div>


        {/* TWO COLUMN SECTION */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 mb-8">

          {/* ISSUES */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">

            <div className="flex items-center gap-3 mb-6">

              <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center">
                <AlertTriangle
                  size={19}
                  className="text-red-400"
                />
              </div>

              <div>
                <h3 className="font-semibold">
                  Issues Detected
                </h3>

                <p className="text-xs text-slate-500 mt-1">
                  Data quality issues requiring attention
                </p>
              </div>

            </div>


            <div className="space-y-3">

              <div className="flex items-center justify-between bg-slate-950 border border-slate-800 rounded-lg p-4">

                <div>
                  <p className="text-sm">
                    Missing Values
                  </p>

                  <p className="text-xs text-slate-500 mt-1">
                    {dataset.missing}% of dataset values are missing
                  </p>
                </div>

                <span className="text-xs text-amber-400">
                  Review
                </span>

              </div>


              <div className="flex items-center justify-between bg-slate-950 border border-slate-800 rounded-lg p-4">

                <div>
                  <p className="text-sm">
                    Duplicate Records
                  </p>

                  <p className="text-xs text-slate-500 mt-1">
                    {dataset.duplicates}% duplicate records found
                  </p>
                </div>

                <span className="text-xs text-blue-400">
                  Review
                </span>

              </div>


              <div className="flex items-center justify-between bg-slate-950 border border-slate-800 rounded-lg p-4">

                <div>
                  <p className="text-sm">
                    Anomalous Records
                  </p>

                  <p className="text-xs text-slate-500 mt-1">
                    {dataset.anomalies} unusual records detected
                  </p>
                </div>

                <span className="text-xs text-red-400">
                  Investigate
                </span>

              </div>

            </div>

          </div>


          {/* RECOMMENDATIONS */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">

            <div className="flex items-center gap-3 mb-6">

              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                <ShieldCheck
                  size={19}
                  className="text-emerald-400"
                />
              </div>

              <div>
                <h3 className="font-semibold">
                  Recommendations
                </h3>

                <p className="text-xs text-slate-500 mt-1">
                  Suggested actions to improve quality
                </p>
              </div>

            </div>


            <div className="space-y-4">

              <div className="flex gap-3">
                <CheckCircle2
                  size={18}
                  className="text-emerald-400 mt-0.5"
                />

                <div>
                  <p className="text-sm">
                    Review missing values
                  </p>

                  <p className="text-xs text-slate-500 mt-1">
                    Investigate columns with high missing-value rates.
                  </p>
                </div>
              </div>


              <div className="flex gap-3">
                <CheckCircle2
                  size={18}
                  className="text-emerald-400 mt-0.5"
                />

                <div>
                  <p className="text-sm">
                    Remove duplicate records
                  </p>

                  <p className="text-xs text-slate-500 mt-1">
                    Deduplicate records before downstream analysis.
                  </p>
                </div>
              </div>


              <div className="flex gap-3">
                <CheckCircle2
                  size={18}
                  className="text-emerald-400 mt-0.5"
                />

                <div>
                  <p className="text-sm">
                    Investigate anomalies
                  </p>

                  <p className="text-xs text-slate-500 mt-1">
                    Review unusual records detected during analysis.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>


        {/* DATASET SUMMARY */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">

          <div className="flex items-center gap-3 mb-6">

            <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
              <Database
                size={19}
                className="text-blue-400"
              />
            </div>

            <div>
              <h3 className="font-semibold">
                Dataset Summary
              </h3>

              <p className="text-xs text-slate-500 mt-1">
                Basic information about the analyzed dataset
              </p>
            </div>

          </div>


          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">

            <div>
              <p className="text-xs text-slate-500">
                Dataset
              </p>

              <p className="text-sm font-medium mt-1">
                {dataset.name}
              </p>
            </div>


            <div>
              <p className="text-xs text-slate-500">
                Records
              </p>

              <p className="text-sm font-medium mt-1">
                {dataset.records}
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
                Quality Status
              </p>

              <p className={`text-sm font-medium mt-1 ${getStatusColor()}`}>
                {status}
              </p>
            </div>

          </div>

        </div>

      </main>
    </div>
  );
}

export default DataQuality;