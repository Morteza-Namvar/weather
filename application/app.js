const weather = new Weather();

const values = new Values()

document.getElementById("submit_city").addEventListener("click", changeLocation);


function clearEntry() {
    const clearInputCity = document.getElementById("input_city");
    clearInputCity.value = "";
}

document.addEventListener("DOMContentLoaded", getWeather)

function changeLocation() {
    
    const city = document.getElementById("input_city").value;
    
    weather.changeLocation(city);

    getWeather();

    clearEntry();
}


function getWeather() {
    weather.getWeather()
        .then (result => {
            console.log(result)
            values.items(result);
        })
        .catch(err => console.log(err.message))
}


