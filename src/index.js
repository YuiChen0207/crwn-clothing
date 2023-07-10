import React from "react";
import ReactDOM from "react-dom/client";
//BrowserRouter need to wrap the whole App so that can use Routes and Route
import { BrowserRouter } from "react-router-dom";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { UserProvider } from "./contexts/user.context";
import { CategoriesProvider } from "./contexts/categories.context";
import { CartProvider } from "./contexts/cart.context";

const root = ReactDOM.createRoot(document.getElementById("root"));

//inside UserProvider can be access context
//ProductsProvider can reach up the UserProvider
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <CategoriesProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </CategoriesProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
