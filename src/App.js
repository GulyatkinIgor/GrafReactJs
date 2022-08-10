import "./App.css";

import { Routes, Route } from "react-router-dom";

import Navigation from "./components/navigation.component.jsx"

import Home from "./routes/Home/home.component.jsx";
import AboutUs from "./routes/AboutUs/aboutus.component.jsx";
import Uslugi from "./routes/Uslugi/uslugi.component.jsx";
import Sales from "./routes/Sales/sales.component.jsx";
import Novostroiki from "./routes/Novostroiki/novostroiki.component.jsx";
import Kotetg from "./routes/Kotetg/kotetg.component.jsx";
import Commerce from "./routes/Commerce/commerce.component.jsx";
import Ipoteka from "./routes/Ipoteka/ipoteka.component.jsx";
import Rent from "./routes/Rent/rent.component.jsx";

const App = () => {
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
