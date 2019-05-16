const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Planetas");
}) ;

app.get("/usuario", (req, res) => {
  let usuario = [
    { id: "01" ,nombre: "Jean Carlos ", apellido: "Cordero huertas", edad: 20, correo:"jeancarloscorderohuertasfcb@gmail.com", contraseña:"*******", genero:"masculino" },
    { id: "02",nombre: "Joel Jesús", apellido: "Naranjo Bravo", edad: 21, correo:"joexnm.17@gmail.com", contraseña:"*******", genero:"masculino" },
    { id:"03",nombre: "manuel gregorio", apellido: "gutierrez quiñones", edad: 26, correo:"mg.gutierrezx@gmail.com", contraseña:"********", genero:"masculino" }
  ];
  res.send(usuario);
});

app.get("/evaluacion", (req, res) => {
  let evaluacion = [
    {id:"11", nombre: "Jean Carlos", nota:4.5, idusuario:"01", idcontenido:"14"},
    { id:"11",nombre: "Joel Jesús", nota:3.2, idusuario:"02", idcontenido:"14"},
    {id:"11", nombre: "manuel gregorio", nota:4.4, idusuario:"03", idcontenido:"14" }
  ];
  res.send(evaluacion);
});

app.get("/contenidos", (req, res) => {
  let contenidos = [
    { id:"14",descripcion: "Sistema solar ", documentos: "PDF,WORD", videos:"sistema solar HD " },
  ];
  res.send(contenidos);
});

app.get("/actividad", (req, res) => {
  let actividad = [
    { id:"001",nombre: "arrastrar planetas", propiedades:"caracteristicas de cada uno de los planetas de nuestro sistema solar "},
  ];
  res.send(actividad);
});

app.listen(3000, () => {
  console.log("Server on port http://localhost:3000");
});
