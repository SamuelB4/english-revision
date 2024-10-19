if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
    // true for mobile device
    document.querySelectorAll(".text").style.fontSize = "4px";
    document.querySelectorAll(".h1").style.fontSize = "12px";
    document.querySelectorAll(".h3").style.fontSize = "8px";
}