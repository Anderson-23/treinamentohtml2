const rodarr = document.querySelectorAll(".rodar")
const container = document.querySelector(".container")
const container2 = document.getElementById("container")
const containerb = document.querySelectorAll(".containerb")

let idx = 0;


rodarr.forEach(rodarr =>{

rodarr.addEventListener('click',()=>{
const isleft = rodarr.classList.contains("esquerda");


if(isleft){

    idx = idx + 60;

    container2.style.transform = 'rotateY('+idx+'deg)';

}else{

    idx = idx - 60;

    container2.style.transform = 'rotateY('+idx+'deg)';

}

})

} )