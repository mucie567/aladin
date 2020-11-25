function tabMenu(btn,num) {
    // console.log(btn);
    var arr = btn.className.split('');
    if(arr.indexOf('on')<0){
        console.log(btn);
        document.querySelector('.on').classList.remove('on');
        btn.classList.add('on');
    }
    var arrDiv = document.querySelectorAll('.cart-member-wrap > .cart-member');
    console.log(btn.value);
    
    for (var i = 0; i < arrDiv.length; i++) {
        arrDiv[i].style.display='none';
        
    }
    arrDiv[num].style.display='block';
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
  






$(function() {
    utilFnc($('.siemap'))
    gnbFnc($('.gnb-menu'))
    subMenu($('.gnb'))
    pcGnbMenuFnc();
  })