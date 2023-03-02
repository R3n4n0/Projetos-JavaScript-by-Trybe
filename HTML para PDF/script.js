function downloadPdf() {
    const item = document.querySelector(".content");

    var opt = {
        margin: 1, filename: 'file.pdf', html2canvas: { scale: 2 }, jsPDF: {
            unit: 'in', format: 'letter',
            orientation: 'portrait'
        }
    };

    html2pdf().set(opt).from(item).save();
}