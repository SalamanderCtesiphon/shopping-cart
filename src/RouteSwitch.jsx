import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import ShopPage from "./ShopPage";

const RouteSwitch = () => {
  return (
    <BrowserRouter basename="/app">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/shopPage" element={<ShopPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;