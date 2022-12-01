let shakeButton = document.querySelector(".shake");
let message = document.querySelector(".message");
  
  shakeButton.onclick = function() {
    
    let fortune = Math.ceil(Math.random() * 4);
    
    console.log(fortune);
    message.innerHTML = "Code Nation is cool!";

    
    // task 1  if fortune === 1, output "Nice try."
    if (fortune === 1) {
message.innerHTML = "Nice try";
  
}
    
    // task 2  if fortune === 2, output "Sorry."
else if (fortune === 2) {
message.innerHTML = "Sorry";
  
}
    
    // task 3  if fortune === 3, output "It seems unclear."
else if (fortune === 3) {
message.innerHTML = "It seems unclear";
  
}
    
    // task 4  if fortune === 4, output "For sure."
    else if (fortune === 4) {
message.innerHTML = "For sure";
  
}

};