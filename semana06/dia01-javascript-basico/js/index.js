console.log('Hello World from index.js!')

//Esto es un copmentario

/* Esto 
es
un
comentario
de
multiples
lineas
*/
// TIPOS DE DATOS
// PRIMITIVOS: Number, String, Boolean (true, false), undefined


// NUMBER
 const numero1=20
 const numero2=20.50
 const numero3=-36

 console.log(numero1)
 console.log(numero2)
 console.log(numero3)

 console.log(typeof numero1)
 console.log(typeof numero2)
 console.log(typeof numero3)

 //String o cadena de texto
 const alumna='Claudia'
 const alumno="Marco"
 const numero4= "200"
 const numero5= 200

 console.log(typeof alumna)
 console.log(typeof alumno)
 console.log(typeof numero4)
 console.log(typeof numero5)

 //BOOLEAN --> false o true

 const tieneDescuento=true

 console.log(tieneDescuento)
 console.log(typeof tieneDescuento)

 //UNDEFINED
 let nombre

 console.log(nombre)
 console.log(typeof nombre)

 //NULL -- Es un object
 let apellido= null
 console.log(apellido)
 console.log(typeof apellido)

 //Object
 //Function
 //BigInt
 //Symbol

 //VARIABLES Y CONSTANTES

 //ECMASCRIPT 5 == es5
 //ECMASCRIPT 6 == ES6

 // VAR --> ES5 (Forma de declarar una variable)
 var nombreDeMiVariable ='un valor'

 //CONST--> ES6 (El uso de const y let es lo recomendado)
 //*No podemos reasignar su valor
 const edad= 55
 const _edad= 25
 const edadDeMiHijo= 15

 // edad= 33 // Uncaught TypeError: Assignment to constant variable.
 console.log(edad)

 //LET -->ES6 (El uso de let es lo recomendado)

 //*Si podemos reasignar su valor
 let edad2= 35
 edad2= 36
 edad2= 22
console.log(edad2)

edad2="hola"
console.log(typeof edad2)

//OPERADORES MATEMÁTICOS

console.log(1+2)
console.log(3-2)
console.log(2*2)
console.log(1/2)
console.log(1%2) //Residuo
console.log(2**3) //dos elevado al cubo

//OPERADOR DE ASIGNACION

const genero='femenino'
console.log(genero + '*')

//OPERADORES DE COMPARACION
//Operador de igualdad y desigualdad no estricta
//Devuelven un valor booleano (true o false)
//Este operador no toma en cuenta el tipo de datos al comparar sina solo sus valores

console.log (1==1) //false
console.log(1=='1') //true
console.log(1!=1) //false

// Operador de igualdad y desigualdad estricta (ES RECOMENDABLE USARLO CASI SIEMPRE)
//Devuekve yun valor boolenao (true o false)
// Este operador si toma en cuenta el tipo de dato y sus valores al comparar

console.log( 1===1) //true
console.log(1==='1') //false
console.log(1 !== 1) //false

//OTROS OPERADORES
console.log(8>5)
console.log(5<1)
console.log(8>=5)
console.log(8<=5)

// Operadores logicos (AND, OR, NEGACION)
console.log( true && false) //AND
console.log (true||false) //OR
console.log(!true)//NEGACION

//OPerador de cadena (concatenacion)

const saludo= 'Hola, '
const nombreCompleto= 'Victor'+ ' '+ 'Villazon'
const miEdad= 37
const saludoAmigo= saludo + nombreCompleto + '.Tengo ' + miEdad + ' años'

console.log(nombreCompleto)
console.log(saludoAmigo)

//EJERCICIOS
//1. Retorna true si dos strings tienen la misma longitud sin odevolver false
const cadena1= 'codigo'
const cadena2= 'cadaga'

console.log(cadena1.length)
console.log(cadena2.length)

console.log(cadena1.length===cadena2.length)

//2. Retornar true si un numero es menor que 40 sino devolver false

const numero111 = 34
console.log(numero111<40) //true

//3. Retornar True si un numero es menor que 60 sino devolver false
const numero222=34
console.log(numero222<60)


//4  Retornar True si un numero es par sino devolver False
const numero333=5
const numero444=6
console.log( numero333%2 ===0) //false
console.log(numero444%2===0) //true

//5 Retornar True si un numero es impar sino devolver False
const numero555=5
const numero666=6
console.log(numero555%2!==0) //true
console.log(numero666%2!=0)//false


//6. Calcular el area de un triangulo y mostrar su resultado si tenemos los calores base y altura
const base=10
const altura=5
const area= (base*altura)/2
console.log(area) //25


//7. (TODO) Almacenar en una constante un numero de 3 cifras y mostrar la suma de sus cifras elevada al cubo
const numero777= 567
const cifra1=numero777/100|0
const cifra2=numero777%100/10|0
const cifra3=numero777%10|0
const suma3cifras=(cifra1 + cifra2 + cifra3)**3

console.log(cifra1)
console.log(cifra2)
console.log(cifra3)
console.log(suma3cifras)


//8. (TODO) Almacenar en una constante un monto de dinero, luego mostrar cuanto le toca a cada socio segun la siguiente tabla:
// SOCIO A =30%, SOCIO B = 20%, SOCIO C = 60%
const montoDeDinero = 1000
const socioA = 0.30
const socioB = 0.20
const socioC = 0.60
console.log(montoDeDinero * socioA)
console.log(montoDeDinero * socioB)
console.log( montoDeDinero * socioC)

//CONDICIONALES

if(true){
    //verdadero
}

const numero=35
const esPar= numero%2===0
if(esPar){
    console.log('Este numero es par')
}

//CONDICIONALES (IF ELSE)

if(true){
    //verdadero
}
else{
    //Falso
}

if (esPar){
    console.log('Este numero es par')
}else{
    console.log('Este numero es impar')
}

//CONDICIONALES (IF ELSE IF, ELSE)

if(true){
    //Verdadero
}else{}

const heroe='Spiderman'

if (heroe=== 'Batman'){
    console.log("Hola soy Bruce")
}else if(heroe==='Spiderman'){
    console.log("Hola soy Peter")
}else if (heroe==='Ironman'){
    console.log("Hola soy Tony")
}
else{
    console.log("No soy un heroe aun")
}




// EJERCICIOS
  
// 1. Determinar si la edad de una persona es mayor de edad o menor de edad mostrando 'Mayor de edad' o 'Menor de edad'

let edad10 = 20

if (edad10 >= 18) { 
    console.log(edad10 && 'Es mayor de edad...')
} else {
    console.log(edad10 && 'Es menor de edad...')
}

// 2. Retornar un saludo en tres diferentes lenguajes:
//    - si es español mostrará 'Hola'
//    - si es inglés mostrará 'Hello'
//    - si es aimara mostrará 'kamisaraki'

let idioma =  'ai'
switch (idioma) {
    case 'es' :
        console.log('Hola')
        break
    case 'in' :
        console.log('Hello')
        break
    case 'ai' : 
        console.log('kamisaraki')
        break
    default:
        console.log('No te entiendo...')
}
// 3. Si un numero es divisible entre 3 y 5 devolver 'fizzbuzz'
//    Si un numero es divisible entre 3 devolver 'fizz'
//    Si un numero es divisible entre 5 devolver 'buzz'
//    De lo contrario devolver el mismo número

let numeroDivisible = 7

if (numeroDivisible % 15 === 0) {    // === devuelve un resultado boolean (true o false)
    console.log('fizzbuzz')
} else if (numeroDivisible % 3 === 0) {
    console.log('fizz')
} else if (numeroDivisible % 5 === 0) { 
    console.log('buzz')
} else {
    console.log(numeroDivisible)
}

// 3. Si un numero es divisible entre 3 y 5 devolver 'fizzbuzz'
//    Si un numero es divisible entre 3 devolver 'fizz'
//    Si un numero es divisible entre 5 devolver 'buzz'
//    De lo contrario devolver el mismo número

let div = prompt("ingrese numero: ");
if((div % 3)==0 && (div % 5)==0 ){
    console.log("Divisible entre 3 y 5: fizzbuzz");
}else if((div % 3)==0){
    console.log("Divisible entre 3: fizz");
}else if((div % 5)==0){
    console.log("Divisible entre 5: buzz");
}

// 4. REtornar true si un numero es primo sino devolver false
//    Pista: un numero primo es divisible por sí mismo y por 1
const number11 = 5
if(number11 % number11 ===0 && number11 % 1 ===0){
    console.log("Número primo")
}else{
    console.log("No es número primo")
}

// Devolver un valor que se incremente de dos en dos y devuelva los menores a 10



//FUNCIONES
//Definiendo una funcion
function nombreDelaFuncion(){
    //Cuerpo de la funcion y aqui va la logica a ejecutar
}
nombreDelaFuncion()

//Funciones sin parametros
function imprimiMiNombre(){
console.log('Hola soy Claudia')
console.log('Y soy Frontend')

}
//imprimirMiNombre()
//Funciones con parametros

function imprimirUnNombre(nombre){
    console.log('Hola soy ' + nombre)
}

imprimirUnNombre('Claudia')

function imprimirNombreYApellido(nombre, apellido){
    //console.log('Hola soy' + nombre +' ' + apellido + 'y tengo' + edad + 'años.')
    console.log('Hola soy ($nombre) ($apellido) y tengo ($edad) años.')
}
 imprimirNombreYApellido('Victor', 'Villazon', 37)