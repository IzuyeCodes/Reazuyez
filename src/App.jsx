import React, { useState } from 'react';
import { IconReload } from "@tabler/icons-react";
import clsx from "clsx";
import axios from 'axios';
import Card from "./components/Elements/Cards.jsx";

import{BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home.jsx";
import K1 from "./pages/K1.jsx";
import Fess from "./pages/Fess.jsx";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/K1" element={<K1/>} />
                <Route path="/Fess" element={<Fess/>} />
            </Routes>
        </Router>
    )
}

export default App;