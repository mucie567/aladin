$(function() {
  utilFnc($('.siemap'))
  gnbFnc($('.gnb-menu'))
  subMenu($('.gnb'))
  })

function utilFnc(element) {
  var util1 = element.find('>li>a')
  var util1Site = element.find('>div')



  var oldMenu = null;
    util1.on('mouseover',function() {
        if (oldMenu!=null) {
            oldMenu.removeClass('on');
        }
       $(this).addClass('on'); 
       util1Site.stop(true).slideDown(500);
       oldMenu=$(this);
    });
    element.on('mouseleave',function() {
      util1Site.stop(true).slideUp(100);

        if (oldMenu!=null) {
            oldMenu.removeClass('on');
        }
    })
}

function gnbFnc(element) {
    var gnb1 = element.find('>.all-menu>a')
    var gnbMenu = element.find('>div')

    var oldMenu = null;
    gnb1.on('mouseover',function() {
        if (oldMenu!=null) {
            oldMenu.removeClass('on');
        }
       $(this).addClass('on'); 
       gnbMenu.stop(true).slideDown(500);
       oldMenu=$(this);
    });
    element.on('mouseleave',function() {
        gnbMenu.stop(true).slideUp(100);

        if (oldMenu!=null) {
            oldMenu.removeClass('on');
        }
    })
}

function subMenu(element) {
    var sub1 = element.find('>li>a')
    var subMenu = element.find('> div')

    var oldMenu = null;
    sub1.on('mouseover',function() {
        if (oldMenu!=null) {
            oldMenu.removeClass('on');
        }
       $(this).addClass('on'); 
       subMenu.stop(true).slideDown(500);
       oldMenu=$(this);
    });
    element.on('mouseleave',function() {
        subMenu.stop(true).slideUp(100);

        if (oldMenu!=null) {
            oldMenu.removeClass('on');
        }
    })
}
















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



