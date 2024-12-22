import { useState } from 'react';
import { AgGridReact } from 'ag-grid-react'; // React Data Grid Component
import 'ag-grid-community/styles/ag-grid.css'
import 'ag-grid-community/styles/ag-theme-quartz.css'
import './App.css'

//https://www.ag-grid.com/react-data-grid/getting-started/

interface CarInfo {
  make: string;
  model: string;
  price: number;
  electric: boolean;
}
function App() {
       // Row Data: The data to be displayed.
  const [rowData , setRowData] = useState<CarInfo[]>([
      { make: "Tesla", model: "Model Y", price: 64950, electric: true },
      { make: "Ford", model: "F-Series", price: 33850, electric: false },
      { make: "Toyota", model: "Corolla", price: 29600, electric: false },
  ]);

  // Column Definitions: Defines the columns to be displayed.
  const [colDefs] = useState([
      { field: "make" },
      { field: "model" },
      { field: "price" },
      { field: "electric" } ]);

    return (
      <div className='ag-theme-quartz' style={{height: 500}}>
        <AgGridReact rowData={rowData} columnDefs={colDefs} />
      </div>
  )

}

export default App
