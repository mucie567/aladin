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
