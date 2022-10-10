import "./App.css";
import Nav from "./components/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import SignUp from "./components/SignUp";
import PrivateComponent from "./components/PrivateComponent";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav></Nav>
        <Routes>

          <Route element={<PrivateComponent />}>
          <Route exact path="/" element={<h1>Product</h1>} />
          <Route exact path="/add" element={<h1>Add Product</h1>} />
          <Route exact path="/update" element={<h1>Update Product</h1>} />
          <Route exact path="/logout" element={<h1>Logout</h1>} />
          <Route exact path="/profile" element={<h1>Profile</h1>} />
          </Route>

          <Route exact path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </div>
  );
}

export default App;
