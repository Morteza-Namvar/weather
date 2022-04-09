class Values {
    constructor() {
        this.city = document.getElementById("current_city"),
        this.icon = document.getElementById("w-icon"),
        this.temp = document.getElementById("temp"),
        this.wDescription = document.getElementById("w-description"),
        this.humidity = document.getElementById("humidity"),
        this.windSpeed = document.getElementById("wind_speed"),
        this.sunrise = document.getElementById("sunrise"),
        this.sunset = document.getElementById("sunset"),
        this.date = document.getElementById("current_date"),
        this.country = document.getElementById("country")
    }
    items(result) {
        this.city.textContent = result.name;
        this.icon.setAttribute("src", `http://openweathermap.org/img/wn/${result.weather[0].icon}@2x.png`);
        this.temp.textContent = Math.floor(result.main.temp);
        this.wDescription.textContent = result.weather[0].description.toUpperCase();
        this.humidity.textContent = result.main.humidity;
        this.windSpeed.textContent = Math.floor((result.wind.speed)*3.6);
        this.sunrise.textContent = this.sunTime(result.sys.sunrise);
        this.sunset.textContent = this.sunTime(result.sys.sunset);
        this.date.textContent = new Date();
        this.country.textContent = result.sys.country
    }

    sunTime(params) {
        const time = new Date(params * 1000);
        const hour = time.getHours();
        const min = time.getMinutes();
        const sec = time.getSeconds();
        const ampm = hour >= 12 ? 'PM' : 'AM';

        const sunTime = `${hour} : ${min} : ${sec} ${ampm}` 
        return sunTime;
    }
}
