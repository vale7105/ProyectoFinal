const contenedorProductos = document.querySelector("#contenedor-productos");

function cargarProductos(){
  productosCosmeticos.forEach(producto=>{
    const div = document.createElement("div");
    div.classList.add("producto");
    div.innerHTML=`
    <img class="producto-img" src="${producto.imagen}" alt="">
    <div class="producto-detalles">
    <h3 class="producto-title">Crema Facial Antiarrugas</h3>
    <p class="producto-bef">Beneficios: Hidratación, Antiarrugas, Reafirmante</p>
    <p class="producto-tip">Tipo de piel: piel madura</p>
    <p class="producto-edad">Edad recomendada: +30</p>
    <p class="producto-marc">Marca: nivea, pond's, neutrogena, L'oreal</p>
    <p class="producto-precio">$79.000</p> 
    <button class="producto-agr">Agregar</button>
    </div>
    `
  })
}
