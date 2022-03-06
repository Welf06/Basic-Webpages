let lon;
let lat;
let temperature = document.querySelector(".temp");
let summary = document.querySelector(".weather");
let loc = document.querySelector(".name");
let date = document.querySelector(".date");
let min = document.querySelector(".min-max")

const kelvin = 273;
let now = new Date();
date.innerHTML = dateBuilder(now);

function dateBuilder(d){
   let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
   let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
   let day = days[d.getDay()];
   let date = d.getDate();
   let month = months[d.getMonth()];
   let year = d.getFullYear();
   return `${day} ${date} ${month} ${year}`
}

if (navigator.geolocation) {
	navigator.geolocation.getCurrentPosition((position) => {
	console.log(position);
	lon = position.coords.longitude;
	lat = position.coords.latitude;

const base =
`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&` +
`lon=${lon}&appid=6d055e39ee237af35ca066f35474e9df`;
	fetch(base)
		.then((response) => {
		return response.json();
		})
		.then((data) => {
		console.log(data);
		temperature.textContent =
			Math.floor(data.main.temp - kelvin) + "°c";
		loc.textContent = data.name + "," + data.sys.country;
      date.innerHTML = dateBuilder(now);
      summary.innerHTML = data.weather[0].main;
      min.innerHTML = Math.floor(data.main.temp_min - kelvin) + "°c " + "/ " + Math.floor(data.main.temp_max - kelvin) + "°c";
		});
	});
};

const searchBase = `http://api.openweathermap.org/data/2.5/`;

const search = document.querySelector('.input');
console.log(search);

search.addEventListener('keypress', setQuery);

function setQuery(evt){
   
   if (evt.key ==='Enter' || evt.keycode === 13){
      getResult(search.value);
      console.log(search.value);
   }
}

function getResult(query){
   fetch(`${searchBase}weather?q=${query}&appid=dd4bb71b91b706b101e615e2715f34f3`)
   .then((weather) => {
      return weather.json();
   }).then((weather)=>{
      console.log(weather);
      console.log(weather);
		temperature.textContent =
			Math.floor(weather.main.temp - kelvin) + "°c";
		loc.textContent = weather.name + "," + weather.sys.country;
      search.value ='';
      summary.innerHTML = weather.weather[0].main;
      min.innerHTML = Math.floor(weather.main.temp_min - kelvin) + "°c " + "/ " + Math.floor(weather.main.temp_max - kelvin) + "°c";
   });
}




