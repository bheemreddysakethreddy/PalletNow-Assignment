import { DataGrid } from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";


function DataGridPage() {

  const navigate = useNavigate()
  const rows = [
    { id: 1, image:"/favicon.svg", name: "Data Grid", description: "the Community version"},
    { id: 2, image:"/favicon.svg", name: "Data Grid Pro", description: "the Pro version" },
    { id: 3, image:"/favicon.svg", name: "Data Grid Premium", description: "the Premium version" },
  ];
  
  const columns = [
    {field:"image"
      , renderCell:(params)=>(
        <img src={params.row.image} alt="" />
      ),  headerName:"Product Image", width:200},  
      { field: "name", headerName: "Product Name", width: 200, sortable:false },
      { field: "description", headerName: "Description", width: 300 },
    ];
    


  return (

    <div>
      <div style={{ height: 300, width: '100%' }}>
          <DataGrid rows={rows} columns={columns} onRowClick={(rows)=>navigate(`/product/${rows.id}`)} className="cursor-pointer"/>
      </div>
    </div>
  );
}

export default DataGridPage;
