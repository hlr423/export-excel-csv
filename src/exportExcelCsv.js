function exportExcelCsv (title, data, fileName) {
  let tables = '';
  let row = '';
  let typeArray = {
    xls: 'application/vnd.ms-excel',
    xlsx: 'application/vnd.ms-excel',
    csv: 'text/csv'
  }
  for (let item in title){
    if (title[item]) {
      row += title[item] + ','
    }
  }
  row = row.slice(0, -1);
  tables += row + '\r\n';
  for (let i = 0; i < data.length; i++) {
    let row = '';
    for (let j in title){
      if (title[j]) {
        row += '"' + (data[i][j] ? data[i][j] : '') + '"\t,'
      }
    }
    row.slice(0, row.length - 1);
    tables += row + '\r\n'
  }
  if (tables === '') {
    alert('Invalid data');
    return
  }
  let fileType = fileName.split('.');
  let uri = new Blob(['\ufeff' + tables], {type: typeArray[fileType[1]]});
  if (window.navigator && window.navigator.msSaveOrOpenBlob) {
    // for IE
    window.navigator.msSaveOrOpenBlob(tables, fileName)
  } else {
    // for Non-IE（chrome、firefox etc.）
    let link = document.createElement('a');
    link.href = URL.createObjectURL(uri);
    link.style = "visibility:hidden";
    link.download = fileName
    document.body.appendChild(link);
    link.click()
    document.body.removeChild(link)
  }
}

export default exportExcelCsv
