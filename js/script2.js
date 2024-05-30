const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const botonSiguiente = document.querySelector("#boton-siguiente");
const botonAnterior = document.querySelector("#boton-anterior");
const tituloPrincipal = document.querySelector(".Titulo-principal");
const numerito = document.querySelector("#numerito");

let productosPorPagina = 9; // 3 columnas x 2 filas
let paginaActual = 1;
let productosFiltrados = [];
let productosEnCarrito = [];

function cargarProductos(productosElegidos, pagina = 1) {
    contenedorProductos.innerHTML = "";
    paginaActual = pagina;
    productosFiltrados = productosElegidos;

    const inicio = (pagina - 1) * productosPorPagina;
    const fin = inicio + productosPorPagina;
    const productosPagina = productosElegidos.slice(inicio, fin);

    productosPagina.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img class="producto-img" src="${producto.imagen}" alt="${producto.nombre}">
            <div class="producto-detalles">
                <h3 class="producto-title">${producto.nombre}</h3>
                <p class="producto-beneficios">Beneficios: ${producto.beneficios}</p>
                ${producto.tipoPiel ? `<p class="producto-tipo">Tipo de piel: ${producto.tipoPiel}</p>` : ''}
                ${producto.edadRecomendada ? `<p class="producto-edad">Edad recomendada: ${producto.edadRecomendada}</p>` : ''}
                ${producto.marca ? `<p class="producto-marca">Marca: ${producto.marca}</p>` : ''}
                ${producto.textura ? `<p class="producto-text">Textura: ${producto.textura}</p>` : ''}
                ${producto.acabado ? `<p class="producto-acabado">Acabado: ${producto.acabado}</p>` : ''}
                ${producto.color ? `<p class="producto-color">Color: ${producto.color}</p>` : ''}
                ${producto.duracion ? `<p class="producto-dur">Duración: ${producto.duracion}</p>` : ''}
                ${producto.tonos ? `<p class="producto-tono">Tonos: ${producto.tonos}</p>` : ''}
                ${producto.contenido ? `<p class="producto-cont">Contenido: ${producto.contenido}</p>` : ''}
                ${producto.uso ? `<p class="producto-uso">Uso: ${producto.uso}</p>` : ''}
                <p class="producto-precio">$ ${producto.precio}</p> 
                <button class="producto-agr" id="${producto.id}">Agregar</button>
            </div>
        `;
        contenedorProductos.append(div);
    });

    actualizarBotones();
    activarBotonesAgregar();
}

function actualizarBotones() {
    botonAnterior.disabled = paginaActual === 1;
    botonSiguiente.disabled = paginaActual === Math.ceil(productosFiltrados.length / productosPorPagina);
}

function agregarAlCarrito(e) {
    const idBoton = e.currentTarget.id;
    const productoAgregado = productosCosmeticos.find(item => item.id === idBoton);

    const productoEnCarrito = productosEnCarrito.find(producto => producto.id === idBoton);

    if (productoEnCarrito) {
        productoEnCarrito.cantidad++;
    } else {
        productosEnCarrito.push({ ...productoAgregado, cantidad: 1 });
    }

    actualizarNumerito();
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));

}

function actualizarNumerito() {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}

function activarBotonesAgregar() {
    const botonesAgregar = document.querySelectorAll(".producto-agr");
    botonesAgregar.forEach(boton => boton.addEventListener("click", agregarAlCarrito));
}

cargarProductos(productosCosmeticos);

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {
        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id !== "todos") {
            const productosBoton = productosCosmeticos.filter(producto => producto.categoria.id === e.currentTarget.id);
            const productoCategoria = productosBoton[0];
            tituloPrincipal.innerText = productoCategoria ? productoCategoria.categoria.nombre : 'Categoría no encontrada';

            cargarProductos(productosBoton, 1);
        } else {
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productosCosmeticos, 1);
        }
    });
});

botonSiguiente.addEventListener("click", () => {
    cargarProductos(productosFiltrados, paginaActual + 1);
});

botonAnterior.addEventListener("click", () => {
    cargarProductos(productosFiltrados, paginaActual - 1);
});

