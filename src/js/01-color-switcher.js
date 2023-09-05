const swicherStart = document.querySelector('button[data-start]');  
const swicherStop = document.querySelector('button[data-stop]');
const bodycolor = document.querySelector('body'); 


swicherStart.addEventListener('click', onClickSwicherStart);
swicherStop.addEventListener('click', onclickSwichStop);


swicherStop.setAttribute("disabled", true);
let intervalId = null;


function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}



function onClickSwicherStart() {

intervalId =  setInterval(() => {
 bodycolor.style.backgroundColor = getRandomHexColor();

},1000);

    if ( bodycolor.style.backgroundColor = getRandomHexColor()) {
      swicherStart.setAttribute("disabled", true);
    }

    swicherStop.removeAttribute('disabled');

};




function onclickSwichStop() {

 swicherStart.removeAttribute("disabled", false);
 swicherStop.setAttribute("disabled", true);

clearInterval(intervalId);

};



