// Game strategy
let pointer = 0
let alphabet = ['#ans_1', '#ans_2', '#ans_3', '#ans_4']
let order = ['first', 'second', 'third', 'fourth']
let question = []
let fail = 0
let timer
let totaltime = 0

$(document).ready(() => {
    question = generateAns(4)
    orderAns()
    
    $('#a').on('click', function() {
        eventClick('A')
    })
    $('#b').on('click', function() {
        eventClick('B')
    })
    $('#c').on('click', function() {
        eventClick('C')
    })
    $('#d').on('click', function() {
        eventClick('D')
    })
    $('#stop').on('click', () => {
        stopTimer()
    })
})

const eventClick = (char) => {
    startTimer()
    ranCharString(char)
    endGame()
}

const ranCharString = (char) => {
    if (char === question[pointer]) {
        let remainNum = 3
        remainNum -= pointer
        $(alphabet[pointer]).text(char)
        $('#' + char.toLowerCase()).attr('disabled', true)
        $('#remain-num').text(remainNum)
        pointer++
        orderAns()
    } else {
        fail += 1
        $('#fail-num').text('Fail: ' + fail)
    }
}

function orderAns() {
    $('#order-answer').text(order[pointer])
}

function generateAns(length) {
    let characters = 'ABCD'
    const random = () => Math.floor(Math.random() * charactersLength)
    const charactersLength = characters.length
    const randomCharAns = []

    for (let i = 0; i < length; i++) {
        let index = random()
        while (randomCharAns.includes(characters[index]))
            index = random()
        randomCharAns.push(characters[index])

    }
    return randomCharAns

}
function startTimer(){
    if (seconds === 0 && millisec ===0){
        timer = setInterval(display, 10)
    }
}

function endGame() {
    if (pointer === 4) {
        stopTimer()
        
        // popup
        $('.popup-player').css({
            'visibility': 'visible',
            'background': '#ffff66',
            'color': 'black'
        })
        $('#fail-num2').text(fail)
        $('#timer2').text(time)

        // POST 
        setTimeout(() => {
            $('#post-name').val($('#name').text())
            $('#post-fail').val(fail)
            $('#post-time').val(totaltime)
            $('#post-form').submit()
        }, 3500)
    }
}

// Timer
let millisec = 0
let seconds = 0
let time = '00:00'
const timeFormat = number => number<=9 ? `0${number}`:number
const display = () => {
    if (millisec >= 99) {
        millisec = 0
        seconds += 1
    } else
        millisec += 1
    time = `${timeFormat(seconds)}:${timeFormat(millisec)}`//format => 00:00
    $('#timer').text(time) 
}

const stopTimer = () => {
    clearInterval(timer)
    totaltime = seconds*1000 + millisec*10
    millisec = 0
    seconds = 0
}
