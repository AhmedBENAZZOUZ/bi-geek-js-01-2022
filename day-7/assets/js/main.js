const listViewBtn = document.getElementById("list-view-btn");
const gridViewBtn = document.getElementById("grid-view-btn");
const blocProduits = document.getElementById("prod-lits");
const keywordsInput = document.getElementById("keywords");


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

    initView(val);

})



function initView(keywords = '') {


    console.log(keywords);

    let blocHTML = '';

    products.filter( (p) =>    p.name.toLowerCase().indexOf(keywords.toLowerCase()) != -1    )  .map((p) => {
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


initView();
