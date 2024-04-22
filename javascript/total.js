const agregarAlCarrito = (producto) => {
    carrito.push(producto);
    actualizarCarrito();
};

const actualizarCarrito = () => {
    let total = 0;

    carrito.forEach((producto) => {
        total += producto.precio;
    });

    document.querySelector(".total-carrito").innerText = `Su total es de $${total}`;
};

