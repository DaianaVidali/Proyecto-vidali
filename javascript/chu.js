
const jeans = [

    {
        nombre: "Chupin Flora",
        precio: 39000,
        img:"../img/jean1.webp",
        descripcion:"Este chupin engomado de tiro alto y calce slim es un indispensable, para usar tanto en la tarde como en la noche, facil de combinar. Fácil de combinar y súper cómodo. ",

    },
    {
        nombre: "Chupin Premium High",
        precio: 41000,
        img: "../img/jean2.webp",
        descripcion:"Jean de tiro alto y fit skinny confeccionado en tejido con elasticidad. De calce slim, este jean multifacético es un indispensable que se puede usar en infinidad de opciones. Referencia modelo: Altura 1,76",
    },
    {
        nombre: "Mono Stone",
        precio: 168700,
        img:"../img/JEAN3.webp",
        descripcion:"Monoprenda denim negro con detalle de costuras a contratono. Calce regular con lazo para ajustar en cintura, mangas largas, bolsillos en delantero y trasero. Largo al tobillo. Customizado con lluvia de tachas en frente, mangas y espalda. Referencia modelo: Altura 1,76.  ",
    },

]

const indumentariaR = document.querySelector(".contenedor-ropaR");


   

   jeans.forEach((producto)=>{
        const div = document.createElement("article");
        div.classList.add("imagenesR");
        div.innerHTML = `
        <img src="${producto.img}" alt="${producto.nombre}">
        <p><strong>${producto.nombre} $${producto.precio}</strong></p>
        <p>${producto.descripcion}</p>
        
        `;

     const botonR = document.createElement("button");
     botonR.classList.add("agregarR");
     botonR.innerText = "Agregar al carrito";

      botonR.addEventListener("click",() => {
          agregarAlCarrito(producto);

        });

      
        div.appendChild(botonR); 
        indumentariaR.appendChild(div);

    });

   


  

   