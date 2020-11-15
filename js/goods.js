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




