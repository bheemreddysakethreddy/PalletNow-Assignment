import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ProductScreen from "./pages/ProductScreen";
import DataGridPage from "./components/DataGrid";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/product" element={<DataGridPage />} />
        <Route path="/product/:id" element={<ProductScreen />} />
        <Route path="*"  element={<Navigate to="/product"/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
