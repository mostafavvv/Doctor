var clickBars = document.querySelector('#bars');
var clickMark = document.querySelector('#mark');
var Menu = document.querySelector('#nav-menu');

console.log(clickBars);
console.log(clickMark);
clickBars.addEventListener('click', function(){
    Menu.style.display = "block";
    Menu.style.top = "-90" + "px";


})
clickMark.addEventListener('click', function(){
    Menu.style.display = "none";
    Menu.style.top = "-200" + "px";


})