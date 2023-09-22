//? External imports
import { Route, Routes, Navigate } from "react-router-dom";

import React from "react";

//! Pages
import { AccountantsPage } from "./pages";

//*Styles
import "./App.css";

function App() {
    return (
        <div className="app-container">
            <Routes>
                <Route path="/księgowi" element={<AccountantsPage />} />
                <Route path="*" element={<Navigate to="/księgowi" />} />
            </Routes>
        </div>
    );
}

export default App;
