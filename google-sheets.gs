
function doPost(e) {
  var ss = SpreadsheetApp.openById('11-vBlIlERHpYn8b7k5Nljqz_HG0uetG5O8gOfQXyYLQ');
  var sheet = ss.getSheets()[0];
  var data = JSON.parse(e.postData.contents);
  if (data.action === 'update') {
    var range = sheet.getDataRange().getValues();
    for (var i = 1; i < range.length; i++) {
      if (range[i][0] == data.id) {
        sheet.getRange(i+1, 2, 1, 4).setValues([[data.produto, data.qtde, data.vlr_unid, data.vlr_total]]);
        return ContentService.createTextOutput('Atualizado');
      }
    }
  } else if (data.action === 'delete') {
    var range = sheet.getDataRange().getValues();
    for (var i = 1; i < range.length; i++) {
      if (range[i][0] == data.id) {
        sheet.deleteRow(i+1);
        return ContentService.createTextOutput('Excluído');
      }
    }
  } else {
    sheet.appendRow([data.id, data.produto, data.qtde, data.vlr_unid, data.vlr_total]);
    return ContentService.createTextOutput('Adicionado');
  }
}

function doGet() {
  var ss = SpreadsheetApp.openById('11-vBlIlERHpYn8b7k5Nljqz_HG0uetG5O8gOfQXyYLQ');
  var sheet = ss.getSheets()[0];
  var data = sheet.getDataRange().getValues();
  var result = [];
  for (var i = 1; i < data.length; i++) {
    result.push({
      id: data[i][0],
      produto: data[i][1],
      qtde: data[i][2],
      vlr_unid: data[i][3],
      vlr_total: data[i][4]
    });
  }
  return ContentService.createTextOutput(JSON.stringify(result)).setMimeType(ContentService.MimeType.JSON);
}
