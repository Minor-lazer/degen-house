import { Route, Routes } from "react-router-dom";
import { HomePage } from "@/pages/HomePage";
import { PlaceholderPage } from "@/pages/PlaceholderPage";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<PlaceholderPage title="About Degen House" />} />
      <Route path="/services" element={<PlaceholderPage title="Services" />} />
      <Route path="/case-studies" element={<PlaceholderPage title="Case Studies" />} />
      <Route path="/blog" element={<PlaceholderPage title="Blog" />} />
      <Route path="/contact" element={<PlaceholderPage title="Contact" />} />
    </Routes>
  );
}
