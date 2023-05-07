"use strict"

var time = {
    mm: 0,
    ss: 0,
    ms: 0
}

let btn1 = document.getElementById("start-btn");
let btn2 = document.getElementById("stop-btn");
let btn3 = document.getElementById("reset-btn");

let hhText = document.getElementById("hh");
let mmText = document.getElementById("mm");
let ssText = document.getElementById("ss");
let msText = document.getElementById("ms");

var interval = null

var hhIteration = 0
var mmIteration = 0
var ssIteration = 0
var msIteration = 0

function start() {
    console.log('hex: ', time)
    let newTime = { ...time }
    interval = setInterval(() => {
        msIteration += 5
        if (msIteration === 1000) {
            msIteration = 0

            ssIteration++
            if (ssIteration === 60) {
                ssIteration = 0

                mmIteration++
                if (mmIteration === 1) {
                    mmIteration = 0
                    
                    hhIteration++
                    if(hhIteration === 24) {
                        hhIteration = 0
                        clearInterval(interval)
                    }
                }

            }
        }

        newTime = {
            ...time,
            mm: mmIteration,
            hh: hhIteration,
            ss: ssIteration,
            ms: msIteration,
        }
        console.log('hex: ', newTime)

        hhText.innerHTML = newTime.hh
        mmText.innerHTML = newTime.mm
        ssText.innerHTML = newTime.ss
        msText.innerHTML = newTime.ms
    }, 5);


}

function stop() {
    clearInterval(interval)
}

function reset() {

}

//add event listener to all buttons
btn1.addEventListener("click", start);
btn2.addEventListener("click", stop);
btn3.addEventListener("click", reset);

var returnobj = (function () {
    // document.addEventListener('click', (x) => {
    //     console.log('hex: ', x)
    // })
})()



