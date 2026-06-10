'use client';

import React from 'react';
import { Tarefa } from '../data/tarefasSimuladas';
import { useContadorDeTarefas } from '../hooks/useContadorDeTarefas';
import NovaTarefa from './NovaTarefa';

export default function NovaTarefaWrapper({ tarefasIniciais }: { tarefasIniciais: Tarefa[] }) {
  const { tarefas, total, adicionarTarefa } = useContadorDeTarefas(tarefasIniciais);

  return (
    <div>
      <p data-testid="contador">Total de tarefas: {total}</p>
      <NovaTarefa onAdicionar={adicionarTarefa} />
      <ul style={{ marginTop: '20px' }}>
        {tarefas.map((t) => (
          <li key={t.id}>{t.texto}</li>
        ))}
      </ul>
    </div>
  );
}