const inputCity =  document.querySelector(".search input")
const inputButton =  document.querySelector(".search button")
let temp = document.querySelector(".temp")
let city = document.querySelector(".city")
let humidity = document.querySelector(".humidity")
let wind = document.querySelector(".wind")

const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'ec32583553mshb046df9c2ef38f7p1be733jsn93bb1a7bf809',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

// const  getWeather = function (){}
const getWeather = (cities)=>{
   city.innerHTML = cities;
   fetch(url + cities ,options)
   .then(function(response){
      let data = response.json()
      return data;
   })
   .then((data)=>{
      console.log(data);

      temp.innerHTML = Math.round(data.temp) + " °C";
      humidity.innerHTML = data.humidity + " %";
      wind.innerHTML = data.wind_speed + " km/hrs";

   })
   .catch((e)=> console.log(e))
}




inputButton.addEventListener("click" , function(){
   // preventDefault()
   getWeather(inputCity.value)
   
})

getWeather("delhi")

