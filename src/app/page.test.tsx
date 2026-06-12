import React from 'react';
import { render, screen } from '@testing-library/react';
import Page from './page';

describe('Page Server Component', () => {
  it('deve renderizar a página inicial carregando o componente assíncrono com sucesso', async () => {
    // RESOLVE O SERVER COMPONENT ASSÍNCRONO:
    // Como Page é uma async function, nós precisamos aguardar a execução dela para obter o JSX real.
    const PageComponent = await Page();
    
    // Agora renderizamos o resultado resolvido
    render(PageComponent);
    
    // Procura por qualquer botão que venha lá do formulário inicial
    const botaoAdicionar = screen.getByRole('button');
    expect(botaoAdicionar).toBeInTheDocument();
  });
});