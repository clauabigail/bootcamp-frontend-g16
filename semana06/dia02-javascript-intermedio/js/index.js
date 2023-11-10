console.log('Hola JS')

//Arrays

const numero = 399
const cadena = 'Victor'
const esMayor = 39

//Un arreglo tiene elementos a cualquier tipo de datos: cadena, numero, boolean, undefined, null, arrays, objects, ect.

const listaDeValores = [1,2, 3, 'Victor', 'Villazon', true]

console.log(listaDeValores)

//La lectura de los elementos de un arreglo
console.log(listaDeValores[0]) //1
console.log(listaDeValores[4]) //Villazon
console.log(listaDeValores[5]) //true
console.log(listaDeValores[100]) //Undefined

//Escritura en un arreglo

listaDeValores[2] = 99
console.log(listaDeValores)

//Insertar nuevos elementos en un arreglo

listaDeValores.push('javascript')
console.log(listaDeValores)

//remover los elemntos de un arreglo

listaDeValores.pop()

console.log(listaDeValores)

//Eliminar un elemento
// const listaDeValores = [1,2, 3, 'Victor', 'Villazon', true]
listaDeValores.splice(4,1) //indice de array, cuantos elementos a partir de la posicion dada vamos a eliminar
console.log('splice', listaDeValores)

//Obtener el tamaño de nuestro arreglo

console.log('bienvenido'.length)
console.log(listaDeValores.length)

//METODOS DE ARREGLOS

//Metodo includes, nos indica si el valor que se pasa como parametro se encuentra en el arreglo y devuelve un booleano

const numeros= [1, 2, 3, 4, 5]

console.log(numeros.includes(3)) //true
console.log(numeros.includes(99)) //false

//Metodo FILTER, nos ayuda a ubicar un elemento dentro de un arreglo

const languages = ['javascript', 'php', 'python', 'c', 'c++', 'java']
console.log(
    languages.filter(function(language)
        {
            //return language==='python' ['python', 'python']
            return language.includes('c')// ['javascript', 'c', 'c++']
            return language.toLowerCase.includes('c')//
        }

    )
    
    )

//OBJETOS
//{KEY:VALUE}

const miObjeto = {
    nombre:'Victor',
    apellido:'Villazon',
    colorFavorito:'azul',
    'mi edad': 37,
    coloresFavoritos:['rosado', 'rojo', 'azul'],
    cursos:[
        {
            nombre:'Matematica',
            nota: 18
        },
        {
            nombre: 'Algoritmos',
            nota:20
        }
    ]
}

console.log(miObjeto)

//LEER LOS CAMPOS DE UN OBJETO

console.log(miObjeto.nombre) //Victor
console.log(miObjeto.apellido) //Villazon
console.log(miObjeto.edad) //undefined
//console.log(miObjeto.miedad)//BAD

console.log(miObjeto['mi edad']) //OK

console.log(miObjeto.coloresFavoritos)
console.log(miObjeto.coloresFavoritos[2])
console.log(miObjeto.cursos[1])
console.log(miObjeto.cursos[1].nombre)
console.log(miObjeto.cursos[1]['nota']) // tambien es valido el uso de corchetes para obtener el valor de nota

//ELIMINAR PROPIEDADES DE UN OBJETO
console.log(miObjeto)
delete miObjeto.colorFavorito
console.log(miObjeto)

//INSERTAR UNA NUEVA PROPIEDAD A UN OBJETO
miObjeto.platoFavorito = 'Ceviche de conchas negras'
miObjeto['juegos favoritos']= ['Crash Team Racing'], 'Mario', 'Minecraft'
console.log(miObjeto)

//DESTRUCTURING
//Una forma de extraer las propiedades/elementos de un objeto o un arreglo en variable
//DESTRUCTURING PARA OBJETOS
const nombreValue= miObjeto.nombre
console.log(nombreValue)
const {nombre, apellido} = miObjeto
console.log(nombre,apellido)
const {nombre:nombreValor, apellido:apellidoValor} = miObjeto
console.log(nombreValor, apellidoValor)

//DESTRUCTURING PARA ARREGLOS

const amigos= ['angel', 'carlos', 'claudia', 'franklin', 'samael']
const [amigo1,amigo2]= amigos

console.log(amigo1)
console.log(amigo2)

//SPREAD OPERATOR

const producto = {
    nombre:'Laptop',
    precio: 6800,
    categoria:'Tech'

}

const cliente={
    nombre: 'Claudia',
    isVip: true
}

console.log(producto + cliente) //[object Object] [object Object] BAD

const nuevoObjeto = {...producto, ...cliente}
console.log(nuevoObjeto)

//SPREAD OPERATOR SIN COLICIONES

const nuevoObjetoSinColisiones = {
    producto: {...producto},
    cliente: {...cliente},
}

console.log(nuevoObjetoSinColisiones)

//OTROS METODOS DE OBJETOS

console.log(Object.keys(producto)) // Obtenemos solo las clave(keys) del objeto
console.log(Object.values(producto)) //Obtenemos solo los valores del producto
console.log(Object.entries(producto)) //Convertimos un objeto en arreglo

/*
Considera una lista/array de ovejas. Cada oveja tiene un nombre y un color. Haz una función que devuelva una lista con todas las ovejas que sean de color rojo y que además su nombre contenga tanto las letras n Y a, sin importar el orden, las mayúsculas o espacios.
*/

const ovejas = [
    { name: 'Noa', color: 'azul' },
    { name: 'Euge', color: 'rojo' },
    { name: 'Navidad', color: 'rojo' },
    { name: 'Ki Na Ma', color: 'rojo'},
    { name: 'AAAAAaaaaa', color: 'rojo' },
    { name: 'Nnnnnnnn', color: 'rojo'}
  ]
  
  export default function contarOvejas(ovejas) {
    return ovejas.filter(function(oveja) {
      const nameLowered = oveja.name.toLowerCase()
      
      const isRedColor = oveja.color === 'rojo'
      const hasLetterN = nameLowered.includes('n')
      const hasLetterA = nameLowered.includes('a')
      
      return isRedColor && hasLetterN && hasLetterA
    })
  }
  
  const ovejasFiltradas = contarOvejas(ovejas)
  
  console.log(ovejasFiltradas)
