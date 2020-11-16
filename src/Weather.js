import React from "react";
import axios from 'axios';

export default function Weather(props){

    function handleResponse(response){
        alert(`The weather in ${props.city} is ${response.data.main.temp} degree C`)
    }
    let apiKey = "47198918c704fa3509c18d918eacec0c";
    let apiURL =`https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&units=metric`;

    axios.get(apiURL).then(handleResponse);

    return(
    <h2>Importing weather...</h2>
    )
}