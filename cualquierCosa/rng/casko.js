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
function alturaArbolUtopico(estaciones) {
    let resultado = 1;
        for (let i = 1; i <= estaciones; i++) {
            if (i % 2 === 0) {           
                resultado += 1;          
            }
            else{
                resultado = resultado * 2;  
            }
        }
    return resultado
}



// Funcion Mas | Menos ------------------------------------------------------------------------------------------------------------------
function masMenos(array){
    let positivos = 0;          // Declaro las variables y las inicio en 0 para
    let ceros = 0;              // cada tipo de numero con el que voy a trabajar
    let negativos = 0;

    for (let i=0; i < array.length; i++){       // hago un for para la cantidad de numeros en el array que entra, usando el .length
        const numero = array[i];
        if (numero > 0) { positivos +=1 };
        if (numero < 0) { negativos +=1 };
        if (numero == 0) { ceros +=1 };
    }

    const total = positivos + negativos + ceros;   // Saco el total de numeros que tengo, sumando cada tipo de numero
    const porcentaje = [ positivos/total ,  ceros/total , negativos/total ];  // creo el array a retornar, con las 3 posiciones que necesito siendo el tipo de 
    return porcentaje;                                                          // numero sobre el total de numeros que ingresaron
}
   
// console.log("La función masMenos([1, 2, 0, -1]) debe retornar [0.5, 0.25, 0.25] y devuelve "+masMenos([1,2,0,-1]));
// console.log("La función masMenos([0,0,0,0]) debe retornar [0,1,0] y devuelve " + masMenos([0,0,0,0]));
// console.log("La función masMenos([1,0]) debe retornar [0.5,0.5,0] y devuelve "+masMenos([1,0]));


// Funcion asientos disponibles -----------------------------------------------------------------------------------------------------------------------------
function asientosDisponibles(arrayAsientos, numeroAsiento) {
    let disponible = false;
    for (let i = 0; i < arrayAsientos.length; i++) {
        const asiento = arrayAsientos[i];
        if (asiento === numeroAsiento) {
            disponible = true;
        }
    }

    if (disponible) {
        return "Felicitaciones, el asiento número "+ numeroAsiento +" está disponible";
    }
    else {
        return "Lo sentimos, el asiento número "+ numeroAsiento +" está ocupado, pero aún quedan "+ arrayAsientos.length +" asientos disponibles";
    }
}

function asientosDisponibles(asiento,asientoVenta){

    if(asiento.indexOf(asientoVenta) == -1){
        return "Lo sentimos, el asiento número "+ asientoVenta +" está ocupado, pero aún quedan "+asiento.length+" asientos disponibles"
    }
    else{
        return "Felicitaciones, el asiento número "+asientoVenta+" está disponible"
    }

}

// asientosDisponibles([6,7, 96, 123], 91231236)   

// Control de pasajeros --------------------------------------------------------------------------------------------------------------------------------------------------
function reporteDePasajeros(totalEstaciones) {
    let pasajeros = 180;
    let resultado = [];
    for (let i = 0; i <= totalEstaciones; i++) {
        const estacion = i;
        if (estacion === 5) {
            pasajeros = pasajeros + 40;
            resultado.push("En la estacion " + estacion + " hay " + pasajeros + " pasajeros arriba del tren");
        }
        else {
            pasajeros = pasajeros + 20;
            resultado.push("En la estacion " + estacion + " hay " + pasajeros + " pasajeros arriba del tren");

        }
    }
    return resultado;
}

// console.log(reporteDePasajeros(0));
// console.log(reporteDePasajeros(3));
// console.log(reporteDePasajeros(5));


// Funcion sumatoria Bajo Importe -------------------------------------------------------------------------------------------------------------------------------

function sumatoriaBajoImporte(arrayImportes) {
    let total = 0;
    for (let i = 0; i < arrayImportes.length; i++) {
        const importe = arrayImportes[i];
        if (importe <= 1000 && importe > 0) {
            total = total + importe;   
        }
    }
    return total;
}

const arraySumatoria = [300, 0, -250, -100, 0, 400, 600, 1200, 5000, 0, 1000, 1000]
// console.log(sumatoriaBajoImporte(arraySumatoria));

// const logealo = arraySumatoria.filter(importe => importe <= 1000 && importe > 0).reduce((acum, importe)=>acum += importe);
// console.log(logealo);