// CALLBACK FUNCTION FOR LOGIN
document.querySelector("#button1").addEventListener("click", match);

//Validation function for login details
function match(){
    uname.innerText="";
    psw.innerText="";
    username=document.getElementById("username");
    password=document.getElementById("password");
    
    if(username.value.trim() === ''){
        uname.innerText = "Username required";
    }
    else if(username.value!="admin"){
        uname.innerText = "Invalid Username";
    }
    if(password.value.trim() === ''){
        psw.innerText = "Password required";
    }
    else if(password.value!="12345"){
        psw.innerText = "Invalid Password";
    }
    if(username.value=="admin" && password.value=="12345"){
        location.href = "./todolist.html";
    }
    
  
  }

