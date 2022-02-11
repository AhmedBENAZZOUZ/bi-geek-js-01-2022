const messagesElement = document.getElementById('messages-section');
var chats = [];
const replyInput = document.getElementById("reply-input");

const replyForm = document.getElementById('reply-form');


/**
 * <div class="sent">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. In vitae quod, unde tempora, doloribus necessitatibus velit veritatis magni labore soluta voluptatibus, accusantium illum exercitationem laudantium tempore magnam ab autem veniam.
                </div>
                <div class="sent-by-bot">
                    welcome to our app
                </div>
 */


replyForm.addEventListener('submit',function(e){
    e.preventDefault();


    // GET THE TEXT FROM THE INPUT
    const message= replyInput.value;

    console.log(message);

    chats.push({ date:new Date(), message:message, sentBy:'USER' });

    replyInput.value='';

    initChats();

    replyFromBot(message);

})


function initChats(){
    messagesElement.innerHTML = '';

    let htmlElements = '';
    chats.map((m)=>{
        if (m.sentBy === 'USER') {
            const element = ` <div class="sent">
                   ${m.message}
                </div>`;
            htmlElements = htmlElements+ element;
        } else {
            const element = ` <div class="sent-by-bot">
                   ${m.message}
                </div>`;
            htmlElements = htmlElements+ element;
 
            
        }
    })


    messagesElement.innerHTML = htmlElements;
}


function replyFromBot( lastMessage ){
    console.log("about to reply !!");

    const dicSalutation = ['slt','hi','hello','bonjour','bonjourr','hii','slt cv !!'];
    const dicProds = ['produit','produits'];

  

    if ( dicSalutation.indexOf(lastMessage.toLocaleLowerCase()) != -1 ) {
        // 

        chats.push({ date:new Date(), message:'welcome to our app app, what are you looking for ?', sentBy:'BOT' });
    }else if( dicProds.indexOf(lastMessage.toLocaleLowerCase()) != -1){
        chats.push({ date:new Date(), message:'Okay, i will put you in call with our sells manager', sentBy:'BOT' });
    }else{
        chats.push({ date:new Date(), message:'Sorry, i didnt undrestand !!', sentBy:'BOT' });
    }

    initChats();
}