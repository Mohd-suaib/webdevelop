console.log("Make a habit of reading js documentation");
const API_KEY  = "e3eac7ba714d37d6f02d5c58f02a026a";
async function showWeather(){
    let latitude = 15.4656;
    let longitude = 74.7645;
    // let city = "goa";

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat={latitude}&lon={longitude}&appid={API key}`);
    const data = await response.json();
    console.log("weather data:-> ",data);

    // let newPara = document.createElement('p');
    // newPara.textContent = `${data?.mian?.temp.toFixed(2)} °C`;
    // document.body.appendChild(newPara);
}

// async function getCustomWeatherDetail() {
//     try{
//         let latitude = 15.4444;
//     let longitude = 74.3333;

//     let result = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat={latitude}&lon={longitude}&appid={API key}`);
//     let data = await result.json();

//     console.log(data);
//     }
//     catch(err){
//         console.log("Error Found",err);
//     }
    
// }

