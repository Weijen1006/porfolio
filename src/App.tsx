import { HashRouter as Router, Routes, Route, } from "react-router";
import ScrollManager from "@/components/ScrollManager";
import LandingPage from "@/pages/LandingPage";
import Navbar from "@/components/NavBar";

export default function App() {
  return (
    <Router>
      <Navbar />
      <ScrollManager />
      <LandingPage />
      <Routes>
        <Route path="/" element={null} />
        <Route path="/about" element={null} />
        <Route path="/project" element={null} />
        <Route path="/contact" element={null} />
      </Routes>
    </Router>
  );
}