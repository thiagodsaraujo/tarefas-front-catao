import { useEffect, useState } from "react";
import FormTarefa from "./componentes/FormTarefa";
import ListaDeTarefas from "./componentes/ListaDeTarefas";
import axios from "axios";

const URL_BACK = 'http://localhost:5000/tarefas';

function App() {
  const [tarefas, setTarefas] = useState([]);

  const carregarTarefas = () => {
    axios.get(URL_BACK).then(({data}) => {
      setTarefas(data);
    });
  };

  useEffect(() => {
    carregarTarefas();
  }, []);

  const adicionarTarefa = (form) => {
    return axios.post(URL_BACK, form).then(() => {
      carregarTarefas();
    });
  };

  const excluirTarefa = (tarefa) => {
    return axios.delete(URL_BACK + '/' + tarefa._id).then(() => {
      carregarTarefas();
    });
  };

  return (
    <>
      <FormTarefa onAdicionar={adicionarTarefa}/>
      <ListaDeTarefas tarefas={tarefas} onExcluir={excluirTarefa}/>
    </>
  );
}

export default App;
