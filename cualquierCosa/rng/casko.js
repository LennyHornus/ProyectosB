// Funcion factorial --------------------------------------------------------------------------------------------------------------------

function factorial (n) {
    let total = 1;              // Como el factorial de 0 es 1 no pasa nada si entra un 1 cuando la corremos
	for (i=1; i<=n; i++) {
		total *= i; 
	}
	return total; 
}

// console.log(factorial(5));
// console.log(factorial(10));
// console.log(factorial(110));


// Funcion productoria -------------------------------------------------------------------------------------------------------------------

const arrayEjemplo = [1, 4, 7];

function productoria(array) {
    let total = 1;              // Lo arranco en 1 porque siempre voy a estar multiplicando al primer elemento del array
    for (let i = 0; i < array.length; i++) {
        const numero = array[i];
        total *= numero
    }
    return total
}

// console.log(productoria(arrayEjemplo));


// Funcion arbol utopico ------------------------------------------------------------------------------------------------------------------

function alturaArbolUtopico(ciclos) {
    let resultado = 1;          // Lo arranco en 1 porque la consigna me dice que empiezan de 1 metro
    for (let i = 0; i < ciclos; i++) {
        if (i % 2 == 0) {             // tomo i para recorrer cada mes lo que tendria que pasar sobre el arbol, y ejecuto el for la cantidad de veces como ciclos ingresen
            resultado++;              // Si el mes es par significa que es primavera y crecio un metro
        }
        else{
            resultado *= 2;           // Si es impar significa que es verano y se duplico su tamaño
        }
    }
    return resultado
}

// console.log(alturaArbolUtopico(3));
// console.log(alturaArbolUtopico(4));
// console.log(alturaArbolUtopico(5));


// Funcion Mas | Menos ------------------------------------------------------------------------------------------------------------------

function masMenos(array){
    let positivos = 0;          // Declaro las variables y las inicio en 0 para
    let ceros = 0;              // cada tipo de numero con el que voy a trabajar
    let negativos = 0;

    for (let i=0; i < array.length; i++){       // hago un for para la cantidad de numeros en el array que entra, usando el .length
        if (array[i] > 0) { positivos +=1 };
        if (array[i] < 0) { negativos+=1 };
        if (array[i] == 0) { ceros +=1 };
    }

    const total = positivos + negativos + ceros;   // Saco el total de numeros que tengo, sumando cada tipo de numero
    const porcentaje = [ positivos/total ,  ceros/total , negativos/total ];  // creo el array a retornar, con las 3 posiciones que necesito siendo el tipo de 
    return porcentaje;                                                          // numero sobre el total de numeros que ingresaron
}
   
// console.log("La función masMenos([1, 2, 0, -1]) debe retornar [0.5, 0.25, 0.25] y devuelve "+masMenos([1,2,0,-1]));
// console.log("La función masMenos([0,0,0,0]) debe retornar [0,1,0] y devuelve " + masMenos([0,0,0,0]));
// console.log("La función masMenos([1,0]) debe retornar [0.5,0.5,0] y devuelve "+masMenos([1,0]));