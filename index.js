const express = require("express");
const mongoose = require("mongoose");
const app = express();
const dotenv = require("dotenv");

const userRoute = require("./src/routes/user");
const productRoute = require("./src/routes/product");
const categoryRoute = require("./src/routes/category");
const shoppingCartRoute = require("./src/routes/shopping-cart");
const Category = require("./src/models/category");

dotenv.config();
express.json();

console.log(process.env);
app.use(process.env.API_PREFIX, userRoute);
app.use(process.env.API_PREFIX, productRoute);
app.use(process.env.API_PREFIX, categoryRoute);
app.use(process.env.API_PREFIX, shoppingCartRoute);

mongoose
  .connect(process.env.CONNECTION_STRINGS)
  .then(() => {
    console.log("Connected to db succesfully");
    //#region  Category "Script"
    // Category.insertMany([
    //   {
    //     category: "Sahumerios Tierra Sagrada",
    //     description:
    //       "Embárcate en un viaje espiritual con los sahumerios Linea Tierra Sagrada. Sus aromas naturales te transportarán a un estado de serenidad y conexión. La Línea Tierra Sagrada incluye bombas herbales, copitas de carbón, sahumerios finos extra fuertes, sahumerios triple empaste, sahumerios siete elementos puros, sahumerios siete peticiones, exhibidores y más!",
    //     img: "../img/Categorias/tierrasagrada.jpg",
    //   },
    //   {
    //     category: "Velas Formas",
    //     description:
    //       "Son las velas más poderosas porque son transmutadoras de energía. Su secreto esta en poder usarlas para los distintos e infinitos rituales, eligiendo su tipo de forma y color adecuado, ya sea buscando la armonía, el equilibrio, la protección, el bienestar, lo que desees. También podes darle vida a tu espacio con nuestras velas de formas únicas.  Compra velas de formas y añade un toque distintivo a tu hogar, a ocasiones especiales o a tu vida.",
    //     img: "../img/Categorias/velasdeformas.webp",
    //   },
    //   {
    //     category: "Sahumerios Importados",
    //     description:
    //       "los sahumerios se presentan como varillas delgadas que se colocan en unos dispositivos conocidos como porta-sahumerios. Para que desprendan su fragancia, hay que prender fuego su extremo y, de este modo, el sahumerio comienza a quemarse y a perfumar el ambiente. Los inciensos son sahumerios.",
    //     img: "../img/Categorias/sahumeriosimportados.webp",
    //   },
    //   {
    //     category: "Velas Cotillon",
    //     description:
    //       "Las velas de Cotillon nos permiten iluminar un espacio en nuestro hogar o en cualquier lugar, creando un espacio con un toque mágico, acogedor y decorativo. Además, aporta sencillez y pueden ser muy útiles en cualquier tipo de evento, ya sean bodas, cumpleaños, cenas románticas…",
    //     img: "../img/Categorias/velascotillon.webp",
    //   },
    //   {
    //     category: "Productos Daniel",
    //     description:
    //       "Sumérgete en la experiencia sublime de la línea Daniel. Nuestros sahumerios y velas llenarán tu espacio de aromas cautivadores, mientras que nuestros productos de spa te brindarán momentos de relajación y bienestar. Descubre la perfecta combinación de indulgencia y serenidad con la línea Daniel. Deleita tus sentidos y eleva tu experiencia sensorial.",
    //     img: "../img/Categorias/lineadaniel.jpg",
    //   },
    //   {
    //     category: "Velas Comunes",
    //     description: "Cantidad: Und Color: a eleccion",
    //     img: "../img/Categorias/velascomunes.webp",
    //   },
    //   {
    //     category: "Articulos Varios",
    //     description: "Artículos varios para difumación y aromatización",
    //     img: "../img/Categorias/articulosvarios.webp",
    //   },
    //   {
    //     category: "Velas de noche",
    //     description:
    //       "Las Velas de noche, se usan tanto para los hornillos aromáticos como también iluminar eventos.",
    //     img: "../img/Categorias/velasdenoche.webp",
    //   },
    //   {
    //     category: "Hierbas",
    //     description: "Ideal para limpiar energéticamente espacios y personas.",
    //     img: "../img/Categorias/hierbas.jpg",
    //   },
    //   {
    //     category: "Velas Cortes de Luz",
    //     description: "Velas de cebo Para corte de luz",
    //     img: "../img/Categorias/velascortedeluz.jpg",
    //   },
    // ])
    //   .then(() => {
    //     console.log("ok");
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    //#endregion Category "Script"
  })
  .catch((err) => {
    console.log("There's been an error trying to connect.");
  });

app.listen(3000, () => {
  console.log("Server Succeeded connected.");
});
