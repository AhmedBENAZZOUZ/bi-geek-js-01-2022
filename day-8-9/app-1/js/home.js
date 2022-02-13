// CHECK IF USER IS CONNECTED

//localStorage.setItem('key','123')


if (localStorage.getItem('key') == '123' ) {
    // conncted !!!
}else{
    // REDIRECT TO SIGN IN PAGE

    window.location = "signin.html";
}



const logoutBtn = document.getElementById("logout-btn");

logoutBtn.addEventListener("click",function(){
    localStorage.removeItem("key");
    window.location = "signin.html";
})
