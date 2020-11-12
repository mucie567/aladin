







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



function galleryChange(num1) {
    num=num1;
    var arrFrameList=document.querySelectorAll('.aladin-tv-wrap .main iframe');
    document.querySelector('.aladin-tv-wrap .main iframe.on').removeAttribute('class');
    arrFrameList[num1].setAttribute('class','on');
    return false;
}

var num=0;
function autoAddNum() {
    num++;
    if (num>=4) num=0;
    var aTag = document.querySelectorAll('.map-image a');
    aTag[num].click();
}



function bannerMenu(paging,num1) {
    
    var arr = paging.className.split('');
    if(arr.indexOf('on')<0){
        document.querySelector('.on').classList.remove('on');
        paging.classList.add('on');
    }
    var arrDiv = document.querySelectorAll('.slide-banner-wrap > .paged');
    // var num1 =0;
    for (var i = 0; i < arrDiv.length; i++) {
        arrDiv[i].style.height=0;
        arrDiv[i].style.overflow='hidden';
    }
    arrDiv[num1].style.height='auto';
    return false;
    
}



