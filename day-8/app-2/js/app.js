const switchBTN = document.getElementById("switch");
const app = document.getElementById("app");


// check if dfark mode already anebled !!
const stat = localStorage.getItem("theme");

    if (stat == 'dark') {
        switchBTN.className="switch on ";
        app.className="dark-mode"
    }


switchBTN.addEventListener("click",function(){
    const stat = localStorage.getItem("theme");

    if (stat == 'dark') {
        switchBTN.className="switch  ";
        localStorage.setItem("theme","light");
        app.className=""
        
    }else{
        switchBTN.className="switch on ";
        localStorage.setItem("theme","dark");
        app.className="dark-mode"
    }
    
})
