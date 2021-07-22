# export-excel-csv
> Export excel and CSV files in Vue
# Install
> npm install export-excel-csv

# Usage
###   In the need to access the interface file to introduce:
    import exportExcelCsv from 'export-excel-csv'
### export-excel-csv API:
   export-excel-csv plugin has three parameters: set the list header of the exported file, export data, and the name of the exported file
  > The parameter format is as follows
  ```
     heads = {
          id:'编号',
          name:'姓名'
        }
     csvData = [{
                    id: 1,
                    name: '张三'
                  }]
     exportExcelCsv(heads,csvData,`file.xlsx`)
  ```
