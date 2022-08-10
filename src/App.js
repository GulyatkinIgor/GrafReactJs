import "./App.css";

import { Routes, Route } from "react-router-dom";

import Navigation from "./components/navigation.component.jsx"

import Home from "./routes/Home";
import AboutUs from "./routes/AboutUs";
import Uslugi from "./routes/Uslugi";
import Sales from "./routes/Sales";
import Novostroiki from "./routes/Novostroiki";
import Kotetg from "./routes/Kotetg";
import Commerce from "./routes/Commerce";
import Ipoteka from "./routes/Ipoteka";
import Rent from "./routes/Rent";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="aboutus" element={<AboutUs />} />
        <Route path="uslugi" element={<Uslugi />} />
        <Route path="sales" element={<Sales />} />
        <Route path="novostroiki" element={<Novostroiki />} />
        <Route path="kotetg" element={<Kotetg />} />
        <Route path="commerce" element={<Commerce />} />
        <Route path="ipoteka" element={<Ipoteka />} />
        <Route path="rent" element={<Rent />} />
      </Route>
    </Routes>
  );
}

export default App;
