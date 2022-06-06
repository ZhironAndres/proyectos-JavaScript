let colors = ["blue", "green", "yellow", "red","purple", "orange", "black", "white"];
const btn= document.getElementById("boton");
const colorName= document.getElementById("colorName");
const title = document.getElementById("title");
btn.addEventListener("click", changeBackgroundColor)

function changeBackgroundColor(e){
    e.preventDefault();
    let color= pickColor(colors);
    colorName.textContent = color;
    if(color==="black"){
         title.style.color = "white";
        colorName.style.color = "white";
        
    }
    else{
        title.style.color = "black";
        colorName.style.color = "black"; 
    }
    return document.body.style.backgroundColor=color;
}


function pickColor(colors){
    let x= Math.random()
    x*=colors.length;
    x=Math.floor(x)
    return colors[x]
}

