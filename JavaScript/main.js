

let dataApi = 0
async function Menu (){
    let inforApi= await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=sport&apiKey=0bcb3e7c83b4412c9e0b4b24ae3481d2`)
    dataApi = (await inforApi.json()).articles
    display()
}    
Menu()

async function display (){
    
    let cartoon =``
    for (let i = 0; i < dataApi.length; i++) {
        
        if (dataApi[i].urlToImage !== null && dataApi[i].title !==null && dataApi[i].description !==null) {
            cartoon +=`
            
            <div class="card">
            
          <div class="box-img">  
            <img class="hover-img" src="${dataApi[i].urlToImage}" alt="Error">
          </div>  
          
          <h3>${dataApi[i].title.split(" ").splice(0,3).join(" ")}</h3>
          <p>${dataApi[i].description.split(" ").splice(0,4).join(" ")}</p>
          <a class="left" href="${dataApi[i].url}">Click Here</a>
         </div>
         ` 
        } 
        document.getElementById("api").innerHTML= cartoon
    }    
    
}  
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

