const spanOnline = document.getElementById('spanOnline');
const spanOffline = document.getElementById('spanOffline');
const txtMensaje = document.getElementById('txtMensaje');
const btnEnviar = document.getElementById('btnEnviar');

const socket = io();

socket.on('connect', () => {
    console.log('Conectado');
    spanOffline.style.display = 'none';
    spanOnline.style.display = '';
});

socket.on('disconnect', () => {
    console.log('Desconectado');
    spanOnline.style.display = 'none';
    spanOffline.style.display = '';
});

socket.on('enviar-mensaje', (payload) => {
    console.log(payload);
})

btnEnviar.addEventListener('click', () => {
    const mensaje = txtMensaje.value;
    const payload = {
        mensaje: mensaje,
        id: 123,
        fecha: new Date()
    }
    socket.emit('enviar-mensaje', payload, (id) => {
        console.log('Desde el servidor: ' + id);
    })
});