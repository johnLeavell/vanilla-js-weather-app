window.addEventListener('load', ()=>{
    let long;
    let lat;

    let temperatureDescription = document.querySelector('.temperature-description');
    let temperatureDegree = document.querySelector('.temperature-degree');
    let locationTimezone = document.querySelector('.location-timezone');
    
    const getTimeZone = str => {
        let theDate = new Date(Date.parse(str))
        return theDate;
    }

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            console.log(position)
            long = position.coords.longitude;
            lat = position.coords.latitude;

            const api = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=imperial&appid=b0efb34e8a9377dc5eaaff3184b94e0a`;

            fetch(api)
            .then(resp => resp.json())
            .then(data => {
                const { clouds, feels_like, humidity, temp, temp_max, temp_min } = data.main;

            //set DOM elements from the api
                // console.log(data.timezone)
            temperatureDegree.textContent = `The Current Temperature is ${Math.round(temp)}`;
            temperatureDescription.textContent = `Feels Like ${Math.round(feels_like)}`;
            locationTimezone.textContent = getTimeZone(data.timezone)
            })
            
        }); 
    } else {
        h1.textContent = "Please enable location to view site"
    }
});





// const { cloudsfeels_like, humidity, temp, temp_max, temp_min } = data.main
//             //set DOM elements from the api

//             temperatureDegree.textContent = temp