    
    const productos = localStorage.getItem("productos-en-carrito");

    const productosEnCarrito = JSON.parse(productos);
    const contenedorCarritoVacio = document.querySelector("#carrito-vacio");
    const contenedorCarritoProductos = document.querySelector("#carrito-productos");
    const contenedorCarritoAcciones = document.querySelector("#carrito-acciones");
    const contenedorCarritoComprado = document.querySelector("#carrito-comprado");
  
    if (productosEnCarrito) {
      contenedorCarritoVacio.classList.add("disabled");
      contenedorCarritoProductos.classList.remove("disabled");
      contenedorCarritoAcciones.classList.remove("disabled");
      contenedorCarritoComprado.classList.add("disabled");
  
      contenedorCarritoProductos.innerHTML = ''; // Limpiar el contenido anterior
  console.log(productosEnCarrito);
      productosEnCarrito.forEach(producto => {
        // Crear un elemento div para cada producto en el carrito
        const div = document.createElement("div");
        div.classList.add("carrito-producto");
        div.innerHTML = `
                  <img class="carrito-producto-img" src="${producto.imagen}" alt="${producto.nombre}">
                  <div class="carrito-producto-title">
                      <small>Título</small>
                      <h3>${producto.nombre}</h3>
                  </div>
                  <div class="carrito-producto-cantidad">
                      <small>Cantidad</small>
                      <p>${producto.cantidad}</p>
                  </div>
                  <div class="carrito-producto-precio">
                      <small>Precio</small>
                      <p>${producto.precio}</p>
                  </div>
                  <div class="carrito-precio-subtotal">
                      <small>Subtotal</small>
                      <p>$${producto.precio * producto.cantidad}</p>
                  </div>
                  <button class="carrito-producto-eliminar" id ="${producto.id}"><i class="bi bi-trash-fill"></i></button>
              `;
  
        // Agregar el div al contenedor de productos del carrito
        contenedorCarritoProductos.append(div);
      });
    } else {
      // ... (El resto del código permanece igual)
    }