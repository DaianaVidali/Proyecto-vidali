const carrito = [];

const ropa = [
        {
            nombre: "Remera Giddy Up",
            precio: 18000,
            img:"../img/remera1.webp",
            descripcion: "Remera escote redondo y manga corta, confeccionada en jersey de algodón, una tela natural caracterizada por ser muy suave y cómoda. Estampa única de la colección ubicada en delantero y espalda. Calce clásico ",

        },
        {
            nombre: "Remera Leopard",
            precio: 16000,
            img: "../img/remera11.webp ",
            descripcion: "Remera escote redondo y manga corta confeccionada en jersey de algodón, una tela suave y natural. Estampa única de la colección ubicada en delantero, muy comoda y canchera. Calce clásico ",
        },
        {
            nombre: "Remera Stardust",
            precio: 22000,
            img:"../img/remera12.webp ",
            descripcion:"Remera escote redondo y manga corta confeccionada en jersey. Estampa única de la colección ubicada en delantero realizada con cristales. Dije marcario en centro de la espalda.Calce clásico ",
        },
       



 ]

    const indumentaria = document.querySelector(".contenedor-ropa");
    

   ropa.forEach((producto)=>{
        const div = document.createElement("article");
        div.classList.add("imagenesR");
        div.innerHTML = `
        <img src="${producto.img}" alt="${producto.nombre}">
        <p><strong>${producto.nombre} $${producto.precio}</strong></p>
        <p>${producto.descripcion}</p>
        
        `;

       const boton = document.createElement("button");
       boton.classList.add ("agregar");
       boton.innerText = "Agregar al carrito";

       boton.addEventListener("click", () =>{

         agregarAlCarrito(producto);

        });

       

       div.appendChild(boton);
       indumentaria.appendChild(div);

    });

   


 

    


   

   



   

  













