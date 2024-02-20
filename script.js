console.log("Oks")
// // menuPontok=["első", "második","harmadik", "negyedik","ötödik"]
menuPontok=[
    {text:"első", type:""},
    {text:"második", type:""},
    {text:"harmadik", type:"",type:"has_submenu", submenuItem:["első almenü","második almenü","harmadik almenü","negyedik almenü"]},
    {text:"negyedik", type:""},
]

gomb=document.getElementById("cookie_accept")
footer=document.getElementsByClassName("cookie_accept")[0]
// console.log("gomb1: ",gomb)
// gomb.id="alma"
// console.log("gomb2: ",gomb)

gomb.onclick=function(){
   footer.className="hidden"
//    footer.classList.add("hidden")
}

lista= document.createElement("ul")
for (const menuPont of menuPontok) {
    listaElem= document.createElement("li")
    link = document.createElement("a")
    link.href="#"
    link.innerHTML=menuPont.text
    listaElem.appendChild(link)
    if (menuPont.type!="") {
        listaElem.classList.add(menuPont.type)
        sublista= document.createElement("ul")
        sublista.classList.add("submenu")
        for (const subItem of menuPont.submenuItem) {
            sublistaElem= document.createElement("li")
            sublink = document.createElement("a")
            sublink.href="#"
            sublink.innerHTML=subItem
            sublistaElem.appendChild(sublink)
            sublista.appendChild(sublistaElem)
        }
        listaElem.appendChild(sublista)
    }
    
    lista.appendChild(listaElem) 
}
document.getElementsByClassName("header")[0].appendChild(lista)