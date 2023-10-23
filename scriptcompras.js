document.addEventListener("DOMContentLoaded", function () {
    cargarUsuarios();
    cargarJuegos();
});

function cargarUsuarios() {
    const usuarios = JSON.parse(localStorage.getItem("usuarios"));
    const usuariosLista = document.getElementById("usuariosLista");

    if (usuariosLista) {
        usuariosLista.innerHTML = ""; // Limpiar la lista existente

        usuarios.forEach((usuario) => {
            const listItem = document.createElement("li");
            listItem.textContent = usuario.nombre;
            usuariosLista.appendChild(listItem);
        });
    }
}

function cargarJuegos() {
    const juegos = JSON.parse(localStorage.getItem("juegos"));
    const juegosDropdown = document.getElementById("juegos");

    if (juegosDropdown) {
        juegosDropdown.innerHTML = ""; // Limpiar el dropdown existente

        juegos.forEach((juego) => {
            const option = document.createElement("option");
            option.value = juego.id;
            option.textContent = `${juego.titulo} (Stock: ${juego.stock}, Precio: $${juego.precio})`;
            juegosDropdown.appendChild(option);
        });
    }
}

function comprarJuego() {
    const juegoId = parseInt(document.getElementById("juegos").value);
    const juegos = JSON.parse(localStorage.getItem("juegos"));

    const juego = juegos.find((j) => j.id === juegoId);

    if (juego && juego.stock > 0) {
        juego.stock--;
        actualizarStock(juego);
        alert(`Juego "${juego.titulo}" comprado con éxito.`);
    } else {
        alert("El juego no está disponible o no existe.");
    }
}

function actualizarStock(juego) {
    const juegos = JSON.parse(localStorage.getItem("juegos"));
    const index = juegos.findIndex((j) => j.id === juego.id);
    if (index !== -1) {
        juegos[index] = juego;
        localStorage.setItem("juegos", JSON.stringify(juegos));
        cargarJuegos(); // Actualizar la lista de juegos en la interfaz
    }
}
