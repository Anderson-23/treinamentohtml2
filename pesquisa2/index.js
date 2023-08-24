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



}


console.log("clicou",isleft);

})

} )



















// rodar.addEventListener("click", function(){

//     idx++;
 
// if(idx > containerb.length - 1){

//     idx=0;

// }

// container2.style.transform = "rotateY(25deg)";

// })

