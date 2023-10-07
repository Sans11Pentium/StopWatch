let start_btn=document.querySelector(".start");
let reset_btn=document.querySelector(".reset");
let stop_btn=document.querySelector(".stop");
let p=document.querySelector(".time");

let hours=0;
let minutes=0;
let seconds=0;
let milliSeconds=0;
let event_val;

let hr,min,sec,ms;

let check=false;
let started=false;

start_btn.addEventListener("click",start)

reset_btn.addEventListener("click",reset);

stop_btn.addEventListener("click",stop);

function start(){
    if(started===true) return;
    started=true;
    check=true;
    event_val=setInterval(function(){
        milliSeconds += 5;
        if(milliSeconds === 1000) {
            milliSeconds = 0;
            seconds++;
        }
        if(seconds === 60) {
            seconds = 0;
            minutes++;
        }
        if(minutes === 60) {
            minutes = 0;
            hours++;
        }
        if(hours === 24) {
            reset();
        }

        
        if(milliSeconds < 10) {
            ms = "00" + milliSeconds;
        }
        else if(milliSeconds < 100) {
            ms = "0" + milliSeconds;
        }
        else {
            ms = milliSeconds;
        }

        if(seconds < 10) {
            s = "0" + seconds;
        }
        else {
            s = seconds;
        }

        if(minutes < 10) {
            m = "0" + minutes;
        }
        else {
            m = minutes;
        }

        if(hours < 10) {
            h = "0" + hours;
        }
        else {
            h = hours;
        }

        p.innerText = h + " : " + m + " : " + s + " : " + ms;
    },5);
}

function stop(){
    if(check===false) return ;
    clearInterval(event_val);
    start_btn.innerText="Resume";
    started=false;
}

function reset(){
    check = false;
    started = false;
    milliSeconds = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;
    p.innerText = "00 : 00 : 00 : 000";
    clearInterval(event_val);
    start_btn.innerText = "Start";  
    started=false;
    check=false; 
}