
function calculaModa(list1){

    const lista1Count = {};

    
// DE LA SIGUIENTE MANERA, LLENAMOS EL ELEMENTO lista1Count, donde cada número de la lista lis1 es un atributo y la cantidad de veces
// que aparece en list1 es su valor correspondiente
list1.map(
    function(elemento){
        if (lista1Count[elemento]){
            lista1Count[elemento] += 1;
        }
        else{
            lista1Count[elemento] = 1;
        }

    }
);

// AHORA CREAMOS UNA LISTA CUYOS ALEMENTOS SEAN LISTAS DE DOS ELEMENTOS DONDE EL PRIMER ELEMENTO ES EL NUMERO Y EL SEGUNDO, LA CANTIDAD 
// DE VECES QUE APARECE

const lista1array = Object.entries(lista1Count).sort(
    function (elementoA, elementoB){
        return elementoA[1] - elementoB[1];
    }
);

const moda = lista1array[lista1array.length -1];

return moda

}

