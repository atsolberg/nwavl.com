import { StrictMode } from "react";
import { Routes, Route } from "react-router-dom";

import AppProviders from "./providers/AppProviders";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";

/**
 * Main app file, rendered on both the server and the client
 */
function App() {
  return (
    <StrictMode>
      <main>
        <AppProviders>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Footer />
        </AppProviders>
      </main>
    </StrictMode>
  );
}

export default App;
