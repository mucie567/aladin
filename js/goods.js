
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


function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("btn-read-more");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; 
      moreText.style.display = "inline";
    }
  }
  
  function myFunction() {
    var dots = document.getElementById("dots1");
    var moreText = document.getElementById("more1");
    var btnText = document.getElementById("myBtn1");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; 
      moreText.style.display = "inline";
    }
  }
  


  