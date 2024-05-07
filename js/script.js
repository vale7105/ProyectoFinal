const productosCosmeticos = [
    {
      nombre: "Crema Facial Antiarrugas",
      codigo: "AbCd1234",
      categoria: "Cuidado de la piel",
      marca: ["nivea", "pond's", "neutrogena", "L'oreal", "Olay", "Eucenrin" ],
      precio: 79000,
      edadRecomendada: "30+",
      tipoPiel: "Piel madura",
      textura: "Crema",
      beneficios: ["Hidratación", "Antiarrugas", "Reafirmante"],
      imagen: "E:/Fundamentos/ProyectoFinal/img/1.webp"
    },
    {
      nombre: "Gel Limpiador Facial",
      codigo: "EfGh5678",
      categoria: "Cuidado de la piel",
      marca: ["CeraVe", "Neutrogena", "Avene", "CETAPHIL", " La Roche-Posay", "Bioderma" ],
      precio: 45000,
      edadRecomendada: "20+",
      uso: "Limpia y profundiza su cuidado a la piel",
      beneficios: ["Hidratación", "Limpiado"],
      imagen: "E:/Fundamentos/ProyectoFinal/img/2.webp"
    },
    {
      nombre: "Sérum Facial Iluminador",
      codigo: "IjKl9012",
      categoria: "Cuidado de la piel",
      marca: ["KIEHL'S Clearly Corrective", "LANCOME", "Invitive", "SISLEY", "DIOR", "ESTEE LAUDER" ],
      precio: 115000,
      edadRecomendada: "Todo tipo de piel",
      uso: "Aplica 4 o 5 gotas directamente en la piel seca",
      beneficios: ["Luminosidad", "Hidratación", "Humectación"],
      imagen: "E:/Fundamentos/ProyectoFinal/img/3.webp"
    },
    {
      nombre: "Desmaquillante Bifásico",
      codigo: "MnOp3456",
      categoria: "Cuidado de la piel",
      marca: ["Nivea", "La Roche-Posay", "Clinique", "Klorane", "AHAV"],
      precio: 55000,
      tipoPiel: "Todo tipo de piel",
      uso: "Agitar para mezclar, aplicar en la zona que deseas con un disco de algodon",
      beneficios: ["Limpieza", "Elimina", "Suave"],
      imagen: "E:/Fundamentos/ProyectoFinal/img/4.jpg"  
    },
    {
      nombre: " Crema Hidratante Facial",
      codigo: "QrSt7890",
      categoria: "Cuidado de la piel",
      marca: ["CeraVe", "Aderma", "Sesderma", "Neutrogena", "Eucerin" ],
      precio: 89000,
      tipoPiel: "Todo tipo de piel",
      textura: "Crema",
      uso: "Diario",
      beneficios: ["Limpieza profunda", "Refrescante"],
      imagen: "E:/Fundamentos/ProyectoFinal/img/5.webp"
    },
    {
    nombre: "Mascarilla Facial Purificante",
    codigo: "UvWx2345",
    categoria: "Cuidado de piel",
    marca: ["La Roche-Posay", "Nuxe", "Murad", "Talika" ],
    precio: 65000,
    tipoPiel: "Todo tipo de piel",
    uso: "cada 3 días",
    beneficios: ["Limpieza profunda", "Refrescante", "Purifica"],
    imagen: "E:/Fundamentos/ProyectoFinal/img/6.webp"
  },
  {
    nombre: "Aceite Facial Nutritivo",
    codigo: " YzAb6789",
    categoria: "Cuidado de la piel",
    marca: ["pai", "Natural Beauty Elixir", "The Ordinary", "Erborian", "Clarins", "Guerlain" ],
    precio: 98000,
    uso: "Todos los días",
    tipoPiel: "Piel seca o deshidratada",
    textura: "Aceite",
    beneficios: ["Nutre", "Hidratación", "Suaviza", "Protege"],
    imagen: "E:/Fundamentos/ProyectoFinal/img/7.webp"
  },
  {
    nombre: "Crema Reafirmante de Cuello y Escote",
    codigo: "CdEf1234",
    categoria: "uñas",
    marca: ["Elancyl", "Somatoline", "Eucerin", "Biotherm", "Garnier", "Collistar" ],
    precio: 105000,
    uso: "Mañana y Noche",
    tipoPiel: "+30",
    textura: "Crema",
    beneficios: ["Reafirma", "Reduce", "Hidratación", "Protege"],
    imagen: "E:/Fundamentos/ProyectoFinal/img/8.webp"
  },
  {
    nombre: "Crema para Contorno de Ojos",
    codigo: " GhIj5678",
    categoria: "Cuidado de la piel",
    marca: ["THE ORDINARY", "Filorga", "Avon", "Cerave", "VICHY", "ESTEE LAUDER" ],
    precio: 75000,
    tipoPiel: "Todo tipo de piel",
    textura: "Crema",
    uso: "alrededor del área de los ojos. Mañana y Noche",
    beneficios: ["Hidrata y suaviza", "Reduce ojeras y manchas", "Firme", "Rejuvenecida"],
    imagen: "E:/Fundamentos/ProyectoFinal/img/9.jpg"
  },
  {
    nombre: "Loción Tonificante Facial",
    codigo: " KlMn9012",
    categoria: "Cuidado de la piel",
    marca: ["THE ORDINARY", "Bella Aurora", "garnier", "L'Oréal", "PIXI", "REN" ],
    precio: 60000,
    tipoPiel: "Todo tipo de piel",
    uso: "Aplicar sobre un algodón y pasar suavemente por el rostro y cuello después de la limpieza", 
    beneficios: ["Eñimina residuos", "Tonifica", "Refresca", "Restaura"],
    imagen: "E:/Fundamentos/ProyectoFinal/img/10.jpg"
  },
  {
    nombre: "Crema Solar Facial",
    codigo: "OpQr3456",
    categoria: "Cuidado de la piel",
    marca: ["FrezyDerm", "HAWAIIAN", "Piz Buin", "Anne Moller", "Nezeni", "Nude" ],
    precio: 30000,
    tipoPiel: "Todo tipo de piel",
    textura: "Crema",
    uso: "Aplica cada dos o despues de nadar o sudar", 
    beneficios: ["Proteccion", "Previene envejecimiento", "Hidrata"],
    imagen: "E:/Fundamentos/ProyectoFinal/img/11.jpg"
  },
  {
    nombre: "Agua de Rosas Bruma Facial Refrescante",
    codigo: "StUv7890",
    categoria: "Cuidado de la piel",
    marca: [ "Nivea", "Árbora", "Yuya", "Mart México", "Jaloma" ],
    precio: 30000,
    tipoPiel: "Para todo tipo de piel, especialmente para piel cansada o deshidratada",
    uso: "Pulverizar sobre el rostro a una distancia de 20cm a 30cm, se aplica a cualquier hora del día", 
    beneficios: ["Refresca", "Suavidad", "Hidratación", "FIja maquillaje", "Reduce el brillo"],
    imagen: "E:/Fundamentos/ProyectoFinal/img/12.jpg"
  },
  {
    nombre: "Tratamiento Antiacné Spot Gel",
    codigo: "WxYz2345",
    categoria: "Cuidado de la piel",
    marca: ["epiology", "Sesderma", "Mario Badescu", "Hyséac, Bi-Stick", "SOS Spot", "Caudalíe" ],
    precio: 50000,
    tipoPiel: "Acne",
    uso: "aplicar sobre imperfecciones y puntos negros. Uso dos veces al dia, mañana y noche",
    beneficios: ["Reduce Imperfecciones", "Reduce inflamación", "Alivio"],
    imagen: "E:/Fundamentos/ProyectoFinal/img/13.jpg"
  },
  {
    nombre: "Base de Maquillaje Líquida",
    codigo: "AbCd6789",
    categoria: "Maquillaje",
    marca: ["vogue", "ana maria", "bardot", "Maybelline", "Revlon", "L'Oreal" ],
    precio: 18000,
    tonos: ["C-Cool", "NC-Neutral Cool", "N-Neutral", "NW-Neutral Warn", "W-Warnm"],
    acabado: "Mate",
    duracion: "12 horas",
    imagen: "E:/Fundamentos/ProyectoFinal/img/14.webp"
  },
  {
    nombre: "Lápiz Labial Mate",
    codigo: "EfGh1234",
    categoria: "Maquillaje",
    marca: ["AVON", "lancome", "ana maria", "bardot", "vogue" ],
    precio: 21000,
    tono: ["Negro", "Rubi", "Violeta", "Marron caramelo",  "Rojo Pasión", "Rosa Nude", "Azul electrico", "Durazno", "Pink Rose", "Pink Champagne", "Red", "Cool", "Marron Chocolate", " Rojo Inteso", "Melocotón Natural", "Ciruela", "Coral", "Rojo Cereza","Borgoña Proufundo"],
    acabado: "Mate",
    duracion: "8 horas",
    imagen: "E:/Fundamentos/ProyectoFinal/img/15.webp"
  },
  {
    nombre: "Labial ",
    codigo: "IjKl5678",
    categoria: "Maquillaje",
    marca: ["AVON", "lancome", "ana maria", "bardot", "vogue"],
    precio: 21000,
    tono: ["Negro", "Rubi", "Violeta", "Marron caramelo",  "Rojo Pasión", "Rosa Nude", "Azul electrico", "Rosa Pastel", "Rojo Escarlata", "Beige Cálido", "Violeta Profundo", "Marron Tostado", "Rosa Barbie", "Coral", " Buerdeos", "Ciruela", "Caoba Noche", "Frambuesa Intenso","Coral Suave"],
    acabado: "Mate",
    duracion: "Larga duración",
    imagen: "E:/Fundamentos/ProyectoFinal/img/16.webp"
  },
  {
    nombre: "Máscara de Pestañas Voluminizadora",
    codigo: "MnOp9012",
    categoria: "Maquillaje",
    marca: ["AVON", "lancome", "ana maria", "bardot", "vogue" ],
    precio: 21000,
    tono: "Negro",
    efecto: "Volumen",
    tipodePestaña: "Todo tipo de pestañas",
    imagen: "E:/Fundamentos/ProyectoFinal/img/17.webp"
  },
  {
    nombre: "Polvo compacto",
    codigo: "QrSt3456",
    categoria: "Maquillaje",
    marca: ["AVON", "samy", "ana maria", "bardot", "vogue"],
    precio: 21000,
    tono: ["Natural", "Beige", "Perla", "Caramelo", "Chocolate", "Olivo", "Gitano", "Ivory","Tostado", "Canela", "Traslúcido", "Nude" ],
    acabado: "Mate",
    tipoPiel: "De acuerdo a tu tono de piel",
    imagen: "E:/Fundamentos/ProyectoFinal/img/18.webp"
  },
  {
    nombre: " Polvo Bronceador Mate",
    codigo: "UvWx7890",
    categoria: "Maquillaje",
    marca: ["vitú", "samy", "ana maria", "bardot", "vogue" ],
    precio: 60000,
    tono: "Bronceado",
    tipoPiel: "Todo tipo de piel",
    imagen: "E:/Fundamentos/ProyectoFinal/img/19.webp"
  },
  {
    nombre: " Paleta de Sombras de Ojos",
    codigo: "YzAb2345",
    categoria: "Maquillaje",
    marca: ["AVON", "lancome", "ana maria", "bardot", "vogue" ],
    precio: 90000,
    tono: "Variados",
    acabado: ["Brillante", "Natural", "Porcelana"],
    tipoPiel: "Todo tipo de piel",
    imagen: "E:/Fundamentos/ProyectoFinal/img/20.webp"
  },
  {
    nombre: "Brillo de Labios",
    codigo: " CdEf6789",
    categoria: "Maquillaje",
    marca: ["Montblanc", "Jean Pasca", "Dolce&Gabbana", "DIOR", "Montblanc", "Moschino" ],
    precio: 9000,
    tono: ["Rosado", "Rojo", "Violeta", "Dorado", "Pink"],
    duracion: "2 horas",
    imagen: "E:/Fundamentos/ProyectoFinal/img/21.webp"
  },
  {
    nombre: "Corrector Líquido",
    codigo: "GhIj1234",
    categoria: "Maquillaje",
    marca: ["bissú ", "benefit", "Laurent", "L'Oréal Paris", "Lancôme", "Naked" ],
    precio: 30000,
    tono: ["Oblea", "Alfajor", "Polvoron", "Biscoti", "Gengibre", "Coyota", "Pretzel", "Brownie", "Macarrón"],
    duracion: "12 horas",
    tipoPiel: "Tono de acuerdo a tu tipo de piel",
    imagen: "E:/Fundamentos/ProyectoFinal/img/22.jpg"
  },
  {
    nombre: "Delineador de Ojos",
    codigo: "KlMn5678",
    categoria: "Maquillaje",
    marca: ["L'Oreal", "ana maria", "bardot", "vogue", "Nars" ],
    precio: 25000,
    tono: ["Negro", "Azul", "Verde", "Amarillo", "Rojo", "Rosa", "Morado", "Lila", "Cafe"],   
    duracion: "24 horas",
    imagen: "E:/Fundamentos/ProyectoFinal/img/23.webp"
  },
  {
    nombre: "Polvo Translúcido",
    codigo: "OpQr9012",
    categoria: "Maquillaje",
    marca: [" Physicians Formula", "Dermacol", "Lancome", " Nyx", "Technic", "Wibo" ],
    precio: 45000,
    tono: "Perla",
    acabado: "Mate",
    duracion: "8 horas",
    imagen: "E:/Fundamentos/ProyectoFinal/img/24.webp"
  },
  {
    nombre: "Rubor",
    codigo: "StUv3456",
    categoria: "Maquillaje",
    marca: ["Clinique", "Moschino", "Bardot", "Ana Maria", "DIOR", "vogue" ],
    precio: 17000,
    tono: ["Rosados", "Pasteles", "Naranjas", "Rosa oscuros"],
    duracion: "8 horas",
    imagen: "E:/Fundamentos/ProyectoFinal/img/25.webp"
  },
  {
    nombre: "Brochas de maquillaje",
    codigo: "Mcolf025",
    categoria: "Maquillaje",
    marca: ["Zoeva", " Hakuhodo", "Artis", "Bobbi Brown", "Real Techniques", "MAC" ],
    precio: 45000,
    imagen: "E:/Fundamentos/ProyectoFinal/img/26.webp"
  },
  {
    nombre: "Pestañas Postizas",
    codigo: "WxYz7890",
    categoria: "Maquillaje",
    marca: [ "Walacr Magnetic", "Ardell", " BEYELIAN" ],
    precio: 12000,
    tono: "Negro",
    tipoPestaña:["Enteras", "Pelo a pelo", "Punto a punto", "Magneticas"],
    tamaño: ["Short", "Medium", "Large", "Extra Large"],
    efecto: "Volumen",
    duracion: "20 días",
    imagen: "E:/Fundamentos/ProyectoFinal/img/27.jpg"
  },
  {
    nombre: "Mascarilla Capilar Nutritiva",
    codigo: "AbCd2345",
    categoria: "Cabello",
    marca: ["Recamier", "Nassa", "MyM", "Prokapil", "Natural Hair" ],
    precio: 35000,
    tipocabello: "Todo tipo de cabello, especialmente cabello seco y dañado",
    contenido: "Ingredientes nutritivos como aceites naturales y vitaminas",
    uso: "Aplicar sobre el cabello húmedo después del champú, dejar actuar durante 5-10 minutos y enjuagar bien",
    duracion: "5 a 10 minutos",
    imagen: "E:/Fundamentos/ProyectoFinal/img/28.JPEG"
  },
  {
    nombre: "Gel para Cejas",
    codigo: "EfGh6789",
    categoria: "Cabello",
    marca: [" E.L.F.", "The BrowGa", "L'Oréal", "Yuya", "Nyx"],
    contenido:"Fórmula especializada para dar forma y definición a las cejas",
    uso: "Aplicar una pequeña cantidad con movimientos suaves para peinar y dar forma a las cejas.",
    duracion: "24 horas",
    imagen: "E:/Fundamentos/ProyectoFinal/img/29.webp"
  },
  {
    nombre: "Gel Exfoliante Capilar",
    codigo: "IjKl1234",
    categoria: "Cabello",
    marca: ["Kérastase", "Maxybelt", "Siberica", "La Roche Posay", "Midnight", "Christophe Robin" ],
    precio: 50000,
    contenido:"Agentes exfoliantes suaves y revitalizantes",
    uso: "Aplicar sobre el cuero cabelludo húmedo, masajear suavemente y enjuagar abundantemente",
    duracion: "3 días",
    imagen: "E:/Fundamentos/ProyectoFinal/img/30.JPEG"
  },
  {
    nombre: "Crema Decolorante",
    codigo: "MnOp5678",
    categoria: "Cabello",
    marca: ["JOLEN MILD", "CYGNETIC", "ANDINA", "SALLY HANSEN", "OXY", "VEET" ],
    precio: 25000,
    contenido: "Fórmula de coloración avanzada con ingredientes protectores",
    uso: "Aplicar siguiendo las instrucciones del fabricante para obtener el color deseado",
    duracion: "15 minutos",
    imagen: "E:/Fundamentos/ProyectoFinal/img/31.jpg"
  },
  {
    nombre: "Crema para Peinar",
    codigo: "QrSt9012",
    categoria: "Cabello",
    marca: ["EGO", "BIOEXPERT", "DOVE", "TRESEMME", "SEDAL" ],
    precio: 30000,
    tipocabello: "Todo tipo de cabello",
    contenido: "Ingredientes que definen y controla el cabello sin encrespamiento.",
    uso: "Aplicar sobre el cabello húmedo y peinar como de costumbre",
    imagen: "E:/Fundamentos/ProyectoFinal/img/32.webp"
  },
  {
    nombre: "Aceite de Argán",
    codigo: "UvWx3456",
    categoria: "Cabello",
    marca: ["LIMAR", "KERASTASE", "PANTENE", "LEHIT", "ELVIVE", "LOREAL" ],
    precio: 50000,
    tipocabello: "Todo tipo de cabello, especialmente a cabello seco y dañado",
    contenido: "Aceite de argán puro y nutritivo",
    uso:"plicar unas gotas sobre el cabello húmedo o seco, concentrándose en las puntas y medios",
    imagen: "E:/Fundamentos/ProyectoFinal/img/33.webp"
  },
  {
    nombre: "Fijador de Cabello",
    codigo: "YzAb7890",
    categoria: "Cabello",
    marca: [" CREME OF NATURE ", "RECAMIER", "TRESEMME", "PANTENE" ],
    precio: 25000,
    tipocabello: "Todo tipo de cabello",
    contenido: "Fijación fuerte y duradera sin dejar residuos visibles",
    uso:"Pulverizar sobre el cabello seco a una distancia adecuada para fijar el peinado deseado",
    duracion: "4 horas",
    imagen: "E:/Fundamentos/ProyectoFinal/img/34.webp"
  },
  {
    nombre: "Shampoo Hidratante",
    codigo: " CdEf2345",
    categoria: "Cabello",
    marca: ["Maria Nila", "Nuggela", "Isdin", "Herbal Essences", "PANTENE", "ELVIVE" ],
    precio: 40000,
    tipocabello: "Todo tipo de cabello, especialmete seco y deshidratado",
    contenido: "ngredientes hidratantes y nutritivos para restaurar el equilibrio del cabello.",
    imagen: "E:/Fundamentos/ProyectoFinal/img/35.webp"
  },
  {
    nombre: "Serum Capilar Reparado",
    codigo: "GhIj6789",
    categoria: "Cabello",
    marca: [ "KERASTASE", "KABA", "LOREAL", "PANTENE", "OLAPLEX" ],
    precio: 70000,
    contenido: " Ingredientes reparadores y fortalecedores como proteínas y vitaminas",
    tipocabello: "Todo tipo de cabello, especialmente cabello dañado y quebradizo",
    uso: "Aplicar unas gotas sobre el cabello húmedo o seco, concentrándose en las áreas más dañadas",
    duracion: "24 horas",
    imagen: "E:/Fundamentos/ProyectoFinal/img/36.avif"
  },
  {
    nombre: "Espuma Voluminizador",
    codigo: "KlMn1234",
    categoria: "Cabello",
    marca: ["Bruno Vassari", "Wella", "Revlon" ],
    precio: 45000,
    tipocabello: " Cabello fino o sin volumen",
    contenido: "Fórmula ligera que proporciona volumen y cuerpo al cabello",
    uso: "Aplicar sobre el cabello húmedo y distribuir uniformemente antes de peinar",
    duracion: "5 horas",
    imagen: "E:/Fundamentos/ProyectoFinal/img/37.jpg"
  },
  {
    nombre: "Mascarilla Hidratante",
    codigo: "OpQr5678",
    categoria: "Cabello",
    marca: ["Sephora", "Apivita", "SESDERMA", "Ardaraz ", "Neutrogena", "Garnier" ],
    precio: 60000,
    tipocabello: "Todo tipo de cabello, especialmente cabello seco y deshidratado",
    contenido: "Ingredientes hidratantes y revitalizantes para restaurar la suavidad y el brillo",
    uso: "Aplicar después del champú sobre el cabello húmedo, dejar actuar y enjuagar bien",
    duracion: "3 días",
    imagen: "E:/Fundamentos/ProyectoFinal/img/38.png"
  },
  {
    nombre: "Shampoo Fortificante",
    codigo: "UvWx9012",
    categoria: "Cabello",
    marca: [" Lambdapil.", "Clearé Institute", "Revita", "Vichy Dercos", "Anaphase" ],
    precio: 35000,
    tipocabello: "Todo tipo de cabello, especialmente cabello débil y propenso a la caída",
    contenido: "Fórmula fortificante con extracto de placenta vegetal y vitaminas",
    uso: "Aplicar sobre el cabello mojado, masajear suavemente y enjuagar abundantemente",
    duracion: "uso continuo",
    imagen: "E:/Fundamentos/ProyectoFinal/img/39.webp"
  },
  {
    nombre: "Esmalte de Uñas",
    codigo: "StUv9012",
    categoria: "Uñas",
    marca: [ "fashion", "masglo", "bardot", "vogue" ],
    precio: 8000,
    color: [ "lila", "negro", "azul", "rosa"],
    acabado: "Brilloso",
    duracion: "12 días",
    imagen: "E:/Fundamentos/ProyectoFinal/img/40.png"
  },
  {
    nombre: "Esmalte de Uñas de Secado Rápido",
    codigo: "WxYz3456",
    categoria: "Uñas",
    marca: [ "fashion", "masglo", "bardot", "vogue" ],
    precio: 10000,
    color: "Rosa Pastel",
    acabado: "Brilloso",
    duracion: "15 días",
    imagen: "E:/Fundamentos/ProyectoFinal/img/41.webp"
  },
  {
    nombre: "Esmalte de Uñas Brillante",
    codigo: "AbCd7890",
    categoria: "Uñas",
    marca: [ "fashion", "masglo", "bardot", "vogue" ],
    precio: 12000,
    color: "azul",
    acabado: "Brilloso",
    duracion: "15 días",
    imagen: "E:/Fundamentos/ProyectoFinal/img/42.webp"
  },
  {
    nombre: " Esmalte de Uñas Duradero",
    codigo: "EfGh2345",
    categoria: "Uñas",
    marca: [ "fashion", "masglo", "bardot", "vogue" ],
    precio: 7000,
    color: "Rosa Pastel",
    acabado: "Brilloso",
    duracion: "20 días",
    imagen: "E:/Fundamentos/ProyectoFinal/img/43.webp"
  },
  {
    nombre: "Esmalte de Uñas Hipoalergénico",
    codigo: "IjKl6789",
    categoria: "Uñas",
    marca: ["RISQUE", "ANDREIA", "IDI", "RAFNNE" ],
    precio: 9000,
    color: "todos los tonos",
    acabado: "Brilloso",
    duracion: "15 días",
    imagen: "E:/Fundamentos/ProyectoFinal/img/44.png"
  },
  {
    nombre: "Esmalte de Uñas Mate",
    codigo: "MnOp1234",
    categoria: "Uñas",
    marca: [ "fashion", "masglo", "bardot", "vogue" ],
    precio: 11000,
    color: "piel",
    acabado: "Brilloso",
    duracion: "12 días",
    imagen: "E:/Fundamentos/ProyectoFinal/img/45.webp"
  },
  {
    nombre: "Esmalte de Uñas Metálico",
    codigo: "QrSt5678",
    categoria: "Uñas",
    marca: [ "fashion", "masglo", "bardot", "vogue"],
    precio: 10000,
    color: "Varios Tonos",
    acabado: "Brilloso",
    duracion: "12 días",
    imagen: "E:/Fundamentos/ProyectoFinal/img/46.jpg"
  },
  {
    nombre: "Esmalte de Uñas Perlado",
    codigo: "YzAb3456",
    categoria: "Uñas",
    marca: [ "fashion", "admiss", "bardot", "vogue" ],
    precio: 8000,
    color: "Blanco nacar",
    acabado: "Brilloso",
    duracion: "12 días",
    imagen: "E:/Fundamentos/ProyectoFinal/img/47.webp"
  },
  {
    nombre: "Esmalte de Uñas Semipermanente",
    codigo: "CdEf7890",
    categoria: "Uñas",
    marca: ["NUDE", "DEKO", "MIXCOCO", "TRUE COLORS", "masglo", "ORGANIC" ],
    precio: 14500,
    color: "Rosa Pastel",
    acabado: "Brilloso",
    duracion: "30 días",
    imagen: "E:/Fundamentos/ProyectoFinal/img/48.jpg"
  },
  {
    nombre: "Esmalte de Uñas Texturizado",
    codigo: "GhIj2345",
    categoria: "Uñas",
    marca: ["BARDOR", "LURE", "VOGUE", "AVON", "MILANT" ],
    precio: 12000,
    color: "Rosa Pastel",
    acabado: "Brilloso",
    duracion: "20 días",
    imagen: "E:/Fundamentos/ProyectoFinal/img/49.webp"
  },
  {
    nombre: "Esmalte de Uñas Transparente",
    codigo: "KlMn6789",
    categoria: "Uñas",
    marca: [ "fashion", "masglo", "bardot", "vogue"],
    precio: 9000,
    color: "Transparente",
    acabado: "Brilloso",
    duracion: "12 días",
    imagen: "E:/Fundamentos/ProyectoFinal/img/50.webp"
  },
  {
    nombre: "Esmalte de Uñas UV",
    codigo: "OpQr1234",
    categoria: "Uñas",
    marca: ["O.P.I.", "aokitec", "cnd", "gelish", "ibd" ],
    precio: 15000,
    color: "Todos los tonos",
    acabado: "Brilloso",
    duracion: "25 días",
    imagen: "E:/Fundamentos/ProyectoFinal/img/51.jpg"
  },
  ];
  document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('productForm');
    const productNameInput = document.getElementById('productName');
    const categorySelect = document.getElementById('category');
    const productPriceInput = document.getElementById('productPrice');
    const productCodeInput = document.getElementById('productCode');
    const additionalFieldsDiv = document.getElementById('additionalFields');

    // Opciones de categoría
    const categorias = ["Maquillaje", "Cuidado de la piel", "Cabello", "Uñas"];

    // Función para agregar campos adicionales según la categoría seleccionada
    function addAdditionalFields(category) {
        additionalFieldsDiv.innerHTML = ''; // Limpiar campos adicionales antes de agregar nuevos

        if (category === 'Maquillaje') {
            const maquillajeFields = `
                <div class="form-group">
                    <label for="shade">Tono</label>
                    <input type="text" class="form-control" id="shade" placeholder="Ingrese el tono">
                </div><br>
                <div class="form-group">
                    <label for="finish">Acabado</label>
                    <input type="text" class="form-control" id="finish" placeholder="Ingrese el acabado">
                </div><br>
                <div class="form-group">
                    <label for="shade">Duración</label>
                    <input type="text" class="form-control" id="shade" placeholder="Ingrese la duración">
                    </div><br>
                    <div class="form-group">
                    <label for="marq">Marca</label>
                    <input type="text" class="form-control" id="marq" placeholder="Ingrese la marca">
                
                </div><br>
            `;
            additionalFieldsDiv.innerHTML = maquillajeFields;
        } else if (category === 'Cuidado de la piel') {
            const cuidadoPielFields = `
                <div class="form-group">
                    <label for="age">Edad Recomendada</label>
                    <input type="text" class="form-control" id="age" placeholder="Ingrese la edad recomendada">
                </div>
                <br>
                <div class="form-group">
                    <label for="benefits">Beneficios</label>
                    <input type="text" class="form-control" id="benefits" placeholder="Ingrese los beneficios">
                </div>
                <br>
                <div class="form-group">
                    <label for="use">Usos</label>
                    <input type="text" class="form-control" id="use" placeholder="Ingrese el uso">
                </div>
                <br>
                <div class="form-group">
                    <label for="marca">Marca</label>
                    <input type="text" class="form-control" id="marca" placeholder="Ingrese la marca">
                </div>
                <br>
            `;
            additionalFieldsDiv.innerHTML = cuidadoPielFields;
        } else if (category === 'Cabello') {
            const cabelloFields = `
                <div class="form-group">
                    <label for="hairType">Tipo de Cabello</label>
                    <input type="text" class="form-control" id="hairType" placeholder="Ingrese el tipo de cabello">
                </div><br>
                <div class="form-group">
                    <label for="hairCondition">Contenido del producto</label>
                    <input type="text" class="form-control" id="hairCondition" placeholder="Ingrese el contenido">
                </div><br>
                <div class="form-group">
                    <label for="dur">Duracion</label>
                    <input type="text" class="form-control" id="dur" placeholder="Ingrese la duración">
                </div><br>
                <div class="form-group">
                    <label for="us">Usos</label>
                    <input type="text" class="form-control" id="us" placeholder="Ingrese su uso">
                </div><br>
                <div class="form-group">
                    <label for="mq">Marca</label>
                    <input type="text" class="form-control" id="mq" placeholder="Ingrese el contenido">
                </div><br>
            `;
            additionalFieldsDiv.innerHTML = cabelloFields;
        } else if (category === 'Uñas') {
            const uñasFields = `
                <div class="form-group">
                    <label for="nailColor">Color de Uñas</label>
                    <input type="text" class="form-control" id="nailColor" placeholder="Ingrese el color de uñas">
                </div><br>
                <div class="form-group">
                    <label for="nailType">Acabado</label>
                    <input type="text" class="form-control" id="nailType" placeholder="Ingrese el acabado">
                </div><br>
                <div class="form-group">
                    <label for="durc">Duración</label>
                    <input type="text" class="form-control" id="durc" placeholder="Ingrese la duración">
                </div><br>
                <div class="form-group">
                    <label for="mr">Marca</label>
                    <input type="text" class="form-control" id="mr" placeholder="Ingrese la marca">
                </div><br>
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

        if (categorySelect.value === 'Seleccionar categoría') {
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

        // Agregar más validaciones según sea necesario

        // Si todo está bien, enviar el formulario
        alert('¡Producto registrado con éxito!');
        form.reset(); // Limpiar campos
        additionalFieldsDiv.innerHTML = ''; // Limpiar campos adicionales después de enviar
    });
});

document.addEventListener("DOMContentLoaded", function() {
  const title = document.getElementById('title_pr');

  // Función para agregar y quitar la clase de animación
  function toggleAnimation() {
      title.classList.toggle('animate__animated', 'animate__flip'); // Agregar la clase de animación de animate.css

      // Pausa la animación después de 2 segundos
      setTimeout(() => {
          title.classList.toggle('animate__flip'); // Quitar la clase de animación de animate.css
      }, 2000);
  }

  // Llamar a la función de animación repetidamente
  setInterval(toggleAnimation, 2000); // Repetir cada 2 segundos (2000ms de animación + 2000ms de pausa)
});

