import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Footer";
import Home from "./Home";
import Places from "./Places";

function App() {
  return (
    <div className="App geti">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/place-to-stay" element={<Places />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
