window.onload = function () {
    var form = document.getElementById("contactForm");
    form.onsubmit = function (e) {
        var x = document.forms["contactForm"]["firstName"].value;
        var y = document.forms["contactForm"]["lastName"].value;
        var z = document.forms["contactForm"]["email"].value;            
        if (x === "") {
            alert("First name must be filled out");
            return false;
        }
                
        if (y === "") {
            alert("Last name must be filled out");
            return false;
        }
            
        if (z === "") {
            alert("E-mail must be filled out");
            return false;
        }    
    }
    
}