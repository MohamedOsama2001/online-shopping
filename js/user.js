let getUserName=localStorage.getItem("firstname")
let userInfo=document.querySelector(".user-info")
let userName=document.querySelector(".user-info .user-name")
let navLinks=document.querySelector(".nav-links")
let shopCart=document.querySelector(".shopCart")

if(getUserName){
    navLinks.remove()
    userInfo.style.display="flex"
    userName.innerHTML=getUserName
    shopCart.style.display="flex"


}
let logoutBtn=document.querySelector(".logout")
logoutBtn.addEventListener("click",function(){
    localStorage.clear();
    setTimeout(()=>{
        window.location="login.html"
    },1000)
})