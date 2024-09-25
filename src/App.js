// App.js
import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import komponen secara dinamis menggunakan React.lazy
const LandingPage = lazy(() => import("./pages/Landing"));
const NotFound = lazy(() => import("./pages/NotFound"));
const CrudTable = lazy(() => import("./pages/CrudTable"));
const SignUp = lazy(() => import("./pages/Signup"));
const Login = lazy(() => import("./pages/Login"));
const Profile = lazy(() => import("./pages/Profile"));
const EditProfile = lazy(() => import("./pages/EditProfile"));

export default function App() {
  return (
    <BrowserRouter>
      {/* Suspense menangani fallback UI saat komponen sedang dimuat */}
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route index element={<LandingPage />} />
          <Route path="/crud" element={<CrudTable />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/edit" element={<EditProfile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
