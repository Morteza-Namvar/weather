class Weather {
    constructor() {
        this.city = "Tehran",
        this.apiKey = "d4557b7fbda1aea7bbb32fbeb0c00370"
    }

    async getWeather() {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}&units=metric`)
        
        if (response.ok) {
            let responseData = response.json();
            return responseData;
        } else {
            throw Error(response.status);
        }
    }

    changeLocation(city) {
        this.city = city;
    }
}