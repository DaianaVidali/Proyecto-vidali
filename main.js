/*alert("Bienvenido a nuestra pagina");

let nombre = prompt("Ingrese su nombre");
 
let edad = Number (prompt("Ingrese su edad"));


if (edad < 16) {
    alert("No puedes registrarte, eres menor de edad");
} else if (edad < 17) {
    alert("Puedes registrarte con la autorizacion de un adulto");

} else {
    alert("Puedes registrarte");
} 
function agregarMail(Mail){
    alert(`Agregar mail ${mail}`);
}
let mail = prompt("Ingrese su mail si desea recibir las novedades");
agregarMail
alert("Gracias por unirte a la comunidad Kosiuko, estaras recibiendo las novedades"); */

/*SEGUNDA PRE ENTREGA 
alert("Bienvenido Ezequiel");


const productos = [
    { nombre: "1.remera giddy up", precio: 18000 }, 
    { nombre: "2.sweater believe", precio: 41250 },
    { nombre: "3.chupin flora", precio: 39000 },
];

let carrito = [];
let seleccion = prompt("Hola ¿te gustaria comprar algún producto? si o no");

while (seleccion !== "si" && seleccion !== "no") {
    alert("Seleccione una opción");
    seleccion = prompt("Hola ¿te gustaria comprar algún producto? si o no");
}

if (seleccion === "si") {
    alert("Nuestra lista de productos ya se encuentra disponible");
    let losProductos = productos.map((producto) => producto.nombre + " " + producto.precio + "$");
    alert(losProductos.join(" - "));
} else if (seleccion === "no") {
    alert("Gracias por visitar Kosiuko");
}

while (seleccion === "si") {
    let producto = prompt("Agregar producto al carrito: remera giddy up, sweater believe, chupin flora");
    let precio = 0;

    if (producto === "remera giddy up" || producto === "sweater believe" || producto === "chupin flora") {
        switch (producto) {
            case "chupin flora":
                precio = 39000;
                break;
            case "sweater believe":
                precio = 41250;
                break;
            case "remera giddy up":
                precio = 18000;
                break;
        }
        
         carrito.push({ nombre: producto, precio: precio });
        
        alert(producto + " se ha agregado al carrito");
    } else {
        alert("Producto no identificado. Intente de nuevo");
    }
    
    seleccion = prompt("¿Desea agregar otro producto al carrito? si o no");
}

if (carrito.length > 0) {
    let total = carrito.reduce((sum, product) => sum + product.precio, 0);
    alert("Carrito de compras:");
    carrito.forEach((item) => alert(item.nombre + " - Precio: " + item.precio + "$"));
    alert("Total a pagar: " + total + "$");
} else {
    alert("Gracias por visitar Kosiuko");
} */


  
function obtenerCarrito() {
    return JSON.parse(localStorage.getItem('carrito')) || [];
}

function guardarCarrito(carrito) {
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

function agregarAlCarrito(producto, precio) {
    let carrito = obtenerCarrito();
    carrito.push({ producto, precio });
    guardarCarrito(carrito);
    actualizarCarrito();
}

function actualizarCarrito() {
    let carrito = obtenerCarrito();
    let listaCarrito = document.getElementById('lista-carrito');
    let totalCompra = 0;

    
    listaCarrito.innerHTML = '';

     carrito.forEach(item => {
        listaCarrito.innerHTML += `<p>${item.producto} - $${item.precio}</p>`;
        totalCompra += item.precio;
    });

    document.getElementById('total-compra').innerText = `Total de la compra: $${totalCompra}`;

    document.getElementById('carrito-titulo').innerText = `CARRITO DE COMPRAS (${carrito.length})`;
}

function pagar() {
    let carrito = obtenerCarrito();
    if (carrito.length === 0) {
        alert('El carrito está vacío. Agrega productos antes de pagar.');
        return;
    }

   
    let totalCompra = carrito.reduce((total, item) => total + item.precio, 0);
    alert(`Pago realizado. Total de la compra: $${totalCompra}. Gracias por tu compra.`);
    

    guardarCarrito([]);
    actualizarCarrito();
}

window.onload = actualizarCarrito; 

Swal.fire({
  title: "KOSIUKO",
  text: "Siempre es importante amarse y hacernos un mimo a uno mismo ¿Estás liste?",
  
});









 





