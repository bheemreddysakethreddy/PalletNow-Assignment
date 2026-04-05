import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
// import ProductScreen from "./pages/ProductScreen";
// import DataGridPage from "./components/DataGrid";
const DataGridPage = lazy(()=>import("./components/DataGrid"))
const ProductScreen = lazy(()=>import("./pages/ProductScreen"))

function App() {

  return (
    <div className="mt-10">
      <BrowserRouter>
      <Suspense fallback={<h1 className="text-5xl">Loading ...</h1>}>
        <Routes>
          <Route path="/" element={<DataGridPage />} />
          <Route path="/product/:id" element={<ProductScreen />} />
          <Route path="*"  element={<Navigate to="/"/>}/>
        </Routes>
      </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
