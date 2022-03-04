function validation() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let mobile = document.getElementById("mobile").value;
    let pass = document.getElementById("pass").value;
    let conpass = document.getElementById("con-pass").value;
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(name == ""){
        document.getElementById("error-name").innerHTML = "**Please enter your name...";
        return false;
    }else if(!isNaN(name[0])){
        document.getElementById("error-name").innerHTML = "**Name must be start with character...";
        return false;
    }else if(email == ""){
        document.getElementById("error-email").innerHTML = "**Please enter your email...";
        return false;
    }else if(mailformat.test(email) == false){
        document.getElementById("error-email").innerHTML = "Please enter valid email...";
        return false
    }else if(mobile == ""){
        document.getElementById("error-mobile").innerHTML = "**Please enter your mobile number...";
        return false;
    }else if(isNaN(mobile)){
        document.getElementById("error-mobile").innerHTML = "**Only numbers are allowed...";
        return false;
    }else if(mobile.length != 10 ){
        document.getElementById("error-mobile").innerHTML = "**Mobile number must have 10 numbers...";
        return false;
    }else if(pass == ""){
        document.getElementById("error-pass").innerHTML = "**Please enter your password...";
        return false;
    }else if(pass.length < 6){
        document.getElementById("error-pass").innerHTML = "**Password length must be minmum 6 ...";
        return false;
    }else if(conpass == ""){
        document.getElementById("error-conpass").innerHTML = "**Please enter your password...";
        return false;
    }else if(conpass != pass){
        document.getElementById("error-conpass").innerHTML = "**Password are not same. Please check...";
        return false;
    }
    else{
        return true;
    }

    // if(mailformat.test(email)){
    //     console.log("yes");
    // }else{
    //     console.log("no")
    // }

    
}
