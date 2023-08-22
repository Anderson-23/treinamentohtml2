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

  
btn.addEventListener("keypress", function(e){if(e.key === "Enter"){ 
        if(btn.value > 5 || btn.value == ""){
        btn.value = "";
        window.alert("erro")
    }
    else{
        btn2.focus()
    }
}})
btn2.addEventListener("keypress", function(e){if(e.key === "Enter"){ 
    if(btn2.value > 5 || btn2.value == ""){
    btn2.value = "";
    window.alert("erro")
}
else{
    btn3.focus()
}
}})
btn3.addEventListener("keypress", function(e){if(e.key === "Enter"){ 
    if(btn3.value > 5 || btn3.value == ""){
    btn3.value = "";
    window.alert("erro")
}
else{
    btn4.focus()
}
}})
btn4.addEventListener("keypress", function(e){if(e.key === "Enter"){ 
    if(btn4.value > 5 || btn4.value == ""){
    btn4.value = "";
    window.alert("erro")
}
else{
    btn5.focus()
}
}})
btn5.addEventListener("keypress", function(e){if(e.key === "Enter"){ 
    if(btn5.value > 5 || btn5.value == ""){
    btn5.value = "";
    window.alert("erro")
}
else{
    btn6.focus()
}
}})
btn6.addEventListener("keypress", function(e){if(e.key === "Enter"){ 
    if(btn6.value > 5 || btn6.value == ""){
    btn6.value = "";
    window.alert("erro")
}
else{
    btn7.focus()
}
}})
btn7.addEventListener("keypress", function(e){if(e.key === "Enter"){ 
    if(btn7.value > 5 || btn7.value == ""){
    btn7.value = "";
    window.alert("erro")
}
else{
    btn8.focus()
}
}})
btn8.addEventListener("keypress", function(e){if(e.key === "Enter"){ 
    if(btn8.value > 5 || btn8.value == ""){
    btn8.value = "";
    window.alert("erro")
}
else{
    btn9.focus()
}
}})
btn9.addEventListener("keypress", function(e){if(e.key === "Enter"){ 
    if(btn9.value > 5 || btn9.value == ""){
    btn9.value = "";
    window.alert("erro")
}
else{
    btn10.focus()
}
}})
btn10.addEventListener("keypress", function(e){if(e.key === "Enter"){ 
    if(btn10.value > 5 || btn10.value == ""){
    btn10.value = "";
    window.alert("erro")
}
else{
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
}
}})
      
   




