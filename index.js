const formulaire = document.getElementById("formulaire");
const button =document.getElementById("button");
const nom =document.getElementById("nom");
const prenom =document.getElementById("prenom");
const cancel =document.getElementById("cancel");
button.onclick=function(){
    formulaire.style.opacity=("1");
    button.style.opacity=("0.5");
    

}

cancel.onclick=function(){
    let valeur2=prenom.value
let valeur =nom.value;
formulaire.style.opacity=("0.5");
button.style.opacity=("1")
setTimeout (()=>{
    alert(valeur +" "+valeur2)
},1);
}



