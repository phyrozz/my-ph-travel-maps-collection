import React from "react";
import "./index.css";
import "./font.css";
import { toJpeg } from "html-to-image";
import Map from "./Map";
import { useNavigate } from "react-router-dom";

const App = (props) => {
    const {map} = props;

    let navigate = useNavigate();
    const routeChange = () => {
        let path = "/about";
        navigate(path);
    }
    const goToChooseMaps = () => {
        let path = "/";
        navigate(path);
    }

    const saveAsImage = () => {
        const elem = document.querySelector('.map');
        const elemRect = elem.getBoundingClientRect();
        const options = {
            width: elemRect.height - 5,
            height: elemRect.height - 5,
            style: {
                position: 'absolute', // position the level-container element over the SVG element
                top: '0',
                left: '0',
            },
        };
        toJpeg(elem, options).then((dataUrl) => {
          const link = document.createElement('a');
          link.download = 'map.jpg';
          link.href = dataUrl;
          link.click();
        });
    };

    const chooseMap = (e) => {
        switch (e) {
            case "laguna":
                return (
                    <Map mapName="laguna" />
                );
            case "cavite":
                return (
                    <Map mapName="cavite" />
                );
            default:
                return (
                    <Map mapName="laguna" />
                );
        }
    }

    return (
        <div>
            { chooseMap(map) }
            <div className="buttons top-right">
                <button id="about-btn" className="btn" onClick={routeChange}>What's this?</button>
                <button id="save-btn" className="btn" onClick={saveAsImage}>Save Map as Image</button>
                <button className="btn" onClick={goToChooseMaps}>Choose a different map</button>
            </div>
            <div className="donation">
                <p>You can support this project by donating below. This will help maintain this website since there will be more maps to come!</p>
                <form id='donation-btn' action="https://www.paypal.com/donate" method="post" target="_top">
                    <input type="hidden" name="hosted_button_id" value="WZ9GT9C5JPQE4" />
                    <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
                    <img alt="" border="0" src="https://www.paypal.com/en_PH/i/scr/pixel.gif" width="1" height="1" />
                </form>
            </div>
        </div>
    );
}

export default App;