window.addEventListener('load', ()=>{
    let long;
    let lat;

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            console.log(position)
            long = position.coords.longitude;
            lat = position.coords.latitude;

            const proxy = 'https://cors-anywhere.herokuapp.com/';

            const api = `${proxy}api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid={b0efb34e8a9377dc5eaaff3184b94e0a}`;

            fetch(api)
            .then(resp => resp.json())
            .then(data => console.log(data))
        }); 
    } else {
        h1.textContent = "Please enable location to view site"
    }
});

