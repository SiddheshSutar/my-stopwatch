"use strict"

/** Setting individual values in object */
var time = {
    hh: '00',
    mm: '00',
    ss: '00',
    ms: '000'
}

let startBtn = document.getElementById("start-btn");
let stopBtn = document.getElementById("stop-btn");
let resetBtn = document.getElementById("reset-btn");

/** Sync html values with these */
let hhText = document.getElementById("hh");
let mmText = document.getElementById("mm");
let ssText = document.getElementById("ss");
let msText = document.getElementById("ms");

let startBtnSection = document.getElementById("start-col");
let stopBtnSection = document.getElementById("stop-col");
let resetBtnSection = document.getElementById("reset-col");

var interval = null

/** iteration counts used for interval logic */
var hhIteration = 0
var mmIteration = 0
var ssIteration = 0
var msIteration = 0

stopBtnSection.style.display = "none"
resetBtnSection.style.display = "none"

function start() {

    if(!startBtn && !stopBtn) return

    /** When start is clicked;
     * 1. hide start button and show stop button
     * 
     * 
     */
    startBtnSection.style.display = "none"

    stopBtnSection.style.display = "block"

    resetBtnSection.style.display = "block"
    resetBtn.disabled = true


    let newTime = { ...time }

    /** Timer incrementing the milliseconds value in steps of 5 
     * Then subsequent max limits for seconds is 60, minutes = 60  and hours = 24 in nested blocks
     * until the timer is reset automatically
    */
    interval = setInterval(() => {
        msIteration += 5
        if (msIteration === 1000) {
            msIteration = 0

            ssIteration++
            if (ssIteration === 60) {
                ssIteration = 0

                mmIteration++
                if (mmIteration === 60) {
                    mmIteration = 0

                    hhIteration++
                    if (hhIteration === 24) {
                        hhIteration = 0
                        clearInterval(interval)
                    }
                }

            }
        }

        newTime = {
            ...time,
            hh: modifySingleDigit(hhIteration),
            mm: modifySingleDigit(mmIteration),
            ss: modifySingleDigit(ssIteration),
            ms: msIteration,
        }

        hhText.innerHTML = newTime.hh
        mmText.innerHTML = newTime.mm
        ssText.innerHTML = newTime.ss
        msText.innerHTML = newTime.ms
    }, 5);


}

function stop() {
    if(!stopBtn && !startBtn) return

    clearInterval(interval)
    startBtn.innerText = "Resume"
    startBtnSection.style.display = "block"

    resetBtnSection.style.display = "block"
    resetBtn.disabled = false

    stopBtnSection.style.display = "none"


}

function reset() {
    if(!stopBtn && !startBtn) return

    // /** Dont proceed for default condition */
    // // if(
    // //     parseInt(time.hh) === 0 &&
    // //     parseInt(time.mm) === 0 &&
    // //     parseInt(time.ss) === 0 &&
    // //     parseInt(time.ms) === 0 &&
    // // ) return

    clearInterval(interval)
    interval = null
    startBtn.innerText = "Start";
    startBtnSection.style.display = "block"

    stopBtnSection.style.display = "none"

    resetBtnSection.style.display = "none"
    resetBtn.disabled = true

    time = {
        hh: '00',
        mm: '00',
        ss: '00',
        ms: "000"
    }
    hhText.innerHTML = time.hh
    mmText.innerHTML = time.mm
    ssText.innerHTML = time.ss
    msText.innerHTML = time.ms

    hhIteration = 0
    mmIteration = 0
    ssIteration = 0
    msIteration = 0

}

//add event listener to all buttons
startBtn.addEventListener("click", start);
stopBtn.addEventListener("click", stop);
resetBtn.addEventListener("click", reset);

/** Append 0 before a num, eg. 0 -> '00' */
function modifySingleDigit(num) {
    if (num < 10) return "0" + num
}



