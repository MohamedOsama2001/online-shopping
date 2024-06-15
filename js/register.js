let firstName=document.querySelector("#fname");
let lastName=document.querySelector("#lname");
let email=document.querySelector("#email");
let password=document.querySelector("#pwd");
let registerBtn=document.querySelector(".btn");
registerBtn.onclick=function(stop){
    stop.preventDefault()
    if(firstName.value==""||lastName.value==""||email.value==""||password.value==""){
        alert("Empty Field!")
    }
    else{
        localStorage.setItem("firstname",firstName.value)
        localStorage.setItem("lastname",lastName.value)
        localStorage.setItem("email",email.value)
        localStorage.setItem("password",password.value)
        setTimeout(()=>{
            window.location="login.html"
        },1000)

    }
}