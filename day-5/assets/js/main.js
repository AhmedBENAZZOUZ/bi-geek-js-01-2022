console.log("JS IS READY FROM MAIN.JS");

/**
 * console.log(typeof "hello world");
console.log(typeof 19);
console.log(typeof 15.6);
console.log(typeof 19959959656565656665);
console.log(typeof true);
console.log(typeof [1,2,3,5,6]);
console.log(typeof [1,"taher",true,19]);
console.log(typeof { key:"values" , username:"chourabi", email:"tchourabi@gmail.com" } );

console.log(  typeof function(){}  );

 */

//  DECLARATION 



var username;
var abc;


// THE HTML DOC that inited the js file
/**
 * console.log(document);

console.log(window);
 */



// mini somme
/*
function calcul(){
    var x = Number(document.getElementById("x").value);
    var y = Number(document.getElementById("y").value);
    var resultElement = document.getElementById("result")

    var op = document.getElementById("op").value;


    switch (op) {
        case "+":
            if (isNaN( x+y ) ) {
                resultElement.innerHTML ="check your input !!!! ";
            } else {
                resultElement.innerHTML ="<strong>Result : </strong> "+(x+y);
            }
            break;

            case "-":
                if (isNaN( x-y ) ) {
                    resultElement.innerHTML ="check your input !!!! ";
                } else {
                    resultElement.innerHTML ="<strong>Result : </strong> "+(x-y);
                }
                break;
    
        default:
            break;
    }



}*/


// TODO APP

/**
 * <li>
            <p>
                <strong>elem 1</strong> <br>
                text
                <br>

                <small>15/15/15</small>
            </p>
        </li>
 */

var list = document.getElementById("list");
var todosArray = [];


function deleteTodo(index){

    console.log("about to delete element !!!");

   console.log(index);

   todosArray.splice(index,1);

   initListHTML()
}



function add(){
    let title = document.getElementById("title").value;
    let content = document.getElementById("content").value;
    let date = new Date();


    const todo = {
        title:title,
        content: content,
        date:date,
        index: todosArray.length
    };


    todosArray.push(todo);

    initListHTML();

    document.getElementById("title").value="";
    document.getElementById("content").value="";
    
}


function initListHTML(){
    list.innerHTML = '';

    todosArray.map((todo)=>{
        let todoElement = ` <li>
    <p>
        <strong>${todo.title}</strong> <br>
        ${ todo.content }
        <br>

        <small>${todo.date}</small> <br>

        <button onclick="deleteTodo(${todo.index})" >Done !</button>
    </p>
</li>`;

    list.innerHTML = list.innerHTML + todoElement;
    })

}