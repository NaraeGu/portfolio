import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Main from "./pages/Main";
import Travel from "./pages/Travel";
import PetTravel from "./pages/PetTravel";
import LoadTour from "./pages/LoadTour";

const App = () => {
    return (
        <>
            <Header />

            <Routes>
                <Route path="/portfolio/07-Tour-web" exact={true} element={<Main />} />
                <Route path="/portfolio/07-Tour-web/travel" element={<Travel />} />
                <Route path="/portfolio/07-Tour-web/pettravel" element={<PetTravel />} />
                <Route path="/portfolio/07-Tour-web/loadtour" element={<LoadTour />} />
            </Routes>
            
            <Footer />
        </>
    );
};

export default App;
