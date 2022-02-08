/**
 * const feildElement = document.getElementById("feild");
const ballElement = document.getElementById("ball");
const particles = document.getElementById("particles");






feildElement.addEventListener("mousemove",function(event){
    console.log(event);
    const x = event.clientX;
    const y = event.clientY;


    ballElement.style.top=y+"px";
    ballElement.style.left=x+"px";

    
})


feildElement.addEventListener("mousedown",function(event){

    const x = event.clientX;
    const y = event.clientY;

    const tmpElement = `<div style="top:${y}px;left:${x}px;  " class="particule" ></div>`;

    particles.innerHTML = particles.innerHTML + tmpElement;


    
})
 */



//  GALLERY

/**
 * const viewIMG = document.getElementById("view");
const nextBTN = document.getElementById("next");
const prevousBTN = document.getElementById("previous");


var index = 0;

const galleryImages = [
    'https://scuffedentertainment.com/wp-content/uploads/2021/09/perfect-wallpaper-quiz.jpg',
    'https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__480.jpg',
    'https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547__340.jpg'
];


viewIMG.setAttribute("src",galleryImages[index])

nextBTN.addEventListener("click",function(){
    index++;
    if (index === galleryImages.length) {
        index = 0;
    }
    viewIMG.setAttribute("src",galleryImages[index])

})




prevousBTN.addEventListener("click",function(){
    index--;
    if (index < 0) {
        index = (galleryImages.length - 1 );
    }
    viewIMG.setAttribute("src",galleryImages[index])

})



setInterval(   ()=>{
    // trigger !!
    nextBTN.click();
}  , 4000);
 */



/**
 * document.getElementById("game").addEventListener("keyup",function(event){
    const val = event;


    console.log(val);

})
 */



const myinput = document.getElementById("myinput");
const chatbox = document.getElementById("chatbox");

var chats = []


myinput.addEventListener("keyup",function(event){
    const val = event.target.value;
    const code = event.code;

    console.log(code);

    if ( code === "Enter") {
        document.getElementById("preview").innerText = "";  

        const message = {
            message: val,
            date : new Date()
        };


        chats.push(message);

        event.target.value = "";
        initView();

        const pop = new Audio("assets/pop.mp3");

        pop.play();

    }else{
        
        document.getElementById("preview").innerText = "typing...";
    }

})



function initView(){

    chatbox.innerHTML = "";
    
    chats.map((m)=>{
        const element = `
        <li>
            <p>${ m.message } <br>  <small>${ m.date }</small> </p>
        </li>
        `;

        chatbox.innerHTML = chatbox.innerHTML + element;
    })

}



