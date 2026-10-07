import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Search,
  Plus,
  Database,
  ArrowUpRight,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Filter,
  Activity,
  FileText,
  Users,
  Clock,
} from "lucide-react";

function Datasets() {
  const navigate = useNavigate();

  // =========================
  // MOCK HEALTHCARE DATA
  // =========================

  const datasets = [
    {
      id: 1,
      name: "Patient Records",
      description:
        "Electronic health records and patient demographics",
      records: "1.2M",
      quality: 96.4,
      drift: "Low",
      status: "Healthy",
      updated: "12 min ago",
    },

    {
      id: 2,
      name: "Laboratory Results",
      description:
        "Clinical laboratory test results and observations",
      records: "845K",
      quality: 92.7,
      drift: "Medium",
      status: "Warning",
      updated: "38 min ago",
    },

    {
      id: 3,
      name: "Medication Records",
      description:
        "Prescriptions, medications and treatment information",
      records: "320K",
      quality: 81.3,
      drift: "High",
      status: "Critical",
      updated: "1 hour ago",
    },

    {
      id: 4,
      name: "Hospital Admissions",
      description:
        "Patient admission, discharge and hospitalization data",
      records: "567K",
      quality: 95.1,
      drift: "Low",
      status: "Healthy",
      updated: "2 hours ago",
    },

    {
      id: 5,
      name: "Clinical Observations",
      description:
        "Vital signs and clinical observations",
      records: "2.4M",
      quality: 89.6,
      drift: "Medium",
      status: "Warning",
      updated: "3 hours ago",
    },
  ];

  // =========================
  // STATES
  // =========================

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  // =========================
  // SEARCH + FILTER
  // =========================

  const filteredDatasets = datasets.filter((dataset) => {
    const matchesSearch =
      dataset.name
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      dataset.description
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchesFilter =
      filter === "All" ||
      dataset.status === filter;

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* ========================= */}
      {/* TOP HEADER */}
      {/* ========================= */}

      <header className="h-20 border-b border-slate-800 bg-slate-900 flex items-center justify-between px-8">

        <div>

          <p className="text-xs text-blue-400 uppercase tracking-wider">
            Data Management
          </p>

          <h1 className="text-2xl font-bold mt-1">
            Healthcare Datasets
          </h1>

        </div>

        <button
          type="button"
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 px-4 py-2.5 rounded-lg text-sm font-medium transition shadow-lg shadow-blue-600/20"
        >
          <Plus size={17} />
          Add Dataset
        </button>

      </header>


      {/* ========================= */}
      {/* MAIN CONTENT */}
      {/* ========================= */}

      <main className="p-8">

        {/* INTRO */}

        <div className="mb-8">

          <h2 className="text-xl font-semibold">
            Monitored Healthcare Data
          </h2>

          <p className="text-sm text-slate-500 mt-1">
            Monitor the quality, reliability and distribution
            of healthcare datasets.
          </p>

        </div>


        {/* ========================= */}
        {/* SUMMARY CARDS */}
        {/* ========================= */}

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">

          {/* TOTAL DATASETS */}

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">

            <div className="flex items-center gap-3">

              <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">

                <Database
                  size={19}
                  className="text-blue-400"
                />

              </div>

              <div>

                <p className="text-xs text-slate-500">
                  Total Datasets
                </p>

                <p className="text-2xl font-bold">
                  5
                </p>

              </div>

            </div>

          </div>


          {/* HEALTHY */}

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">

            <div className="flex items-center gap-3">

              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center">

                <CheckCircle2
                  size={19}
                  className="text-emerald-400"
                />

              </div>

              <div>

                <p className="text-xs text-slate-500">
                  Healthy
                </p>

                <p className="text-2xl font-bold">
                  2
                </p>

              </div>

            </div>

          </div>


          {/* NEEDS ATTENTION */}

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">

            <div className="flex items-center gap-3">

              <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center">

                <AlertTriangle
                  size={19}
                  className="text-amber-400"
                />

              </div>

              <div>

                <p className="text-xs text-slate-500">
                  Needs Attention
                </p>

                <p className="text-2xl font-bold">
                  3
                </p>

              </div>

            </div>

          </div>


          {/* TOTAL RECORDS */}

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">

            <div className="flex items-center gap-3">

              <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center">

                <Users
                  size={19}
                  className="text-purple-400"
                />

              </div>

              <div>

                <p className="text-xs text-slate-500">
                  Total Records
                </p>

                <p className="text-2xl font-bold">
                  5.3M
                </p>

              </div>

            </div>

          </div>

        </div>


        {/* ========================= */}
        {/* SEARCH + FILTER */}
        {/* ========================= */}

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 mb-5">

          <div className="flex flex-col lg:flex-row gap-3 justify-between">

            {/* SEARCH */}

            <div className="relative w-full lg:w-96">

              <Search
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"
              />

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search healthcare datasets..."
                className="w-full bg-slate-950 border border-slate-800 rounded-lg py-2.5 pl-10 pr-4 text-sm text-white placeholder-slate-600 outline-none focus:border-blue-500"
              />

            </div>


            {/* FILTER */}

            <div className="flex items-center gap-2">

              <Filter
                size={16}
                className="text-slate-500"
              />

              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="bg-slate-950 border border-slate-800 rounded-lg px-4 py-2.5 text-sm text-slate-400 outline-none focus:border-blue-500"
              >

                <option value="All">
                  All Status
                </option>

                <option value="Healthy">
                  Healthy
                </option>

                <option value="Warning">
                  Warning
                </option>

                <option value="Critical">
                  Critical
                </option>

              </select>

            </div>

          </div>

        </div>


        {/* ========================= */}
        {/* DATASET TABLE */}
        {/* ========================= */}

        <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">

          {/* TABLE HEADER */}

          <div className="px-6 py-5 border-b border-slate-800">

            <div className="flex items-center justify-between">

              <div>

                <h2 className="font-semibold">
                  Dataset Health
                </h2>

                <p className="text-xs text-slate-500 mt-1">
                  Current health of monitored healthcare datasets
                </p>

              </div>

              <div className="flex items-center gap-2 text-xs text-slate-500">

                <Activity size={14} />

                Monitoring active

              </div>

            </div>

          </div>


          {/* TABLE */}

          <div className="overflow-x-auto">

            <table className="w-full">

              <thead>

                <tr className="border-b border-slate-800 text-left">

                  <th className="px-6 py-4 text-xs font-medium text-slate-500">
                    Dataset
                  </th>

                  <th className="px-6 py-4 text-xs font-medium text-slate-500">
                    Records
                  </th>

                  <th className="px-6 py-4 text-xs font-medium text-slate-500">
                    Quality
                  </th>

                  <th className="px-6 py-4 text-xs font-medium text-slate-500">
                    Drift
                  </th>

                  <th className="px-6 py-4 text-xs font-medium text-slate-500">
                    Status
                  </th>

                  <th className="px-6 py-4 text-xs font-medium text-slate-500">
                    Last Checked
                  </th>

                  <th className="px-6 py-4">
                  </th>

                </tr>

              </thead>


              <tbody>

                {filteredDatasets.map((dataset) => (

                  <tr
                    key={dataset.id}
                    className="border-b border-slate-800/60 hover:bg-slate-800/30 transition"
                  >

                    {/* DATASET */}

                    <td className="px-6 py-5">

                      <div className="flex items-center gap-3">

                        <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">

                          <FileText
                            size={18}
                            className="text-blue-400"
                          />

                        </div>

                        <div>

                          <p className="text-sm font-medium">
                            {dataset.name}
                          </p>

                          <p className="text-xs text-slate-600 mt-1">
                            {dataset.description}
                          </p>

                        </div>

                      </div>

                    </td>


                    {/* RECORDS */}

                    <td className="px-6 py-5 text-sm text-slate-400">
                      {dataset.records}
                    </td>


                    {/* QUALITY */}

                    <td className="px-6 py-5">

                      <div className="flex items-center gap-3">

                        <div className="w-20 h-1.5 bg-slate-800 rounded-full overflow-hidden">

                          <div
                            className={`h-full rounded-full ${
                              dataset.quality >= 90
                                ? "bg-emerald-500"
                                : dataset.quality >= 85
                                ? "bg-amber-500"
                                : "bg-red-500"
                            }`}
                            style={{
                              width: `${dataset.quality}%`,
                            }}
                          />

                        </div>

                        <span className="text-sm text-slate-300">
                          {dataset.quality}%
                        </span>

                      </div>

                    </td>


                    {/* DRIFT */}

                    <td className="px-6 py-5">

                      <span
                        className={`text-xs px-2.5 py-1 rounded-full ${
                          dataset.drift === "Low"
                            ? "bg-emerald-500/10 text-emerald-400"
                            : dataset.drift === "Medium"
                            ? "bg-amber-500/10 text-amber-400"
                            : "bg-red-500/10 text-red-400"
                        }`}
                      >
                        {dataset.drift}
                      </span>

                    </td>


                    {/* STATUS */}

                    <td className="px-6 py-5">

                      <div className="flex items-center gap-2">

                        {dataset.status === "Healthy" && (
                          <CheckCircle2
                            size={16}
                            className="text-emerald-400"
                          />
                        )}

                        {dataset.status === "Warning" && (
                          <AlertTriangle
                            size={16}
                            className="text-amber-400"
                          />
                        )}

                        {dataset.status === "Critical" && (
                          <XCircle
                            size={16}
                            className="text-red-400"
                          />
                        )}

                        <span className="text-sm text-slate-300">
                          {dataset.status}
                        </span>

                      </div>

                    </td>


                    {/* LAST CHECKED */}

                    <td className="px-6 py-5">

                      <div className="flex items-center gap-2 text-sm text-slate-500">

                        <Clock size={14} />

                        {dataset.updated}

                      </div>

                    </td>


                    {/* VIEW */}

                    <td className="px-6 py-5">

                      <button
                        type="button"
                        onClick={() => {
                          console.log(
                            "Opening dataset:",
                            dataset.id
                          );

                          navigate(
                            `/datasets/${dataset.id}`
                          );
                        }}
                        className="flex items-center gap-1 text-xs text-blue-400 hover:text-blue-300 transition"
                      >

                        View

                        <ArrowUpRight size={14} />

                      </button>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>


          {/* EMPTY RESULT */}

          {filteredDatasets.length === 0 && (

            <div className="py-16 text-center">

              <Database
                size={32}
                className="mx-auto text-slate-700"
              />

              <p className="text-slate-400 mt-4">
                No datasets found
              </p>

              <p className="text-xs text-slate-600 mt-1">
                Try changing your search or filter.
              </p>

            </div>

          )}

        </div>


        {/* ========================= */}
        {/* FOOTER */}
        {/* ========================= */}

        <div className="flex items-center justify-between mt-5 text-xs text-slate-600">

          <p>
            Showing {filteredDatasets.length} of{" "}
            {datasets.length} datasets
          </p>

          <p>
            Healthcare Data Monitoring
          </p>

        </div>

      </main>

    </div>
  );
}

export default Datasets;