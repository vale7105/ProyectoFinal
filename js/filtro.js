let currentPage = 1;
const itemsPerPage = 10;
let filteredProducts;

function displayProducts(page) {
    const tbody = document.querySelector("#productos-table");
    tbody.innerHTML = ""; // Limpiar el contenido del tbody
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const paginatedProducts = filteredProducts.slice(start, end);

    paginatedProducts.forEach(product => {
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
        tbody.appendChild(tr);
    });

    displayPagination();
}

function displayPagination() {
    const pagination = document.querySelector(".pagination");
    pagination.innerHTML = "";
    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

    for (let i = 1; i <= totalPages; i++) {
        const button = document.createElement("button");
        button.innerText = i;
        if (i === currentPage) {
            button.classList.add("active");
        }
        button.addEventListener("click", () => goToPage(i));
        pagination.appendChild(button);
    }
}

function goToPage(page) {
    currentPage = page;
    displayProducts(currentPage);
}

function siguiente() {
    if ((currentPage * itemsPerPage) < filteredProducts.length) {
        currentPage++;
        displayProducts(currentPage);
    }
}

function anterior() {
    if (currentPage > 1) {
        currentPage--;
        displayProducts(currentPage);
    }
}

function searchProducts() {
    document.getElementById('loading').style.display = 'block';
    new Promise((resolve) => {
        setTimeout(() => {
            const Nombre = document.getElementById('Nombre').value.toLowerCase();
            const Codigo = document.getElementById('Codigo').value.toLowerCase();
            const Categoria = document.getElementById('Categoria').value.toLowerCase();

            filteredProducts = productosCosmeticos.filter(product => {
                const nombreMatch = product.nombre.toLowerCase().includes(Nombre);
                const codigoMatch = product.codigo.toLowerCase().includes(Codigo);
                const categoriaMatch = Categoria ? product.categoria.id.toLowerCase() === Categoria : true;
                return nombreMatch && codigoMatch && categoriaMatch;
            });

            currentPage = 1;
            document.getElementById('loading').style.display = 'none';
            resolve();
        }, 2000);
    }).then(() => {
        displayProducts(currentPage);
    });
}

async function clearSearch() {
    document.getElementById('Nombre').value = '';
    document.getElementById('Codigo').value = '';
    document.getElementById('Categoria').value = '';
    filteredProducts = await buscar();
    currentPage = 1;
    displayProducts(currentPage);
}
const buscar = async () =>{
    const productos = JSON.parse(localStorage.getItem("productosCosmeticos")) || [];
    return productos;
 }
 async function Iniciar (){
 filteredProducts = await buscar();
 displayProducts(currentPage);
 }
 Iniciar();