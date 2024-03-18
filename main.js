alert("Bienvenido a Kosiuko");

/*Nombre de usuario Gian*/

function ingresoUsuario(){

    let usuario = "Gian";
    let nombreUsuario = prompt("Ingrese su nombre de usuario").toLowerCase();
    if (nombreUsuario == "Gian".toLowerCase()){
        alert("Bienvenido a tu cuenta Gian");

    } else{
        alert("No eres Gian, por favor registrate para crear una cuenta");
    }

    let seguirSeleccionando = true;

    while (seguirSeleccionando) {
        let opcion = prompt("¿En que sección te gustaria ver los descuentos? \n1-Remeras \n2-Sweater \n3-Jeans \n4-Salir")
        switch (opcion) {
            case "1":
                alert("Seleccionaste remeras, contamos con: \n1-Remera Stardust $15000 \n2-Remera Giddy Up $18000");
                break;
            case "2":
                alert("Seleccionaste sweater, contamos con: \n1-Sweater My Heart $44500  \n2-Sweater Believe $41250");
                break;
            case "3":
                alert("Seleccionaste jeans, contamos con: \n1-Jean Ginger $43200 \n2-Chupin Flora $39000");
                break;
            case "4":
                alert("Gracias por visitar Kosiuko");
                return;    
                
        }
    }
    

    



}
ingresoUsuario();










