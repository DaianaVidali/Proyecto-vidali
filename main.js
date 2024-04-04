alert("Bienvenido a Kosiuko");

const productos = [
    {nombre: "Remeras",
     opciones: [
        {nombre: "Remera Giddy up", precio: 15000},
        {nombre: "Remera Giddy Up", precio: 18000},
     ]
       
    },

    {nombre: "Sweater", 
     opciones: [
        {nombre:"Sweater my heart", precio:44500},
        {nombre: "Sweater Believe", precio: 41250},
     ]

    },

    {nombre: "Jean",
     opciones:[
        {nombre:"Flora Chupin", precio: 39000},
        {nombre:"Jean Ginger", precio:43200},
     ]

    }
];

function mostrarOpciones(opciones) {
    let mensaje = "";
    opciones.forEach((opcion, index) => {
        mensaje += `${index + 1}-${opcion.nombre} $${opcion.precio}\n`;
    });
    return mensaje;
}

function agregarAlCarrito(carrito, productoElegido) {
    const producto = productos.find(p => p.nombre === productoElegido);
    if (producto) {
        let opciones = mostrarOpciones(producto.opciones);
        let eleccion = prompt(`Seleccionaste ${producto.nombre}:\n${opciones}\nElige una opción (1-${producto.opciones.length}):`);
        let opcionElegida = producto.opciones[eleccion - 1];
        carrito.push(opcionElegida);
        alert(`Agregaste ${opcionElegida.nombre} al carrito.`);
    } else {
        alert("Producto no válido");
    }
}

function ingresoUsuario(){

    let usuario;
    let nombreUsuario = prompt("Ingrese su nombre de usuario")
    if (nombreUsuario == nombreUsuario){
        alert("Bienvenido a tu cuenta " + nombreUsuario);

    } 


    let carrito = [];
    let seguirSeleccionando = true;

    while (seguirSeleccionando) {
        let opcion = prompt("¿En que sección te gustaria ver los descuentos? \n1-Remeras \n2-Sweater \n3-Jeans \n4-Salir")
        switch (opcion) {
            case "1":
                agregarAlCarrito(carrito, "Remeras");
                alert("Seleccionaste remeras, contamos con: \n1-Remera Stardust $15000 \n2-Remera Giddy Up $18000");
                break;
                case "2":
                    agregarAlCarrito(carrito, "Sweater");
                    break;
                case "3":
                    agregarAlCarrito(carrito, "Jean");
                    break;
                case "4":
                    alert("Estás saliendo de los descuentos");
                    seguirSeleccionando = false;
                    break;
                default:
                    alert("Opción no válida. Por favor, selecciona una opción válida.");
                    break;
            }
        }
    
        let total = 0;
        for (let producto of carrito) {
            total += producto.precio;
        }
    
        alert("Tu carrito de compras contiene:");
        for (let producto of carrito) {
            alert(producto.nombre + " - $" + producto.precio);
        }
        alert("Total a pagar: $" + total);
    
        
        alert("Gracias por visitar Kosiuko");
        
    }
    
    ingresoUsuario();



















