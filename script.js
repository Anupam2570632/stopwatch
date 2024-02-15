let min = 0;
let sec = 0;
let ten = 0;
let tens = document.getElementById('millisecond');
let second = document.getElementById('second');
let minute = document.getElementById('minute');

let watch = true;

function start() {
    watch = true;
    stopWatch();
}

function stop() {
    watch = false;
    stopWatch();
}

function reset() {
    ten = '00';
    min = '00';
    sec = '00';
    minute.innerHTML = min;
    second.innerHTML = sec;
    tens.innerHTML = ten;
    watch = false;
    stopWatch();
}



function stopWatch() {

    if (watch === true) {
        ten++;

        if (ten <= 9) {
            tens.innerHTML = '0' + ten;
        }
        if (ten > 9) {
            tens.innerHTML = ten;
        }
        if (ten > 99) {
            sec++;
            second.innerHTML = '0' + sec;
            ten = 0;
            tens.innerHTML = '0' + 0;
        }

        if (sec > 9) {
            second.innerHTML = sec;
        }
        if (sec > 59) {
            min++;
            minute.innerHTML = '0' + min;
            sec = 0;
            second.innerHTML = '0' + 0;
        }

        setTimeout("stopWatch()", 10)
    }
}