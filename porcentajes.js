function precioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioNuevo = (precio * porcentajePrecioConDescuento) / 100;
    return precioNuevo;
}