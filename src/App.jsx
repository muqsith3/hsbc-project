import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import ProductsPage from "./pages/ProductsPage";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route
            path="/products"
            element={<ProductsPage></ProductsPage>}></Route>
          <Route
            path="/productDetail"
            element={<ProductDetail></ProductDetail>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
