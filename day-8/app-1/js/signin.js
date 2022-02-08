const authform = document.getElementById("authform");

authform.addEventListener("submit",function(e){
    e.preventDefault();


    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    


    if ( username === 'admin' && password === 'admin' ) {
        // correct !!!

        localStorage.setItem('key','123')
        window.location = "home.html";
    } else {
        document.getElementById("status").innerHTML="wrong username or password."
    }




})