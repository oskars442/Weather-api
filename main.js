const button = document.querySelector('.button');
const inputValue = document.querySelector('.inputValue');
const name = document.querySelector('.name');
const desc = document.querySelector('.desc');
const temp = document.querySelector('.temp');
const feel = document.querySelector('.feels');
const wind = document.querySelector('.wind');
const humi = document.querySelector('.humidity');
const aver = document.querySelector('.minmax');
const image = document.getElementById('weImage')


button.addEventListener('click', function () {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputValue.value + '&units=metric&appid=e409760ebb838f1a3a8b5466dc4942ba')
        .then(response => response.json())
        .then(data => {

            
            let nameValue = data['name'];
            let tempValue = data['main']['temp'];
            let feelValue = data['main']['feels_like'];
            let humidityValue = data['main']['humidity'];
            let descValue = data['weather'][0]['description'];
            let windValue = data['wind'][0];
            let minValue = data['main']['temp_min'];
            let maxValue = data['main']['temp_max'];



            name.innerHTML = nameValue;
            temp.innerHTML = tempValue + " ° C";
            desc.innerHTML = descValue;
            feel.innerHTML = feelValue + "°C";
            humi.innerHTML = humidityValue + "%";
            wind.innerHTNL = windValue;
            aver.innerHTML = minValue + " " + "..." + " " + maxValue + "°C";
        })
        .catch(err => alert("Nepareizs pilsetas nosaukums!"));
});
// weather end


function startTime() {
    const today = new Date();
    let y = today.getFullYear();
    let mo = today.getMonth();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    mo = checkTime(mo)
    document.getElementById('time').innerHTML =
        y + "." + mo + " " +
        h + ":" + m + ":" + s;
    let t = setTimeout(startTime, 500);
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i
    };
    return i;
};
// Clock end

