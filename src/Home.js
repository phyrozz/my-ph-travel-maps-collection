import React from "react";
import "./font.css";
import "./App.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
    // Navigate through each map pages
    let navigate = useNavigate();
    const lagunaMap = () => {
        let path = "/maps/laguna";
        navigate(path);
    }
    const caviteMap = () => {
        let path = "/maps/cavite";
        navigate(path);
    }
    const metroManilaMap = () => {
        let path = "/maps/metro_manila";
        navigate(path);
    }

    return (
        <div className="home-container">
            <div className="header">
                <h1>Select a Map</h1>
            </div>
            <div className="buttons">
                <button id="about-btn" className="btn" onClick={lagunaMap}>Laguna</button>
                <button id="save-btn" className="btn" onClick={caviteMap}>Cavite</button>
                <button id="save-btn" className="btn" onClick={metroManilaMap}>Metro Manila</button>
                <p>More maps coming soon!</p>
            </div>
        </div>
    );
}

export default Home;