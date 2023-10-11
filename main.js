alert("Bienvenido a nuestra pagina");

let nombre = prompt("Ingrese su nombre");
 
let edad = Number (prompt("Ingrese su edad"));


if (edad < 16) {
    alert("No puedes registrarte, eres menor de edad");
} else if (edad < 17) {
    alert("Puedes registrarte con la autorizacion de un adulto");

} else {
    alert("Puedes registrarte");
}