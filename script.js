
document.getElementById('product-form').addEventListener('input', function () {
    const qtde = parseFloat(this.qtde.value) || 0;
    const vlrUnid = parseFloat(this.vlr_unid.value) || 0;
    this.vlr_total.value = (qtde * vlrUnid).toFixed(2);
});

document.getElementById('product-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const data = {
        id: this.id.value,
        produto: this.produto.value,
        qtde: this.qtde.value,
        vlr_unid: this.vlr_unid.value,
        vlr_total: this.vlr_total.value
    };
    
        fetch('https://script.google.com/macros/s/AKfycbx1234567890abcdefg/exec', {
        method: 'POST',
        body: JSON.stringify(data)
    }).then(res => alert('Produto cadastrado!'));
});
