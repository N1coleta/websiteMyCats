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
//special case so that it shows up ok
mobileCheck = function() {
  let check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
};
if(mobileCheck()){
    document.querySelector("#title h1").innerHTML = "Do you want to meet<br>my cats?:3";
}