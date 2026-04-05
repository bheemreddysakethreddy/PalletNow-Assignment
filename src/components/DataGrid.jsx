import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

function DataGridPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("All")
  const [priceSorting, setPriceSorting] = useState("Default")
  const [loading, setLoading] = useState(false)
  const [paginationModel, setPaginationModel] = useState({
    page:0,
    pageSize:5
  })

  const [pagesCount, setPagesCount] = useState(0)
  const navigate = useNavigate()
  console.log(categoryFilter, "category")



  const rows = useMemo(()=>[
  {
    id: 1,
    image: "/apple.jpg",
    name: "Apple",
    description:
      "Apples are rich sources of dietary fiber, vitamin C, and various antioxidants such as flavonoids and polyphenols. Regular consumption of apples may support heart health, improve gut microbiota, and help in reducing the risk of chronic diseases such as diabetes and cardiovascular disorders.",
    price: 200,
    category: "fruit",
  },
  {
    id: 2,
    image: "/avacado.jpg",
    name: "Avocado",
    description:
      "Avocados are nutrient-dense fruits known for their high content of monounsaturated fats, particularly oleic acid, which promotes heart health. They also provide potassium, fiber, and vitamins like K, E, and B-complex, supporting brain function, skin health, and reducing inflammation.",
    price: 300,
    category: "fruit",
  },
  {
    id: 3,
    image: "/banana.jpg",
    name: "Banana",
    description:
      "Bananas are an excellent source of potassium, vitamin B6, and carbohydrates, making them a great energy booster. They support heart health, aid digestion, and help regulate blood pressure while also being easy to digest and widely accessible.",
    price: 50,
    category: "fruit",
  },
  {
    id: 4,
    image: "/beetroot.jpg",
    name: "Beetroot",
    description:
      "Beetroot is rich in nitrates, antioxidants, and essential nutrients such as folate and iron. It helps improve blood circulation, enhances athletic performance, and supports liver detoxification while contributing to better cardiovascular health.",
    price: 60,
    category: "vegetable",
  },
  {
    id: 5,
    image: "/bottleGaurd.jpg",
    name: "Bottle Gourd",
    description:
      "Bottle gourd is a low-calorie vegetable with high water content, making it ideal for hydration and weight management. It aids digestion, promotes liver health, and is commonly used in traditional diets for its cooling and detoxifying properties.",
    price: 40,
    category: "vegetable",
  },
  {
    id: 6,
    image: "/brinjal.jpg",
    name: "Brinjal",
    description:
      "Brinjal, also known as eggplant, contains antioxidants like nasunin that protect brain cells from damage. It is rich in fiber, supports heart health, and helps in controlling blood sugar levels when included in a balanced diet.",
    price: 50,
    category: "vegetable",
  },
  {
    id: 7,
    image: "/capsicum.jpg",
    name: "Capsicum",
    description:
      "Capsicum is loaded with vitamin C, carotenoids, and antioxidants that help boost immunity and reduce inflammation. It supports eye health, improves skin quality, and adds vibrant color and nutrition to meals.",
    price: 80,
    category: "vegetable",
  },
  {
    id: 8,
    image: "/carrot.jpg",
    name: "Carrot",
    description:
      "Carrots are rich in beta-carotene, fiber, and antioxidants that promote eye health and boost immunity. They contribute to healthy skin, support digestion, and may help lower cholesterol levels when consumed regularly.",
    price: 70,
    category: "vegetable",
  },
  {
    id: 9,
    image: "/cauliflower.jpg",
    name: "Cauliflower",
    description:
      "Cauliflower is a versatile vegetable packed with vitamins C, K, and fiber. It supports digestion, promotes heart health, and acts as a low-carb alternative in various diets while providing powerful antioxidants.",
    price: 60,
    category: "vegetable",
  },
  {
    id: 10,
    image: "/cucumber.jpg",
    name: "Cucumber",
    description:
      "Cucumbers are hydrating vegetables with high water content and essential nutrients like vitamin K and potassium. They help maintain hydration, support skin health, and aid in digestion while being low in calories.",
    price: 40,
    category: "vegetable",
  },
  {
    id: 11,
    image: "/drumsticks.jpg",
    name: "Drumsticks",
    description:
      "Drumsticks (Moringa) are rich in calcium, iron, and vitamin C. They help strengthen bones, improve immunity, and support overall health. Their leaves and pods are widely used in traditional medicine for their nutritional benefits.",
    price: 90,
    category: "vegetable",
  },
  {
    id: 12,
    image: "/garlic.jpg",
    name: "Garlic",
    description:
      "Garlic contains sulfur compounds like allicin, which have strong medicinal properties. It helps boost immunity, reduce blood pressure, and improve cholesterol levels while also acting as a natural antimicrobial agent.",
    price: 120,
    category: "vegetable",
  },
  {
    id: 13,
    image: "/greenpeas.jpg",
    name: "Green Peas",
    description:
      "Green peas are a great source of plant-based protein, fiber, and vitamins like B-complex and vitamin C. They support digestive health, improve heart health, and provide sustained energy.",
    price: 80,
    category: "vegetable",
  },
  {
    id: 14,
    image: "/ladiesFinger.jpg",
    name: "Ladies Finger",
    description:
      "Ladies finger (okra) is rich in fiber, vitamins, and antioxidants. It supports digestion, helps regulate blood sugar levels, and promotes gut health due to its mucilage content.",
    price: 60,
    category: "vegetable",
  },
  {
    id: 15,
    image: "/mixedfruits.jpg",
    name: "Mixed Fruits",
    description:
      "A combination of seasonal fruits that provides a wide range of vitamins, minerals, and antioxidants. Mixed fruits help boost immunity, improve digestion, and provide natural energy for daily activities.",
    price: 250,
    category: "fruit",
  },
  {
    id: 16,
    image: "/pineapple.jpg",
    name: "Pineapple",
    description:
      "Pineapple is rich in vitamin C and bromelain, an enzyme that aids digestion. It supports immune function, reduces inflammation, and promotes healthy skin.",
    price: 150,
    category: "fruit",
  },
  {
    id: 17,
    image: "/potato.jpg",
    name: "Potato",
    description:
      "Potatoes are a rich source of carbohydrates, potassium, and vitamin C. They provide energy, support muscle function, and are widely used as a staple food in many cuisines.",
    price: 40,
    category: "vegetable",
  },
  {
    id: 18,
    image: "/redGraphes.jpg",
    name: "Red Grapes",
    description:
      "Red grapes contain antioxidants like resveratrol, which support heart health and may reduce inflammation. They also provide vitamins and natural sugars for quick energy.",
    price: 180,
    category: "fruit",
  },
  {
    id: 19,
    image: "/redWatermelon.jpg",
    name: "Red Watermelon",
    description:
      "Red watermelon is highly hydrating and rich in lycopene, an antioxidant that supports heart health. It helps maintain hydration and provides a refreshing source of vitamins A and C.",
    price: 100,
    category: "fruit",
  },
  {
    id: 20,
    image: "/ridgeGaurd.jpg",
    name: "Ridge Gourd",
    description:
      "Ridge gourd is a light and nutritious vegetable known for its digestive benefits. It helps detoxify the body, improve skin health, and is often used in healthy diets.",
    price: 50,
    category: "vegetable",
  },
  {
    id: 21,
    image: "/strawberry.jpg",
    name: "Strawberry",
    description:
      "Strawberries are rich in antioxidants, vitamin C, and manganese. They support heart health, improve skin texture, and help reduce inflammation while adding natural sweetness to the diet.",
    price: 220,
    category: "fruit",
  },
  {
    id: 22,
    image: "/yellowWatermelon.jpg",
    name: "Yellow Watermelon",
    description:
      "Yellow watermelon is a naturally sweet and hydrating fruit rich in vitamins A and C. It supports immunity, improves hydration, and offers a unique flavor compared to traditional red watermelon.",
    price: 120,
    category: "fruit",
  },
], [])

  
  const columns = [
    {field:"image",
      cellClassName:"flex justify-center items-center"
      , renderCell:(params)=>(
        <img src={params.row.image} alt="" className="w-[90%] h-[90%] object-contain" />
      ),  headerName:"Product Image", flex:1},  
      { field: "name", headerName: "Product Name", flex:2 , sortable:false },
      { field: "price", headerName: "Price", flex: 1 },
      { field: "description", headerName: "Description", flex: 3 },
      { field: "category", headerName: "Category", flex: 2 },
    ];


  const[filteredRows,setFilteredRows]=useState([])
  useEffect(()=>{
    setLoading(true)
    const timerId = setTimeout( async ()=>{
      function processData(data){
        let result = data.filter((product)=>(
          product.name.toLowerCase().includes(searchQuery.toLowerCase())
          && (categoryFilter==="All"||product.category.toLowerCase()===categoryFilter.toLowerCase())))
        result = [...result].sort((a,b)=>{
          if(priceSorting == "Asc"){
            return a.price - b.price
          }else if(priceSorting == "Desc"){
            return b.price - a.price
          }else{
            return 0
          }
        })
        setPagesCount(result.length)
        const start = paginationModel.page * paginationModel.pageSize
        const end = start+paginationModel.pageSize
        setFilteredRows(result.slice(start, end))
      }

      try {
        const query = new URLSearchParams({
          name:searchQuery,
          category:categoryFilter,
          price:priceSorting,
          page:paginationModel.page,
          pageSize:paginationModel.pageSize
        })
          const res = await fetch(`https://catalog-management-system-dev-ak3ogf6zea-uc.a.run.app/cms/products?${query}`, {
            headers:{
              "x-internal-call":"true"
            }
          })
          const data = await res.json()

          
          if(Array.isArray(data.data) && data.total){
            // if api returns entire data with filtering then directly set state accordingly
            setFilteredRows(data?.data)
            setPagesCount(data?.total)
          }
          else{ 
            // if api returns entire data without filtering  then call processData and pass the response
            processData(data)
          }

      } catch (error) {
        console.log(error.message)
        processData(rows)
      }finally{
        setLoading(false)
      }
    }, 700)
    return ()=>clearTimeout(timerId)
  },[searchQuery, categoryFilter, priceSorting, paginationModel, rows])


  useEffect(()=>{
    setPaginationModel(prev=>({...prev, page:0}))
  },[searchQuery, priceSorting, categoryFilter])

  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <div className="flex gap-10">
        <input type="text" value={searchQuery} placeholder="Search Product Name" onChange={(e)=>setSearchQuery(e.target.value)} className="border outline-none px-2 py-1 rounded"/>
      <div>
        <label htmlFor="categoryFilter" className="pr-2">category</label>
        <select id="categoryFilter" defaultValue={"All"} onChange={(e)=>setCategoryFilter(e.target.value)} className="border">
        <option value="All">All</option>
        <option value="fruit">fruits</option>
        <option value="vegetable">vegetables</option>
      </select>
      </div>
      <div>
        <label htmlFor="priceSorting" className="pr-2">
        sorting
      </label>
      <select id="priceSorting" defaultValue={"Default"} onChange={(e)=>setPriceSorting(e.target.value)} className="border">
        <option value="Default">Default</option>
        <option value="Asc">Increasing</option>
        <option value="Desc">Decreasing</option>
      </select>
      </div>
      </div>
      <div style={{ width: '96%' }}>
          <DataGrid
            rows={filteredRows}
            columns={columns}
            rowHeight={70}
            onRowClick={(params)=>navigate(`/product/${params.id}`, {state:params.row})}
            className="cursor-pointer"
            disableColumnMenu
            disableColumnResize
            disableColumnSelector
            rowCount={pagesCount}
            pageSizeOptions={[5,10,20]}
            paginationMode="server"
            paginationModel={paginationModel}
            onPaginationModelChange={(model)=>setPaginationModel(model)}
            loading={loading}
          />
      </div>
    </div>
  );
}

export default DataGridPage;
