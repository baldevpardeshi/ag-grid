// var columnDefs = [
//   { headerName: 'Index', field: 'index', sortable: true, filter: true, enableRowGroup: true},
//   { headerName: 'Name', field: 'name', sortable: true, filter: true },
//   { headerName: 'Batch', field: 'batch', sortable: true, filter: true },
//   { headerName: 'Status', field: 'status', sortable: true, filter: true },
//   { headerName: 'Price', field: 'price', sortable: true, filter: true }
// ];

// var rowData = [
//   { index: '1', name: 'Baldev Pardeshi', batch: 'first', status: 'active', price: '11000' },
//   { index: '2', name: 'Trushant Bhangre', batch: 'second', status: 'away', price: '12000' },
//   { index: '3', name: 'Ankush Zambre', batch: 'second', status: 'DND', price: '21000' },
//   { index: '4', name: 'Vinayak Bahirat', batch: 'first', status: 'active', price: '12000' },
//   { index: '5', name: 'Kunal Sathe', batch: 'third', status: 'active', price: '30000' },
//   { index: '6', name: 'Abhi Mohol', batch: 'second', status: 'away', price: '41000' },
// ];

// var autoGroupColumnDefs = {
//   headerName: 'Index',
//   field: 'index',
//   cellRenderer: 'autoGroupCellRenderer',
//   cellRendererParams: {
//     checkbox: true
//   }
// }

// var gridOptions = {
//   columnDefs: columnDefs,
//   autoGroupColumnDefs: autoGroupColumnDefs,
//   rowData: rowData,
//   rowSelection: 'multiple'
// };

// var gridDIv = document.querySelector('#myGrid');

// new agGrid.Grid(gridDIv, gridOptions);


var gridOptions = {
  columnDefs: [
    { field: 'athlete'},
    { field: 'age'},
    { field: 'country'},
    { field: 'year'},
    { field: 'date'},
    { field: 'sport'},
    { field: 'gold'},
    { field: 'silver'},
    { field: 'bronze'},
    { field: 'total'},
  ],
  defaultColDef: {
    sortable: true,
    filter: true,
  },
};

document.addEventListener("DOMContentLoaded", function () {
  var gridDIv = document.querySelector("#myGrid");
  new agGrid.Grid(gridDIv, gridOptions);
  fetch(
    "https://www.ag-grid.com/example-assets/olympic-winners.js"
  )
  
    .then((response) => response.json())
    .then((data) => gridOptions.api.setRowData(data));
});