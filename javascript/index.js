function updateLive() {
  let vancouverElement = document.querySelector("#vancouver");
  if (vancouverElement) {
    let vancouverDateElement = vancouverElement.querySelector(".date");
    let vancouverTimeElement = vancouverElement.querySelector(".time");
    let vancouverTimeZone = moment().tz("America/Vancouver");

    vancouverDateElement.innerHTML = vancouverTimeZone.format("MMMM Do YYYY");
    vancouverTimeElement.innerHTML = vancouverTimeZone.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  let muscatElement = document.querySelector("#muscat");
  if (muscatElement) {
    let muscatDateElement = muscatElement.querySelector(".date");
    let muscatTimeElement = muscatElement.querySelector(".time");
    let muscatTimeZone = moment().tz("Asia/Muscat");

    muscatDateElement.innerHTML = muscatTimeZone.format("MMMM Do YYYY");
    muscatTimeElement.innerHTML = muscatTimeZone.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}
updateLive();
setInterval(updateLive, 1000);

function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];

  let cityTime = moment().tz(cityTimeZone);

  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
    <div class="city">
      <div>
        <h2>${cityName}</h2>
        <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
      </div>
      <div class="time">${cityTime.format("h:mm:ss")}<small>${cityTime.format(
    "A"
  )}</small></div>
    </div>`;
}

let citySelect = document.querySelector("#city");
citySelect.addEventListener("change", updateCity);
