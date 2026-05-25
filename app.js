// Variables para almacenar las selecciones actuales
let pedidoActual = {
    cliente: "",
    producto: "",
    formato: ""
};

// Función para seleccionar cliente
function seleccionarCliente(nombreCliente) {
    pedidoActual.cliente = nombreCliente;
    
    // Quitar clase activa a todos y ponerla al seleccionado
    document.querySelectorAll('.cli-chip').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    actualizarResumen();
}

// Función para seleccionar producto
function seleccionarProducto(nombreProducto) {
    pedidoActual.producto = nombreProducto;
    
    // Resaltar botón seleccionado
    const botones = event.target.parentElement.querySelectorAll('.chip');
    botones.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    actualizarResumen();
}

// Función para seleccionar formato
function seleccionarFormato(nombreFormato) {
    pedidoActual.formato = nombreFormato;
    
    const botones = event.target.parentElement.querySelectorAll('.chip');
    botones.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    actualizarResumen();
}

// Actualizar el texto superior de la pantalla
function actualizarResumen() {
    const resumen = document.getElementById('resumen-pedido');
    resumen.innerText = `Pedido para: ${pedidoActual.cliente || '...'} | ${pedidoActual.producto || '...'} (${pedidoActual.formato || '...'})`;
}

// Acción del botón guardar
function guardarPedido() {
    if (!pedidoActual.cliente || !pedidoActual.producto || !pedidoActual.formato) {
        alert("Por favor, completa todos los pasos antes de guardar.");
        return;
    }
    
    alert(`¡Pedido guardado con éxito!\n\nCliente: ${pedidoActual.cliente}\nProducto: ${pedidoActual.producto}\nFormato: ${pedidoActual.formato}`);
    console.log("Datos enviados al sistema:", pedidoActual);
}
