window.onload = function(){
    var form = document.getElementById("form");
    form.onsubmit = function(e){
        
    }
    
}
function makeRed(inputDiv) {
    inputDiv.style.backgroundColor = "#AA0000";
}
function makeClean(inputDiv) {
	inputDiv.parentNode.style.backgroundColor = "#FFFFFF";
	inputDiv.parentNode.style.color = "#000000";
}