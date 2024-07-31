import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/Landing";
import NotFound from "./pages/NotFound";
import CrudTable from "./pages/CrudTable";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path="/crud" element={<CrudTable />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}