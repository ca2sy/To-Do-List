import "./App.css";

function ListaDeTarefa() {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen bg-linear-to-bl from-rose-400 to-rose-200 gap-4">
      <div className="bg-white h-15 w-sm flex justify-around rounded-2xl items-center shadow-sm">
        <input
          type="text"
          placeholder=" Nova Tarefa..."
          className=" border border-b-gray-700 h-1/2 w-2/3 rounded-2xl text-sm"
        />
        <button className="h-2/3 bg-rose-300 rounded-3xl p-2 text-sm hover:bg-rose-400 focus:border-rose-500">
          Adicionar
        </button>
      </div>
      <div className="bg-white h-10 w-sm flex justify-center rounded-2xl  shadow-sm"></div>
    </div>
  );
}

export default ListaDeTarefa;
