const btn = document.querySelector("#igeral")
const btn3 = document.querySelector("#iespera")
const btn5= document.querySelector("#imed")
const btn7 = document.querySelector("#iexame")
const btn9 = document.querySelector("#iseg")
const btn2 = document.querySelector("#irecepção")
const btn4 = document.querySelector("#ienf")
const btn6 = document.querySelector("#isocial")
const btn8 = document.querySelector("#ilimpeza")
const btn10 = document.querySelector("#iconforto")
const form = document.querySelector("form")





btn.addEventListener("keypress", function(e){if(e.key === "Enter"){btn2.focus()}})
btn2.addEventListener("keypress", function(e){if(e.key === "Enter"){btn3.focus()}})
btn3.addEventListener("keypress", function(e){if(e.key === "Enter"){btn4.focus()}})
btn4.addEventListener("keypress", function(e){if(e.key === "Enter"){btn5.focus()}})
btn5.addEventListener("keypress", function(e){if(e.key === "Enter"){btn6.focus()}})
btn6.addEventListener("keypress", function(e){if(e.key === "Enter"){btn7.focus()}})
btn7.addEventListener("keypress", function(e){if(e.key === "Enter"){btn8.focus()}})
btn8.addEventListener("keypress", function(e){if(e.key === "Enter"){btn9.focus()}})
btn9.addEventListener("keypress", function(e){if(e.key === "Enter"){btn10.focus()}})
btn10.addEventListener("keypress", function(e){
    if(e.key === "Enter"){
        var r=confirm("salvar?")
        if(r == true){

            btn.value = "";
            btn2.value = "";
            btn3.value = "";
            btn4.value = "";
            btn5.value = "";
            btn6.value = "";
            btn7.value = "";
            btn8.value = "";
            btn9.value = "";
            btn10.value = "";

            window.alert("dados salvos")
            btn.focus();
            
            
            }
            else{
            
            alert("voltar")
            
            }
    }})

