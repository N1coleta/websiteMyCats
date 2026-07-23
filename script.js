const colors=["#e0ce85","#9972d9","#254732","#fdd7f7","#053473","#670e04"];
const cats=["luna","nyx","scortisoara","goody","hunter","misty"];
const textCats=["•smol kitty\n•is a sweety-pie","•is just a baby\n•purrs loudly","•shy\n•wanted war criminal","•FAT","•fast boiii\n•touches grass","•hates everyone(real)\n•can open doors"]
const nrCats=6;
const buttonNxt = document.getElementById("buttonext");
const buttonBack= document.getElementById("buttonback");
let poz=0;//la ce pisica ne aflam

function changeBackroundColor(catInfo,color){
   document.getElementById("catImg").style.setProperty("--shadow-color", color);
}
function changeNameColor(color){
   document.getElementById("catName").style.setProperty("--name-color", color);
}
function changeAchivements(color){
    document.getElementById("achiv").style.setProperty("--achiv-color", color);
}
function changeTextColor(color){
    document.getElementById("catInfo").style.setProperty("--text-color", color);
}
function changeText(){
    let catInfo=document.getElementById("catInfo");
    if(cats[poz]=="goody"){ 
        catInfo.style.setProperty("--fontSize","40px");
    }else{
        catInfo.style.setProperty("--fontSize","25px");
    }
    catInfo.innerHTML =textCats[poz];
    changeTextColor(colors[poz]);
    
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
        changeText();
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
        changeText();
        changeNameColor();
        changeName();
    },200);
})
