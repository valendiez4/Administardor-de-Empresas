document.getElementById('productForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var categoria = document.getElementById('categoria').value;
    var producto = document.getElementById('producto').value;
    var stock = document.getElementById('stock').value;
    var precioCompra = document.getElementById('precioCompra').value;
    var precioVenta = document.getElementById('precioVenta').value;
    var cantidad = document.getElementById('cantidad').value;

    var newProduct = {
        categoria: categoria,
        producto: producto,
        stock: stock,
        precioCompra: precioCompra,
        precioVenta: precioVenta,
        cantidad: cantidad
    };

    var storedProducts = localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')) : [];
    storedProducts.push(newProduct);
    localStorage.setItem('products', JSON.stringify(storedProducts));

    alert('Producto agregado exitosamente');
    document.getElementById('productForm').reset();

    // Redirigir a la lista de productos
    window.location.href = 'productos.html';
});
