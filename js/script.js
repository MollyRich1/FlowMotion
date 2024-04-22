function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  /* Set the width of the side navigation to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  // client testimonial slideshows

  // console.log("test1");
  window.addEventListener('resize', function(){
    showDivs(1);
    // console.log("test4");
  });

  let slideIndex = 1;
  const vpWidth = window.innerWidth;
  showDivs(slideIndex);
  
  function plusDivs(n) {
    showDivs(slideIndex += n);
  }
  
  function currentDiv(n) {
    showDivs(slideIndex = n);
  }
  
  function showDivs(n) {
    let vpWidth = window.innerWidth;

    if(vpWidth < 992){
    let i;
    let x = document.getElementsByClassName("slide");
   
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    //giving errors??, style not defined?
    x[slideIndex-1].style.display = "grid"; 
  }

  else{
    let i;
    let x = document.getElementsByClassName("slide");
   
    if (n > 3) {slideIndex = 1}
    if (n < 1) {slideIndex = 3}
    //dont need, giving issues??
    // for (i = 0; i < 3; i++) {
    //   x[i].style.display = "none";  
    // }
    
    if(slideIndex == 1){
    x[0].style.display = "grid"; 
    x[0].style.gridColumn = "1/2";

    x[1].style.display = "grid"; 
    x[1].style.gridColumn = "2/3";

    x[2].style.display = "none";
    x[3].style.display = "none";
    x[4].style.display = "none";
    x[5].style.display = "none";

    }
    else if (slideIndex == 2){
      x[2].style.display = "grid"; 
      x[2].style.gridColumn = "1/2";
  
      x[3].style.display = "grid"; 
      x[3].style.gridColumn = "2/3";

    x[0].style.display = "none";
    x[1].style.display = "none";
    x[4].style.display = "none";
    x[5].style.display = "none";
    }
    else if (slideIndex == 3){
      x[4].style.display = "grid"; 
      x[4].style.gridColumn = "1/2";
  
      x[5].style.display = "grid"; 
      x[5].style.gridColumn = "2/3";

    x[0].style.display = "none";
    x[1].style.display = "none";
    x[2].style.display = "none";
    x[3].style.display = "none";
    }

  }

  }


  



  

  /* 
  using the viewport width, if above certain threshold, change the style of grid-column
  (of index 1 and 2) to whatever is good,
 

  */