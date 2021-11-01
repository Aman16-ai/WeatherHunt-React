import React from 'react'
import { useState ,useEffect} from 'react'
import "./SearchCity.css"
export default function SearchCity() {
    const [cityName, setcityName] = useState("delhi")
    const [CityWeather, setCityWeather] = useState()
    async function getWeather() {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName.toLowerCase()}&units=metric&appid=ef6b766d67d6a493fa05af0eb5a5ef8a`
        let response = await fetch(url)
        let data = await response.json()
        console.log("City name: ",data.name)    //for testing purpose
        console.log("City weather description: ",data.weather[0].description) // for testing purpose
        setCityWeather(data)
    }
    useEffect(() => {
     getWeather();  
    },[])
    let search = ()=> {
        console.log("City is :",cityName.toLowerCase())
        getWeather();
    }
    return (
        <div id="search-city-container">
            <input onChange={(e)=>setcityName(e.target.value)} type="text" placeholder='Search city' name="searchcity" id="searchCityInput" />
            <button onClick={search} id='searchBtn'><img src="https://img.icons8.com/material-outlined/24/000000/search--v1.png"/></button>
        </div>
    )
}
