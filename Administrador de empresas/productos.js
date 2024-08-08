document.addEventListener('DOMContentLoaded', function() {
    var storedProducts = localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')) : [];
    var productTableBody = document.getElementById('productTableBody');

    storedProducts.forEach(function(product, index) {
        var row = document.createElement('tr');

        row.innerHTML = `
            <td>${product.producto}</td>
            <td>${product.stock}</td>
            <td>$${product.precioCompra}</td>
            <td>$${product.precioVenta}</td>
            <td>${product.categoria}</td>
            <td>${product.cantidad}</td>
            <td>
                <button class="edit-button" onclick="editProduct(this, ${index})">Editar</button>
                <button class="delete-button" onclick="deleteProduct(${index})">Borrar</button>
            </td>
        `;

        productTableBody.appendChild(row);
    });
});

function editProduct(button, index) {
    var row = button.parentNode.parentNode;
    var cells = row.querySelectorAll('td');

    for (var i = 0; i < cells.length - 1; i++) {
        var cell = cells[i];
        var cellValue = cell.innerText;
        cell.innerHTML = `<input type="text" value="${cellValue}">`;
    }

    button.innerText = 'Guardar';
    button.setAttribute('onclick', `saveProduct(this, ${index})`);
}

function saveProduct(button, index) {
    var row = button.parentNode.parentNode;
    var cells = row.querySelectorAll('td');
    var storedProducts = JSON.parse(localStorage.getItem('products'));

    for (var i = 0; i < cells.length - 1; i++) {
        var cell = cells[i];
        var input = cell.querySelector('input');
        cell.innerText = input.value;

        switch (i) {
            case 0:
                storedProducts[index].producto = input.value;
                break;
            case 1:
                storedProducts[index].stock = input.value;
                break;
            case 2:
                storedProducts[index].precioCompra = input.value;
                break;
            case 3:
                storedProducts[index].precioVenta = input.value;
                break;
            case 4:
                storedProducts[index].categoria = input.value;
                break;
            case 5:
                storedProducts[index].cantidad = input.value;
                break;
        }
    }

    localStorage.setItem('products', JSON.stringify(storedProducts));

    button.innerText = 'Editar';
    button.setAttribute('onclick', `editProduct(this, ${index})`);
}

function deleteProduct(index) {
    var storedProducts = JSON.parse(localStorage.getItem('products'));
    storedProducts.splice(index, 1);
    localStorage.setItem('products', JSON.stringify(storedProducts));
    location.reload();
}
