const startBtn = document.getElementById("start-el")
const stopBtn = document.getElementById("stop-el")
const resetBtn = document.getElementById("reset-el")
const timerMin = document.getElementById("timer-min")
const timerSec = document.getElementById("timer-sec")

let minutes = 24
let seconds = 59
let breakTime = false

startBtn.addEventListener("click", function(){
        let countDown = setInterval(function(){
            if(seconds<10){
                timerMin.innerText = `${minutes}:`
                timerSec.innerText = `0${seconds}`
            }else{
                timerMin.innerText = `${minutes}:`
                timerSec.innerText = seconds
            }
            if(seconds == 0){
                seconds = 59
                minutes--
            }
            seconds--
            if(minutes < 0){
                clearInterval(countDown)
                alert("Times Out!")
                if(breakTime == true){
                    minutes = 24
                    seconds = 59
                    breakTime = false
                    startBtn.innerText = "START"
                }else{
                    minutes = 4
                    seconds = 59
                    breakTime = true
                    startBtn.innerText = "START BREAK"
                }
            }
        }, 1000)
        stopBtn.addEventListener("click", function(){
            clearInterval(countDown)
        })
        resetBtn.addEventListener("click",function(){
            clearInterval(countDown)
            timerSec.innerText = "00"
            timerMin.innerText = "25:"
            seconds = 59
            minutes = 24
        })
})