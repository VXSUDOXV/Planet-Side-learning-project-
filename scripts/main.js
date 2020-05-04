//get side navigation div
let sidnav =document.querySelector("#side_navigation");
//get activator button for side nav
let sideactive = document.querySelector("#activate");
// when side nav burger is prssed it adds a class if it doesn't exist and removes it if it exist.
let sidestuff = (event) =>{
    sidnav.classList.toggle("open");
    side_overlay.classList.toggle("hidcontent")
    event.preventDefault();
};

sideactive.onclick=() =>{
    sidestuff();
};
// creating overlayer to be added when side nav is opened.

//get main div
let get_main = document.querySelector("main");
//create the div for the overlay
let side_overlay = document.createElement("div");
//add div to main.
get_main.appendChild(side_overlay);
//add class for stylying with css.
side_overlay.classList.add("side_overlay")
//if side overlay is clicked side navigation will toggle.
side_overlay.onclick = () =>{
    sidestuff();
}