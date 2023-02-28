
function registration() {
    event.preventDefault();
    let firstName = document.getElementById("firstname").value;
    let lastName = document.getElementById("lastname").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;
    var address = document.getElementById("address").value;
    let password = document.getElementById("password").value;


    var regexName =/^[A-Z][a-zA-Z]+$/; 
 
    if(regexName.test(firstName)){
        let m1 = document.querySelector(".error1");  
        m1.innerHTML = "Correct!";
        m1.style.visibility ="visible";
        m1.style.color = "green";
        let first = document.getElementById("firstname");
        first.style.cssText = "border:1px solid green;"
    }else{
        let m1 = document.querySelector(".error1");  
        m1.innerHTML = "Please Enter First Name";
        m1.style.visibility ="visible";
        m1.style.color = "red";
        let first = document.getElementById("firstname");
        first.style.cssText = "border:1px solid red;"
    }

    if(regexName.test(lastName)){
        let m1 = document.querySelector(".error2");  
        m1.innerHTML = "Correct!";
        m1.style.visibility ="visible";
        m1.style.color = "green";
        let first = document.getElementById("lastname");
        first.style.cssText = "border:1px solid green;"
    }else{
        let m1 = document.querySelector(".error2");  
        m1.innerHTML = "Please Enter Last Name";
        m1.style.visibility ="visible";
        m1.style.color = "red";
        let first = document.getElementById("lastname");
        first.style.cssText = "border:1px solid red;"
    }
    
    var regexPhone = /((\+*)((0[ -]*)*|((91 )*))((\d{12})+|(\d{10})+))|\d{5}([- ]*)\d{6}/;

    if(regexPhone.test(phone)){
        let m1 = document.querySelector(".error3");  
        m1.innerHTML = "Correct!";
        m1.style.visibility ="visible";
        m1.style.color = "green";
        let first = document.getElementById("phone");
        first.style.cssText = "border:1px solid green;"
    }else{
        let m1 = document.querySelector(".error3");  
        m1.innerHTML = "Please Enter Correct Mobile Number";
        m1.style.color = "red";
        m1.style.visibility ="visible";
        let first = document.getElementById("phone");
        first.style.cssText = "border:1px solid red;"
    }

    var regexEmail = /^[_A-Za-z0-9-\+]+(\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\.[A-Za-z0-9]+)*(\.[A-Za-z]{2,})$/;
    
    if(regexEmail.test(email)){
        let m1 = document.querySelector(".error4");  
        m1.innerHTML = "Correct!";
        m1.style.color = "green";
        m1.style.visibility ="visible";
        let first = document.getElementById("email");
        first.style.cssText = "border:1px solid green;"
    }else{
        let m1 = document.querySelector(".error4");  
        m1.innerHTML = "Please Enter Correct Email";
        m1.style.color = "red";
        m1.style.visibility ="visible";
        let first = document.getElementById("email");
        first.style.cssText = "border:1px solid red;"
    }

    var regexAddress = /^[#.0-9a-zA-Z\s,-]+$/

    if(regexAddress.test(address)){
        let m1 = document.querySelector(".error5");  
        m1.innerHTML = "Correct!";
        m1.style.color = "green";
        m1.style.visibility ="visible";
        let first = document.getElementById("address");
        first.style.cssText = "border:1px solid green;"
    }else{
        let m1 = document.querySelector(".error5");  
        m1.innerHTML = "Please Enter address and don't use comma(,)";
        m1.style.color = "red";
        m1.style.visibility ="visible";
        let first = document.getElementById("address");
        first.style.cssText = "border:1px solid red;"
    }

    var regexPassword = /^(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z])(?=\D*\d)(?=.*?[\!\#\@\$\%\&\/\(\)\=\?\*\-\+\-\_\.\:\;\,\]\[\{\}\^])[A-Za-z0-9\!\#\@\$\%\&\/\(\)\=\?\*\-\+\-\_\.\:\;\,\]\[\{\}\^]{8,60}$/;

    if(regexPassword.test(password)){
        let m1 = document.querySelector(".error6");  
        m1.innerHTML = "Correct!";
        m1.style.color = "green";
        m1.style.visibility ="visible";
        let first = document.getElementById("password");
        first.style.cssText = "border:1px solid green;"
    }else{
        let m1 = document.querySelector(".error6");  
        m1.innerHTML = "Must include at least 1 lower-case,1 upper-case,1 number,1 special character letter.(must not include ;)";
        m1.style.color = "red";
        m1.style.visibility ="visible";
        let first = document.getElementById("password");
        first.style.cssText = "border:1px solid red;"
    }

    if(regexName.test(firstName) && regexName.test(lastName) && regexPhone.test(phone) && regexEmail.test(email) && regexAddress.test(address) && regexPassword.test(password)){
        
        alert("Signup Successful!")

    }

}

function reset(){
    document.getElementById("firstName").value=" ";
    document.getElementById("lastName").value=" ";
    document.getElementById("phone").value=" ";
    document.getElementById("email").value=" ";
    document.getElementById("address").value=" ";
    document.getElementById("password").value=" ";
    document.getElementById("gender").value=" ";
}

