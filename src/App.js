import React, { StrictMode } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import Troubleshooting from "./pages/Troubleshooting";

/**
 * Main app file, rendered on both the server and the client
 */
function App() {
  return (
    <StrictMode>
      <main>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/troubleshooting" element={<Troubleshooting />} />
        </Routes>
        <Footer />
      </main>
    </StrictMode>
  );
}

export default App;
