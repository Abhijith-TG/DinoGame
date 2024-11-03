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


const start = document.getElementById("start");



start.onclick=()=>{
    if(enemy.className === 'enemy')
    {
        enemy.classList.remove('enemy');
        start.value="start"

        player.focus();  

    }else{
        enemy.classList.add('enemy');
        start.value="stop"
        player.focus();  


    }
}

document.onclick=()=>{
    player.focus();
}



