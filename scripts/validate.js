window.onload = function () {
    var form = document.getElementById("contactForm");
    form.onsubmit = function (e) {
        var first = document.getElementById("first").value, last = document.getElementById("last").value, email = document.getElementById("email").value, nameReg = /[a-zA-Z]+/, emailReg = /[a-zA-Z0-9._]+@[a-zA-Z]+.[a-zA-Z]{3}/, flag = false, output = "";
        console.log(first);
        if (!nameReg.test(first) || first === "") {
            output += "First name must contain no special characters\n";
            flag = true;
        }
        console.log(last);
        if (!nameReg.test(last) || last === "") {
            output += "Last name must contain no special characters\n";
            flag = true;
        }
        console.log(email);
        if (!emailReg.test(email)) {
            output += "Invalid email\n";
            flag = true;
        }
        
        if (flag) {
            console.log(output);
            alert(output);
            return false;
        }
    };
    
};
