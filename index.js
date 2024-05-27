/**

 */

function calcularCostoFinal() {
    const precioProducto = parseFloat(document.getElementById('precioProducto').value);
    const cantidadProductos = parseInt(document.getElementById('cantidadProductos').value);
    const descuento = parseFloat(document.getElementById('descuento').value);
    const impuesto = parseFloat(document.getElementById('impuesto').value);
    const pesoTotal = parseFloat(document.getElementById('pesoTotal').value);

    const costoProductos = calcularCostoTotal(precioProducto, cantidadProductos);
    const costoConDescuento = aplicarDescuento(costoProductos, descuento);
    const costoConImpuesto = aplicarImpuesto(costoConDescuento, impuesto);
    const costoEnvio = calcularCostoEnvio(pesoTotal);

    const costoFinal = costoConImpuesto + costoEnvio;

    document.getElementById('resultado').innerText = 
        `Costo Final: $${costoFinal.toFixed(2)} (Costo de Envío: $${costoEnvio.toFixed(2)})`;
}

function calcularCostoTotal(precio, cantidad) {
    return precio * cantidad;
}

function aplicarDescuento(costo, descuento) {
    return costo - (costo * (descuento / 100));
}

function aplicarImpuesto(costo, impuesto) {
    return costo + (costo * (impuesto / 100));
}

function calcularCostoEnvio(peso) {
    const tarifaPorKg = 10; // Tarifa de envío por kilogramo
    return peso * tarifaPorKg;
}
