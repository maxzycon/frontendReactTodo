import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Register from "./pages/Register";

/**
 * router list todo
 * TODO: make profile router
 * TODO: make dashboard router
 * TODO: make category router
 * TODO: make todo router
 */

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
