document.addEventListener("DOMContentLoaded", function() {

    const form = document.getElementById('productForm');
    const productNameInput = document.getElementById('productName');
    const categorySelect = document.getElementById('categoria');
    const productPriceInput = document.getElementById('productPrice');
    const productCodeInput = document.getElementById('productCode');
    const additionalFieldsDiv = document.getElementById('additionalFields');

    // Función para agregar campos adicionales según la categoría seleccionada
    function addAdditionalFields(category) {
        additionalFieldsDiv.innerHTML = ''; // Limpiar campos adicionales antes de agregar nuevos

        if (category === 'maquillaje') {
            const maquillajeFields = `
                <div class="form-group">
                    <label for="tono">Tono</label>
                    <input type="text" minlength="10" maxlength="30" class="form-control" id="tono" placeholder="Ingrese el tono">
                </div>
                <br>
                <div class="form-group">
                    <label for="acabado">Acabado</label>
                    <input type="text" minlength="10" maxlength="20" class="form-control" id="acabado" placeholder="Ingrese el acabado">
                </div>
                <br>
                <div class="form-group">
                    <label for="duracion">Duración</label>
                    <input type="text" minlength="5" maxlength="20" class="form-control" id="dur" placeholder="Ingrese la duración">
                </div>
                <br>
                <div class="form-group">
                    <label for="beneficio">Beneficios</label>
                    <input type="text" minlength="10" maxlength="100" class="form-control" id="beneficio" placeholder="Ingrese los beneficios">
                </div>
                <br>
                <div class="form-group">
                    <label for="marca">Marca</label>
                    <input type="text" minlength="10" maxlength="100" class="form-control" id="marca" placeholder="Ingrese la marca">
                </div>
                <br>
            `;
            additionalFieldsDiv.innerHTML = maquillajeFields;
        } else if (category === 'cuidado-facial') {
            const cuidadoPielFields = `
                <div class="form-group">
                    <label for="años">Edad Recomendada</label>
                    <input type="text" minlength="2" maxlength="15" class="form-control" id="años" placeholder="Ingrese la edad recomendada">
                </div>
                <br>
                <div class="form-group">
                    <label for="beneficio">Beneficios</label>
                    <input type="text" minlength="10" maxlength="100" class="form-control" id="beneficio" placeholder="Ingrese los beneficios">
                </div>
                <br>
                <div class="form-group">
                    <label for="us">Usos</label>
                    <input type="text" minlength="30" maxlength="100" class="form-control" id="us" placeholder="Ingrese el uso">
                </div>
                <br>
                <div class="form-group">
                    <label for="marca">Marca</label>
                    <input type="text" minlength="10" maxlength="100" class="form-control" id="marca" placeholder="Ingrese la marca">
                </div>
                <br>
            `;
            additionalFieldsDiv.innerHTML = cuidadoPielFields;
        } else if (category === 'cabello') {
            const cabelloFields = `
                <div class="form-group">
                    <label for="hairType">Tipo de Cabello</label>
                    <input type="text" minlength="20" maxlength="30" class="form-control" id="hairType" placeholder="Ingrese el tipo de cabello">
                </div>
                <br>
                <div class="form-group">
                    <label for="hairCondition">Contenido del producto</label>
                    <input type="text" minlength="10" maxlength="100" class="form-control" id="hairCondition" placeholder="Ingrese el contenido">
                </div>
                <br>
                <div class="form-group">
                    <label for="dur">Duración</label>
                    <input type="text" minlength="5" maxlength="30" class="form-control" id="dur" placeholder="Ingrese la duración">
                </div>
                <br>
                <div class="form-group">
                    <label for="us">Usos</label>
                    <input type="text" minlength="30" maxlength="100" class="form-control" id="us" placeholder="Ingrese su uso">
                </div>
                <br>
                <div class="form-group">
                    <label for="marca">Marca</label>
                    <input type="text" minlength="10" maxlength="60" class="form-control" id="marca" placeholder="Ingrese la marca">
                </div>
                <br>
            `;
            additionalFieldsDiv.innerHTML = cabelloFields;
        } else if (category === 'uñas') {
            const uñasFields = `
                <div class="form-group">
                    <label for="nailColor">Color de Uñas</label>
                    <input type="text" minlength="5" maxlength="90" class="form-control" id="nailColor" placeholder="Ingrese el color de uñas">
                </div>
                <br>
                <div class="form-group">
                    <label for="nailType">Acabado</label>
                    <input type="text" minlength="5" maxlength="50" class="form-control" id="nailType" placeholder="Ingrese el acabado">
                </div>
                <br>
                <div class="form-group">
                    <label for="dur">Duración</label>
                    <input type="text" minlength="5" maxlength="20" class="form-control" id="dur" placeholder="Ingrese la duración">
                </div>
                <br>
                <div class="form-group">
                    <label for="marca">Marca</label>
                    <input type="text" minlength="10" maxlength="90" class="form-control" id="marca" placeholder="Ingrese la marca">
                </div>
                <br>
            `;
            additionalFieldsDiv.innerHTML = uñasFields;
        }
    }

    // Evento de cambio en la selección de categoría
    categorySelect.addEventListener('change', function() {
        addAdditionalFields(this.value);
    });

    // Agregar evento de envío del formulario
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evitar que se envíe el formulario por defecto

        // Validar campos
        if (productNameInput.value.trim() === '') {
            alert('Por favor, ingrese el nombre del producto.');
            productNameInput.focus();
            return;
        }

        if (categorySelect.value === '' || categorySelect.value === 'Seleccione una categoría') {
            alert('Por favor, seleccione una categoría.');
            categorySelect.focus();
            return;
        }

        if (productPriceInput.value.trim() === '' || parseFloat(productPriceInput.value) <= 0) {
            alert('Por favor, ingrese un precio válido para el producto.');
            productPriceInput.focus();
            return;
        }

        if (productCodeInput.value.trim() === '') {
            alert('Por favor, ingrese el código del producto.');
            productCodeInput.focus();
            return;
        }

        // Inicializar variables para los campos adicionales si existen
        const tono = document.getElementById('tono') ? document.getElementById('tono').value : '';
        const acabado = document.getElementById('acabado') ? document.getElementById('acabado').value : '';
        const dur = document.getElementById('dur') ? document.getElementById('dur').value : '';
        const marca = document.getElementById('marca').value;
        const años = document.getElementById('años') ? document.getElementById('años').value : '';
        const beneficio = document.getElementById('beneficio').value;
        const us = document.getElementById('us') ? document.getElementById('us').value : '';
        const hairType = document.getElementById('hairType') ? document.getElementById('hairType').value : '';
        const hairCondition = document.getElementById('hairCondition') ? document.getElementById('hairCondition').value : '';
        const nailColor = document.getElementById('nailColor') ? document.getElementById('nailColor').value : '';
        let selectImagen = document.getElementById("productImage");
        const NombreProducto = productNameInput.value;
        const codigoProducto = productCodeInput.value;
        const CategoriaProducto = categorySelect.value;
        const precioProducto = productPriceInput.value;
        const imagenProducto = selectImagen.value; // Se asume que este campo se obtendrá de alguna manera
        // Asume que estos campos se obtendrán de alguna manera, tal vez una vez cargada la imagen o en otro input
        let nombreCategoria
        switch (CategoriaProducto) {

            case "cuidado-facial":
                nombreCategoria = "Facial"
                break;
             case "maquillaje":
                nombreCategoria = "Maquillaje"
                break;
            case "cabello":
                nombreCategoria = "Capilar"
                break;
            case "uñas":
                nombreCategoria = "Manicura"
                break;
        
            default:
                nombreCategoria = "Todas las categorias"
                break;
        }
        const objeto = {
            id: CategoriaProducto,
            nombre: nombreCategoria,
         }
        let arrayMarcas = marca?.split(",")
        let arrayBeneficios = beneficio?.split(",")
        const newProducto = {
            nombre: NombreProducto,
            codigo: codigoProducto,
            categoria: objeto,
            imagen: imagenProducto,
            precio: precioProducto,
            tono: tono,
            acabado: acabado,
            duracion: dur,
            marca:  arrayMarcas,
            edadRecomendada: años,
            beneficios: arrayBeneficios,
            uso: us,
            tipocabello: hairType,
            contenido: hairCondition,
            color: nailColor
        };

        añadir(newProducto);
        console.log(newProducto);

        // Si todo está bien, enviar el formulario
        alert('¡Producto registrado con éxito!');
        form.reset(); // Limpiar campos
        additionalFieldsDiv.innerHTML = ''; // Limpiar campos adicionales después de enviar
    });

    const añadir = (productonew)=>{

        let producto = JSON.parse(localStorage.getItem("productosCosmeticos")) || [];
        producto.push(productonew);
        localStorage.setItem("productosCosmeticos", JSON.stringify(producto));
    };

});

let selectImagen = document.getElementById("productImage");
let imagenSelect = document.getElementById("previewImage");
selectImagen.addEventListener('click', function () {
    imagenSelect.src = selectImagen.value
})