
alert("Bienvenido/a a Kosiuko");

/*Nombre tutor: tutor*/
let nombre = prompt("Ingrese su nombre de usuario");

if (nombre=="tutor"){
    alert("Hola " +nombre + " esperamos que los productos cargados sean de tu agrado");
    
}
else{
    alert("No eres el tutor");
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



