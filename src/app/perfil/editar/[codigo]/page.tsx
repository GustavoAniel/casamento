'use client'
import { Lock } from "lucide-react"

export default function EditaPerfil({ params }: { params: { codigo: string } }) {
  return (
    <main className="flex flex-1 flex-col justify-center items-center pt-20">
      <div className="bg-emerald-400 flex flex-col px-6 py-4 rounded-lg shadow-lg">
        <h1 className="text-white text-2xl font-bold pb-4">Complete as informações</h1>

        <form className="flex flex-col gap-3 items-center">
          <div className="w-full">
            <p className="text-white font-medium">Código</p>
            <label className="relative flex items-center hover:cursor-not-allowed">
              <Lock className="absolute text-gray-500 w-5 ml-1" />
              <input disabled className="rounded pl-6 py-1 text-gray-500 w-full shadow hover:cursor-not-allowed" value={params.codigo} />
            </label>
          </div>
          <div className="w-full">
            <p className="text-white font-medium ">Nome</p>
            <input disabled className="rounded pl-1 py-1 text-gray-500 w-full shadow hover:cursor-not-allowed" value="Gustavo Aniel Brito Trindade" />
          </div>
          <div className="w-full">
            <p className="text-white font-medium">Email</p>
            <input className="rounded pl-1 py-1 text-gray-500 w-full shadow" />
          </div>
          <div className="w-full">
            <p className="text-white font-medium">Telefone</p>
            <input className="rounded pl-1 py-1 text-gray-500 w-full shadow" />
          </div>
          <button className="bg-white text-emerald-500 rounded w-fit shadow-lg px-4 font-bold py-1" onClick={() => { null }}>Salvar</button>
        </form>

      </div>
    </main>
  )
}