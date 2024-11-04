const player = document.getElementById("player");
const enemy = document.getElementById("enemy");
const marks = document.getElementById("marks");
let mark = 0;
const cloud = document.getElementById('cloud')



player.addEventListener('keypress',(e)=>{
   if(e.key==" "){
    if(player.className!=="animate"){
        player.classList.add("animate");
        mark++;
        marks.innerHTML=mark;
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
        cloud.classList.remove('cloud');

        start.value="start"

        player.focus();  

    }else{
        enemy.classList.add('enemy');
        cloud.classList.add('cloud');

        start.value="stop"
        player.focus();  


    }
}

document.onclick=()=>{
    player.focus();
}

const checkDead = setInterval(()=>{
    let characterTop = parseInt(window.getComputedStyle(player).getPropertyValue("top"));
    let enemyLeft = parseInt(window.getComputedStyle(enemy).getPropertyValue("left"));
    
    if(enemyLeft<20 && enemyLeft>0 && characterTop>=120){
        console.log(characterTop,enemyLeft);
        alert("Game Over \n marks = "+mark+ "\n Reload to play again");
        
    }
},10); 




