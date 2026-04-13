import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/home/Home"
import DeletarCategoria from "./components/categoria/deletarcategoria/DeletarCategoria"
import FormCategoria from "./components/categoria/formcategoria/FormCategoria"
import ListarCategorias from "./components/categoria/listarCategorias/ListarCategorias"
import DeletarProduto from "./components/produtos/deletarproduto/DeletarProduto"
import FormProduto from "./components/produtos/formproduto/FormProduto"
import ListarProdutos from "./components/produtos/listaproduto/ListaProdutos"
import Footer from "./components/footer/Footer"
import Navbar from "./components/navbar/Navbar"


function App() {

  return (
    <>
    <BrowserRouter>
      <Navbar />
        <div className="flex flex-col min-h-[70vh] bg-slate-200">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/categorias" element={<ListarCategorias />} />
            <Route path="/cadcategoria" element={<FormCategoria />} />
            <Route path="/editarcategoria/:id" element={<FormCategoria />} />
            <Route path="/deletarcategoria/:id" element={<DeletarCategoria />} />
            <Route path="/produtos" element={<ListarProdutos />} />
            <Route path="/cadproduto" element={<FormProduto />} />
            <Route path="/editarproduto/:id" element={<FormProduto />} />
            <Route path="/deletarproduto/:id" element={<DeletarProduto />} />
          </Routes>
        </div>
      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App