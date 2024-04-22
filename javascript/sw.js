

const abrigo = [
    {
        nombre: "Sweater Believe",
        precio: 41250,
        img:"../img/sweater.webp",
        descripcion:"Sweater escote redondo tejido en flash con la palabra believe en el delantero y un diseño en cebra a rayas de color que recorre toda la prenda. Silueta relajada y largo modular a la cadera. Un sweater original y divertido para destacar tus look invernales. Referencia modelo: Altura 1,76. ",

    },
    {
        nombre: "Sweater Wonder",
        precio: 59000,
        img: "../img/sweater2.webp",
        descripcion:" Sweater tejido con combinaciones de texturas en diferentes hilados que hacen una prenda voluminosa. Silueta slim y largo modular por arriba de la rodilla. Una prenda súper cómoda para los días más invernales. Referencia modelo: Altura 1,76.",
    },
    {
        nombre: "Sweater My Heart",
        precio: 48000,
        img:"../img/sweater3.webp",
        descripcion:"Sweater escote en V. tejido en mohair con un diseño a rombos superpuestos rayado a colores en el delantero y a un solo tono en espalda. Silueta relajada y largo modular a la cintura. Un sweater original y colorido para destacar tus look invernales",
    
    },
]

const indumentariaS = document.querySelector(".contenedor-ropaS");



   


    abrigo.forEach((producto)=>{
        const div = document.createElement("article");
        div.classList.add("imagenesS");
        div.innerHTML = `
        <img src="${producto.img}" alt="${producto.nombre}">
        <p><strong>${producto.nombre} $${producto.precio}</strong></p>
        <p>${producto.descripcion}</p>
        

        `;

        const botonS = document.createElement("button");
        botonS.classList.add ("agregarS");
        botonS.innerText = "Agregar al carrito";

        botonS.addEventListener("click",() =>{
            agregarAlCarrito(producto);
           
        });

        
        div.appendChild(botonS); 
        indumentariaS.appendChild(div);

    });
    
   
    

   
    

    