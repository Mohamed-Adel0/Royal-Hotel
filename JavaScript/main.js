


let fakeApi = [
    {
        "id": 1,
        "name": "Clothes",
        "image": "https://picsum.photos/640/640?r=3993",
        "creationAt": "2023-08-31T00:59:30.000Z",
        "updatedAt": "2023-08-31T00:59:30.000Z"
        },
        {
        "id": 2,
        "name": "Electronics",
        "image": "https://picsum.photos/640/640?r=876",
        "creationAt": "2023-08-31T00:59:30.000Z",
        "updatedAt": "2023-08-31T00:59:30.000Z"
        },
        {
        "id": 3,
        "name": "Change title",
        "image": "https://picsum.photos/640/640?r=2815",
        "creationAt": "2023-08-31T00:59:30.000Z",
        "updatedAt": "2023-08-31T17:32:59.000Z"
        },
        {
        "id": 4,
        "name": "Shoes",
        "image": "https://picsum.photos/640/640?r=7074",
        "creationAt": "2023-08-31T00:59:30.000Z",
        "updatedAt": "2023-08-31T00:59:30.000Z"
        },
        {
        "id": 5,
        "name": "Others",
        "image": "https://picsum.photos/640/640?r=5649",
        "creationAt": "2023-08-31T00:59:30.000Z",
        "updatedAt": "2023-08-31T00:59:30.000Z"
        },
        {
        "id": 12,
        "name": "Tools",
        "image": "https://picsum.photos/640/640?r=3874",
        "creationAt": "2023-08-31T13:01:06.000Z",
        "updatedAt": "2023-08-31T13:01:06.000Z"
        },
        {
        "id": 13,
        "name": "Config",
        "image": "https://picsum.photos/640/640?r=2815",
        "creationAt": "2023-08-31T14:09:52.000Z",
        "updatedAt": "2023-08-31T14:09:52.000Z"
        },
]
function display (){
    
    let cartoon =``
    for (let i = 0; i < fakeApi.length; i++) {
        
        if (fakeApi[i].image !== null && fakeApi[i].name !==null ) {
            cartoon +=`
            
            <div class="card">
            
          <div class="box-img">  
            <img class="hover-img" src="${fakeApi[i].image}" alt="Error">
          </div>  
          
          <h3>${fakeApi[i].name.split(" ").splice(0,3).join(" ")}</h3>
          <p></p>
          <a class="left" href="${fakeApi[i].url}">Click Here</a>
         </div>
         ` 
        } 
        document.getElementById("api").innerHTML= cartoon
    }    
    
}  
display()
// 2nd Data in Api

let api = 0

async function Sport (){
    let xdata = await fetch(`https://fakestoreapi.com/products`)
    api = (await xdata.json())
    dataType()
}
Sport()
async function dataType (){
    paragraph =``
    for (let i = 0; i < api.length; i++) {
    if (api[i].image !== null) {
        
        paragraph +=`
        <div class="card">
            
          <div class="box-img">  
            <img src="${api[i].image}" alt="Error">
        
          </div>  
          <div class="paragraph">
          <h3>${api[i].category}</h3>
            <p>${api[i].description.split(" ").splice(0,4).join(" ")}</p>
            <a class="left" href="#">Click Here</a>
            </div>
         </div>
        `
    } 
        document.getElementById("dataType").innerHTML =paragraph
}
}
let y = "Im FrontEnd Develepoer"
console.log(y)

//---------------End API -----------------

//----------Event Menu------------
let header = document.getElementById("header")
let nav = document.getElementById("nav")
window.addEventListener("scroll" , navScroll)
function navScroll(mo){
    let scrollx = scrollY
    // console.log(scrollx)
    if (scrollx > 50) {
        nav.style.width="100%"
        header.style.position="fixed"
        header.style.transition="1s"
    }else{
        nav.style.width="85%"
        header.style.position="relative"

    }
}

let xmenu = document.getElementById("menu")
let links = document.getElementById("links")

xmenu.addEventListener("click", changeData)

function changeData(mo){
    if (mo.target.className==("fa-solid fa-bars")) {
        links.style.display="flex"
        header.style.height="50%"
    }
  
}

