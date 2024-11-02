const player = document.getElementById("player");
const enemy = document.getElementById("enemy");


player.addEventListener('keypress',(e)=>{
   if(e.key==" "){
    if(player.className!=="animate"){
        player.classList.add("animate");
    }
    setTimeout(()=>{
        player.classList.remove("animate");
    },500)
    
   }
})

player.focus;  




