const loadingTxt = document.querySelector('.loading-text');
const loadingTxtString = loadingTxt.textContent;
const lettersTxt = loadingTxtString.split("");
loadingTxt.textContent = "";

for (let i = 0; i < lettersTxt.length; i++) {
    loadingTxt.innerHTML += "<span>" + lettersTxt[i] + "</span>"; 
}

let x = 0;
let toggle = true;
let timerInt = setInterval(classAdd , 350);


function classAdd(){

    const span = loadingTxt.querySelectorAll('span')[x];
 
    if(toggle == true) {
        span.classList.add("decoration");

    } else {
        span.classList.remove("decoration");
    }
    
    x++;

    if( x == lettersTxt.length) {
        toggle = !toggle;
        x = 0;
        return;
    }
}