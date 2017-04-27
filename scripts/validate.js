window.onload = function () {
    var form = document.getElementById("contactForm");
    form.onsubmit = function (e) {
        var first = document.getElementById("first");
        var last = document.getElementById("last");
        var email = document.getElementById("email");
        
        var nameReg = /[a-zA-Z]/g;
        
        if (!nameReg.test(first)) {
            //alert("First name must be filled out ");
            alert("No special characters");
            return false;
        }   
    }
    
}
