//Esto es un comentario para editar en el branch creado ya que me da problema el git add
function CalculaBisiesto(year){
if (year % 400 === 0)
return "el año es bisiesto";
else if (year % 100 != 0)
return   "el año no es bisiesto";
else if ( year % 4 === 0)
return  "el año es bisiesto";

}
console.log(CalculaBisiesto(2005))
