// Función para ajustar la cantidad de ventas
function adjustSales(rowNum, action) {
    var salesCell = document.getElementById('salesCount' + rowNum);
    var currentSales = parseInt(salesCell.textContent);

    if (action === 'increment') {
        salesCell.textContent = currentSales + 1;
    } else if (action === 'decrement' && currentSales > 0) {
        salesCell.textContent = currentSales - 1;
    }
}
