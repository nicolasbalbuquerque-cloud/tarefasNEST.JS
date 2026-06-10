'use client';

import React, { useState } from 'react';

interface NovaTarefaProps {
  onAdicionar: (texto: string) => void;
}

export default function NovaTarefa({ onAdicionar }: NovaTarefaProps) {
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    onAdicionar(input);
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} aria-label="form-tarefa">
      <input
        type="text"
        placeholder="Digite uma nova tarefa..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        aria-label="input-tarefa"
      />
      <button type="submit">Adicionar Tarefa</button>
    </form>
  );
}