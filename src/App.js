import Home from "./routes/home/home.component";
//npm install react-router-dom@6 first
//do the "Routes, Route" in App component
import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./routes/auth/authentication.component.jsx";
import Shop from "./routes/shop/shop.component";
import Checkout from "./routes/checkout/checkout.component";
import Ranking from "./routes/ranking/ranking.component";

//Route Navigation should wrap other route
//index base on the parent of path
//* means anything
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="ranking" element={<Ranking />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
