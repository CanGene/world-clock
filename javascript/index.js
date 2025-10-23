function updateLive() {
  //Vancouver
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

  //Chennai
  let chennaiElement = document.querySelector("#chennai");
  if (chennaiElement) {
    let chennaiDateElement = chennaiElement.querySelector(".date");
    let chennaiTimeElement = chennaiElement.querySelector(".time");
    let chennaiTimeZone = moment().tz("Asia/Calcutta");

    chennaiDateElement.innerHTML = chennaiTimeZone.format("MMMM Do YYYY");
    chennaiTimeElement.innerHTML = chennaiTimeZone.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

//Dropdown select city
function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }

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
    </div>     
    <div><a href="/" class="home">Return Home ✈︎</a></div>
   `;
}

updateLive();
setInterval(updateLive, 1000);

let citySelect = document.querySelector("#city");
citySelect.addEventListener("change", updateCity);
