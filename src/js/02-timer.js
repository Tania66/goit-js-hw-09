import "flatpickr/dist/flatpickr.min.css";
import flatpickr from "flatpickr";
import { Notify } from 'notiflix/build/notiflix-notify-aio';


const startBtn = document.querySelector('button[data-start]');
startBtn.setAttribute("disabled", true);

const timePicer = document.querySelector('#datetime-picker');

const timeValue ={
     days : document.querySelector('[data-days]'),
     hour: document.querySelector('[data-hours]'),
     minutes: document.querySelector('[data-minutes]'),
     seconds: document.querySelector('[ data-seconds]'),  
    
}



const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      console.log(selectedDates[0]);
    
    if (selectedDates[0] < Date.now()) {
        startBtn.setAttribute("disabled", true);
        Notify.failure('Please choose a date in the future');
    }else{
        startBtn.removeAttribute('disabled');
        startBtn.addEventListener("click", onClikCountdown)
    }

},
};

flatpickr(timePicer,  options);


function onClikCountdown() {
    let timer = setInterval(() => {
      let countdown = new Date(timePicer.value) - new Date();
      startBtn.disabled = true;
      timePicer.disabled = true;
      console.log(countdown)
      if (countdown >= 0) {
        let timerData = convertMs(countdown);
          timeValue.days.textContent = timerData.days;
          timeValue.hour.textContent = timerData.hours;
          timeValue.minutes.textContent = timerData.minutes;
          timeValue.seconds.textContent = timerData.seconds;
      } else {
        clearInterval(timer);
      }
    }, 1000);
}   


function addLeadingZero(value) {
    return String(value).padStart(2,'0');
}


function convertMs(ms) {

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    
    const days = addLeadingZero(Math.floor(ms / day));

    const hours = addLeadingZero(Math.floor((ms % day) / hour));
 
    const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
 
    const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));
  
    return { days, hours, minutes, seconds };
}







