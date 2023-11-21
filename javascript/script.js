// Load data from CSV file

fetch('data/Table_Input.csv')
  .then(response => response.text())
  .then(data => {
    // Parse CSV data
    const rows = data.split('\n');
    const table1Data = rows.slice(1).map(row => row.split(','));

    // Display Table 1
    const table1 = document.getElementById('table_1');
    displayTable(table1, table1Data, ['left', 'right'], ['50%', '50%']);

    // Process data for Table 2
    const categoryValues = {
      Alpha: parseInt(table1Data[4][1]) + parseInt(table1Data[19][1]),
      Beta: Math.floor(parseInt(table1Data[14][1]) / parseInt(table1Data[6][1])),
      Charlie: parseInt(table1Data[12][1]) * parseInt(table1Data[11][1]),
    };

    // Display Table 2
    const table2 = document.getElementById('table_2');
    const table2Data = Object.entries(categoryValues);
    displayTable(table2, table2Data, ['center', 'center'], ['50%', '50%']);
  })
  .catch(error => console.error('Error fetching CSV file:', error));

// Function to display table dynamically
function displayTable(table, data, columnAlignments, columnWidths) {
  // Create table rows
  data.forEach(rowData => {
    const row = table.insertRow();
    rowData.forEach((cellData, index) => {
      const cell = row.insertCell();
      cell.textContent = cellData;
      cell.style.textAlign = columnAlignments[index];
      cell.style.width = columnWidths[index];
    });
  });
}
