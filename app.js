    let long;
    let lat;
    const temperatureDescription = document.querySelector('.temperature-description');
    const temperatureDegree = document.querySelector('.temperature-degree');
    // let locationTimezone = document.querySelector('.location-timezone');
    
    // const getTimeZone = str => {
    //     let theDate = new Date(Date.parse(str))
    //     return theDate;
    // }

    // const getCurrentDate = () => {
    //     let newDate = new Date()
    //     let date = newDate.getDate();
    //     let month = newDate.getMonth() + 1;
    //     let year = newDate.getFullYear();

    //     return `Welp, Today is ${}`
    // }
    
    // Functions 

    const getLocation = () => {
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(position => {
                console.log(position)
                long = position.coords.longitude;
                lat = position.coords.latitude;
    
                let api = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=imperial&appid=b0efb34e8a9377dc5eaaff3184b94e0a`;
    
                fetch(api)
                .then(resp => resp.json())
                .then(data => {
                    const { clouds, feels_like, humidity, temp, temp_max, temp_min } = data.main;
    
                //set DOM elements from the api
                    // console.log(data.timezone)
                temperatureDegree.textContent = `${Math.round(temp)}°`;
                temperatureDescription.textContent = `Feels Like ${Math.round(feels_like)}`;
                // locationTimezone.textContent = getTimeZone(data.timezone)
                })
                
            }); 
        } else {
            h1.textContent = "Please enable location to view site"
        }
    }

    
//invoked functions
getLocation();