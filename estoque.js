
fetch('YOUR_WEB_APP_URL')
    .then(res => res.json())
    .then(data => {
        const tbody = document.querySelector('#estoque-table tbody');
        data.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.id}</td>
                <td contenteditable>${item.produto}</td>
                <td contenteditable>${item.qtde}</td>
                <td contenteditable>${item.vlr_unid}</td>
                <td>${item.vlr_total}</td>
                <td>
                    <button onclick="updateItem('${item.id}', this.parentNode.parentNode)">Salvar</button>
                    <button onclick="deleteItem('${item.id}')">Excluir</button>
                </td>
            `;
            tbody.appendChild(row);
        });
    });

function updateItem(id, row) {
    const cells = row.querySelectorAll('td');
    const qtde = parseFloat(cells[2].innerText);
    const vlrUnid = parseFloat(cells[3].innerText);
    const data = {
        action: 'update',
        id: id,
        produto: cells[1].innerText,
        qtde: qtde,
        vlr_unid: vlrUnid,
        vlr_total: (qtde * vlrUnid).toFixed(2)
    };
    fetch('YOUR_WEB_APP_URL', {
        method: 'POST',
        body: JSON.stringify(data)
    }).then(res => alert('Produto atualizado!'));
}

function deleteItem(id) {
    fetch('YOUR_WEB_APP_URL', {
        method: 'POST',
        body: JSON.stringify({ action: 'delete', id: id })
    }).then(res => alert('Produto excluído!'));
}
