import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LayoutPage from "./layout/LayoutPage";
import Home from "./pages/Home";
// import DetailWisata from "./components/DetailWisata";
import DetailWisataMaimun from "./components/DetailWisataMaimun";
import DetailWisataJamGadang from "./components/DetailWisataJamGadang";
import DetailWisataBorobudur from "./components/DetailWisataBorobudur";
import DetailWisataRatenggaro from "./components/DetailWisataRatenggaro";
import DetailWisataRebo from "./components/DetailWisataRebo";
import DetailWisataPanglipuran from "./components/DetailWisataPanglipuran";
import DaftarTarian from "./components/DaftarTarian";
import DetailKategori from "./components/DetailKategori";
import DaftarAdat from "./components/DaftarAdat";
import DaftarRumah from "./components/DaftarRumah";
import DaftarAlatMusik from "./components/DaftarAlatMusik";
import DetailKategoriAlat from "./components/DetailKategoriAlat";
import DetailKategoriRumah from "./components/DetailKategoriRumah";
import DetailKategoriAdat from "./components/DetailKategoriAdat";
import Login from "./components/Login";
import Register from "./components/Signup";
import Profile from "./components/Profile";
import TentangKami from "./components/TentangKami";
import Kontak from "./components/Kontak";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<LayoutPage />}>
          <Route index element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/tentang-kami" element={<TentangKami />} />
          <Route path="/kontak" element={<Kontak />} />
          <Route
            path="/detail/istana-maimun"
            element={<DetailWisataMaimun />}
          />
          <Route
            path="/detail/jam-gadang"
            element={<DetailWisataJamGadang />}
          />
          <Route
            path="/detail/candi-borobudur"
            element={<DetailWisataBorobudur />}
          />
          <Route
            path="/detail/desa-adat-ratenggaro"
            element={<DetailWisataRatenggaro />}
          />
          <Route path="/detail/desa-wae-rebo" element={<DetailWisataRebo />} />
          <Route
            path="/detail/desa-panglipuran"
            element={<DetailWisataPanglipuran />}
          />
          <Route path="/kategori/tarian" element={<DaftarTarian />} />
          <Route path="/kategori/alat-musik" element={<DaftarAlatMusik />} />
          <Route path="/kategori/rumah-tradisional" element={<DaftarRumah />} />
          <Route path="/kategori/adat" element={<DaftarAdat />} />
          <Route path="/kategori/tarian/:slug" element={<DetailKategori />} />
          <Route
            path="/kategori/alat-musik/:slug"
            element={<DetailKategoriAlat />}
          />
          <Route
            path="/kategori/rumah/:slug"
            element={<DetailKategoriRumah />}
          />
          <Route path="/kategori/adat/:slug" element={<DetailKategoriAdat />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
