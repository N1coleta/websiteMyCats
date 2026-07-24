const colors=["#e0ce85","#9972d9","#4163a6","#fdd7f7","#5db67f","#670e04","#d69b36"];
const cats=["luna","nyx","scortisoara","goody","hunter","misty","rocky"];
const textCats=["•can sleep 25 hours in a day\n•smol kitty","•is just a baby\n•purrs at 80 milion decibals","•shy\n•wanted war criminal","•FAT","•fast boiii\n•touches grass","•hates everyone(real)\n•can open doors ,no one is safe","•100% a cat\n•zero thoughts, head empty"]
const nrCats=7;

const buttonNxt = document.getElementById("buttonext");
const buttonBack= document.getElementById("buttonback");

const noButton = document.getElementById("no-button");
const yesButton=document.getElementById("yes-button");
const title=document.getElementById("title");

const catInfo=document.getElementById("catInfo");
const achiv= document.getElementById("achiv");
const catName=document.getElementById("catName");
const catImg=document.getElementById("catImg");

let poz=0;//la ce pisica ne aflam
//initial nu le afisam 
buttonNxt.style.display ="none";
buttonBack.style.display="none";

catInfo.style.display="none";
achiv.style.display="none";
catName.style.display="none";
catImg.style.display="none";

function changeBackroundColor(color){
    catImg.style.setProperty("--shadow-color", color);
}
function changeNameColor(color){
   catName.style.setProperty("--name-color", color);
}
function changeAchivements(color){
    achiv.style.setProperty("--achiv-color", color);
}
function changeTextColor(color){
    catInfo.style.setProperty("--text-color", color);
}
function changeText(){
    if(cats[poz]=="goody"){ 
        catInfo.style.setProperty("--fontSize","60px");
    }else{
        catInfo.style.setProperty("--fontSize","30px");
    }
    catInfo.innerHTML =textCats[poz];
    changeTextColor(colors[poz]);
    
}
function changeImage() {
    
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
    catName.innerHTML = newName;
    changeNameColor(colors[poz]);
}
function goToNextCat(){
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
}
buttonNxt.addEventListener('click',()=>{
   goToNextCat();
})
function goBackCat(){
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
}
buttonBack.addEventListener('click',()=>{
   goBackCat();
})
//ca daca apesi wasd sa mearga in fata sau spate
document.addEventListener('keypress',function(event){
    if(event.key=='d'||event.key=='D'){
        goBackCat();
    }
    if(event.key=='a'||event.key=='A'){
        goToNextCat();
    }
});
//pentru sageti
document.addEventListener('keydown',function(event){
    if(event.key=="ArrowRight"){
        goToNextCat()   
    }
    if(event.key=="ArrowLeft"){
        goBackCat();
    }
});
/*no and yes buttons */
const OFFSET=200;
noButton.addEventListener('click',()=>{
    alert('Wrong answer');
    window.close();
})
yesButton.addEventListener('click',()=>{
    noButton.style.display= "none";
    yesButton.style.display="none";
    title.style.display="none";
    buttonNxt.style.display ="flex";
    buttonBack.style.display="flex";

    catInfo.style.display="block";
    achiv.style.display="block";
    catName.style.display="block";
    catImg.style.display="block";
})
document.addEventListener('mousemove',(e)=>{
    const x=e.pageX;
    const y=e.pageY;
    const buttonBox=noButton.getBoundingClientRect();
    const horizonalDistanceFrom=distanceFromCenter(buttonBox.x,x,buttonBox.width);
    const verticalDistanceFrom=distanceFromCenter(buttonBox.y,y,buttonBox.height);
    const horizonalOffset=buttonBox.width/2+OFFSET;
    const verticalOffset=buttonBox.height/2+OFFSET;
    if(isClose(horizonalDistanceFrom,horizonalOffset,verticalDistanceFrom,verticalOffset)){
        setButtonPosition(
            buttonBox.x+ horizonalOffset/horizonalDistanceFrom*10,
            buttonBox.y+verticalOffset/verticalDistanceFrom*10
        )
    }
})


function isClose(horizonalDistanceFrom,horizonalOffset,verticalDistanceFrom,verticalOffset){
    return Math.abs(horizonalDistanceFrom)<=horizonalOffset && Math.abs(verticalDistanceFrom)<=verticalOffset
}
function setButtonPosition(left,top){
   const buttonBox = noButton.getBoundingClientRect();

    const minX = 0;
    const minY = 0;
    const maxX = window.innerWidth - buttonBox.width;
    const maxY = window.innerHeight - buttonBox.height;
    if (left < minX) left = maxX - OFFSET;
    else if (left > maxX) left = minX + OFFSET;

    if (top < minY) top = maxY - OFFSET;
    else if (top > maxY) top = minY + OFFSET;
    noButton.style.top=`${top}px`;
    noButton.style.left=`${left}px`
}
function distanceFromCenter(boxPosition,mousePosition,boxSize){
    return boxPosition-mousePosition +boxSize/2;
}
