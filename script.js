const colors=["#e0ce85","#9972d9","#254732","#fdd7f7","#053473","#670e04"];
const cats=["luna","nyx","scortisoara","goody","hunter","misty"];
const textCats=["•can sleep 25 hours in a day\n•smoll kitty","•is just a baby\n•purrs loudly","•shy\n•wanted war criminal","•FAT","•fast boiii\n•touches grass","•hates everyone(real)\n•can open doors"]
const nrCats=6;
const buttonNxt = document.getElementById("buttonext");
const buttonBack= document.getElementById("buttonback");
const noButton = document.getElementById("no-button");
const yesButton=document.getElementById("yes-button");
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
function changeTextColor(color){
    document.getElementById("catInfo").style.setProperty("--text-color", color);
}
function changeText(){
    let catInfo=document.getElementById("catInfo");
    if(cats[poz]=="goody"){ 
        catInfo.style.setProperty("--fontSize","60px");
    }else{
        catInfo.style.setProperty("--fontSize","30px");
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


/*no and yes buttons */
const OFFSET=200;
noButton.addEventListener('click',()=>{
    alert('Raspuns gresit');
    window.close();
})
yesButton.addEventListener('click',()=>{
    noButton.style.display= "none";
    yesButton.style.display="none";
    title.style.display="none";
    catGif.style.display="block";
    title2.style.display="flex";
    catImage.style.display="none";
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