//REINICIADOR QUE AYUDA A REINICIAR LOS PRODUCTOS NO ORIGINALES
boton.addEventListener('click', function() {
    localStorage.setItem("productosCosmeticos", JSON.stringify(productosCosmeticos));
  })