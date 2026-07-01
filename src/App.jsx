import "./assets/tailwind.css";
import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

import NotFound from "./pages/NotFound";
import Error400 from "./pages/Error400";
import Error401 from "./pages/Error401";
import Error403 from "./pages/Error403";

import AuthLayout from "./layouts/AuthLayout";
import MainLayout from "./layouts/MainLayout";
import KlinikLayout from "./layouts/KlinikLayout";

// Existing Pages
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Orders = lazy(() => import("./pages/Orders"));
const Customers = lazy(() => import("./pages/Customers"));
const Login = lazy(() => import("./pages/Auth/Login"));
const Register = lazy(() => import("./pages/Auth/Register"));
const Forgot = lazy(() => import("./pages/Auth/Forgot"));
const CustomerDetail = lazy(() => import("./pages/CustomerDetail"));
const ProductDetail = lazy(() => import("./pages/ProductDetail"));
const Products = lazy(() => import("./pages/Products"));
const UsersPage = lazy(() => import("./pages/UsersPage"));

// Landing Page
const LandingPage = lazy(() => import("./pages/LandingPage"));

// Klinik Pages
const DashboardKlinik = lazy(() =>
  import("./pages/klinik/DashboardKlinik")
);
const PasienKlinik = lazy(() =>
  import("./pages/klinik/PasienKlinik")
);
const JadwalKlinik = lazy(() =>
  import("./pages/klinik/JadwalKlinik")
);
const PembayaranKlinik = lazy(() =>
  import("./pages/klinik/PembayaranKlinik")
);
const KeluhanKlinik = lazy(() =>
  import("./pages/klinik/Keluhan")
);
const LoyalitasKlinik = lazy(() =>
  import("./pages/klinik/LoyalitasKlinik")
);
const ProductKlinik = lazy(() =>
  import("./pages/klinik/ProductKlinik")
);
const PasienDetail = lazy(() =>
  import("./pages/klinik/PasienDetail")
);

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>

        {/* LANDING PAGE */}
        <Route path="/" element={<LandingPage />} />

        {/* MAIN LAYOUT */}
        <Route element={<MainLayout />}>
          <Route path="/praktikum" element={<Dashboard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/customers/:id" element={<CustomerDetail />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/error/400" element={<Error400 />} />
          <Route path="/error/401" element={<Error401 />} />
          <Route path="/error/403" element={<Error403 />} />
        </Route>

        {/* AUTH */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
        </Route>

        {/* KLINIK */}
        <Route element={<KlinikLayout />}>
<Route path="/klinik" element={<DashboardKlinik />} />

          {/* USERS CRUD */}
          <Route path="/users" element={<UsersPage />} />

          <Route path="/klinik/pasien" element={<PasienKlinik />} />
          <Route path="/klinik/jadwal" element={<JadwalKlinik />} />
          <Route
            path="/klinik/pembayaran"
            element={<PembayaranKlinik />}
          />
          <Route
            path="/klinik/keluhan"
            element={<KeluhanKlinik />}
          />
          <Route
            path="/klinik/loyalitas"
            element={<LoyalitasKlinik />}
          />
          <Route
            path="/klinik/ProductKlinik"
            element={<ProductKlinik />}
          />
          <Route
            path="/klinik/pasien/:id"
            element={<PasienDetail />}
          />
        </Route>

        {/* 404 */}
        <Route path="*" element={<NotFound />} />

      </Routes>
    </Suspense>
  );
}

export default App;