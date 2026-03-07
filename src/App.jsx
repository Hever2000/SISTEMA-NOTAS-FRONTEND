import "@fortawesome/fontawesome-free/css/all.min.css";

import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Layout from "./Layout/Layout.jsx";
import CrearNota from "./pages/CrearNota.jsx";
import EditarNota from "./pages/EditarNota.jsx";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <Layout />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/crear-nota" element={<CrearNota />} />
        <Route path="/edit/:id" element={<EditarNota />} />
      </Routes>
      <ToastContainer 
        position="bottom-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
      />
    </>
  );
}

export default App;
