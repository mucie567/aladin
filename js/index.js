function time() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    document.querySelector('.time-now').innerHTML = hours + '시' + minutes + '분';
}

var timeAuto = setInterval(time, 60000);
window.onload = function() {
    time();
}
