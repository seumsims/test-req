const clickme = document.querySelector("#clickme")
const data = document.querySelector("#data")
const ourform = document.querySelector("#ourform")
const ourfield = document.querySelector("#ourfield")

clickme.addEventListener("click", function () {
  data.textContent = "Laptop Tabblet Desktop"
})

ourform.addEventListener("submit", function (e) {
  e.preventDefault()
  if (ourfield.value.toUpperCase() == "BLUE") {
    ourform.action = "message.html"
  } else {
    ourform.action = "sorry.html"
  }
  ourform.submit()
})
