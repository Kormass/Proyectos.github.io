class Juego {
    constructor(imagen, titulo, año, descripcion, precio, stock, puntosDeCompra) {
        this.imagen = imagen;
        this.titulo = titulo;
        this.año = año;
        this.descripcion = descripcion;
        this.precio = precio;
        this.stock = stock;
        this.puntosDeCompra = puntosDeCompra;
    }

    comprar() {
        if (this.stock > 0) {
            this.stock--;
            console.log(`Has comprado el juego '${this.titulo}' por $${this.precio}.`);
        } else {
            console.log(`El juego '${this.titulo}' está agotado.`);
        }
    }
}

const tienda = {
    listaDeJuegos: [],

    agregarJuego(juego) {
        this.listaDeJuegos.push(juego);
        console.log(`El juego '${juego.titulo}' ha sido agregado a la tienda.`);
        this.guardarDatos(); // Guardar los datos actualizados
        this.actualizarVista();
    },

    modificarJuego(titulo, nuevoPrecio, nuevoStock) {
        const juego = this.listaDeJuegos.find(juego => juego.titulo === titulo);
        if (juego) {
            juego.precio = nuevoPrecio;
            juego.stock = nuevoStock;
            console.log(`El juego '${juego.titulo}' ha sido modificado.`);
            this.guardarDatos(); // Guardar los datos actualizados
            this.actualizarVista();
        } else {
            console.log(`Juego con el título '${titulo}' no encontrado.`);
        }
    },

    eliminarJuego(titulo) {
        const index = this.listaDeJuegos.findIndex(juego => juego.titulo === titulo);
        if (index !== -1) {
            this.listaDeJuegos.splice(index, 1);
            console.log(`El juego '${titulo}' ha sido eliminado de la tienda.`);
            this.guardarDatos(); // Guardar los datos actualizados
            this.actualizarVista();
        } else {
            console.log(`Juego con el título '${titulo}' no encontrado.`);
        }
    },

    comprarJuego(titulo) {
        const juego = this.listaDeJuegos.find(juego => juego.titulo === titulo);
        if (juego) {
            juego.comprar();
            this.guardarDatos(); // Guardar los datos actualizados
            this.actualizarVista();
        } else {
            console.log(`Juego con el título '${titulo}' no encontrado.`);
        }
    },

    actualizarVista() {
        const juegosContainer = document.getElementById('juegos-container');
        juegosContainer.innerHTML = ''; // Limpiar la lista de juegos

        this.listaDeJuegos.forEach(juego => {
            const juegoDiv = document.createElement('div');
            juegoDiv.classList.add('juego');
            juegoDiv.innerHTML = `
                <img src="${juego.imagen}" alt="${juego.titulo}">
                <h3>${juego.titulo}</h3>
                <p><strong class="strong">Año:</strong>  ${juego.año}</p>
                <p><strong class="strong">Descripción:</strong>  ${juego.descripcion}</p>
                <p><strong class="strong">Precio:</strong>  $${juego.precio}</p>
                <p><strong class="strong">Stock:</strong>  ${juego.stock}</p>
                <p><strong class="strong">Puntos de Compra:</strong>  ${juego.puntosDeCompra}</p>
            `;
            juegosContainer.appendChild(juegoDiv);
        });
    },

    guardarDatos() {
        localStorage.setItem('juegos', JSON.stringify(this.listaDeJuegos));
    },

    cargarDatos() {
        const juegosGuardados = localStorage.getItem('juegos');
        if (juegosGuardados) {
            this.listaDeJuegos = JSON.parse(juegosGuardados);
        }
    },
};

// Cargar datos desde localStorage al iniciar
tienda.cargarDatos();



const crearJuego = () => {
    const imagen = prompt("Ingrese la URL de la imagen del juego:");
    const titulo = prompt("Ingrese el título del juego:");
    const año = prompt("Ingrese el año del juego:");
    const descripcion = prompt("Ingrese la descripción del juego:");
    const precio = parseFloat(prompt("Ingrese el precio del juego:"));
    const stock = parseInt(prompt("Ingrese la cantidad en stock del juego:"));
    const puntosDeCompra = parseInt(prompt("Ingrese los puntos de compra del juego:"));

    const nuevoJuego = new Juego(imagen, titulo, año, descripcion, precio, stock, puntosDeCompra);
    tienda.agregarJuego(nuevoJuego);
};

// Función para modificar un juego
const modificarJuego = () => {
    const titulo = prompt("Ingrese el título del juego a modificar:");
    const nuevoPrecio = parseFloat(prompt("Ingrese el nuevo precio del juego:"));
    const nuevoStock = parseInt(prompt("Ingrese el nuevo stock del juego:"));

    tienda.modificarJuego(titulo, nuevoPrecio, nuevoStock);
};

// Función para eliminar un juego
const eliminarJuego = () => {
    const titulo = prompt("Ingrese el título del juego a eliminar:");
    tienda.eliminarJuego(titulo);
};

// Función para comprar un juego
const comprarJuego = () => {
    const titulo = prompt("Ingrese el título del juego a comprar:");
    tienda.comprarJuego(titulo);
};

// Asocia las funciones a los botones
document.getElementById('crearJuego').addEventListener('click', crearJuego);
document.getElementById('modificarJuego').addEventListener('click', modificarJuego);
document.getElementById('eliminarJuego').addEventListener('click', eliminarJuego);
document.getElementById('comprarJuego').addEventListener('click', comprarJuego);

tienda.actualizarVista(); // Actualiza la vista inicial
