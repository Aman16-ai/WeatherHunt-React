import React from 'react'
import './CityCard.css'
import image from '../static/location_icon.png'
import hazeicon from '../static/hazeicon.png'
import smokeicon from '../static/smokeicon.jpg'
import scatteredCloudicon from '../static/scattered-cloud.png'
export default function CityCard(props) {
    function getIcon() {
        if(props.description == 'haze') {
            return hazeicon;
        }
        else if(props.description =='smoke') {
            return smokeicon;
        }
        else if(props.description =='scattered clouds') {
            return scatteredCloudicon;
        }
    }
    return (
        <div className="grid-container">
            <div className='container'>
            <div className="location-container">
                <img id='location_icon_img' src={image} alt="city" />
                <h4 id='CityName'>{props.cityname}</h4>
            </div>

            <h2 id="temperature-heading">{props.temp}</h2>
            <div className="desc-container">
                <h2 id="description-heading">{props.description.toUpperCase()}</h2>
                <img id="desc-icon" src={getIcon()}/>
            </div>
        </div>
        </div>
    )
}
