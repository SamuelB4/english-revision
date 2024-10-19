let text = document.getElementsByClassName("text");
let h1 = document.getElementsByClassName("h1");
let h3 = document.getElementsByClassName("h3");

if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
    // true for mobile device
    text.style.fontSize = "6px";
    h1.style.fontSize = "16px";
    h3.style.fontSize = "12px";
  }else{
    // false for not mobile device
  }