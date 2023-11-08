//<form onsubmit="return validate()">

function validate(){
    var name = document.getElementById("name")
    var mobile = document.getElementById("mobile")
    var email = document.getElementById("email")

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(name.value.trim().length<5){
        alert("Invalid Name! Full Name can't be less than 5 letters")
        return false;
    }else if(mobile.value.length!=10){
        alert("Invalid Mobile Number! Mobile Number should be 10 digits")
        return false;
    }else if (!emailRegex.test(email.value)) {
        alert("Invalid Email Address! Please enter a valid email address.")
        return false;
    }else if(email.value.length<10){
        alert("Invalid Email Address! Email address can't be less than 10 letters")
        return false;
    }else{
        return true;
    }
}
