alert("Bienvenido/a a Kosiuko");

/*Nombre tutor: Maxi*/
let nombre = prompt("Ingrese su nombre de usuario");

if (nombre=="maxi"){
    alert("Hola " +nombre + " esperamos que los productos cargados sean de tu agrado");
    
}
else{
    alert("No eres Maxi");
}

let opcion = prompt("Elija la opcion que desea \n 1.Remeras \n 2.Sweaters \n 3.Jeans");

switch (opcion) {
    case "1":
        alert("Tenemos en stock la remera Stardust y Giddy Up");
        break;
    case "2":
        alert("Tenemos en stock el sweater Believe y My Heart");
        break;
    case "3":
        alert("Tenemos en stock el jean Ginger y Flora");
        break;
    default:
        alert("Elegiste una opcion no valida");
        break;

}
let remera = prompt("Elija la opcion que desea, si la opcion no es la requerida siga pasando \n 1.Remera Stardust \n 2.Remera Giddy Up");

switch (remera) {
    case "1":
        alert("La remera Stardust se agrego a su carrito");
        break;
    case "2":
        alert("La remera Giddy Up se agrego a su carrito");
        break;
}

let sweater = prompt("Elija la opcion que desea, si la opcion no es la requerida siga pasando \n 1.Sweater Believe \n 2.Sweater My Heart");

switch (sweater) {
    case "1":
        alert("El sweater Believe se agrego a su carrito");
        break;
    case "2":
        alert("El sweater My Heart se agrego a su carrito");
        break;
}

let jean = prompt("Elija la opcion que desea, si la opcion no es la requerida siga pasando \n 1.Jean Ginger  \n 2.Jean Flora");

switch (jean) {
    case "1":
        alert("El jean Ginger se agrego a su carrito");
        break;
    case "2":
        alert("El jean Flora se agrego a su carrito");
        break;
}

const despedirse = (nombre) => {
    alert("Muchas gracias por tu compra "  + nombre)
}
    despedirse("Maxi");