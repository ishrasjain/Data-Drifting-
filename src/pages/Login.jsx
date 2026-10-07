import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Database,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  ShieldCheck,
  Activity,
} from "lucide-react";

function Login() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  // Login button
  const handleLogin = (e) => {
    e.preventDefault();

    // For now, we are only testing navigation.
    // Real authentication will be connected to FastAPI later.
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white flex">

      {/* ================= LEFT SIDE ================= */}

      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">

        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950" />

        {/* Decorative glow */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

        <div className="relative z-10 flex flex-col justify-between p-14 w-full">

          {/* ================= LOGO ================= */}

          <div className="flex items-center gap-3">

            <div className="w-11 h-11 rounded-xl bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-600/20">
              <Database size={23} />
            </div>

            <div>
              <h1 className="text-lg font-semibold tracking-wide">
                DataGuard
              </h1>

              <p className="text-xs text-slate-400">
                Enterprise Data Intelligence
              </p>
            </div>

          </div>


          {/* ================= MAIN CONTENT ================= */}

          <div className="max-w-lg">

            <div className="flex items-center gap-2 text-blue-400 mb-6">

              <Activity size={18} />

              <span className="text-sm font-medium">
                DATA QUALITY MONITORING
              </span>

            </div>


            <h2 className="text-5xl font-bold leading-tight">

              Make your data

              <span className="text-blue-400">
                {" "}trustworthy.
              </span>

            </h2>


            <p className="mt-6 text-slate-400 text-lg leading-relaxed">

              Monitor data quality, detect drift, identify anomalies and
              receive intelligent recommendations from one centralized
              platform.

            </p>


            {/* ================= FEATURE 1 ================= */}

            <div className="mt-10 space-y-4">

              <div className="flex items-center gap-3">

                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">

                  <ShieldCheck
                    size={17}
                    className="text-blue-400"
                  />

                </div>

                <span className="text-sm text-slate-300">
                  Automated data quality monitoring
                </span>

              </div>


              {/* ================= FEATURE 2 ================= */}

              <div className="flex items-center gap-3">

                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">

                  <Activity
                    size={17}
                    className="text-cyan-400"
                  />

                </div>

                <span className="text-sm text-slate-300">
                  Real-time drift & anomaly detection
                </span>

              </div>

            </div>

          </div>


          {/* ================= FOOTER ================= */}

          <p className="text-xs text-slate-500">

            © 2026 DataGuard. Data Engineering Intelligence Platform.

          </p>

        </div>

      </div>


      {/* ================= RIGHT SIDE ================= */}

      <div className="w-full lg:w-1/2 flex items-center justify-center px-6 py-12 bg-slate-900">

        <div className="w-full max-w-md">


          {/* ================= MOBILE LOGO ================= */}

          <div className="flex lg:hidden items-center gap-3 mb-12">

            <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center">

              <Database size={21} />

            </div>

            <div>

              <h1 className="font-semibold">
                DataGuard
              </h1>

              <p className="text-xs text-slate-400">
                Enterprise Data Intelligence
              </p>

            </div>

          </div>


          {/* ================= HEADING ================= */}

          <div className="mb-8">

            <h2 className="text-3xl font-bold">
              Welcome back
            </h2>

            <p className="mt-2 text-slate-400">
              Sign in to your data intelligence dashboard.
            </p>

          </div>


          {/* ================= LOGIN FORM ================= */}

          <form
            onSubmit={handleLogin}
            className="space-y-5"
          >

            {/* ================= EMAIL ================= */}

            <div>

              <label className="block text-sm font-medium text-slate-300 mb-2">
                Email address
              </label>

              <div className="relative">

                <Mail
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                />

                <input
                  type="email"
                  placeholder="you@company.com"
                  required
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl py-3.5 pl-11 pr-4 text-white placeholder-slate-600 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10"
                />

              </div>

            </div>


            {/* ================= PASSWORD ================= */}

            <div>

              <div className="flex items-center justify-between mb-2">

                <label className="block text-sm font-medium text-slate-300">
                  Password
                </label>

                <button
                  type="button"
                  className="text-sm text-blue-400 hover:text-blue-300 transition"
                >
                  Forgot password?
                </button>

              </div>


              <div className="relative">

                <Lock
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                />

                <input
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  placeholder="Enter your password"
                  required
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl py-3.5 pl-11 pr-12 text-white placeholder-slate-600 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10"
                />


                {/* Show / Hide Password */}

                <button
                  type="button"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300"
                >

                  {showPassword ? (
                    <EyeOff size={18} />
                  ) : (
                    <Eye size={18} />
                  )}

                </button>

              </div>

            </div>


            {/* ================= REMEMBER ME ================= */}

            <div className="flex items-center gap-2">

              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) =>
                  setRememberMe(e.target.checked)
                }
                className="w-4 h-4 accent-blue-600"
              />

              <label className="text-sm text-slate-400">
                Remember me
              </label>

            </div>


            {/* ================= LOGIN BUTTON ================= */}

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 active:bg-blue-700 transition rounded-xl py-3.5 font-semibold shadow-lg shadow-blue-600/20"
            >

              Sign in

              <ArrowRight size={18} />

            </button>

          </form>


          {/* ================= DIVIDER ================= */}

          <div className="flex items-center gap-4 my-8">

            <div className="flex-1 h-px bg-slate-800" />

            <span className="text-xs text-slate-600">
              OR
            </span>

            <div className="flex-1 h-px bg-slate-800" />

          </div>


          {/* ================= CREATE ACCOUNT ================= */}

          <p className="text-center text-sm text-slate-400">

            Don't have an account?{" "}

            <button
              type="button"
              className="text-blue-400 hover:text-blue-300 font-medium"
            >
              Create account
            </button>

          </p>


          {/* ================= SECURITY ================= */}

          <div className="mt-10 flex items-center justify-center gap-2 text-xs text-slate-600">

            <ShieldCheck size={14} />

            Secure enterprise authentication

          </div>

        </div>

      </div>

    </div>
  );
}

export default Login;