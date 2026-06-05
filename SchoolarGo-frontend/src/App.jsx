import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import DaftarBeasiswa from "./pages/DaftarBeasiswa";
import DetailBeasiswa from "./pages/DetailBeasiswa";
import Artikel from "./pages/Artikel";
import DetailArtikel from "./pages/DetailArtikel";
import Bookmark from "./pages/Bookmark";
import FAQ from "./pages/FAQ";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
<Route path="/register" element={<Register />} />
<Route path="/forgot-password" element={<ForgotPassword />} />

<Route
  path="/"
  element={
    <PrivateRoute>
      <Dashboard />
    </PrivateRoute>
  }
/>

<Route
  path="/daftar-beasiswa"
  element={
    <PrivateRoute>
      <DaftarBeasiswa />
    </PrivateRoute>
  }
/>

<Route
  path="/detail-beasiswa"
  element={
    <PrivateRoute>
      <DetailBeasiswa />
    </PrivateRoute>
  }
/>

<Route
  path="/artikel"
  element={
    <PrivateRoute>
      <Artikel />
    </PrivateRoute>
  }
/>

<Route
  path="/detail-artikel"
  element={
    <PrivateRoute>
      <DetailArtikel />
    </PrivateRoute>
  }
/>

<Route
  path="/bookmark"
  element={
    <PrivateRoute>
      <Bookmark />
    </PrivateRoute>
  }
/>

<Route
  path="/faq"
  element={
    <PrivateRoute>
      <FAQ />
    </PrivateRoute>
  }
/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
