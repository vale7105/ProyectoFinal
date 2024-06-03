let currentPage = 1; // Variable que rastrea la página actual en la paginación
const itemsPerPage = 10; // Número de productos por página
let filteredProducts;// Array que contiene los productos filtrados que se están mostrando

function displayProducts(page) {// Función para mostrar los productos en la tabla

    const tbody = document.querySelector("#productos-table"); // Selecciona el cuerpo de la tabla

    tbody.innerHTML = ""; // Limpiar el contenido del tbody

    const start = (page - 1) * itemsPerPage; // Calcula el índice de inicio para la página actual

    const end = start + itemsPerPage; // Calcula el índice de fin para la página actual

    const paginatedProducts = filteredProducts.slice(start, end); // Obtiene los productos de la página actual

    paginatedProducts.forEach(product => { // Crea los elementos HTML para cada producto en la página actual
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td><img src="${product.imagen}" alt="${product.nombre}" width="50"></td>
            <td>${product.nombre}</td>
            <td>${product.codigo}</td>
            <td>${product.marca ? product.marca.join(', ') : ''}</td>
            <td>${product.precio}</td>
            <td>${product.categoria.nombre}</td>
            <td>${Array.isArray(product.beneficios) ? product.beneficios.join(', ') : ''}</td>
        `;
        tbody.appendChild(tr); // Agrega la fila a la tabla
    });

    displayPagination(); // Actualiza los botones de paginación
}

function displayPagination() { // Función para mostrar los botones de paginación

    const pagination = document.querySelector(".pagination"); // Selecciona el contenedor de paginación
    pagination.innerHTML = ""; // Limpia los botones de paginación
    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage); // Calcula el número total de páginas

    for (let i = 1; i <= totalPages; i++) { // Crea los botones de paginación
        const button = document.createElement("button"); // Establece el número de página en el botón
        button.innerText = i;
        if (i === currentPage) {
            button.classList.add("active");
        }

         
        button.addEventListener("click", () => goToPage(i)); // Agrega el evento click para cambiar de página
        pagination.appendChild(button);  // Agrega el botón al contenedor de paginación
    }
}

function goToPage(page) { // Función para ir a una página específica

    currentPage = page; // Actualiza la página actual
    displayProducts(currentPage); // Muestra los productos de la página actual
}

function siguiente() { // Función para ir a la página siguiente
    if ((currentPage * itemsPerPage) < filteredProducts.length) { // Verifica si no se ha alcanzado el final de la lista de productos
        currentPage++; // Incrementa la página actual
        displayProducts(currentPage); // Muestra los productos de la nueva página
    }
}

function anterior() { // Función para ir a la página anterior
    if (currentPage > 1) { // Verifica si no se está en la primera página
        currentPage--; // Decrementa la página actual
        displayProducts(currentPage); // Muestra los productos de la nueva página
    }
}
const buscar = async () =>{ // Función para buscar productos en el almacenamiento local

      // Obtiene los productos del almacenamiento local o devuelve un array vacío si no existen
    const productos = JSON.parse(localStorage.getItem("productosCosmeticos")) || []; 
    return productos; // retornar el objeto productos
 }

async function searchProducts() { // Función para buscar productos según los criterios de búsqueda
    document.getElementById('loading').style.display = 'block'; // Muestra un indicador de carga
    productosCosmeticos = await buscar(); // Obtiene los productos del almacenamiento local
    
    // Crea una nueva promesa para simular un retardo en la búsqueda
    new Promise((resolve) => {
        setTimeout(() => {
             // Obtiene los valores de los campos de búsqueda y los convierte a minúsculas
            const Nombre = document.getElementById('Nombre').value.toLowerCase();
            const Codigo = document.getElementById('Codigo').value.toLowerCase();
            const Categoria = document.getElementById('Categoria').value.toLowerCase();

             // Filtra los productos según los criterios de búsqueda
            filteredProducts = productosCosmeticos.filter(product => {
                const nombreMatch = product.nombre.toLowerCase().includes(Nombre);
                const codigoMatch = product.codigo.toLowerCase().includes(Codigo);
                const categoriaMatch = product.categoria.id.toLowerCase().includes(Categoria);
                return nombreMatch && codigoMatch && categoriaMatch;
            });

            currentPage = 1; // Reinicia la página actual a la primera página
            document.getElementById('loading').style.display = 'none'; // Oculta el indicador de carga
            resolve(); // Resuelve la promesa
        }, 2000); // Retardo de 2 segundos
    }).then(() => {
        displayProducts(currentPage); // Muestra los productos de la página actual
    });
}

async function clearSearch() { // Función para limpiar la búsqueda y mostrar todos los productos
    document.getElementById('Nombre').value = ''; // Limpia el campo de búsqueda de nombre
    document.getElementById('Codigo').value = ''; // Limpia el campo de búsqueda de codigo
    document.getElementById('Categoria').value = ''; // Limpia el campo de búsqueda de categoria
    filteredProducts = await buscar();  // Obtiene todos los productos del almacenamiento local
    currentPage = 1; // Reinicia la página actual a la primera página
    displayProducts(currentPage); // Muestra todos los productos
}

 async function Iniciar (){ // Función para iniciar la página al cargar el script
 filteredProducts = await buscar(); // Obtiene los productos del almacenamiento local
 displayProducts(currentPage); // Muestra los productos de la página actual
 }

 Iniciar(); // Llama a la función para iniciar la página