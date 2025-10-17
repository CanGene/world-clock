function updateLive() {
  let vancouverElement = document.querySelector("#vancouver");
  let vancouverDateElement = vancouverElement.querySelector(".date");
  let vancouverTimeElement = vancouverElement.querySelector(".time");
  let vancouverTimeZone = moment().tz("America/Vancouver");

  vancouverDateElement.innerHTML = vancouverTimeZone.format("MMMM Do YYYY");
  vancouverTimeElement.innerHTML = vancouverTimeZone.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  let muscatElement = document.querySelector("#muscat");
  let muscatDateElement = muscatElement.querySelector(".date");
  let muscatTimeElement = muscatElement.querySelector(".time");
  let muscatTimeZone = moment().tz("Asia/Muscat");

  muscatDateElement.innerHTML = muscatTimeZone.format("MMMM Do YYYY");
  muscatTimeElement.innerHTML = muscatTimeZone.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}
updateLive();
setInterval(updateLive, 1000);
