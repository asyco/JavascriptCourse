
//Helpers ó Utils

// Creamos una función para saber si la lista de salarios es par o inpar ( para calcular la mediana)

function esPar(lista){
    const tamañoLista = lista.length;
    if (tamañoLista % 2 == 0){
        var respuesta = true;
    }
    else{
        var respuesta = false;
    }
    return respuesta;
};


function calcularMediaAritmetica(lista){
    var suma = 0;
    for (var sal of lista){
        suma += sal;
    }
    var promedio = suma / lista.length;
    return promedio;

};

// Creamos un array que contenga unicamente los salarios.
const salariosCol = colombia.map(
    function(persona){
        return persona.salary;
    }
);

// Ordenamos el array de salarios

const salariosColSorted = salariosCol.sort(
    function(salaryA, salaryB){
        return salaryA - salaryB;
    }
);


// Creamos una función que calcule la mediana de la lista de salarios

function medianaSalarios(lista){
    if (esPar(lista)){
        var mediana1 = lista[ (lista.length / 2 ) - 1  ];
        var mediana2 = lista[ (lista.length / 2 ) ];
        var mediana = calcularMediaAritmetica([mediana1, mediana2]);
    }
    else{
        var mediana = lista[ ((lista.length + 1 ) / 2) - 1];
    }
    return mediana
};

// Mediana del Top 10%
var inicioCorte = 0.9 * salariosColSorted.length;
var numPosiciones = salariosColSorted.length - inicioCorte;

const salariosColTop10 = salariosColSorted.splice(inicioCorte, numPosiciones);

const medianaGeneral = medianaSalarios(salariosColSorted);
const medianaTop10 = medianaSalarios(salariosColTop10);
console.log(
    medianaGeneral,
    medianaTop10
);
