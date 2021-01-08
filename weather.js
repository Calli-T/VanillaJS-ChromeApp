const weather = document.querySelector(".js-weather");

const API_KEY = "89d78baaa49d2a47daab6636fedde4c7";//내 고유 API번호
const COORDS = 'coords';

function getWeather(lat, lon) {
    fetch(`
    https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric
    `).then(function(response) {
       return response.json();
    }).then(function(json){ //Javascript에서 뭔가 끝나기 기다리는 방법은 then사용
        const temperature = json.main.temp;
        const place = json.name;
        weather.innerHTML = `${temperature}°C, ${place}`;
    });
}

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position) {
    //console.log(position);
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    const coordsObj = {
        latitude: latitude,
        longitude: longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}

function handleGeoError(){
    console.log("Can't aceess geo location");
}

function askForCoords(){
    //API사용
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null){
        askForCoords();
    }  else{
        const parseCoords = JSON.parse(loadedCoords);
        getWeather(parseCoords.latitude, parseCoords.longitude); 
    }
}

function init(){
    loadCoords();
}

init();