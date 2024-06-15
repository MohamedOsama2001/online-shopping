let email=document.querySelector("#email")
let password=document.querySelector("#pwd")
let loginBtn=document.querySelector(".btn")
let getEmail=localStorage.getItem("email")
let getPasswrd=localStorage.getItem("password")
loginBtn.addEventListener("click",function(stop){
    stop.preventDefault()
    if(email.value=="",password.value==""){
        alert("Empty Field!")
    }
    else{
        if(getEmail==email.value && getPasswrd==password.value){
            setTimeout(()=>{
                window.location="index.html"
            },1000)
        }
        else{
            alert("Invalid Credentials!")
        }
    }
})