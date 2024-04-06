const Product = require("../models/product");

async function getAllProducts(req, res) {
  const result = await Product.find({});
  if (result) {
    res.status(200).json({
      success: true,
      products: result,
    });
  } else {
    res.status(500).json({ success: false, error: "Error fetching products" });
  }
}

async function getProductsByCategoryId(req, res) {
  const { categoryId } = req.params; // Extract categoryId from URL parameters
  const result = await Product.find({
    catId: categoryId,
  });
  if (result) {
    res.status(200).json({
      success: true,
      products: result,
    });
  } else {
    res.status(500).json({ error: "Error fetching products", success: false });
  }
}

async function seed() {
  await Product.insertMany([
    {
      cod: "SKU 485",
      name: "Bomba Herbal",
      description:
        "Bomba de Hiervas para Baño SKU: 485 Cantidad: 3 Und Aroma: a eleccion",
      catId: "66112b1a643acf1225d84f9c",
      oferta: false,
      img: "../img/Productos/bombaherval.jpeg",
      price: 1600.0,
    },
    {
      cod: "SKU 39",
      name: "Caballito De San Jorge",
      description: "Vela SKU: 39 Cantidad: Und Color: a eleccion",
      catId: "66112b1a643acf1225d84f9d",
      oferta: false,
      img: "../img/Productos/velasanjorge.jpeg",
      price: 1200.0,
    },
    {
      cod: "SKU 873",
      name: "Sahumerios Sree Vani",
      description: "SKU: 873 Cantidad: 6 Hexágonos",
      catId: "66112b1a643acf1225d84f9e",
      oferta: false,
      img: "../img/productos/sahumeriossree.jpeg",
      price: 2000.0,
    },
    {
      cod: "SKU 228",
      name: "Vela Torneada Mini",
      description: "SKU: 228 Cantidad: 50 und",
      catId: "66112b1a643acf1225d84f9f",
      oferta: false,
      img: "../img/Productos/sahumeriossree.jpeg",
      price: 1950.0,
    },
    {
      cod: "SKU 79",
      name: "Gauchito Gil Bulto",
      description: "SKU: 79 Cantidad: Und Color: a eleccion",
      catId: "66112b1a643acf1225d84f9d",
      oferta: false,
      img: "../img/Productos/velagauchito.jpeg",
      price: 1600.0,
    },
    {
      cod: "SKU 54",
      name: "Copa Del Estudiante",
      description: "Cantidad: Und Color: a eleccion",
      catId: "66112b1a643acf1225d84f9d",
      oferta: false,
      img: "../img/productos/copondelestudiante.jpeg",
      price: 3500.0,
    },
    {
      cod: "SKU 202",
      name: "Esencia Daniel",
      description: "Capacidad: 10 Cc",
      catId: "66112b1a643acf1225d84fa0",
      oferta: false,
      img: "../img/productos/esenciadaniel.jpeg",
      price: 1897.0,
    },
    {
      cod: "SKU 745",
      name: "Caja Carbon Redondo",
      description: "Cantidad: 48 cajas",
      catId: "66112b1a643acf1225d84fa0",
      oferta: false,
      img: "../img/productos/cajacarbonredondo.jpeg",
      price: 32000.0,
    },
    {
      cod: "SKU 201",
      name: "Jabon Daniel",
      description: "Peso : 50 Grs Cantidad: 1 Und",
      catId: "66112b1a643acf1225d84fa0",
      oferta: false,
      img: "../img/productos/jabondaniel.jpeg",
      price: 1120.0,
    },
    {
      cod: "SKU 375",
      name: "Sahumerios Super Linea Optimista",
      description: "Cantidad: 8 Und Aroma: a eleccion",
      catId: "66112b1a643acf1225d84f9c",
      oferta: false,
      img: "../img/productos/sahumeriossuperlinea.jpeg",
      price: 2350.0,
    },
    {
      cod: "SKU 352",
      name: "Vela Larga Lisa",
      description: "Diámetro: 14,5 Mm Largo: 10,5 Cm Cantidad: X Und",
      catId: "66112b1a643acf1225d84fa1",
      oferta: false,
      img: "../img/productos/velalargalisa.jpeg",
      price: 3500.0,
    },
    {
      cod: "SKU 350",
      name: "Vela Corta Lisa",
      description: "Diámetro: 14,5 Mm Largo: 10,5 Cm Cantidad: X Und",
      catId: "66112b1a643acf1225d84fa1",
      oferta: false,
      img: "../img/productos/velacortalisa.jpeg",
      price: 1897.0,
    },
    {
      cod: "SKU 272",
      name: "Hornito Esmaltado Grande",
      description: "No hay valoraciones aún.",
      catId: "66112b1a643acf1225d84fa2",
      oferta: false,
      img: "../img/productos/hornitoesmaltadogrande.jpeg",
      price: 7000.0,
    },
    {
      cod: "SKU 1207",
      name: "Porta Sahumerios Plasticos",
      description: "Peso : 50 Grs Cantidad: 1 Und",
      catId: "66112b1a643acf1225d84fa2",
      oferta: false,
      img: "../img/productos/portasahumeriosplasticos.jpeg",
      price: 1500.0,
    },
    {
      cod: "SKU 28",
      name: "Vela De Noche Daniel",
      description: "Diámetro: 35 Mm Alto: 2 Cm Cantidad: 12 Und",
      catId: "66112b1a643acf1225d84fa3",
      oferta: false,
      img: "../img/productos/veladenochedaniel.jpeg",
      price: 2900.0,
    },
    {
      cod: "SKU 699",
      name: "Vela Numero con Gibre",
      description: "Cantidad: 10 und",
      catId: "66112b1a643acf1225d84f9f",
      oferta: false,
      img: "../img/productos/velanumerocongibre.jpeg",
      price: 750.0,
    },
    {
      cod: "SKU 706",
      name: "Exhibidor Mediano con Portablister",
      description: "Alto: 2 mts Ancho: 0,8 mts Profundidad: 0,25 mts",
      catId: "66112b1a643acf1225d84f9c",
      oferta: false,
      img: "../img/productos/exhibidormedianoportablister.jpeg",
      price: 25000.0,
    },
    {
      cod: "SKU 256",
      name: "Incienso En Granos",
      description: "Peso x Kg",
      catId: "66112b1a643acf1225d84fa4",
      oferta: false,
      img: "../img/productos/inciensoengranos.jpeg",
      price: 1350.0,
    },
    {
      cod: "SKU 198",
      name: "Quema sin Brasa a granel",
      description: "Peso x Kg",
      catId: "66112b1a643acf1225d84fa4",
      oferta: false,
      img: "../img/productos/quemasinbrasa.jpeg",
      price: 1850.0,
    },
    {
      cod: "SKU 193",
      name: "Caja Velas Daniel Cortas",
      description:
        "Diametro: 15 mm Largo: 10 cm Cantidad: 50 paquetes x 4 und Material: Sebo",
      catId: "66112b1a643acf1225d84fa5",
      oferta: false,
      img: "../img/productos/cajavelasdanielcortas.jpeg",
      price: 9350.0,
    },
  ]);
}

module.exports = { getAllProducts, getProductsByCategoryId, seed };
