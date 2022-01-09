var Hrs = 0;
var Min = 0;
var Sec = 0;
var Milsec = 0;

var timer = false;

function start() {
    timer = true;
    Stopwatch();
}
function stop() {
    timer = false;
}
function reset() {
   timer = false;
   Hrs = 0;
   Min = 0;
   Sec = 0;
   Milsec = 0;
   document.getElementById("Hrs").innerHTML = Hrs;
        document.getElementById("Min").innerHTML = Min;
        document.getElementById("Sec").innerHTML = Sec;
        document.getElementById("Milsec").innerHTML = Milsec;
}
function Stopwatch() {
    if (timer == true) {
        Milsec = Milsec + 1;
        if(Milsec==100){
            Sec=Sec+1;
            Milsec=0;
        }
        if(Sec==60){
            Min=Min+1;
            Milsec=0;
            Sec=0;
        }
        if(Min==60){
            Hrs=Hrs+1;
            Milsec=0;
            Sec=0;
            Min=0;
        }
        var hrString=Hrs;
        var minString=Min;
        var secString=Sec;
        var milsecString=Milsec;
        if(Hrs<10){
            hrString="0"+hrString;
        }
        if(Min<10){
            minString="0"+minString;
        }
        if(Sec<10){
            secString="0"+secString;
        }
        if(Milsec<10){
            milsecString="0"+milsecString;
        }
        document.getElementById("Hrs").innerHTML = hrString;
        document.getElementById("Min").innerHTML = minString;
        document.getElementById("Sec").innerHTML = secString;
        document.getElementById("Milsec").innerHTML = milsecString;
        setTimeout(" Stopwatch()" , 10);
    }
}