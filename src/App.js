import './App.css';
import {useState} from "react";

const api ={
  key : "14899e9b257d41be3063a4aa68dd9318",
  base : "https://api.openweathermap.org/data/2.5/"
}

function App() {
  const [search, setSearch] = useState("")
  const [weather, setWeather] = useState({})
  return (
    <div className="App">
      <header className="App-header">
       <h1>WEATHER APPLICATION</h1>
       <div>
       <input type='text'  placeholder='City' onChange={(e)=> setSearch(e.target.value)}></input>
       <button onClick={()=>{
        fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result )=>{
          console.log(result)
          setWeather(result)
        } )
       }}>Search</button></div>
       {typeof weather.main != "undefined" ? (
        <div>
       <p></p>
       <p>Location -- {weather.name}</p>
       <p></p>
       <p>Temperature -- {weather.main.temp}</p>
       <p></p>
       <p>Wind Speed -- {weather.wind.speed}</p>
       </div>):(
        ""
        )
        }
        
      </header>
    </div>
  );
}

export default App;
