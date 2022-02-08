const listViewBtn = document.getElementById("list-view-btn");
const gridViewBtn = document.getElementById("grid-view-btn");
const blocProduits = document.getElementById("prod-lits");
const keywordsInput = document.getElementById("keywords");
const pricefilter = document.getElementById("pricefilter");


var keywords = ''
var min = 0;


var viewStyle = 0;


var products = [
    { name: "Ninja zx-10r", price: 50000, imageURL: 'https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/Galleries/20160609115020_DSC_2453.jpg' },
    { name: "Z750", price: 24000, imageURL: 'https://storage.kawasaki.eu/public/kawasaki.eu/en-EU/model/12ZR750M_40ABLKDRF00D_C%20edge90_001.png' },
    { name: "BMW 1100r", price: 11000, imageURL: 'https://upload.wikimedia.org/wikipedia/commons/8/86/BMW_R1100R_1999_Motorcycle.jpg' },
    { name: "Ducati v4", price: 300000, imageURL: 'https://www.motorcyclespecs.co.za/Gallery_A-L_16/ducati-panigale-v4s-20-01.jpg' }
];


listViewBtn.addEventListener("click", function () {

    gridViewBtn.className = "fas fa-th"
    listViewBtn.className = "fas fa-list active"
    viewStyle = 1;

    initView();

})


gridViewBtn.addEventListener("click", function () {

    gridViewBtn.className = "fas fa-th active"
    listViewBtn.className = "fas fa-list "
    viewStyle = 0;

    initView();
})




keywordsInput.addEventListener("keyup",function(e){
    const val  = e.target.value;

    keywords = val;
    initView();

})




pricefilter.addEventListener("change",function(e){
    console.log(e.target.value);

    const percent = Number(e.target.value);

    /**
     * percent ?     
     * 100  max
     */


    const val =   ( percent * max() / 100 );

    console.log(val);

    document.getElementById("minPrice").innerHTML = val;

    min = val;

    initView()
})



                                   
function initView() {


    console.log(keywords);

    let blocHTML = '';

    products.filter( (p) =>   ( p.name.toLowerCase().indexOf(keywords.toLowerCase()) != -1) && ( p.price > min )    )  .map((p) => {
        if (viewStyle == 0) {
            blocHTML = blocHTML + `
            <div class="col-sm-4 mb-3">
                <div class="card">
                    <div class="card-body">
                    <img src="${p.imageURL}" class="w-100" alt="">

                    <h3>${p.name}</h3>
                    <p>
                        <small>${p.price}$</small>
                    </p>
                    </div>
                </div>
            </div>
            `;
        } else {
            blocHTML = blocHTML + `
            <div class="col-sm-12 mb-3">
            <div class="row">
             <div class="col-sm-4">
                 <img src="${p.imageURL}" class="w-100" alt="">

             </div>

             <div class="col-sm-8">
                 <h3>${p.name}</h3>
                 <p>
                     <small>${p.price}$</small>
                 </p>
             </div>
            </div>
         </div>`;
        }
    })



    blocProduits.innerHTML = blocHTML;
}


function max(){
    let max = 0;

    /*for (let i = 0; i < products.length; i++) {
        const produit = products[i];

        if (produit.price > max) {
            max = produit.price;
        }

        
    }*/


    products.map((p)=>{
        if (p.price > max ) {
            max = p.price;
        }
    })

    return max;
}


initView();



document.getElementById("max-price").innerHTML = max();


