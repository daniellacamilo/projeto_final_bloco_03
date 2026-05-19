import { Link, useNavigate } from "react-router-dom"
import { FirstAidIcon, MagnifyingGlassIcon, ShoppingCartIcon, UserIcon } from "@phosphor-icons/react"
import { useState } from "react"

function Navbar() {

     // Estado para armazenar o termo digitado na busca
    const [termoBusca, setTermoBusca] = useState('')

    // Objeto responsável por redirecionar o usuário para uma outra rota
    const navigate = useNavigate()

    // Navega para a página de produtos filtrando pelo termo buscado
    function buscarProdutos() {
        if (termoBusca.trim() !== '') {
            navigate(`/produtos?busca=${termoBusca}`)
        }
    }


    return (
        <>
            <div className='w-full flex py-4
            			   bg-indigo-900 text-white'>

                <div className="w-full flex justify-between items-center px-8 text-lg">

                    <Link to="/home" className="flex items-center gap-2 text-2xl font-bold">
                        <div className="bg-red-500 p-1 rounded">
                            <FirstAidIcon color="white" size={32} />
                        </div>
                        FARMÁCIA
                    </Link>

                    <div className="flex gap-2">
                        <input
                            type="text"
                            className="border rounded px-20 bg-white text-black"
                        />
                        <button className="flex">
                            <MagnifyingGlassIcon size={32} weight="bold" color="#3b82f6" />
                        </button>
                    </div>


                    <div className='flex gap-4'>
                        <Link to='/produtos' className='hover:underline'>Produtos</Link>
                        <Link to='/categorias' className='hover:underline'>Categorias</Link>
                        <Link to='/cadastrarcategoria' className='hover:underline'>Cadastrar Categoria</Link>
                        <UserIcon size={32} />
                        <ShoppingCartIcon size={32} />
                    </div>

                </div>
            </div>
        </>
    )
}

export default Navbar