//esto es un comentarios 
function Palindromo (t){
const rvers = t.split("").reverse().join("");
if (t<0){
return "no es palindromo porque es menor que cero"
}else if (t>0 && t < 10){
return "Es palindromo de base 10" 
}else if (t>=10){  
    if (rvers===t)
    return "Es palindromo de doble base"
    else 
    return "no es palindromo"
}

}

console.log(Palindromo("22"))
