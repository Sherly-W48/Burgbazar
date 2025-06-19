const product=[
    {
        id:0,
        image:'image/gg-1.jpg',
        title:'Z Flip Foldable Mobile',
        price:120,
    },
    {
        id:1,
        image:'image/hh-2,jpg',
        title:'Air Pods Pro',
        price:60,
    },
    {
        id:2,
        image:'image/ee-3,jpg',
        title:'250D DSLR Camera',
        price:230,
    },
    {
        id:3,
        image:'image/aa-1.jpg',
        title:'Head Pkones',
        price:100,
    }
];
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML=categories.map((item)=>
{
    var {image,title,price}=item;
    return(
        `<div class='box'>
            <div class='img-box'>
               <img class='images' src=${image}<>/img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>$ ${price}.00</h2>`+
        "<buttom onclick=áddtocart("+(i++)+")'>Add to cart</button>"+
        `</div>
        </div>`
    )
}).join('')

var cart=[];
function addtocart(a){
    cart.push({...categories[a]});
    displayer();
}
function displaycart(a){
    let j=0;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML="Your cart is empty";
    }
    else{
        document.getElementById("cartItem").innerHTML=cart.map((items)=>
        {
            var {image,title,price}=items;
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                   <img class='rowing' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size:15px;'>$ ${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclinc='delElement("+(j++)+")'></i></div>"
            );
        }).join('');

    }
}
