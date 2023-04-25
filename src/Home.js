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
    const etivacMap = () => {
        let path = "/maps/etivac";
        navigate(path);
    }
    const metroManilaMap = () => {
        let path = "/maps/metro_manila";
        navigate(path);
    }
    const bulacanMap = () => {
        let path = "/maps/bulacan";
        navigate(path);
    }
    const rizalMap = () => {
        let path = "/maps/rizal";
        navigate(path);
    }
    const cebuMap = () => {
        let path = "/maps/cebu";
        navigate(path);
    }

    return (
        <div className="home-container">
            <div className="header">
                <h1>Select a Map</h1>
            </div>
            <div className="buttons">
                <button className="btn" onClick={metroManilaMap}>Metro Manila</button>
                <button className="btn" onClick={lagunaMap}>Laguna</button>
                <button className="btn" onClick={caviteMap}>Cavite</button>
                <button className="btn" onClick={bulacanMap}>Bulacan</button>
                <button className="btn" onClick={rizalMap}>Rizal</button>
                <button className="btn" onClick={cebuMap}>Cebu</button>
                <button className="btn etivac" onClick={etivacMap}>Etivac ;)</button>
            </div>
            <p>More maps coming soon!</p>
        </div>
    );
}

export default Home;