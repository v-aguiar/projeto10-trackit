import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import GlobalStyle from "../../assets/styles/globalStyles";

import HomePage from "../HomePage";
import Habits from "../Habits";

export default function App() {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cadastro" element={<HomePage />} />
        <Route path="/habitos" element={<Habits />} />
        {/* 
        <Route path="/hoje" element={} />
        <Route path="/historico" element={} /> */}
      </Routes>
    </Router>
  )
}