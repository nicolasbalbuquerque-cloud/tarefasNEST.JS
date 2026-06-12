import React from 'react';

// O Next.js exige que os metadados sejam exportados assim, se desejar
export const metadata = {
  title: 'Meu App de Tarefas',
  description: 'Gerenciador de tarefas acadêmicas',
};

//  A palavra "export default" é OBRIGATÓRIA aqui embaixo!
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      {/*  suppressHydrationWarning avisa ao Next.js para ignorar os atributos que as extensões injetam */}
      <body 
        suppressHydrationWarning 
        style={{ backgroundColor: '#121214', color: '#ffffff', fontFamily: 'sans-serif' }}
      >
        {/* O children representa a sua page.tsx sendo injetada na tela */}
        {children}
      </body>
    </html>
  );
}