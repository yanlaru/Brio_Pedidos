// Variables para almacenar las selecciones actuales
let pedidoActual = {
    cliente: "",
    producto: "",
    formato: ""
};

// --- INTEGRACIÓN DE LA TABLA DE CLIENTES ---
// Esta función lee el archivo JSON y dibuja los 15 botones en pantalla
function cargarTablaClientes() {
    const contenedor = document.getElementById('contenedor-botones-clientes');

    // Si el contenedor no existe en tu HTML, detenemos la función para evitar errores
    if (!contenedor) return;

    fetch('clientes.json')
        .then(respuesta => respuesta.json())
        .then(clientes => {
            // Limpiamos el contenedor por si había botones viejos de prueba
            contenedor.innerHTML = "";

            // Creamos un botón para cada cliente de la tabla
            clientes.forEach(cliente => {
                const boton = document.createElement('button');
                boton.textContent = cliente.nombre;
                boton.className = 'cli-chip'; // Usamos tu clase exacta

                // Escuchamos el clic en el botón
                boton.addEventListener('click', (event) => {
                    seleccionarCliente(cliente.nombre, event.target);
                });

                contenedor.appendChild(boton);
            });
        })
        .catch(error => console.error("Error al cargar la tabla de clientes:", error));
}

// Ejecutamos la carga automática al abrir la aplicación
document.addEventListener('DOMContentLoaded', cargarTablaClientes);


// Función para seleccionar cliente (Modificada para recibir el botón pulsado)
function seleccionarCliente(nombreCliente, botonPulsado) {
    pedidoActual.cliente = nombreCliente;

    // Quitar clase activa a todos y ponerla al seleccionado
    document.querySelectorAll('.cli-chip').forEach(btn => btn.classList.remove('active'));
    botonPulsado.classList.add('active');

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
    if (resumen) {
        resumen.innerText = `Pedido para: ${pedidoActual.cliente || '...'} | ${pedidoActual.producto || '...'} (${pedidoActual.formato || '...'})`;
    }
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
