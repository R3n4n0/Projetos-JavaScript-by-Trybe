const input = document.querySelector("input");
const button = document.querySelector("button");
const img = document.querySelector("img");

const city = document.querySelector("#city");
const degree = document.querySelector("#degree");

const content = document.querySelector(".content");

button.addEventListener("click", () => {
    if (!input.value) return;
    getWeatherData();
});

async function getWeatherData() {
    let urlApi = `` // aqui deve colocar a url da api que verifica o tempo, no momento desse codigo, ela é paga,
    // openweathermap

    try {
        await fetch(urlApi)
        .then((res)=> res.json())
        .then((data)=>{
            if(data?.cod && data.cod === "404"){
                return alert("Cidade não encontrada.");
            }
            loadWeatherInfo(data);
        })
    } catch (error) {
        alert(error);
    }
}

function loadWeatherInfo(data) {
    city.innerHTML = `${data.name}, ${data.sys.country}`;
    degree.innerHTML = `Temperatura: ${Math.floor(data.main.temp)}º C`;
    img.src = `http://openwathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    content.style.display = "flex";
}