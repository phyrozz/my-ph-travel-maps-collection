import React from "react";
import "./font.css";
import "./App.css";
import { useNavigate } from "react-router-dom";

const About = () => {
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    }

    return (
        <div className="about-container">
            <button className="btn" onClick={goBack}>Return to Map</button>
            <h2>What is this Map?</h2>
            <p>This map let's you show your travel status for the map you've selected. You can play around with the map by clicking on each city/municipality then choosing which travel status fits on that place.</p>
            <h2>What are these travel statuses?</h2>
            <p>When you select a travel status for a municipality, it adds a certain point to the <b>Level</b> counter based on what status you picked. The more places you've stayed, for example, the higher your level is on the map.</p>
            <p>Here's a breakdown on the travel statuses:</p>
            <table>
                <tr>
                    <th>Status</th>
                    <th>Level</th>
                </tr>
                <tr>
                    <td>Lived there</td>
                    <td>+5</td>
                </tr>
                <tr>
                    <td>Stayed there</td>
                    <td>+4</td>
                </tr>
                <tr>
                    <td>Visited there</td>
                    <td>+3</td>
                </tr>
                <tr>
                    <td>Alighted there</td>
                    <td>+2</td>
                </tr>
                <tr>
                    <td>Passed there</td>
                    <td>+1</td>
                </tr>
                <tr>
                    <td>Never been there</td>
                    <td>0</td>
                </tr>
            </table>
            <h2>How to save my map?</h2>
            <p>You can save your map after setting travel statuses by clicking on the <b>Save Map as Image</b> button. This will let you save your map as a .jpg image for you to share on social media.</p>
            <h2>About the Developer</h2>
            <p>Hi, I'm Joshua Malabanan, currently studying BSIT in PUP Santa Rosa. As a proud Lagunense, I decided to develop this web app out of boredom using <b>React</b> and with the help of some libraries like <b>react-router</b> and <b>html-to-image</b>. Feel free to submit bugs or issues with the app by going through the "Issues" on this github repo <a href="https://github.com/phyrozz/laguna-travel-map">here.</a></p>
            <p>This app was inspired from another web app called <b>My Philippines Travel Map</b>. Feel free to check it out too <a href="https://www.my-philippines-travel-level.com/">here</a>.</p>
            <p>You can support this project by donating below. This will help maintain this website since there will be more maps to come!</p>
            <form id='donation-btn' action="https://www.paypal.com/donate" method="post" target="_top">
                <input type="hidden" name="hosted_button_id" value="WZ9GT9C5JPQE4" />
                <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
                <img alt="" border="0" src="https://www.paypal.com/en_PH/i/scr/pixel.gif" width="1" height="1" />
            </form>
        </div>
    );
}

export default About;