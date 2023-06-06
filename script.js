let hour =document.getElementById('hour')
let min =document.getElementById('min')
let sec =document.getElementById('sec')

function displayTime(){
    let date=new Date();
    console.log('step1')
    //lets strip only hours, min, sec from date

let hh= date.getHours();
let mm= date.getMinutes();
let ss= date.getSeconds();
console.log('step2')

let hRotate=30*hh +mm/2;
let minRotate=6*mm +ss/10;
let secRotate=6*ss;
console.log('step3')

hour.style.transform=`rotate(${hRotate}deg)`;
min.style.transform=`rotate(${minRotate}deg)`;
sec.style.transform=`rotate(${secRotate}deg)`;
}
console.log('step4')

setInterval(displayTime, 1000);