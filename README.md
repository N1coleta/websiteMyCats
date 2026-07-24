hello! I made a website for my cats :)
Link to website : https://website-my-cats-waat.vercel.app/
##Tutorial in case someone wants to replace the images, colours, and description
1. Pick out your desired square images and colours for the shadow background
2. Download, extract the repo and open it in Visual Studio Code (or preferred text editor) 
3. Rename your images to 'name.jpg' (the name will be displayed at the top, so be careful what you choose). Now, move your images to :
```
yourpath/websiteMyCats/images
```
4. In ```script.js``` replace 
```
const colors=["#e0ce85","#9972d9","#4163a6","#fdd7f7","#5db67f","#670e04","#d69b36"];
const cats=["luna","nyx","scortisoara","goody","hunter","misty","rocky"];
const textCats=["•can sleep 25 hours in a day\n•smol kitty","•is just a baby\n•purrs at 80 milion decibals","•shy\n•wanted war criminal","•FAT","•fast boiii\n•touches grass","•hates everyone(real)\n•can open doors ,no one is safe","•100% a cat\n•zero thoughts, head empty"]
const nrCats=7;
```
with desired colours, the names of the cats (which must correspond with the images) and descriptions. You must choose the same number of colours, objects, and descriptions
After that, change "nrCats" to the number of objects u have selected

$${\color{red}Warning}$$: When you copy the website, it will only be locally available. I used https://vercel.com to put my project "on the web" 
