
// FUNCIONES PARA CÁLCULOS

// CUADRADO
function areaCuadrado (lado){
    return lado * lado + " cm2"; // cm2
}

function perimetroCuadrado(lado){
    return 4 * lado + " cm"; //cm
} 

// TRIÁNGULO

function areaTriangulo (base, altura){
    return  (base * altura)/2 + " cm2"; // cm2
}

function perimetroTriangulo(lado1, lado2, lado3){
    var perimetroT = lado1 + lado2 + lado3;
    return perimetroT + " cm" ; //cm
} 

// CÍRCULO

function areaCirculo(radio){
    pi = Math.PI;
    return (radio * radio) * pi + " cm2";
}

function diametroCirculo(radio){
    return 2 * radio;
}

function perimetroCirculo(radio){
    pi = Math.PI;
    return diametroCirculo(radio) * pi + " cm";
}


// INTERACCIÓN CON HTML

// CUADRADO

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const valor = input.value; 
    alert(areaCuadrado(valor));
}

function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const valor = input.value; 
    alert(perimetroCuadrado(valor));
}

// TRIÁNGULO

function calcularAreaTriangulo(){
    const baseTriangulo = document.getElementById("InputBaseTriangulo");
    const valorBase = baseTriangulo.value;
    const alturaTriangulo = document.getElementById("InputAlturaTriangulo");
    const valorAltura = alturaTriangulo.value;

    alert(areaTriangulo(valorBase, valorAltura));
}

function calcularPerimetroTriangulo(){
    const lado1Triangulo = document.getElementById("InputLado1Triangulo");
    const valorLado1 = Number(lado1Triangulo.value);
    console.log(valorLado1);

    const lado2Triangulo = document.getElementById("InputLado2Triangulo");
    const valorLado2 = Number(lado2Triangulo.value);

    const baseTriangulo = document.getElementById("InputBaseTriangulo");
    const valorBase = Number(baseTriangulo.value);

    alert(perimetroTriangulo(valorLado1, valorLado2, valorBase));
}

//CÍRCULO

function calcularAreaCirculo(){
    const input = document.getElementById("InputradioCirculo");
    const valor = input.value; 
    alert(areaCirculo(valor));
}

function calcularPerimetroCirculo(){
    const input = document.getElementById("InputradioCirculo");
    const valor = input.value; 
    alert(perimetroCirculo(valor));
}