//Esto es un comentario
function ContarCarater(frase){
if (typeof frase != 'string'){
    throw TypeError("el argumento no  es valido, debe introducir una cadena");
}

let conteo={};

frase.replace(/\S/g, function(p){
    conteo[p]=(isNaN(conteo[p]) ? 1 : conteo[p]+1);
} );
return conteo;
}

console.log (ContarCarater("DESARROLLO XI"));
