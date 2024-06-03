const contenedorProductos = document.querySelector("#contenedor-productos"); // Selecciona el contenedor donde se mostrarán los productos
const botonesCategorias = document.querySelectorAll(".boton-categoria"); // Selecciona todos los botones de categoría
const botonSiguiente = document.querySelector("#boton-siguiente"); // Selecciona el botón de paginación siguiente
const numerosPaginacion = document.querySelector("#numeros-paginacion");// Selecciona el contenedor de los números de paginación
const botonAnterior = document.querySelector("#boton-anterior");// Selecciona el botón de paginación anterior
const tituloPrincipal = document.querySelector(".Titulo-principal");// Selecciona el elemento del título principal
const numerito = document.querySelector("#numerito"); // Selecciona el elemento que muestra el número de productos en el carrito

let productosPorPagina = 15; // 3 columnas x 5 filas tambien se Define cuántos productos se mostrarán por página
let datastorage ;// Variable para almacenar los productos obtenidos del almacenamiento local
let paginaActual = 1; // Variable que rastrea la página actual en la paginación
let productosFiltrados = []; // Array que contiene los productos filtrados que se están mostrando
let productosEnCarrito = []; // Array que contiene los productos añadidos al carrito

function cargarProductos(productosElegidos, pagina = 1) { // Función para cargar los productos en el contenedor
    contenedorProductos.innerHTML = ""; // Limpia el contenedor de productos
    paginaActual = pagina; // Actualiza la página actual
    productosFiltrados = productosElegidos;  // Actualiza los productos filtrados

    // Calcula el rango de productos a mostrar en la página actual
    const inicio = (pagina - 1) * productosPorPagina;
    const fin = inicio + productosPorPagina;
    const productosPagina = productosElegidos.slice(inicio, fin);

     // Crea los elementos HTML para cada producto en la página actual
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
   
    actualizarBotones(); // Actualiza los botones de paginación
    activarBotonesAgregar(); // Activa los botones de agregar al carrito
}

function actualizarBotones() { // Función para actualizar los botones de paginación
    numerosPaginacion.innerHTML = "";   // Limpia los botones de paginación
    const totalPaginas = Math.ceil(productosFiltrados.length / productosPorPagina);  // Calcula el número total de páginas

    for (let i = 1; i <= totalPaginas; i++) {  // Crea los botones de paginación
        const boton = document.createElement("button");
        boton.classList.add("boton-paginacion");
        boton.innerText = i;

        if (i === paginaActual) {  // Marca el botón de la página actual como activo
            boton.classList.add("active");
        }

        boton.addEventListener("click", () => cargarProductos(productosFiltrados, i));  // Agrega el evento click para cargar la página correspondiente
        numerosPaginacion.append(boton);
    }

    // Deshabilita los botones de paginación "Anterior" y "Siguiente" si es necesario
    botonAnterior.disabled = paginaActual === 1;
    botonSiguiente.disabled = paginaActual === totalPaginas;
}

function agregarAlCarrito(e) { // Función para agregar un producto al carrito
    const idBoton = e.currentTarget.id; // Obtiene el ID del producto a agregar
    const productoAgregado = productosCosmeticos.find(item => item.id === idBoton); // Encuentra el producto en el array de productos

    const productoEnCarrito = productosEnCarrito.find(producto => producto.id === idBoton); // Verifica si el producto ya está en el carrito

    if (productoEnCarrito) { // Si el producto ya está en el carrito, incrementa la cantidad
        productoEnCarrito.cantidad++;
    } else {
        productosEnCarrito.push({ ...productoAgregado, cantidad: 1 });  // Si no, agrega el producto al carrito con cantidad 1
    }

    actualizarNumerito();
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));

}

function actualizarNumerito() {  // Actualiza el número de productos en el carrito
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
     // Guarda el carrito actualizado en el almacenamiento local
    numerito.innerText = nuevoNumerito;
}

function activarBotonesAgregar() { // Función para activar los botones de agregar al carrito
    const botonesAgregar = document.querySelectorAll(".producto-agr"); // Selecciona todos los botones de agregar al carrito
    botonesAgregar.forEach(boton => boton.addEventListener("click", agregarAlCarrito)); // Agrega el evento click a cada botón de agregar al carrito
}


botonesCategorias.forEach(boton => { // Agrega el evento click a cada botón de categoría
    boton.addEventListener("click", (e) => { // Desactiva todos los botones de categoría
        botonesCategorias.forEach(boton => boton.classList.remove("active"));
         // Activa el botón de categoría clickeado
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id !== "todos") { // Si la categoría seleccionada no es "todos"
            const productosBoton = productosCosmeticos.filter(producto => producto.categoria.id === e.currentTarget.id); // Filtra los productos según la categoría seleccionada
            const productoCategoria = productosBoton[0]; // Obtiene la categoría del primer producto filtrado
            tituloPrincipal.innerText = productoCategoria ? productoCategoria.categoria.nombre : 'Categoría no encontrada';   // Actualiza el título principal con el nombre de la categoría

            cargarProductos(productosBoton, 1); // Carga los productos filtrados
        } else {
            // Si la categoría seleccionada es "todos", muestra todos los productos
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productosCosmeticos, 1);
        }
    });
});

// Agrega el evento click para el botón de paginación siguiente
botonSiguiente.addEventListener("click", () => {
    cargarProductos(productosFiltrados, paginaActual + 1);
});

// Agrega el evento click para el botón de paginación anterior
botonAnterior.addEventListener("click", () => {
    cargarProductos(productosFiltrados, paginaActual - 1);
});


 const buscar = async () =>{ // Función para buscar productos en el almacenamiento local
    const productos = JSON.parse(localStorage.getItem("productosCosmeticos")) || []; // Obtiene los productos del almacenamiento local o devuelve un array vacío si no existen
    return productos; // retorna la variable productos
 }
 const iniciarPagina = async() =>{ // Función para inicializar la página
    datastorage =  await buscar(); // Busca los productos en el almacenamiento local
    cargarProductos(datastorage);  // Carga los productos en la página
    actualizarBotones(); // Actualiza los botones de paginación
    activarBotonesAgregar(); // Activa los botones de agregar al carrito
 }
 
 // Inicializa la página al cargar el script
iniciarPagina();
