const colors=["#e0ce85","#9972d9","#254732","#fdd7f7","#053473","#670e04"];
const cats=["luna","nyx","scortisoara","goody","hunter","misty"];
const nrCats=6;
const buttonNxt = document.getElementById("buttonext");
const buttonBack= document.getElementById("buttonback");
let poz=0;//la ce pisica ne aflam

function changeBackroundColor(color){
   document.getElementById("catImg").style.setProperty("--shadow-color", color);
}
function changeNameColor(color){
   document.getElementById("catName").style.setProperty("--name-color", color);
}
function changeAchivements(color){
    document.getElementById("achiv").style.setProperty("--achiv-color", color);
}
function changeImage() {
    const catImg = document.getElementById("catImg");
    
    const fadeOut = catImg.animate(
        [{ opacity: 1 }, { opacity: 0 }],
        { duration: 300, fill: 'forwards' }
    );
    fadeOut.onfinish = () => {
        catImg.src = `images/${cats[poz]}.jpg`;
        catImg.alt = cats[poz];
        catImg.animate(
            [{ opacity: 0 }, { opacity: 1 }],
            { duration: 300, fill: 'forwards' }
        );
    };
}
function changeName(){
    let newName=cats[poz];
    newName = newName.charAt(0).toUpperCase() + newName.slice(1);//pentru numele cu lit capitala
    document.getElementById("catName").innerHTML = newName;
    changeNameColor(colors[poz]);
}
buttonNxt.addEventListener('click',()=>{
    console.log("button clicked");
    poz=(poz+1)%nrCats;
    changeImage();
    setTimeout(() => {
        changeBackroundColor(colors[poz]);
        changeAchivements(colors[poz]);
        changeNameColor();
        changeName();
    },200);
})
buttonBack.addEventListener('click',()=>{
    console.log("button back clicked");
    poz=(poz-1+nrCats)%nrCats;
    changeImage();
    setTimeout(() => {
        changeBackroundColor(colors[poz]);
        changeAchivements(colors[poz]);
        changeNameColor();
        changeName();
    },200);
})
