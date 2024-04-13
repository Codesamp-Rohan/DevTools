import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // corrected import
import Navbar from "../components/Navbar";
import "./App.css";
import HomePage from "../pages/HomePage";
import Form from "../pages/Form";
import { createContext, useState } from "react";

export const ToolContext = createContext({});

function App() {
  const [menu, setMenu] = useState(false);

  return (
    <>
      <Router>
        <Navbar setMenu={setMenu} />
        <Routes>
          <Route
            path="/"
            element={<HomePage menu={menu} setMenu={setMenu} />}
          />
          <Route path="/create" element={<Form />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
