function precioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioNuevo = (precio * porcentajePrecioConDescuento) / 100;
    return precioNuevo;
}

function calcularPrecioFinal(){
    const inputPrecio = document.getElementById("Inputprecio");
    const precioValor = inputPrecio.value;

    const inputDescuento= document.getElementById("Inputdescuento");
    const descuentoValor = inputDescuento.value;

    const precioFinal = precioConDescuento(precioValor, descuentoValor);

    const resultado = document.getElementById("resultadoFinal");
    resultado.innerText = "El precio a pagar es: $" + precioFinal;
    
}

// Módulo para aplicar cupón
function aplicarCupon(){
    const inputPrecio = document.getElementById("Inputprecio");
    const precioValor = inputPrecio.value;

    const inputDescuento= document.getElementById("Inputdescuento");
    const descuentoValor = inputDescuento.value;

    const precioFinal = precioConDescuento(precioValor, descuentoValor);

    // cupones
    var cupones = ["abc123", "eef338", "xxc445", "rfr333", "ujj800"];
    const inputCupon = document.getElementById("InputCupon");
    const cuponValor = inputCupon.value;
    
    var cupon = false;
    for (cup of cupones){
        if (cup == cuponValor ){
            cupon = true;
        }
    }
    if (cupon){
        var resultadoCupon = document.getElementById("resultadocupon");
        var nuevoPrecio = precioFinal * 0.95;
        resultadoCupon.innerText = "Sí aplica cupón del 5%, el nuevo valor a pagar es: " + nuevoPrecio;
    }
    else{
        var resultadoCupon = document.getElementById("resultadocupon");
        resultadoCupon.innerText = "NO aplica cupón";
    }
    
        
}

    