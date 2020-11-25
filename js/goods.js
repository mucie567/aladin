$(function() {
  utilFnc($('.siemap'))
  gnbFnc($('.gnb-menu'))
  subMenu($('.gnb'))
  pcGnbMenuFnc();
})


function pcGnbMenuFnc() {
  //console.log($(window).innerHeight())
  // console.log($(document).innerHeight());
  $(window).on('scroll',function() {
      var wh = $(window).innerHeight();
      var dh = $(document).innerHeight();
      var oddTop = $('.goods-back').offset().top;
      var sct = $(this).scrollTop();
      if (sct > oddTop) {
          $('.goods-tab-nav-bg').addClass('fixinner');
      }else if(sct < oddTop){
        $('.goods-tab-nav-bg').removeClass('fixinner');
      }
      var offTop2 =$('.info-set').offset().top;
      var offTop3 =$('.pub-review').offset().top;
      var offTop4 =$('.delivery').offset().top;
      var offTop5 = dh - wh;
      if (sct >= offTop5+500) {
          $('.goods-tab-nav ul a.on').removeClass('on');
          $('.goods-tab-nav ul a').eq(3).addClass('on');
      }else if (sct>offTop4-100) {
          $('.goods-tab-nav ul a.on').removeClass('on');
          $('.goods-tab-nav ul a').eq(2).addClass('on');
      }else if (sct>offTop3 - 300){
          $('.goods-tab-nav ul a.on').removeClass('on');
          $('.goods-tab-nav ul a').eq(1).addClass('on');
      }else if (sct>offTop2 - 100){
          $('.goods-tab-nav ul a.on').removeClass('on');
          $('.goods-tab-nav ul a').eq(0).addClass('on');  
        }
  });
  
  $('.goods-tab-nav ul a').on('click',function (e) {
      var offTop=parseInt($($(this).attr('href')).offset().top);
      $('html, body').animate({
          scrollTop: offTop+'px'
      },300)
      e.preventDefault();
  });
}














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




window.addEventListener('load',afterLoad);

// window.onload = afterLoad;
function stringCountCheck(element) {
   var el = document.querySelector(element);
   var inp = el.querySelector('.inp-reply-1');
   var count = el.querySelector('.count');
   var limit = el.querySelector('.limit');
   var limitNum = Number(limit.innerHTML);
   inp.addEventListener('keyup',function() {
       var val = this.value;
       if (val.length > limitNum) {
            this.value = val.substr(0,limitNum)   
        }
    count.innerHTML = this.value.length;
   });
}
function afterLoad() {
    //댓글 문자수량체크
    stringCountCheck('.reply-wrap');
}




// let lorem=document.querySelector('.author-intro')
// console.log(lorem)
// let moreBtn= document.querySelector('.btn-more')
// let lessBtn=document.querySelector('.btn-less')

// function btnMore() {
//     lorem.style.height='auto';
//     moreBtn.addEventListener('click',btnMore)
// }
// window.addEventListener('load',afterLoad);


// function stringCount(element) {
//     var el = document.querySelector(element);
//     var inp = el.querySelector('.author-intro');
//     inp.addEventListener('click',function() {
//         var val = this.value;
//         if (val.length > 100) {
//             this.value = val.substr(0,100)
//             this.value += "..."    
//          }
//     });
// }
// function afterLoad() {
//     stringCount('author-profile')
// }

function myFunction() {
  document.getElementById("gnb-wrap").classList.toggle("on");
  // document.getElementsByClassName(".btn-close").classList.add(".on");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("gnb-content");
    var exit = document.getElementsByClassName("btn-close")
    var i;
    for (i = 0; i < exit.length; i++) {
      var openDropdown = exit[i];
       if (openDropdown.classList.contains('on')) {
         dropdowns.classList.remove('on');
      }
    }
  }
}


function myFunction1() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "더보기"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "줄이기"; 
      moreText.style.display = "inline";
    }
  }
  
  function myFunction() {
    var dots = document.getElementById("dots1");
    var moreText = document.getElementById("more1");
    var btnText = document.getElementById("myBtn1");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "더보기"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "줄이기"; 
      moreText.style.display = "inline";
    }
  }
  


  