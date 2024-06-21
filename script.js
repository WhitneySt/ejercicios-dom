//---------------CAPTURAR O SELECCIONAR ELEMENTOS -------------------------------------

//Obtener elemento por su id: getElementById()
const section = document.getElementById("contenedor");

console.log(section);

console.log(document);



//Obtener elementos por su clase: getElementsByClassName()
const items = document.getElementsByClassName("item");

console.log(items);

//Obtener elementos por su nombre de etiqueta: getElementsByTagName()

const parrafos = document.getElementsByTagName("p");
console.log(parrafos);

//Obtener elemento por su tipo de selector CSS: querySelector();

//Capturar elemento por selector de tipo ID:

const filtros = document.querySelector("#filtros");
console.log(filtros);

//Capturar elemento por selector de tipo clase:

const primerItem = document.querySelector(".item");
console.log(primerItem);

const segundoItem = document.querySelector("li:nth-child(2)");
console.log(segundoItem);

//Capturar elemento por selector de tipo
const primerBoton = document.querySelector("button");
console.log(primerBoton);

//Capturar elemento por selector de atributos
const inputEmail = document.querySelector('input[type="email"]');
console.log(inputEmail);

//Obtener todos los elementos por su tipo de selector css

//Por selector de tipo
const todosLosBotones = document.querySelectorAll("button");
console.log(todosLosBotones);

//Por selector de clase
const elementosLi = document.querySelectorAll(".item");
console.log(elementosLi);

//--------------------------------MODIFICAR ELEMENTOS---------------------------
//innerHTML

filtros.innerHTML += "<button>Categoría</button>";

console.log(filtros.innerHTML);

// filtros.innerHTML = "<button>Mostrar filtos</button>"

//textContent

primerItem.textContent = "Lentejas";

//style

primerItem.style.color = "red";

filtros.style.backgroundColor = "blue";

//setAttribute

const imagen = document.querySelector("img");
imagen.setAttribute(
  "src",
  "https://tecnosoluciones.com/wp-content/uploads/2023/12/como-crear-imagenes-con-ChatGPT.png"
);

//classList

//Agregar clase
primerItem.classList.add("clase4");
console.log(primerItem.classList);

//Remover clase
primerItem.classList.remove("clase4");
console.log(primerItem.classList);

primerItem.classList.toggle("clase4");
console.log(primerItem.classList);

//Validar si existe o no una clase
const existeClaseItem = primerItem.classList.contains("clase5");
console.log(existeClaseItem);

//Reemplazar una clase existente por otra
primerItem.classList.replace("active", "nuevaClase");
console.log(primerItem.classList);


//----------------CONTROLAR EVENTOS---------------------

function mostrar() {
    alert("Hice click en este botón");
}


const nuevoBoton = document.getElementById("primerBoton")
nuevoBoton.addEventListener("click", () => {
    alert("Hice click en el primer botón");
})


const otroBoton = document.getElementById("resenas");

otroBoton.onclick = function () {
    alert("Hice click en el botón reseñas");
}
