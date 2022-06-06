function calculoPromPond(materias){
    var numerador = 0;
    var denominador = 0;
    for (var mat of materias) {
        numerador += mat[0] * mat[1];
        denominador += mat[0];
    };

var promedioPonderado = numerador / denominador;

return promedioPonderado;

};



