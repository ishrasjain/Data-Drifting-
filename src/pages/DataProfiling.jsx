import { useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import {
  ArrowLeft,
  Database,
  Activity,
  FileText,
  Search,
  AlertTriangle,
  CheckCircle2,
  BarChart3,
  Columns3,
  Hash,
  Type,
  CalendarDays,
  Percent,
} from "lucide-react";

function DataProfiling() {
  const navigate = useNavigate();
  const { id } = useParams();

  const datasetInfo = {
    1: {
      name: "Patient Records",
      description: "Electronic health records and patient demographics",
      records: "1.2M",
      features: 24,
    },
    2: {
      name: "Laboratory Results",
      description: "Clinical laboratory test results and observations",
      records: "845K",
      features: 18,
    },
    3: {
      name: "Medication Records",
      description: "Prescriptions, medications and treatment information",
      records: "320K",
      features: 16,
    },
    4: {
      name: "Hospital Admissions",
      description: "Patient admission, discharge and hospitalization data",
      records: "567K",
      features: 21,
    },
    5: {
      name: "Clinical Observations",
      description: "Vital signs and clinical observations",
      records: "2.4M",
      features: 27,
    },
  };

  const dataset = datasetInfo[id] || datasetInfo[1];

  const [search, setSearch] = useState("");

  const features = [
    {
      name: "patient_id",
      type: "String",
      category: "Identifier",
      missing: 0.0,
      unique: "99.9%",
      min: "-",
      max: "-",
    },
    {
      name: "age",
      type: "Integer",
      category: "Numerical",
      missing: 0.3,
      unique: "72.4%",
      min: "0",
      max: "104",
    },
    {
      name: "gender",
      type: "Categorical",
      category: "Categorical",
      missing: 0.1,
      unique: "3",
      min: "-",
      max: "-",
    },
    {
      name: "blood_pressure",
      type: "Float",
      category: "Numerical",
      missing: 1.2,
      unique: "64.7%",
      min: "70",
      max: "210",
    },
    {
      name: "bmi",
      type: "Float",
      category: "Numerical",
      missing: 1.8,
      unique: "81.2%",
      min: "12.4",
      max: "58.7",
    },
    {
      name: "diagnosis",
      type: "Categorical",
      category: "Categorical",
      missing: 0.7,
      unique: "48",
      min: "-",
      max: "-",
    },
    {
      name: "admission_date",
      type: "Date",
      category: "Datetime",
      missing: 0.0,
      unique: "42.8%",
      min: "2021",
      max: "2026",
    },
    {
      name: "hospital_id",
      type: "String",
      category: "Identifier",
      missing: 0.2,
      unique: "326",
      min: "-",
      max: "-",
    },
  ];

  const filteredFeatures = useMemo(() => {
    return features.filter((feature) => {
      const query = search.toLowerCase();

      return (
        feature.name.toLowerCase().includes(query) ||
        feature.type.toLowerCase().includes(query) ||
        feature.category.toLowerCase().includes(query)
      );
    });
  }, [search]);

  const numericalFeatures = features.filter(
    (feature) => feature.category === "Numerical"
  ).length;

  const categoricalFeatures = features.filter(
    (feature) => feature.category === "Categorical"
  ).length;

  const averageMissing =
    features.reduce((sum, feature) => sum + feature.missing, 0) /
    features.length;

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* HEADER */}
      <header className="h-20 border-b border-slate-800 bg-slate-900 flex items-center justify-between px-8">
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={() => navigate(`/datasets/${id}`)}
            className="w-9 h-9 rounded-lg border border-slate-800 bg-slate-950 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-700 transition"
          >
            <ArrowLeft size={18} />
          </button>

          <div>
            <p className="text-xs text-blue-400 uppercase tracking-wider">
              Data Profiling
            </p>

            <h1 className="text-2xl font-bold mt-1">
              {dataset.name}
            </h1>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 text-xs text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            Profiling complete
          </div>
        </div>
      </header>

      <main className="p-8">
        {/* INTRO */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold">
            Dataset Profile
          </h2>

          <p className="text-sm text-slate-500 mt-1">
            Explore the structure, statistics and quality characteristics
            of this healthcare dataset.
          </p>
        </div>

        {/* SUMMARY CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mb-8">
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
                <Database size={19} className="text-blue-400" />
              </div>

              <div>
                <p className="text-xs text-slate-500">
                  Total Records
                </p>
                <p className="text-2xl font-bold mt-1">
                  {dataset.records}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center">
                <Columns3 size={19} className="text-purple-400" />
              </div>

              <div>
                <p className="text-xs text-slate-500">
                  Total Features
                </p>
                <p className="text-2xl font-bold mt-1">
                  {dataset.features}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                <Hash size={19} className="text-emerald-400" />
              </div>

              <div>
                <p className="text-xs text-slate-500">
                  Numerical Features
                </p>
                <p className="text-2xl font-bold mt-1">
                  {numericalFeatures}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center">
                <Percent size={19} className="text-amber-400" />
              </div>

              <div>
                <p className="text-xs text-slate-500">
                  Avg. Missing
                </p>
                <p className="text-2xl font-bold mt-1">
                  {averageMissing.toFixed(2)}%
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* PROFILE OVERVIEW */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-5 mb-6">
          {/* DATA TYPES */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-lg bg-blue-500/10 flex items-center justify-center">
                <BarChart3 size={18} className="text-blue-400" />
              </div>

              <div>
                <h3 className="font-semibold">
                  Data Types
                </h3>

                <p className="text-xs text-slate-500 mt-1">
                  Feature composition
                </p>
              </div>
            </div>

            <div className="space-y-5">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-slate-400">
                    Numerical
                  </span>

                  <span className="text-white">
                    {numericalFeatures}
                  </span>
                </div>

                <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-500 rounded-full"
                    style={{
                      width: `${(numericalFeatures / features.length) * 100}%`,
                    }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-slate-400">
                    Categorical
                  </span>

                  <span className="text-white">
                    {categoricalFeatures}
                  </span>
                </div>

                <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-purple-500 rounded-full"
                    style={{
                      width: `${(categoricalFeatures / features.length) * 100}%`,
                    }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-slate-400">
                    Other
                  </span>

                  <span className="text-white">
                    {features.length -
                      numericalFeatures -
                      categoricalFeatures}
                  </span>
                </div>

                <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-slate-600 rounded-full"
                    style={{
                      width: `${
                        ((features.length -
                          numericalFeatures -
                          categoricalFeatures) /
                          features.length) *
                        100
                      }%`,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* MISSING VALUES */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-lg bg-amber-500/10 flex items-center justify-center">
                <AlertTriangle size={18} className="text-amber-400" />
              </div>

              <div>
                <h3 className="font-semibold">
                  Missing Values
                </h3>

                <p className="text-xs text-slate-500 mt-1">
                  Missing data overview
                </p>
              </div>
            </div>

            <div className="flex items-end gap-2 h-28">
              {features.slice(0, 8).map((feature) => (
                <div
                  key={feature.name}
                  className="flex-1 flex flex-col justify-end items-center h-full"
                >
                  <div
                    className={`w-full max-w-8 rounded-t-md ${
                      feature.missing > 1
                        ? "bg-amber-500"
                        : "bg-blue-500"
                    }`}
                    style={{
                      height: `${Math.max(
                        feature.missing * 30,
                        8
                      )}%`,
                    }}
                  />

                  <span className="text-[9px] text-slate-600 mt-2 truncate w-full text-center">
                    {feature.name.split("_")[0]}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-5 flex items-center gap-2 text-xs text-slate-500">
              <Activity size={14} />
              Average missing data:{" "}
              <span className="text-slate-300">
                {averageMissing.toFixed(2)}%
              </span>
            </div>
          </div>

          {/* PROFILE STATUS */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                <CheckCircle2
                  size={18}
                  className="text-emerald-400"
                />
              </div>

              <div>
                <h3 className="font-semibold">
                  Profiling Status
                </h3>

                <p className="text-xs text-slate-500 mt-1">
                  Automated profile checks
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-400">
                  Schema detected
                </span>

                <span className="text-xs text-emerald-400">
                  Complete
                </span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-400">
                  Data types detected
                </span>

                <span className="text-xs text-emerald-400">
                  Complete
                </span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-400">
                  Missing values analyzed
                </span>

                <span className="text-xs text-emerald-400">
                  Complete
                </span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-400">
                  Statistical summary
                </span>

                <span className="text-xs text-emerald-400">
                  Complete
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* FEATURE TABLE */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
          <div className="px-6 py-5 border-b border-slate-800">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              <div>
                <h2 className="font-semibold">
                  Feature Profile
                </h2>

                <p className="text-xs text-slate-500 mt-1">
                  Column-level statistics for the healthcare dataset
                </p>
              </div>

              <div className="relative w-full lg:w-80">
                <Search
                  size={16}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"
                />

                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search features..."
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg py-2.5 pl-9 pr-4 text-sm text-white placeholder-slate-600 outline-none focus:border-blue-500"
                />
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-800 text-left">
                  <th className="px-6 py-4 text-xs text-slate-500 font-medium">
                    Feature
                  </th>

                  <th className="px-6 py-4 text-xs text-slate-500 font-medium">
                    Data Type
                  </th>

                  <th className="px-6 py-4 text-xs text-slate-500 font-medium">
                    Category
                  </th>

                  <th className="px-6 py-4 text-xs text-slate-500 font-medium">
                    Missing
                  </th>

                  <th className="px-6 py-4 text-xs text-slate-500 font-medium">
                    Unique
                  </th>

                  <th className="px-6 py-4 text-xs text-slate-500 font-medium">
                    Min
                  </th>

                  <th className="px-6 py-4 text-xs text-slate-500 font-medium">
                    Max
                  </th>
                </tr>
              </thead>

              <tbody>
                {filteredFeatures.map((feature) => (
                  <tr
                    key={feature.name}
                    className="border-b border-slate-800/60 hover:bg-slate-800/30 transition"
                  >
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg bg-blue-500/10 flex items-center justify-center">
                          {feature.type === "String" ? (
                            <Type
                              size={16}
                              className="text-blue-400"
                            />
                          ) : feature.type === "Date" ? (
                            <CalendarDays
                              size={16}
                              className="text-purple-400"
                            />
                          ) : (
                            <Hash
                              size={16}
                              className="text-emerald-400"
                            />
                          )}
                        </div>

                        <span className="text-sm font-medium">
                          {feature.name}
                        </span>
                      </div>
                    </td>

                    <td className="px-6 py-5 text-sm text-slate-400">
                      {feature.type}
                    </td>

                    <td className="px-6 py-5">
                      <span className="text-xs px-2.5 py-1 rounded-full bg-slate-800 text-slate-300">
                        {feature.category}
                      </span>
                    </td>

                    <td className="px-6 py-5">
                      <span
                        className={
                          feature.missing > 1
                            ? "text-amber-400 text-sm"
                            : "text-emerald-400 text-sm"
                        }
                      >
                        {feature.missing}%
                      </span>
                    </td>

                    <td className="px-6 py-5 text-sm text-slate-400">
                      {feature.unique}
                    </td>

                    <td className="px-6 py-5 text-sm text-slate-500">
                      {feature.min}
                    </td>

                    <td className="px-6 py-5 text-sm text-slate-500">
                      {feature.max}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredFeatures.length === 0 && (
            <div className="py-14 text-center">
              <FileText
                size={30}
                className="mx-auto text-slate-700"
              />

              <p className="text-slate-400 mt-3">
                No features found
              </p>
            </div>
          )}

          <div className="px-6 py-4 border-t border-slate-800 text-xs text-slate-600">
            Showing {filteredFeatures.length} of {features.length} profiled
            features
          </div>
        </div>
      </main>
    </div>
  );
}

export default DataProfiling;