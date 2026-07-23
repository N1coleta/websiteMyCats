const colors=["#e0ce85","#9972d9","#254732","#fdd7f7","#053473","#670e04"];
const cats=["luna","nyx","scort","goody","hunter","misty"];
const nrCats=6;
const buttonNxt = document.getElementById("buttonext");
const buttonBack= document.getElementById("buttonback");
let poz=0;//la ce pisica ne aflam

function changeBackroundColor(color){
   document.getElementById("catImg").style.setProperty("--shadow-color", color);
}
function changeImage(){
    const imgElement = document.getElementById("catImg");
    imgElement.src = `images/${cats[poz]}.jpg`;
    imgElement.alt = cats[poz];
}
buttonNxt.addEventListener('click',()=>{
    console.log("button clicked");
    poz=(poz+1)%nrCats;
    changeBackroundColor(colors[poz]);
    changeImage();
})