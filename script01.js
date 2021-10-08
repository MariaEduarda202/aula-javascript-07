//1)Para a string texto = "Todos pensam em mudar a humanidade e ninguém pensa em mudar a si mesmo.", exibir no console:
//a)O número de caracteres da string. 
var texto = "Todos pensam em mudar a humanidade e ninguém pensa em mudar a si mesmo."

console.log(texto.length);
//b)A string com todas suas letras em maiúsculo. 
console.log (texto.toUpperCase())
//c)O número de vogais da string. 
console.log (texto.search("a","e","i", "o", "u"))
//d)A string com todas suas letras em minúsculo. 
console.log(texto.toLowerCase())
//e)Fazer a busca pela palavra humanidade e exibir o index onde ela está.
console.log(texto.indexOf("humanidade"))
//2) Percorrer os números pares menores que 100. 
var lista = []
 for (let n= 1; n < 100; n++){
     if ( n % 2 ==0 ){
         lista.push(n)
     }

 }
 console.log (lista.toString())