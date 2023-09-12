
const form = document.querySelector('#formInp');
const apii = "5b81fa4832d5e858c089f1103d0a3e0f";



form.addEventListener('submit',()=>{
    const elem = document.querySelector("#textInp");
    const city = elem.value
    const geo = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${apii}`;

    elem.value = '';

    const info = init(geo)
})

const getGeoInfo = async (url) => {
    const response = await fetch(url)
    const responseData = await response.json();
    const lat = responseData[0].lat ;
    const lon = responseData[0].lon ;
    return getWheatherInfo(lon,lat)
}


const getWheatherInfo = async (lon, lat) => {

    const city = document.querySelector('#city');
    const latt = document.querySelector('#lat');
    const lonn = document.querySelector('#lon');
    const main = document.querySelector('#main');
    const description = document.querySelector('#description');
    const pressure = document.querySelector('#pressure');
    const windSpeedd = document.querySelector('#windSpeedd');
    const windDegree = document.querySelector('#windDegree');
    const icon = document.getElementById('wicon');

    const weatherApi = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apii}`;
    const response = await fetch(weatherApi);
    const responseData = await response.json();
    const nameWeather = responseData.name;
    const lonWeather = responseData.coord.lon;
    const latWeather = responseData.coord.lat;
    const weather = responseData.weather;
    const mainWeather = weather[0].main;
    const descriptionWeather = weather[0].description;
    const pressureWether = responseData.main.pressure;
    const windSpeed = responseData.wind.speed;
    const windDeg = responseData.wind.deg;
    const iconWeather = weather[0].icon;
  
    const info = {
      cityName: nameWeather,
      cityLon: lonWeather,
      citykat: latWeather,
      cityMain: mainWeather,
      cityDescription: descriptionWeather,
      cityPressure: pressureWether,
      cityWspeed: windSpeed,
      cityWdeg: windDeg,
      cityIcon: iconWeather,
    };

    city.innerHTML = info.cityName;
    latt.innerHTML = info.citykat;
    lonn.innerHTML = info.cityLon;
    main.innerHTML = info.cityMain;
    description.innerHTML = info.cityDescription;
    pressure.innerHTML = info.cityPressure;
    windSpeedd.innerHTML = info.cityWspeed;
    windDegree.innerHTML = info.cityWdeg;

    const iconcode = info.cityIcon ;
    var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
    icon.src = iconurl;

  };

const init = (url)=>{
    return getGeoInfo(url)
}





