//Se tiene una cadena de caracteres. Se pide diseñar la función que 
//devuelva la cadena sin consonantes(devuelve solo las vocales)
//Ejemplo: "Hola Esmeraldas"
//Resultado esperado: "oa Eeaa"
//Utilice filter


const vocales = "Hola Esmeraldas"
const eliminarconsonantes = function(vocales) 
{
    const vowels = "aeiouAEIOU";
    return vocales.split("").filter(char => vowels.indexOf(char) !== -1).join("");
}
console.log('\n     Ejerccio # 1        ');
console.log("Solo las vocales de esta cadena de caracteres -------> ", vocales);
console.log("Quedaria así ----> ",eliminarconsonantes(vocales));

console.log("");

//Determine si todos lo elementos de la sigueinte matriz son positivos
const matrizNumeros = [[1,2,3,4], [4,5,6,7],[8,9,10]];
const isPositive = element => element !== 0;
const PositivosSioNo = matrizNumeros.reduce(isPositive);
console.log('\n     Ejerccio # 2        ');
console.log("El siguiente array de números: ", matrizNumeros);
console.log("Nos indica que son : ", PositivosSioNo);   // true */
console.log("");