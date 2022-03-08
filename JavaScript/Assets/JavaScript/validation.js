function validate(){
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let mobile = document.getElementById("mobile").value;
    let pass = document.getElementById("pass").value;
    let conpass = document.getElementById("con-pass").value;
    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var submited = 1;

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
    //     document.getElementsByTagName("span").innerHTML = "";
    //     return true;
    // }

    

    

    
    if(name == ""){
        document.getElementById("error-name").innerHTML = "**Please enter your name...";
        submited = 0;
    }else if(!isNaN(name[0])){
        document.getElementById("error-name").innerHTML = "**Name must be start with character...";
        submited = 0;
    }else{
        document.getElementById("error-name").innerHTML = "";
        submited = 1;
    }

    if(email == ""){
        document.getElementById("error-email").innerHTML = "**Please enter your email...";
        submited = 0;
    }else if(mailformat.test(email) == false){
        document.getElementById("error-email").innerHTML = "Please enter valid email...";
        submited = 0;
    }else{
        document.getElementById("error-email").innerHTML = "";
        submited = 1;
    }  
    
    
    if(mobile == ""){
        document.getElementById("error-mobile").innerHTML = "**Please enter your mobile number...";
        submited = 0;
    }else if(isNaN(mobile)){
        document.getElementById("error-mobile").innerHTML = "**Only numbers are allowed...";
        submited = 0;
    }else if(mobile.length != 10 ){
        document.getElementById("error-mobile").innerHTML = "**Mobile number must have 10 numbers...";
        submited = 0;
    }else{
        document.getElementById("error-mobile").innerHTML = "";
        submited = 1;
    }  
    
    if(pass == ""){
        document.getElementById("error-pass").innerHTML = "**Please enter your password...";
        submited = 0;
    }else if(pass.length < 6){
        document.getElementById("error-pass").innerHTML = "**Password length must be minmum 6 ...";
        submited = 0;
    }else{
        document.getElementById("error-pass").innerHTML = "";
        submited = 1;
    }  
    
    if(conpass == "" || conpass != pass){
        document.getElementById("error-conpass").innerHTML = "**Password are not same. Please check...";
        submited = 0;
    }else{
        document.getElementById("error-conpass").innerHTML = "";
        submited = 1;
    }
    

    if(submited === 1){
        return true;
    }else{
        return false;
    }


}
