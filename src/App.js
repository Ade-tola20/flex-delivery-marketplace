import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./navbar/navbar";
import Sidemenu from "./side-menu/side-menu";
import Marketplace from "./marketplace/marketplace";
import DeliveryDetails from "./DeliveryDetails/deliverDetails";

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col h-screen">
        <Navbar />
        <div className="flex flex-1 overflow-hidden">
          <Sidemenu />
          <div className="flex-1 overflow-auto">
            <Routes>
              <Route path="/marketplace" element={<Marketplace />} />
              <Route path="/" element={<Marketplace />} />
              <Route path="/delivery-details" element={<DeliveryDetails />} />
              {/* Add other routes here */}
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
