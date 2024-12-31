import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./app/App";
import About from "./pages/About";
import Contribute from "./pages/Contribute";
import DCPage from "./pages/DCPage";
import Projects from "./pages/Projects";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contribute" element={<Contribute />} />
        <Route path="/dc" element={<DCPage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Layout>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();