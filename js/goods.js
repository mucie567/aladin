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
  


  