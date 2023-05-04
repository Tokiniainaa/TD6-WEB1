const formulaire = document.getElementById("formulaire");
const button = document.getElementById("button");
const nom = document.getElementById("nom");
const prenom = document.getElementById("prenom");
const cancel = document.getElementById("cancel");
const email = document.getElementById("Email");
button.onclick = function () {
    formulaire.style.opacity = ("1");
    button.style.opacity = ("0.1");


}

cancel.onclick = function () {
    let valeur2 = prenom.value
    let valeur = nom.value;
    let valeur3 = email.value;
    if ((valeur == '') || (valeur2 == '') || (valeur3 == '')) {
        alert("Fill it Please")
    }
    else {
        formulaire.style.opacity = ("0.5");
        button.style.opacity = ("1")
        setTimeout(() => {
            alert("Welcome " + valeur + " " + valeur2)
        }, 1);
    }


}



