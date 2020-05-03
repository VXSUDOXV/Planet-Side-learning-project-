let sidnav =document.querySelector("#side_navigation")
let sideactive = document.querySelector("#activate");
sideactive.onclick = function(event){
    sidnav.classList.toggle("open");
    event.preventDefault();
}