console.log("task1 :")
const weather = [
    {cityname:"Mumbai",temperature:25,condition:"Cloudy"},
    {cityname:"Anand",temperature:30,condition:"Rainy"},
    {cityname:"Nadiad",temperature:40,condition:"Sunny"}
]

console.log("task2 :")
const addWeather = (weather,new_weather) => {
    weather.push(new_weather)
}

addWeather(weather,{cityname:"Goa",temperature:20,condition:"Sunny"})
console.log(weather)

console.log("task3 :")
const hottestCity = (weather) =>{
    return weather.reduce((hottest,weather) => weather.temperature > hottest.temperature ? weather : hottest)
}

console.log(hottestCity(weather))

console.log("task4 :")
const getCity = (weather,condition) =>{
    return weather.filter(weather => weather.condition === condition)
}
console.log(getCity(weather,"Sunny"))

console.log("task5 :")
const getCities = (weather) => {
    return weather.map((weather)=> `City : ${weather.cityname} , Temp : ${weather.temperature}°C`);
};

console.log(getCities(weather))

console.log("task5 :")
const cityDetail = (weather) => {
    return weather.reduce((hottest, current) =>
        current.temperature > hottest.temperature ? current : hottest
    );
};

const { cityname, temperature, condition } = cityDetail(weather);
console.log(`Hottest City: ${cityname}, Temperature: ${temperature}°C, Condition: ${condition}`);

console.log("task6 :")
weather.forEach(weather => {
    console.log(`City Name: ${weather.cityname}, Temperature: ${weather.temperature}°C, Condition : ${weather.condition}`)
})