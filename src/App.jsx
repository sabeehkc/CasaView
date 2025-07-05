import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import Properties from "./pages/Properties";
import PropertyDetailPage from "./pages/PropertyDetailPage";
import ContactUs from "./pages/ContactUs";
import "./App.css";




function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/property/:id" element={<PropertyDetailPage/>} />
        <Route path="/contact" element={<ContactUs/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
