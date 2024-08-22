import { Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import AboutPage from "./pages/AboutPage";
import CoopPage from "./pages/CoopPage";
import { AnimatePresence } from "framer-motion";
import ShopPage from "./pages/ShopPage";
import ItemDetails from "./pages/ItemDetails";

//Animated changes between pages

function RoutesAnimated() {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.key}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="coop" element={<CoopPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="shop" element={<ShopPage />} />
        <Route path="item-details" element={<ItemDetails />} />
      </Routes>
    </AnimatePresence>
  );
}
export default RoutesAnimated;
