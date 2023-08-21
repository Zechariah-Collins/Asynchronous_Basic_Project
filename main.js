
let x = true

const API_ID = '3abec8898531b21628ebd33d7b6704aa'

async function fetchData() {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=${API_ID}&units=imperial`);
        const data = await response.json();
        console.log(data);
        return data
    } catch (error) {
        console.error("error catching data:", error);
    }
}

async function displayData() {
    x = false
    
    const temp = document.getElementById("temp");
    const location = document.getElementById("city");
    const humidity = document.getElementById("humidity")
    const max_temp = document.getElementById("max_temp")
    const min_temp = document.getElementById("min_temp")

    const data = await fetchData();
    
    
    temp.textContent = `${Math.round(data.main.temp)} °F`
    location.textContent = `${data.name}`
    humidity.textContent = `Humidity: ${data.main.humidity}%`
    max_temp.textContent = `High: ${Math.round(data.main.temp_max)} °F`
    min_temp.textContent = `Low: ${Math.round(data.main.temp_min)} °F`

    if (x != true) {
        document.getElementById("fetchButton").style.display = "none";
    }
    return temp
}
