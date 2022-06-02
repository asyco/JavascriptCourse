function validarIsoceles(lado1, lado2, lado3){
    if(lado1 === lado2 || lado1 == lado3 || lado2 == lado3){
        var respuesta = true;
    } 
    else{
        respuesta = false;
    }
    return respuesta;
}

function casoIsoceles(lado1, lado2, lado3){
    var caso = 0;
    if(lado1 === lado2){
        caso = 1;
    }
    else if (lado1 == lado3){
        caso = 2;
    }
    else if (lado2 == lado3){
        caso = 3;
    }
    return caso;
}

function alturaIsoceles(lado1, lado2, lado3){
    var h = 0;
    if(validarIsoceles(lado1, lado2, lado3)){

        switch (casoIsoceles(lado1, lado2, lado3)){

            case 1 :
                h = Math.sqrt(lado1 * lado1 - (lado3 * lado3) / 4);
                break;
            case 2:
                h = Math.sqrt(lado1 * lado1 - (lado2 * lado2)/4);
                break;
            case 3:
                h = Math.sqrt(lado2 * lado2 - (lado1 * lado1) / 4);
                break;
            default:
                alert("No sé!!!")

        }

    }
    return h;   
}