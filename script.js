const boto = document.getElementById("boto");
const missatge = document.getElementById("missatge");

boto.addEventListener("click", function() {
  missatge.textContent = "JavaScript executat correctament!";
});
