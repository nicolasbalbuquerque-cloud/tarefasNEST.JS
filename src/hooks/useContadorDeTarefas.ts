import { useState } from 'react';
import { Tarefa } from '../data/tarefasSimuladas';

export function useContadorDeTarefas(tarefasIniciais: Tarefa[]) {
  const [tarefas, setTarefas] = useState<Tarefa[]>(tarefasIniciais);

  const adicionarTarefa = (texto: string) => {
    const nova: Tarefa = { id: Date.now(), texto };
    setTarefas((prev) => [...prev, nova]);
  };

  return {
    tarefas,
    total: tarefas.length,
    adicionarTarefa,
  };
}