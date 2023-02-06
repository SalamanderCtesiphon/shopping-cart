import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Profile from "./Profile";
import ShopPage from "./ShopPage";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/shopPage" element={<ShopPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;