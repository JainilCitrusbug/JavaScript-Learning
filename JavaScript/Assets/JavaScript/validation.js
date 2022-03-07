function validate(){
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let mobile = document.getElementById("mobile").value;
    let pass = document.getElementById("pass").value;
    let conpass = document.getElementById("con-pass").value;
    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var value = 1;

    // if(name == ""){
    //     document.getElementById("error-name").innerHTML = "**Please enter your name...";
    //     return false;
    // }else if(!isNaN(name[0])){
    //     document.getElementById("error-name").innerHTML = "**Name must be start with character...";
    //     return false;
    // }else if(email == ""){
    //     document.getElementById("error-email").innerHTML = "**Please enter your email...";
    //     return false;
    // }else if(mailformat.test(email) == false){
    //     document.getElementById("error-email").innerHTML = "Please enter valid email...";
    //     return false
    // }else if(mobile == ""){
    //     document.getElementById("error-mobile").innerHTML = "**Please enter your mobile number...";
    //     return false;
    // }else if(isNaN(mobile)){
    //     document.getElementById("error-mobile").innerHTML = "**Only numbers are allowed...";
    //     return false;
    // }else if(mobile.length != 10 ){
    //     document.getElementById("error-mobile").innerHTML = "**Mobile number must have 10 numbers...";
    //     return false;
    // }else if(pass == ""){
    //     document.getElementById("error-pass").innerHTML = "**Please enter your password...";
    //     return false;
    // }else if(pass.length < 6){
    //     document.getElementById("error-pass").innerHTML = "**Password length must be minmum 6 ...";
    //     return false;
    // }else if(conpass != pass){
    //     document.getElementById("error-conpass").innerHTML = "**Password are not same. Please check...";
    //     return false;
    // }
    // else{
    //     return true;
    // }

    

    
    if(name == ""){
        document.getElementById("error-name").innerHTML = "**Please enter your name...";
        value = 0;
    }else if(!isNaN(name[0])){
        document.getElementById("error-name").innerHTML = "**Name must be start with character...";
        value = 0;
    }else{
        document.getElementById("error-name").innerHTML = "";
        value = 1;
    }

    if(email == ""){
        document.getElementById("error-email").innerHTML = "**Please enter your email...";
        value = 0;
    }else if(mailformat.test(email) == false){
        document.getElementById("error-email").innerHTML = "Please enter valid email...";
        value = 0;
    }else{
        document.getElementById("error-email").innerHTML = "";
        value = 1;
    }  
    
    
    if(mobile == ""){
        document.getElementById("error-mobile").innerHTML = "**Please enter your mobile number...";
        value = 0;
    }else if(isNaN(mobile)){
        document.getElementById("error-mobile").innerHTML = "**Only numbers are allowed...";
        value = 0;
    }else if(mobile.length != 10 ){
        document.getElementById("error-mobile").innerHTML = "**Mobile number must have 10 numbers...";
        value = 0;
    }else{
        document.getElementById("error-mobile").innerHTML = "";
        value = 1;
    }  
    
    if(pass == ""){
        document.getElementById("error-pass").innerHTML = "**Please enter your password...";
        value = 0;
    }else if(pass.length < 6){
        document.getElementById("error-pass").innerHTML = "**Password length must be minmum 6 ...";
        value = 0;
    }else{
        document.getElementById("error-pass").innerHTML = "";
        value = 1;
    }  
    
    if(conpass != pass){
        document.getElementById("error-conpass").innerHTML = "**Password are not same. Please check...";
        value = 0;
    }
    else{
        document.getElementById("error-conpass").innerHTML = "";
        value = 1;
    }
    
    
    if(value === 1){
        return true;
    }else{
        return false;
    }
}
