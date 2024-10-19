let text = document.getElementsByClassName("text");
let h1 = document.getElementsByClassName("h1");
let h3 = document.getElementsByClassName("h3");

if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
    // true for mobile device
    document.write("mobile device");
    text.style.fontSize = "6";
    h1.style.fontSize = "16";
    h3.style.fontSize = "12";
  }else{
    // false for not mobile device
    document.write("not mobile device");
  }