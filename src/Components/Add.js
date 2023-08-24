import { React, useEffect, useState } from 'react'


export default function Add () {

    const [weatherData, setWeatherData] = useState([]);
    const [city, setCity] = useState('');


    const API_KEY = 'c1be943e9e6fcadca5c76266d897f144';
    const API_URL = 'http://api.weatherstack.com/current'

    useEffect(() => {
        if (city) {
          getWeather();
        }
      }, [city]);
    
      const getWeather = async () => {
        try {
          const response = await fetch(`${API_URL}?access_key=${API_KEY}&query=${city}`);
          const data = await response.json();
          setWeatherData(data);
        } catch (error) {
          console.error('Error fetching weather data:', error);
        }
      };
    
//    function handleSubmit(e){
//         e.preventDefault()
//     }
        
    console.log(weatherData)

    return(
        <div className="m-4">
            
            
            <input 
                type="text" 
                className="mr-2 p-2 border rounded-md w-80 focus:ring-indigo-500 focus:border-indigo-500" 
                placeholder="Enter City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
            />
            <button 
                onClick={getWeather}
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
            >
                Get Weather
            </button>

            

        
        <h1> Display Weather Data for {weatherData}</h1>
        {/* <p>Current Time: {weatherData.current.observation_time} </p>
        <p>Temperature: {weatherData.current.temperature} Degrees Celsuis </p> */}
        
        </div>    
    )
}