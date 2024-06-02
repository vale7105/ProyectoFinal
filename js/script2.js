const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const botonSiguiente = document.querySelector("#boton-siguiente");
const numerosPaginacion = document.querySelector("#numeros-paginacion");
const botonAnterior = document.querySelector("#boton-anterior");
const tituloPrincipal = document.querySelector(".Titulo-principal");
const numerito = document.querySelector("#numerito");

let productosPorPagina = 15; // 3 columnas x 5 filas
let datastorage ;
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
                ${producto.efecto? `<p class="producto-efecto">Efecto: ${producto.efecto}</p>` : ''}
                ${producto.tipodePestaña ? `<p class="producto-pestaña">Tipo de Pestaña: ${producto.tipodePestaña}</p>` : ''}
                ${producto.tipocabello ? `<p class="producto-cabello">Tipo de Cabello: ${producto.tipocabello}</p>` : ''}
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
    numerosPaginacion.innerHTML = "";
    const totalPaginas = Math.ceil(productosFiltrados.length / productosPorPagina);

    for (let i = 1; i <= totalPaginas; i++) {
        const boton = document.createElement("button");
        boton.classList.add("boton-paginacion");
        boton.innerText = i;
        if (i === paginaActual) {
            boton.classList.add("active");
        }
        boton.addEventListener("click", () => cargarProductos(productosFiltrados, i));
        numerosPaginacion.append(boton);
    }

    botonAnterior.disabled = paginaActual === 1;
    botonSiguiente.disabled = paginaActual === totalPaginas;
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
 const buscar = async () =>{
    const productos = JSON.parse(localStorage.getItem("productosCosmeticos")) || [];
    return productos;
 }
 const iniciarPagina = async() =>{
    datastorage =  await buscar();
    cargarProductos(datastorage);
    actualizarBotones();
    activarBotonesAgregar();
 }
iniciarPagina();