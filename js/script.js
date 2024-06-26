const productosCosmeticos = [
    {
      nombre: "Crema Facial Antiarrugas",
      codigo: "AbCd1234",
      categoria: { id: 'cuidado-facial', nombre: 'Facial' },
      marca: ["nivea", "pond's", "neutrogena", "Eucenrin" ],
      precio: 79000,
      edadRecomendada: "30+",
      tipoPiel: "Piel madura",
      textura: "Crema",
      uso: "Ayuda a prevenir manchas y reafirma la cara ante las arrugas",
      beneficios: ["Hidratación", "Reafirmante"],
      imagen: "./img/1.jpg"
    },
    {
      nombre: "Gel Limpiador Facial",
      codigo: "EfGh5678",
      categoria: { id: 'cuidado-facial', nombre: 'Facial' },
      marca: ["CeraVe", "Neutrogena", "Avene", "Cetaphil","Pomys" ],
      precio: 45000,
      edadRecomendada: "20+",
      textura: "liquida",
      uso: "Limpia y profundiza su cuidado a la piel,",
      tipoPiel: "Para todo tipo de piel",
      beneficios: ["Hidratación", "Limpiado","Reafirma"],
      imagen: "./img/2.webp"
    },
    {
      nombre: "Sérum Facial Iluminador",
      codigo: "IjKl9012",
      categoria: { id: 'cuidado-facial', nombre: 'Facial' },
      marca: ["KIEHL'S ", "pix","Sisley", "DIOR" ],
      precio: 115000,
      edadRecomendada: "Todas las edades",
      textura: "liquida",
      tipoPiel: "Piel madura",
      uso: "Aplica 4 gotas directamente en la piel",
      beneficios: ["Luminosidad", "Hidratación", "Humectación"],
      imagen: "./img/3.webp"
    },
    {
      nombre: "Desmaquillante Bifásico",
      codigo: "MnOp3456",
      categoria: { id: 'cuidado-facial', nombre: 'Facial' },
      marca: ["Nivea", "Clinique", "Klorane", "AHAV"],
      precio: 55000,
      tipoPiel: "Todo tipo de piel",
      edadRecomendada: "+20",
      textura: "liquida",
      uso: "Agitar para mezclar, aplicar en la zona que deseas con un disco de algodon",
      beneficios: ["Limpieza", "Elimina", "Suave"],
      imagen: "./img/4.jpg"  
    },
    {
      nombre: " Crema Hidratante Facial",
      codigo: "QrSt7890",
      categoria: { id: 'cuidado-facial', nombre: 'Facial' },
      marca: ["CeraVe", "Aderma", "Sesderma", "Neutrogena", "Eucerin" ],
      precio: 89000,
      tipoPiel: "Todo tipo de piel",
      edadRecomendada: "Todas las edades",
      textura: "Crema",
      uso: "Diario",
      beneficios: ["Limpieza profunda", "Refrescante"],
      imagen: "./img/5.webp"
    },
    {
    nombre: "Mascarilla Facial Purificante",
    codigo: "UvWx2345",
    categoria: { id: 'cuidado-facial', nombre: 'Facial' },
    marca: ["La Roche-Posay", "Nuxe", "Murad", "Talika" ],
    precio: 65000,
    tipoPiel: "Todo tipo de piel",
    edadRecomendada: "Todas las edades",
    textura: "liquida",
    uso: "cada 3 días",
    beneficios: ["Limpieza profunda", "Refrescante", "Purifica"],
    imagen: "./img/6.webp"
  },
  {
    nombre: "Aceite Facial Nutritivo",
    codigo: " YzAb6789",
    categoria: { id: 'cuidado-facial', nombre: 'Facial' },
    marca: ["pai", "Natural Beauty", "The Ordinary", "Erborian", "Guerlain" ],
    precio: 98000,
    uso: "Todos los días",
    tipoPiel: "Piel seca o deshidratada",
    edadRecomendada: "+20",
    textura: "Aceite",
    beneficios: ["Hidratación", "Suaviza", "Protege"],
    imagen: "./img/7.webp"
  },
  {
    nombre: "Crema Reafirmante de Cuello y Escote",
    codigo: "CdEf1234",
    categoria: { id: 'cuidado-facial', nombre: 'Facial' },
    marca: ["Elancyl", "Somatoline", "Eucerin", "Biotherm", "Garnier" ],
    precio: 105000,
    uso: "Mañana y Noche",
    tipoPiel: "Piel madura",
    edadRecomendada: "+30",
    textura: "Crema",
    beneficios: ["Reafirma", "Hidratación", "Protege"],
    imagen: "./img/8.webp"
  },
  {
    nombre: "Crema para Contorno de Ojos",
    codigo: " GhIj5678",
    categoria: { id: 'cuidado-facial', nombre: 'Facial' },
    marca: ["Filorga", "Avon", "Cerave", "VICHY" ],
    precio: 75000,
    tipoPiel: "Todo tipo de piel",
    edadRecomendada: "+20",
    textura: "Crema",
    uso: "alrededor del área de los ojos. Mañana y Noche",
    beneficios: ["Hidrata", "Reduce ojeras"],
    imagen: "./img/9.jpg"
  },
  {
    nombre: "Loción Tonificante Facial",
    codigo: " KlMn9012",
    categoria: { id: 'cuidado-facial', nombre: 'Facial' },
    marca: ["garnier", "L'Oréal", "PIXI", "REN" ],
    precio: 60000,
    tipoPiel: "Todo tipo de piel",
    edadRecomendada: "Todas las edades",
    textura: "liquida",
    uso: "Aplicar sobre un algodón y pasar suavemente por el rostro y cuello.", 
    beneficios: ["Tonifica", "Refresca", "Restaura"],
    imagen: "./img/10.jpg"
  },
  {
    nombre: "Crema Solar Facial",
    codigo: "OpQr3456",
    categoria: { id: 'cuidado-facial', nombre: 'Facial' },
    marca: ["FrezyDerm", "Anne Moller", "Nezeni", "Nude" ],
    precio: 30000,
    tipoPiel: "Todo tipo de piel",
    edadRecomendada: "Todas las edades",
    textura: "Crema",
    uso: "Aplica cada dos o despues de nadar o sudar", 
    beneficios: ["Proteccion", "Hidrata"],
    imagen: "./img/11.jpg"
  },
  {
    nombre: "Agua de Rosas ",
    codigo: "StUv7890",
    categoria: { id: 'cuidado-facial', nombre: 'Facial' },
    marca: [ "Nivea", "Árbora", "Yuya" ],
    precio: 30000,
    textura: "liquida",
    tipoPiel: "Todo tipo de piel",
    edadRecomendada: "Todas las edades",
    uso: "Pulverizar sobre el rostro distancia de 20cm.", 
    beneficios: ["Refresca", "Suavidad"],
    imagen: "./img/12.jpg"
  },
  {
    nombre: "Tratamiento Antiacné Spot Gel",
    codigo: "WxYz2345",
    categoria: { id: 'cuidado-facial', nombre: 'Facial' },
    marca: ["epiology", "Sesderma", "Caudalíe" ],
    precio: 50000,
    textura: "Crema",
    tipoPiel: "Acne",
    edadRecomendada: "Todas las edades",
    uso: "aplicar sobre imperfecciones y puntos negros. Uso mañana y noche",
    beneficios: ["Reduce Imperfecciones", "Alivio"],
    imagen: "./img/13.jpg"
  },
  {
    nombre: "Base de Maquillaje Líquida",
    codigo: "AbCd6789",
    categoria: { id: 'maquillaje', nombre: 'Maquillaje' },
    marca: ["vogue", "bardot", "Maybelline", "L'Oreal" ],
    precio: 18000,
    tonos: ["Vogue", "NC-Neutral Cool", "N-Neutral", "NW-Neutral Warn", "W-Warnm"],
    edadRecomendada: "+18",
    acabado: "Mate",
    duracion: "12 horas",
    beneficios:["Cubrimiento", "Imperfecciones"],
    imagen: "./img/14.webp"
  },
  {
    nombre: "Lápiz Labial Mate",
    codigo: "EfGh1234",
    categoria: { id: 'maquillaje', nombre: 'Maquillaje' },
    marca: ["AVON", "lancome", "ana maria", "bardot", "vogue" ],
    precio: 21000,
    tonos: ["Negro", "Violeta", "Rojo", "Rosa","Coral",],
    acabado: "Mate",
    edadRecomendada: "+18",
    duracion: "8 horas",
    beneficios: ["Larga Duracion", "Mate", "Brillo"],
    imagen: "./img/15.webp"
  },
  {
    nombre: "Labial ",
    codigo: "IjKl5678",
    categoria: { id: 'maquillaje', nombre: 'Maquillaje' },
    marca: ["AVON", "lancome", "ana maria", "bardot", "vogue"],
    precio: 21000,
    tonos: ["Negro", "Rubi", "Violeta","Electrico", "Escarlata"],
    acabado: "Mate",
    edadRecomendada: "+18",
    duracion: "Larga duración",
    beneficios: ["Larga Duracion", "Mate", "Brillo"],
    imagen: "./img/16.webp"
  },
  {
    nombre: "Máscara de Pestañas Voluminizadora",
    codigo: "MnOp9012",
    categoria: { id: 'maquillaje', nombre: 'Maquillaje' },
    marca: ["lancome", "ana maria", "bardot", "vogue" ],
    precio: 21000,
    tonos: "Negro",
    edadRecomendada: "+18",
    efecto: "Volumen",
    uso: "Reafirmar el volumen de tus pestañas",
    tipodePestaña: "Todo tipo de pestañas",
    beneficios: ["Larga Duracion", "Grosor", "Volumen"],
    imagen: "./img/17.webp"
  },
  {
    nombre: "Polvo compacto",
    codigo: "QrSt3456",
    categoria: { id: 'maquillaje', nombre: 'Maquillaje' },
    marca: ["AVON", "samy", "ana maria", "bardot", "vogue"],
    precio: 21000,
    tonos: ["Natural", "Beige", "Chocolate","Traslúcido", "Nude" ],
    acabado: "Mate",
    edadRecomendada: "+18",
    tipoPiel: "De acuerdo a tu tono de piel",
    beneficios: ["Larga Duracion", "Mate", "Filtros UV"],
    imagen: "./img/18.webp"
  },
  {
    nombre: " Polvo Bronceador Mate",
    codigo: "UvWx7890",
    categoria: { id: 'maquillaje', nombre: 'Maquillaje' },
    marca: ["vitú", "samy", "ana maria", "bardot", "vogue" ],
    precio: 60000,
    tonos: "Bronceado",
    edadRecomendada: "+18",
    tipoPiel: "Todo tipo de piel",
    beneficios: ["Larga Duracion", "Filtros UV"],
    uso: "Permite a la rostro un tono bronceado que se magnificado",
    imagen: "./img/19.webp"
  },
  {
    nombre: " Paleta de Sombras de Ojos",
    codigo: "YzAb2345",
    categoria: { id: 'maquillaje', nombre: 'Maquillaje' },
    marca: ["Lancome", "Ana Maria", "Bardot", "Vogue" ],
    precio: 90000,
    tono: "Variados",
    acabado: ["Brillante", "Natural", "Porcelana"],
    edadRecomendada: "+18",
    tipoPiel: "Todo tipo de piel",
    beneficios: ["BrillanR", "Resaltar Mirada","Bonita"],
    uso: "Con un pincel de sombras, aplica la sombra con suaves toques. ",
    imagen: "./img/20.webp"
  },
  {
    nombre: "Brillo de Labios",
    codigo: " CdEf6789",
    categoria: { id: 'maquillaje', nombre: 'Maquillaje' },
    marca: ["Montblanc", "JeanPasca", "DIOR", "Moschino" ],
    precio: 9000,
    tono: ["Rosado", "Rojo", "Violeta", "Dorado", "Pink"],
    duracion: "2 horas",
    edadRecomendada: "todas las edades",
    acabado: "Brillante",
    beneficios: ["Brillante", "Humectador","Protección"],
    uso: "Resaltar tus labios con un toque brillante",
    imagen: "./img/21.webp"
  },
  {
    nombre: "Corrector Líquido",
    codigo: "GhIj1234",
    categoria: { id: 'maquillaje', nombre: 'Maquillaje' },
    marca: ["bissú ", "benefit", "Laurent", "L'Oréal Paris", "Lancôme", "Naked" ],
    precio: 30000,
    tonos: ["Oblea", "Alfajor","Biscoti", "Gengibre", "Coyota"],
    duracion: "12 horas",
    tipoPiel: "Tono de acuerdo a tu tipo de piel",
    edadRecomendada: "+20",
    beneficios: ["Larga Duración", "Ojeras"],
    imagen: "./img/22.jpg"
  },
  {
    nombre: "Delineador de Ojos",
    codigo: "KlMn5678",
    categoria: { id: 'maquillaje', nombre: 'Maquillaje' },
    marca: ["L'Oreal", "ana maria", "bardot", "vogue", "Nars" ],
    precio: 25000,
    tonos: ["Negro", "Azul", "Verde", "Rojo", "Rosa", "Morado"],   
    duracion: "24 horas",
    edadRecomendada: "+18",
    beneficios: ["Brillante", "Resalta tus ojos"],
    uso:"Define el contorno de los ojosy  se aplica alrededor del mismo",
    imagen: "./img/23.webp"
  },
  {
    nombre: "Polvo Translúcido",
    codigo: "OpQr9012",
    categoria: { id: 'maquillaje', nombre: 'Maquillaje' },
    marca: [" vogue"," Ana Maria", "Technic", "Wibo" ],
    precio: 45000,
    tonos: ["Tono 1", "Tono 2", "Tono 3"],
    acabado: "Mate",
    edadRecomendada: "+20",
    duracion: "8 horas",
    beneficios: ["Brillante", "Larga Duracion"],
    imagen: "./img/24.webp"
  },
  {
    nombre: "Rubor",
    codigo: "StUv3456",
    categoria: { id: 'maquillaje', nombre: 'Maquillaje' },
    marca: [ "Moschino", "Bardot", "DIOR", "vogue" ],
    precio: 17000,
    tonos: ["Rosados", "Pasteles", "Naranjas", "Rosa oscuros"],
    duracion: "8 horas",
    edadRecomendada: "+18",
    uso:"encargado de darle color al rostro",
    beneficios: ["Brillante","Larga Duracion"],
    imagen: "./img/25.webp"
  },
  {
    nombre: "Brochas de maquillaje",
    codigo: "Mcolf025",
    categoria: { id: 'maquillaje', nombre: 'Maquillaje' },
    marca: ["Zoeva", " Hakuhodo", "Artis", "Bobbi Brown", "Real Techniques", "MAC" ],
    precio: 45000,
    beneficios: ["Mas Definicióm","Producto Almaximo"],
    uso: "las brochas grandes sirven para aplicar las zonas del rostro (bases y polvos), las pequeñas para áreas como los ojos, nariz o la boca, y las medianas se emplean para aplicar en zonas intermedias (colorete)",
    imagen: "./img/26.webp"
  },
  {
    nombre: "Pestañas Postizas",
    codigo: "WxYz7890",
    categoria: { id: 'maquillaje', nombre: 'Maquillaje' },
    marca: [ "Walacr Magnetic", "Ardell", " BEYELIAN" ],
    precio: 12000,
    tonos: "Negro",
    tipodePestaña:["Enteras", "Pelo a pelo", "Punto a punto", "Magneticas"],
    tamaño: ["Short", "Medium", "Large", "Extra Large"],
    efecto: "Volumen",
    duracion: "20 días",
    beneficios: ["Grosor","Larga Duracion", "Resalta Tu Mirada"],
    imagen: "./img/27.jpeg"
  },
  {
    nombre: "Mascarilla Capilar Nutritiva",
    codigo: "AbCd2345",
    categoria: { id: 'cabello', nombre: 'Capilar' },
    marca: ["Recamier", "MyM", "Prokapil", "Natural", "Yuya" ],
    precio: 35000,
    tipocabello: "Todo tipo de cabello",
    contenido: "Aceites naturales y vitaminas",
    uso: "Aplicar sobre el cabello humedo dejar actuar, masejear y enjuagar",
    duracion: "5 a 10 minutos",
    beneficios: ["Nutrientes","Limpieza Profunda"],
    imagen: "./img/28.JPEG"
  },
  {
    nombre: "Gel para Cejas",
    codigo: "EfGh6789",
    categoria: { id: 'cabello', nombre: 'Capilar' },
    marca: [" E.L.F.", "The BrowGa", "L'Oréal", "Yuya", "Bardot"],
    contenido:"Fórmula especializada para la definición a las cejas",
    uso: "Aplicar con movimientos suaves para peinar y dar forma a las cejas.",
    duracion: "24 horas",
    precio: 20000,
    beneficios: ["Nutrientes","Fijador"],
    imagen: "./img/29.webp"
  },
  {
    nombre: "Gel Exfoliante Capilar",
    codigo: "IjKl1234",
    categoria: { id: 'cabello', nombre: 'Capilar' },
    marca: ["Kérastase", "Maxybelt", "Siberica", "Midnight", "MyM" ],
    precio: 50000,
    beneficios: ["Limpiador", "Crecimiento"],
    contenido:"Agentes exfoliantes suaves y revitalizantes",
    uso: "Aplicar sobre el cabello húmedo, masajear suavemente y enjuagar",
    duracion: "3 días",
    imagen: "./img/30.JPEG"
  },
  {
    nombre: "Crema Decolorante",
    codigo: "MnOp5678",
    categoria: { id: 'cabello', nombre: 'Capilar' },
    beneficios: ["Decolorar", "Calma"],
    marca: ["CYGNETIC", "ANDINA","OXY", "VEET" ],
    precio: 25000,
    tipocabello: "Todo tipo de cabello",
    contenido: "Ingredientes protectores",
    uso: "Aplicar la mezcla con la espátula cubriendo totalmente el vello",
    duracion: "15 minutos",
    imagen: "./img/31.jpg"
  },
  {
    nombre: "Crema para Peinar",
    codigo: "QrSt9012",
    categoria: { id: 'cabello', nombre: 'Capilar' },
    marca: ["EGO", "BIOEXPERT", "DOVE", "TRESEMME", "SEDAL" ],
    precio: 30000,
    beneficios:["Define", "Protege", "Suaviza"],
    tipocabello: "Todo tipo de cabello",
    contenido: "Ingredientes que definen y controla el cabello sin encrespamiento.",
    uso: "Aplicar sobre el cabello húmedo y peinar como de costumbre",
    imagen: "./img/32.webp"
  },
  {
    nombre: "Aceite de Argán",
    codigo: "UvWx3456",
    categoria: { id: 'cabello', nombre: 'Capilar' },
    marca: ["LIMAR", "KERASTASE", "PANTENE", "LEHIT"],
    precio: 50000,
    tipocabello: "Todo tipo de cabello",
    contenido: "Aceite de argán puro y nutritivo",
    beneficios: ["Crecimiento", "Cubrimiento", "Brillo"],
    uso:"Aplicar unas gotas sobre el cabello húmedo o seco concentrándose de medias apuntas",
    imagen: "./img/33.webp"
  },
  {
    nombre: "Fijador de Cabello",
    codigo: "YzAb7890",
    categoria: { id: 'cabello', nombre: 'Capilar' },
    marca: ["Recamier", "Tresemme", "Pantene" ],
    precio: 25000,
    tipocabello: "Todo tipo de cabello",
    contenido: "son sustancias químicas que crean una red",
    uso:"fijar y mantener peinados intactos",
    duracion: "4 horas",
    beneficios:["Fijar", "Brillo"],
    imagen: "./img/34.webp"
  },
  {
    nombre: "Shampoo Hidratante",
    codigo: " CdEf2345",
    categoria: { id: 'cabello', nombre: 'Capilar' },
    marca: ["Maria Nila", "Nuggela", "Isdin", "Herbal Essences", "PANTENE", "ELVIVE" ],
    precio: 40000,
    beneficios: ["Hidratación" ,"Limpieza"],
    tipocabello: "Todo tipo de cabello",
    uso: "Aplica el shampoo sobre el cabello mojado y deja que actúe durante 5 minutos",
    contenido: "Ingredientes hidratantes y nutritivos para restaurar el cabello.",
    imagen: "./img/35.webp"
  },
  {
    nombre: "Serum Capilar Reparado",
    codigo: "GhIj6789",
    categoria: { id: 'cabello', nombre: 'Capilar' },
    marca: [ "Kerastase", "Kaba", "Loreal", "Pantene"],
    precio: 70000,
    contenido: " Ingredientes con proteínas",
    tipocabello: "Dañado y Quebradizo",
    uso: "Aplicar gotas sobre el cabello húmedo para las partes dañadas",
    duracion: "24 horas",
    beneficios: ["Reparar", "Hidratar"],
    imagen: "./img/36.avif"
  },
  {
    nombre: "Espuma Voluminizador",
    codigo: "KlMn1234",
    categoria: { id: 'cabello', nombre: 'Capilar' },
    marca: ["Bruno Vassari", "Wella", "Revlon", "PUFF.ME" ],
    precio: 45000,
    tipoCapilar: " Cabello fino o sin volumen",
    contenido: "Fórmula que proporciona volumen y fuerza al cabello",
    uso: "Aplicar sobre el cabello húmedo y peinar",
    beneficios: ["Volumen", "Fijador", "Fuerza"],
    duracion: "5 horas",
    imagen: "./img/37.jpg"
  },
  {
    nombre: "Mascarilla Hidratante",
    codigo: "OpQr5678",
    categoria: { id: 'cabello', nombre: 'Capilar' },
    marca: ["Sephora", "Apivita","Neutrogena", "Garnier" ],
    precio: 60000,
    tipocabello: "Cabello seco y deshidratado",
    contenido: "Hidratantes para restaurar",
    uso: "Aplicar después del champú, dejar actuar y enjuagar bien",
    duracion: "3 días",
    beneficios: ["Hidratación", "Revitalizante", "Brillo"],
    imagen: "./img/38.png"
  },
  {
    nombre: "Shampoo Fortificante",
    codigo: "UvWx9012",
    categoria: { id: 'cabello', nombre: 'Capilar' },
    marca: [" Lambdapil", "Revita", "Loreal", "Anaphase" ],
    precio: 35000,
    tipocabello: "Cabello débil y caída",
    contenido: "Extracto de placentas y vitaminas",
    uso: "Aplicar en el cabello mojado, masajear y enjuagar",
    duracion: "uso continuo",
    beneficios: ["Fuerza", "Brilloso", "Hidrata"],
    imagen: "./img/39.webp"
  },
  {
    nombre: "Esmalte de Uñas",
    codigo: "StUv9012",
    categoria: { id: 'Uñas', nombre: 'Manicure' },
    marca: [ "fashion", "masglo", "bardot", "vogue" ],
    precio: 8000,
    color: [ "lila", "negro", "azul", "rosa"],
    acabado: "Brilloso",
    duracion: "12 días",
    uso: "Desliza el esmalte desde la base de la uña hasta el borde exterior",
    beneficios: ["Fortalecedor", "Crecimiento"],
    imagen: "./img/40.png"
  },
  {
    nombre: "Esmalte de Uñas de Secado Rápido",
    codigo: "WxYz3456",
    categoria: { id: 'uñas', nombre: 'Manicure' },
    marca: [ "fashion", "masglo", "bardot", "vogue" ],
    precio: 10000,
    color: "Rosa Pastel",
    acabado: "Brilloso",
    uso: "Desliza el esmalte desde la base de la uña hasta el borde exterior",
    beneficios: ["Fortalecedor", "Seca Rapido"],
    duracion: "15 días",
    imagen: "./img/41.webp"
  },
  {
    nombre: "Esmalte de Uñas Brillante",
    codigo: "AbCd7890",
    categoria: { id: 'uñas', nombre: 'Manicure' },
    marca: [ "fashion", "masglo", "bardot", "vogue" ],
    precio: 12000,
    color: "azul",
    acabado: "Brilloso",
    duracion: "15 días",
    uso: "Desliza el esmalte desde la base de la uña hasta el borde exterior",
    beneficios: ["Fortalecedor", "Crecimiento", "Brillante"],
    imagen: "./img/42.webp"
  },
  {
    nombre: " Esmalte de Uñas Duradero",
    codigo: "EfGh2345",
    categoria: { id: 'uñas', nombre: 'Manicura' },
    marca: [ "fashion", "masglo", "bardot", "vogue" ],
    precio: 7000,
    color: "Rosa Pastel",
    acabado: "Brilloso",
    duracion: "20 días",
    uso: "Desliza el esmalte desde la base de la uña hasta el borde exterior",
    beneficios: ["Crecimiento", "Duradero"],
    imagen: "./img/43.webp"
  },
  {
    nombre: "Esmalte de Uñas Hipoalergénico",
    codigo: "IjKl6789",
    categoria: { id: 'uñas', nombre: 'Manicura' },
    marca: ["RISQUE", "ANDREIA", "IDI", "RAFNNE" ],
    precio: 9000,
    color: "todos los tonos",
    acabado: "Brilloso",
    duracion: "15 días",
    uso: "Desliza el esmalte desde la base de la uña hasta el borde exterior",
    beneficios: ["Seca Rapido", "Crecimiento"],
    imagen: "./img/44.png"
  },
  {
    nombre: "Esmalte de Uñas Mate",
    codigo: "MnOp1234",
    categoria: { id: 'uñas', nombre: 'Manicura' },
    marca: [ "fashion", "masglo", "bardot", "vogue" ],
    precio: 11000,
    color: "piel",
    acabado: "Mate",
    duracion: "12 días",
    uso: "Desliza el esmalte desde la base de la uña hasta el borde exterior",
    beneficios: ["Seca Rapido", "Crecimiento", "Mate"],
    imagen: "./img/45.webp"
  },
  {
    nombre: "Esmalte de Uñas Metálico",
    codigo: "QrSt5678",
    categoria: { id: 'uñas', nombre: 'Manicura' },
    marca: [ "fashion", "masglo", "bardot", "vogue"],
    precio: 10000,
    color: "Varios Tonos",
    acabado: "Metalico",
    duracion: "12 días",
    uso: "Desliza el esmalte desde la base de la uña hasta el borde exterior",
    beneficios: ["Seca Rapido", "Fortalecimiento"],
    imagen: "./img/46.jpg"
  },
  {
    nombre: "Esmalte de Uñas Perlado",
    codigo: "YzAb3456",
    categoria: { id: 'uñas', nombre: 'Manicura' },
    marca: [ "fashion", "admiss", "bardot", "vogue" ],
    precio: 8000,
    color: ["Blanco Nacar", "Lila Nacar", "Azul", "Rosa"],
    acabado: "Brilloso",
    duracion: "12 días",
    uso: "Desliza el esmalte desde la base de la uña hasta el borde exterior",
    beneficios: ["Brillante", "Crecimiento"],
    imagen: "./img/47.webp"
  },
  {
    nombre: "Esmalte de Uñas Semipermanente",
    codigo: "CdEf7890",
    categoria: { id: 'uñas', nombre: 'Manicura' },
    marca: ["NUDE", "TRUE COLORS", "ORGANIC" ],
    precio: 14500,
    color: ["Rosa", "Azul", "Violeta", "Lila"],
    acabado: "Brilloso",
    duracion: "30 días",
    uso: "Desliza el esmalte desde la base de la uña hasta el borde exterior",
    beneficios: ["Crecimiento", "Fortalecedor"],
    imagen: "./img/48.jpg"
  },
  {
    nombre: "Esmalte de Uñas Texturizado",
    codigo: "GhIj2345",
    categoria: { id: 'uñas', nombre: 'Manicura' },
    marca: ["BARDOR", "LURE", "VOGUE", "AVON"],
    precio: 12000,
    color: ["Plateado", "Durazno", "Verde Caña", "Morado"],
    acabado: "Brilloso",
    duracion: "20 días",
    uso: "Desliza el esmalte desde la base de la uña hasta el borde exterior",
    beneficios: ["Seca Rapido", "Fortalecedor"],
    imagen: "./img/49.webp"
  },
  {
    nombre: "Esmalte de Uñas Transparente",
    codigo: "KlMn6789",
    categoria: { id: 'uñas', nombre: 'Manicura' },
    marca: [ "fashion", "masglo", "bardot", "vogue"],
    precio: 9000,
    color: "Transparente",
    acabado: "Brilloso",
    duracion: "12 días",
    uso: "Desliza el esmalte desde la base de la uña hasta el borde exterior",
    beneficios: ["Seca Rapido", "Protección", "Cuidar"],
    imagen: "./img/50.webp"
  },
  {
    nombre: "Esmalte de Uñas UV",
    codigo: "OpQr1234",
    categoria: { id: 'uñas', nombre: 'Manicura' },
    marca: ["O.P.I.", "aokitec", "cnd", "gelish", "ibd" ],
    precio: 15000,
    color: "Todos los tonos",
    acabado: "Brilloso",
    duracion: "25 días",
    uso: "Desliza el esmalte desde la base de la uña hasta el borde exterior",
    beneficios: ["Protección", "Crecimiento"],
    imagen: "./img/51.jpg"
  },
  ];
  
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

const boton = document.getElementById('reini');

