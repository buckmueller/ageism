window.onload = function () {
    var form = document.getElementById("contactForm");
    form.onsubmit = function (e) {
        var first = document.getElementById("first");
        var last = document.getElementById("last");
        var email = document.getElementById("email");
        
        var nameReg = /[a-zA-Z]+/g;
        var emailReg = /[a-zA-Z0-9._]+@[a-zA-Z]+.[a-zA-Z]{3}/;
        
        if (!nameReg.test(first)) {
            //alert("First name must be filled out ");
            alert("First name must contain no special characters");
            return false;
        } 
        if (!nameReg.test(last)) {
            //alert("First name must be filled out ");
            alert("Last name must contain no special characters");
            return false;
        }
        if (!emailReg.test(email)) {
            //alert("First name must be filled out ");
            alert("Invalid email");
            return false;
        }
    }
    
}
