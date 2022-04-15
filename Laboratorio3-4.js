//esto es un comentario
function SumaTotal(n){
    let conteo=0;
    let i=0;
if(n>0){
    
    for(i=0; i<=n;i++){
        conteo+=i;
    }
}
return conteo
}
console.log("La suma total del numero brindado es: "+ SumaTotal(5))
