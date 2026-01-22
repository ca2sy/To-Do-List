import "./App.css";
import { useState, useEffect } from "react";

function App() {
  // Inicializar estado com dados do localStorage
  const [tarefas, setTarefas] = useState(() => {
    const tarefasSalvas = localStorage.getItem("tarefas");
    return tarefasSalvas ? JSON.parse(tarefasSalvas) : [];
  });
  
  const [novaTarefa, setNovaTarefa] = useState("");

  // Salvar tarefas sempre que mudarem
  useEffect(() => {
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
  }, [tarefas]);

  function adicionarTarefa() {
    if (novaTarefa.trim() === "") return;

    let novoId;
    if (tarefas.length > 0) {
      novoId = Math.max(...tarefas.map(t => t.id)) + 1;
    } else {
      novoId = 1;
    }

    setTarefas([
      ...tarefas,
      { id: novoId, text: novaTarefa, concluida: false },
    ]);

    setNovaTarefa("");
  }

  function concluirTarefa(id) {
    setTarefas(
      tarefas.map((tarefa) =>
        tarefa.id === id ? { ...tarefa, concluida: !tarefa.concluida } : tarefa
      )
    );
  }

  function deletarTarefa(id) {
    setTarefas(tarefas.filter((tarefa) => tarefa.id !== id));
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-screen bg-gradient-to-bl from-rose-400 to-rose-200 gap-4 p-4">
      <div className="bg-white h-15 w-full max-w-sm flex rounded-2xl justify-between items-center shadow-lg p-2">
        <input
          type="text"
          placeholder="Nova Tarefa..."
          value={novaTarefa}
          onChange={(e) => setNovaTarefa(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && adicionarTarefa()}
          className="border border-gray-300 h-10 w-2/3 rounded-2xl px-2 text-sm"
        />

        <button
          onClick={adicionarTarefa}
          className="h-10 bg-rose-300 rounded-3xl px-4 text-sm hover:bg-rose-400 focus:outline-none"
        >
          Adicionar
        </button>
      </div>

      <div className="bg-white w-full max-w-sm flex flex-col gap-2 rounded-2xl shadow-lg p-2 max-h-96 overflow-auto">
        {tarefas.length > 0 ? (
          tarefas.map((tarefa) => (
            <div
              key={tarefa.id}
              className="flex justify-between items-center p-2 border-b last:border-b-0"
            >
              <p className={`flex-1 ${tarefa.concluida ? "line-through text-gray-400" : ""}`}>
                {tarefa.text}
              </p>

              <div className="flex gap-2">
                <button onClick={() => concluirTarefa(tarefa.id)}>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt7IQ2mbMAG4DE8z9PoV6BduaGVbEzZ9g3tw&s"
                    alt="Concluída"
                    className="h-5 w-5"
                  />
                </button>
                <button onClick={() => deletarTarefa(tarefa.id)}>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxLhBLA-2PY4UHMHKXkAwMBX7MwDapBjf7jw&s"
                    alt="Deletar"
                    className="h-5 w-5"
                  />
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 p-4">
            Adicione novas tarefas!
          </p>
        )}
      </div>
    </div>
  );
}

export default App;