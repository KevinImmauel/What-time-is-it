function timeRN() {
    var today = new Date();
    var hour = today.getHours();
    var min = today.getMinutes();
    var sec = today.getSeconds();

    var hours_rotate = hour * 30;
    var min_rotate = min * 6;
    var sec_rotate = sec * 6;

    hours.style.transform = `rotate(${hours_rotate}deg)`;
    minutes.style.transform = `rotate(${min_rotate}deg)`;
    seconds.style.transform = `rotate(${sec_rotate}deg)`;
}

setInterval(timeRN, 1000)

function goFullScreen() {

    if ((document.fullScreenElement && document.fullScreenElement !== null) ||
        (!document.mozFullScreen && !document.webkitIsFullScreen)) {
        if (document.documentElement.requestFullScreen) {
            document.documentElement.requestFullScreen();
        } else if (document.documentElement.mozRequestFullScreen) {
            document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullScreen) {
            document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
        }
    } else {
        if (document.cancelFullScreen) {
            document.cancelFullScreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
        }
    }
}