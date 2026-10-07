import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Login from "./pages/Login.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Datasets from "./pages/Datasets.jsx";
import DatasetDetails from "./pages/DatasetDetails.jsx";
import DataProfiling from "./pages/DataProfiling.jsx";
import DataQuality from "./pages/DataQuality.jsx";
import FeaturePage from "./pages/FeaturePage.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={<Navigate to="/login" replace />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        <Route
          path="/datasets"
          element={<Datasets />}
        />

        <Route
          path="/datasets/:id"
          element={<DatasetDetails />}
        />

        <Route
          path="/datasets/:id/profiling"
          element={<DataProfiling />}
        />

        <Route
          path="/datasets/:id/quality"
          element={<DataQuality />}
        />

        {/* Feature Pages */}

        <Route
          path="/datasets/:id/drift"
          element={<FeaturePage type="drift" />}
        />

        <Route
          path="/datasets/:id/anomalies"
          element={<FeaturePage type="anomalies" />}
        />

        <Route
          path="/datasets/:id/recommendations"
          element={<FeaturePage type="recommendations" />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;