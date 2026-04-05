import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

function DataGridPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [category, setCategory] = useState("All")
  const ref = useRef(null)
  const navigate = useNavigate()
  console.log(category, "category")
  const rows =
    [
      { id: 1, image:"/favicon.svg", name: "Data Grid", description: "the Community version", price:400, category:"fruits"},
      { id: 2, image:"/favicon.svg", name: "Data Grid Pro", description: "the Pro version", price:100, category:"vegetables" },
      { id: 3, image:"/favicon.svg", name: "Data Grid Premium", description: "the Premium version", price:500, category:"fruits" },
    ]

  
  const columns = [
    {field:"image"
      , renderCell:(params)=>(
        <img src={params.row.image} alt="" />
      ),  headerName:"Product Image", flex:1},  
      { field: "name", headerName: "Product Name", flex:2 , sortable:false },
      { field: "price", headerName: "Price", flex: 1 },
      { field: "description", headerName: "Description", flex: 3 },
      { field: "category", headerName: "Category", flex: 2 },
    ];
    
  const[filteredRows,setFilteredRows]=useState(rows) 
  useEffect(()=>{
    ref.current = setTimeout(()=>{
     const result = rows.filter((product)=>(category !== "All" ?product.name.toLowerCase().includes(searchQuery.toLowerCase()) && product.category.toLowerCase().includes(category.toLowerCase()):product.name.toLowerCase().includes(searchQuery.toLowerCase())))
     setFilteredRows(result)
    }, 500)
    return ()=>clearTimeout(ref.current)
  },[searchQuery, category])

  return (

    <div className="flex flex-col justify-center items-center gap-4">
      <input type="text" value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)} className="border outline-none"/>
      <select onChange={(e)=>setCategory(e.target.value)}>
        <option value="All" selected>All</option>
        <option value="fruits">fruits</option>
        <option value="vegetables">vegetables</option>
      </select>
      <div style={{ height: 300, width: '80%' }}>
          <DataGrid
            rows={filteredRows}
            columns={columns}
            rowHeight={63}
            onRowClick={(rows)=>navigate(`/product/${rows.id}`, {state:rows.row})}
            className="cursor-pointer"
            disableColumnMenu
            disableColumnResize
            disableColumnSelector
          />
      </div>
    </div>
  );
}

export default DataGridPage;
