import React from 'react';
import { render, screen, fireEvent, act, renderHook } from '@testing-library/react';
import '@testing-library/jest-dom';
import NovaTarefa from '../components/NovaTarefa';
import { useContadorDeTarefas } from '../hooks/useContadorDeTarefas';
import NovaTarefaWrapper from '../components/NovaTarefaWrapper';

describe('Bateria de Testes Unitários - APP Tarefas', () => {
  
  // --- 1. TESTE DO COMPONENTE CLIENT <NovaTarefa /> ---
  test('Deve renderizar os elementos do formulario e permitir escrita', () => {
    const mockOnAdicionar = jest.fn();
    render(<NovaTarefa onAdicionar={mockOnAdicionar} />);

    const input = screen.getByPlaceholderText('Digite uma nova tarefa...');
    const botao = screen.getByRole('button', { name: /adicionar tarefa/i });

    expect(input).toBeInTheDocument();
    expect(botao).toBeInTheDocument();

    // Simula digitação
    fireEvent.change(input, { target: { value: 'Nova Tarefa de Teste' } });
    expect(input).toHaveValue('Nova Tarefa de Teste');
  });

  test('Deve submeter o formulario e limpar o input', () => {
    const mockOnAdicionar = jest.fn();
    render(<NovaTarefa onAdicionar={mockOnAdicionar} />);

    const input = screen.getByPlaceholderText('Digite uma nova tarefa...');
    const form = screen.getByRole('form', { name: /form-tarefa/i });

    fireEvent.change(input, { target: { value: 'Comprar livros' } });
    fireEvent.submit(form);

    // Verifica se a função de adicionar foi chamada com o texto certo
    expect(mockOnAdicionar).toHaveBeenCalledWith('Comprar livros');
    // Verifica se limpou o campo após o envio
    expect(input).toHaveValue('');
  });

  // --- 2. TESTE DO HOOK ISOLADO useContadorDeTarefas ---
  test('Deve gerenciar a contagem e adicao de tarefas no hook', () => {
    const mockIniciais = [{ id: 1, texto: 'Tarefa 1' }];
    
    // Renderiza o hook de forma isolada
    const { result } = renderHook(() => useContadorDeTarefas(mockIniciais));

    // Verifica valores iniciais retornados
    expect(result.current.total).toBe(1);
    expect(result.current.tarefas[0].texto).toBe('Tarefa 1');

    // Executa ação que altera o estado interno do hook usando o act()
    act(() => {
      result.current.adicionarTarefa('Tarefa 2');
    });

    // Verifica se os valores mudaram após a ação
    expect(result.current.total).toBe(2);
    expect(result.current.tarefas[1].texto).toBe('Tarefa 2');
  });

  // --- 3. TESTE DE INTEGRACAO DO FLUXO COMPLETO ---
  test('Deve renderizar a lista inicial e incrementar o contador ao adicionar na tela', () => {
    const mockIniciais = [
      { id: 1, texto: 'Fixar conceitos de Server Components' }
    ];

    render(<NovaTarefaWrapper tarefasIniciais={mockIniciais} />);

    // Verifica se renderizou o item inicial
    expect(screen.getByText('Fixar conceitos de Server Components')).toBeInTheDocument();
    
    // Verifica se o contador exibe o valor correto na tela
    const contador = screen.getByTestId('contador');
    expect(contador).toHaveTextContent('Total de tarefas: 1');

    // Adiciona uma nova tarefa pela interface gráfica simulada
    const input = screen.getByPlaceholderText('Digite uma nova tarefa...');
    const botao = screen.getByRole('button', { name: /adicionar tarefa/i });

    fireEvent.change(input, { target: { value: 'Aprender RTK Query' } });
    fireEvent.click(botao);

    // O contador na tela deve ter mudado para 2
    expect(contador).toHaveTextContent('Total de tarefas: 2');
    expect(screen.getByText('Aprender RTK Query')).toBeInTheDocument();
  });
});