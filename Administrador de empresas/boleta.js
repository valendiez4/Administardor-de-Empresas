
document.getElementById('salesForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const { jsPDF } = window.jspdf;

    // Retrieve form data
    const receiptNumber = document.getElementById('receiptNumber').value;
    const productName = document.getElementById('productName').value;
    const quantity = document.getElementById('quantity').value;
    const productDetails = document.getElementById('productDetails').value;
    const productPrice = document.getElementById('productPrice').value;
    const totalPrice = quantity * productPrice;

    // Create a new PDF document
    const doc = new jsPDF();

    // Add company information
    doc.setFontSize(14);
    doc.text('Empresa XYZ', 10, 10);
    doc.setFontSize(12);
    doc.text('RUC: 123456789', 10, 18);
    doc.text('Dirección: Calle Falsa 123, Ciudad', 10, 26);
    doc.text('Teléfono: (01) 234-5678', 10, 34);

    // Add receipt number
    doc.setFontSize(12);
    doc.text(`Número de Boleta: ${receiptNumber}`, 150, 10);

    // Add receipt title
    doc.setFontSize(16);
    doc.text('Boleta de Venta', 10, 50);

    // Add a horizontal line
    doc.setLineWidth(0.5);
    doc.line(10, 55, 200, 55);

    // Add product table
    doc.setFontSize(12);
    doc.autoTable({
        startY: 60,
        head: [['Producto', 'Cantidad', 'Detalles del Producto', 'Importe']],
        body: [
            [productName, quantity, productDetails, `$${totalPrice.toFixed(2)}`]
        ],
        theme: 'grid'
    });

    // Add footer
    doc.setLineWidth(0.5);
    doc.line(10, doc.lastAutoTable.finalY + 10, 200, doc.lastAutoTable.finalY + 10);
    doc.setFontSize(10);
    doc.text('Gracias por su compra!', 10, doc.lastAutoTable.finalY + 20);

    // Save the PDF
    doc.save('boleta.pdf');
});
