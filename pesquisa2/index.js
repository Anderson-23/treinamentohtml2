const rodarr = document.querySelectorAll(".rodar")
const container = document.querySelector(".container")
const container2 = document.getElementById("container")



const containerb = document.querySelectorAll(".containerb")
let currentItem = 0;
const maxItem = containerb.length

rodarr.forEach(rodarr =>{

rodarr.addEventListener('click',()=>{
const isleft = rodarr.classList.contains("esquerda");


if(isleft){

currentItem -= 1;

}else{

currentItem += 1;

}

if(currentItem >= maxItem)
{
currentItem = 0;

}
if(currentItem < 0 )
{
currentItem = maxItem - 1;

}

container2.style.transform = $currentitem + "rotationY(25deg)"




})

} )



















// rodar.addEventListener("click", function(){

//     idx++;
 
// if(idx > containerb.length - 1){

//     idx=0;

// }

// container2.style.transform = "rotateY(25deg)";

// })

