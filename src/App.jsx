import { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import "./assets/tailwind.css";
import NotFound from "./pages/NotFound";
import Error400 from "./pages/Error400";
import Error401 from "./pages/Error401";
import Error403 from "./pages/Error403";
import AuthLayout from "./layouts/AuthLayout";
import MainLayout from "./layouts/MainLayout";
import KlinikLayout from "./layouts/KlinikLayout"; // 👈 TAMBAHKAN IMPORT KLINIKLAYOUT
import { lazy } from "react";
import { Suspense } from "react";

// Existing imports
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Orders = lazy(() => import("./pages/Orders"));
const Customers = lazy(() => import("./pages/Customers"));
const Login = lazy(() => import("./pages/Auth/Login"));
const Register = lazy(() => import("./pages/Auth/Register"));
const Forgot = lazy(() => import("./pages/Auth/Forgot"));
const CustomerDetail = lazy(() => import("./pages/CustomerDetail"));
const ProductDetail = lazy(() => import("./pages/ProductDetail"));
const Products = lazy(() => import("./pages/Products"));

// 👇 TAMBAHKAN IMPORTS UNTUK KLINIK
const DashboardKlinik = lazy(() => import("./pages/klinik/DashboardKlinik"));
const PasienKlinik = lazy(() => import("./pages/klinik/PasienKlinik"));
const JadwalKlinik = lazy(() => import("./pages/klinik/JadwalKlinik"));
const PembayaranKlinik = lazy(() => import("./pages/klinik/PembayaranKlinik"));
const KeluhanKlinik = lazy(() => import("./pages/klinik/Keluhan"));
const LoyalitasKlinik = lazy(() => import("./pages/klinik/LoyalitasKlinik"));
const ProductKlinik = lazy(() => import("./pages/klinik/ProductKlinik"));
const PasienDetail = lazy(() => import("./pages/klinik/PasienDetail"));

function App() {
  return (
    <div id="app-container" className="bg-gray-100 min-h-screen flex">
      <div id="layout-wrapper" className="flex flex-row flex-1">
        <div id="main-content" className="flex-1 p-4">
          <Suspense fallback={<h1>Loading...</h1>}>
            <Routes>
              {/* MAIN LAYOUT ROUTES (Existing) */}
              <Route element={<MainLayout />}>
                <Route path="/" element={<DashboardKlinik />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/customers" element={<Customers />} />
                <Route path="/error/400" element={<Error400 />} />
                <Route path="/error/401" element={<Error401 />} />
                <Route path="/error/403" element={<Error403 />} />
                <Route path="/customers/:id" element={<CustomerDetail />} />
                <Route path="/products/:id" element={<ProductDetail />} />
                <Route path="/products" element={<Products />} />
              </Route>

              {/* AUTH ROUTES (Existing) */}
              <Route element={<AuthLayout />}>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/forgot" element={<Forgot />} />
              </Route>

              {/* 👇 TAMBAHKAN KLINIK ROUTES (BARU) */}
              <Route element={<KlinikLayout />}>
                <Route path="/klinik" element={<DashboardKlinik />} />
                <Route path="/klinik/pasien" element={<PasienKlinik />} />
                <Route path="/klinik/jadwal" element={<JadwalKlinik />} />
                <Route
                  path="/klinik/pembayaran"
                  element={<PembayaranKlinik />}
                />
                <Route path="/klinik/keluhan" element={<KeluhanKlinik />} />
                <Route path="/klinik/loyalitas" element={<LoyalitasKlinik />} />
                <Route
                  path="/klinik/ProductKlinik"
                  element={<ProductKlinik />}
                />
                <Route path="/klinik/pasien/:id" element={<PasienDetail />} />
              </Route>

              {/* 404 NOT FOUND */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </div>
      </div>
    </div>
  );
}

export default App;
