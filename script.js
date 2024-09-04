let span = document.getElementById("span");
let button = document.getElementById("button");

button.addEventListener("click", function () {
  fetch("https://api.ipify.org?format=json")
    .then((response) => response.json())

    .then((data) => {
      span.textContent = `Your Public IP Address: ${data.ip}`;
    })

    .catch((error) => {
      span.textContent = `Error fetching IP: ${error}`;
    });
});