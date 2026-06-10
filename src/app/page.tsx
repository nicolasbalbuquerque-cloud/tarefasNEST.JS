import React from 'react';
import { tarefasIniciais } from '../data/tarefasSimuladas';
import NovaTarefaWrapper from '../components/NovaTarefaWrapper';

// 🎯 Também precisa ter o "export default" aqui!
export default async function Page() {
  const tarefas = await Promise.resolve(tarefasIniciais);

  return (
    <main style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Lista de Tarefas Acadêmicas 📝</h1>
      <NovaTarefaWrapper tarefasIniciais={tarefas} />
    </main>
  );
}