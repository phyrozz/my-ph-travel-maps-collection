import { useState, useRef } from 'react';
import './App.css';
import "./font.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import Laguna from './maps/Laguna';
import Cavite from './maps/Cavite';
import MetroManila from './maps/MetroManila';
import Etivac from './maps/Etivac';
import Bulacan from './maps/Bulacan';


const Map = (props) => {
    const {mapName} = props;
    const [points, setPoints] = useState(0);
    const [tooltipCoords, setTooltipCoords] = useState(null);
    const [dropdownCoords, setDropdownCoords] = useState(null);
    const [selectedMunicipality, setSelectedMunicipality] = useState(null);
    const [municipalities, setMunicipalities] = useState({});
    const [hoveredMunicipality, setHoveredMunicipality] = useState(null);
    const [showOptions, setShowOptions] = useState(false);
    const dropdownRef = useRef(null);

    const addPoints = (value) => {
        setPoints((prev) => prev + value);
    };
    
    const handleMunicipalityMouseEnter = (e) => {
        const municipality = e.target.id;
        if (municipalities[municipality] === undefined || municipalities[municipality] === 'never-been') {
          setHoveredMunicipality(municipality);
          setMunicipalities(prev => ({ ...prev, [municipality]: 'never-been' }));
        }
    };
      
    const handleMunicipalityMouseLeave = () => {
        setHoveredMunicipality(null);
    };

    const handleMunicipalityClick = (e) => {
        const bbox = e.target.getBBox();
        setHoveredMunicipality(null);
        setDropdownCoords({ x: ((bbox.x / 2) / 2) + (window.innerWidth / 2) - 250, y: ((bbox.y / 2) / 1.5) + 100 });
        const municipality = e.target.id;
        setSelectedMunicipality(municipality);
        if (!municipalities[municipality]) {
        setMunicipalities(prev => ({...prev, [municipality]: 'never-been'}))
        }
        
    };
    
    const handleStatusChange = (e) => {
        const { value } = e.target;
        const pointsMap = {
          'lived': 5,
          'stayed': 4,
          'visited': 3,
          'alighted': 2,
          'passed': 1,
          'never-been': 0,
        };
        const pointsToAdd = pointsMap[value] - pointsMap[municipalities[selectedMunicipality]];
        addPoints(pointsToAdd);
        setMunicipalities((prev) => ({ ...prev, [selectedMunicipality]: value }));
        setDropdownCoords(null);
    };  

    const getMunicipalityColor = (municipality) => {
        if (hoveredMunicipality === municipality) {
            return '#bbbbbb';
        }
        
        switch (municipalities[municipality]) {
        case 'lived':
            return '#D14545';
        case 'stayed':
            return '#DF8c63';
        case 'visited':
            return '#FFDD83';
        case 'alighted':
            return '#98DFD6';
        case 'passed':
            return '#2C5496';
        default:
            return '#ffffff';
        }
    };

    const handleMouseMove = (e) => {
        const bbox = e.target.getBBox();
        setTooltipCoords({ x: (bbox.x / 3) + (window.innerWidth / 2) - 300, y: ((bbox.y / 2) / 1.5) + 100 });
    };

    const renderMap = (e) => {
        switch (e) {
            case "laguna":
                return (
                    <Laguna
                        handleMouseMove={handleMouseMove}
                        handleMunicipalityClick={handleMunicipalityClick}
                        handleMunicipalityMouseEnter={handleMunicipalityMouseEnter}
                        handleMunicipalityMouseLeave={handleMunicipalityMouseLeave}
                        setShowOptions={setShowOptions}
                        showOptions={showOptions}
                        getMunicipalityColor={getMunicipalityColor}
                    />
                );
            case "cavite":
                return (
                    <Cavite
                        handleMouseMove={handleMouseMove}
                        handleMunicipalityClick={handleMunicipalityClick}
                        handleMunicipalityMouseEnter={handleMunicipalityMouseEnter}
                        handleMunicipalityMouseLeave={handleMunicipalityMouseLeave}
                        setShowOptions={setShowOptions}
                        showOptions={showOptions}
                        getMunicipalityColor={getMunicipalityColor}
                    />
                );
            case "metro_manila":
                return (
                    <MetroManila
                        handleMouseMove={handleMouseMove}
                        handleMunicipalityClick={handleMunicipalityClick}
                        handleMunicipalityMouseEnter={handleMunicipalityMouseEnter}
                        handleMunicipalityMouseLeave={handleMunicipalityMouseLeave}
                        setShowOptions={setShowOptions}
                        showOptions={showOptions}
                        getMunicipalityColor={getMunicipalityColor}
                    />
                );
            case "bulacan":
                return (
                    <Bulacan
                        handleMouseMove={handleMouseMove}
                        handleMunicipalityClick={handleMunicipalityClick}
                        handleMunicipalityMouseEnter={handleMunicipalityMouseEnter}
                        handleMunicipalityMouseLeave={handleMunicipalityMouseLeave}
                        setShowOptions={setShowOptions}
                        showOptions={showOptions}
                        getMunicipalityColor={getMunicipalityColor}
                    />
                );
            case "etivac":
                return (
                    <Etivac
                        handleMouseMove={handleMouseMove}
                        handleMunicipalityClick={handleMunicipalityClick}
                        handleMunicipalityMouseEnter={handleMunicipalityMouseEnter}
                        handleMunicipalityMouseLeave={handleMunicipalityMouseLeave}
                        setShowOptions={setShowOptions}
                        showOptions={showOptions}
                        getMunicipalityColor={getMunicipalityColor}
                    />
                );
            default:
                return null;
        }
    }
    
    return (
        <>
            <div className='map'>
                { renderMap(mapName) }
                {hoveredMunicipality && tooltipCoords && (
                    <div className="tooltip" style={{ top: tooltipCoords.y, left: tooltipCoords.x }} onMouseEnter={handleMunicipalityMouseEnter} >
                        {hoveredMunicipality.replace(/_/g, " ")}
                    </div>
                )}
                {dropdownCoords && (
                    <div className="options-container" ref={dropdownRef} style={{ top: dropdownCoords.y, left: dropdownCoords.x }}>
                        <h4>{selectedMunicipality.replace(/_/g, " ")}</h4>
                        <div className="options">
                            <button value="lived" onClick={handleStatusChange}>{ mapName !== "etivac" ? "Lived there" : "Incorporated there" }</button>
                            <button value="stayed" onClick={handleStatusChange}>{ mapName !== "etivac" ? "Stayed there" : "Sold there" }</button>
                            <button value="visited" onClick={handleStatusChange}>{ mapName !== "etivac" ? "Visited there" : "Negotiated there" }</button>
                            <button value="alighted" onClick={handleStatusChange}>Alighted there</button>
                            <button value="passed" onClick={handleStatusChange}>Passed there</button>
                            <button value="never-been" onClick={handleStatusChange}>{ mapName !== "etivac" ? "Never been there" : "Never sold there" } <FontAwesomeIcon icon={faXmark} /></button>
                        </div>
                    </div>
                )}
                <div className='level-container'>
                    <h1>
                        <strong>{mapName.replace(/_/g, ' ').replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); })} Level {points}</strong>
                    </h1>
                    <div className='legend'>
                        <div>
                            <span style={{backgroundColor: "#D14545"}}></span>
                            <div className='legend-text'>
                                <p>{ mapName !== "etivac" ? "Lived there" : "Incorporated there" }</p>
                                <p>Level: 5</p>
                            </div>
                        </div>
                        <div>
                            <span style={{backgroundColor: "#DF8c63"}}></span>
                            <div className='legend-text'>
                                <p>{ mapName !== "etivac" ? "Stayed there" : "Sold there" }</p>
                                <p>Level: 4</p>
                            </div>
                        </div>
                        <div>
                            <span style={{backgroundColor: "#FFDD83"}}></span>
                            <div className='legend-text'>
                                <p>{ mapName !== "etivac" ? "Visited there" : "Negotiated there" }</p>
                                <p>Level: 3</p>
                            </div>
                        </div>
                        <div>
                            <span style={{backgroundColor: "#98DFD6"}}></span>
                            <div className='legend-text'>
                                <p>Alighted there</p>
                                <p>Level: 2</p>
                            </div>
                        </div>
                        <div>
                            <span style={{backgroundColor: "#2C5496"}}></span>
                            <div className='legend-text'>
                                <p>Passed there</p>
                                <p>Level: 1</p>
                            </div>
                        </div>
                            <div>
                            <span style={{backgroundColor: "#fff"}}></span>
                            <div className='legend-text'>
                                <p>{ mapName !== "etivac" ? "Never been there" : "Never sold there" }</p>
                                <p>Level: 0</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Map;
