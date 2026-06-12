Gerenciador de Tarefas - Next.js & Jest
Uma aplicação web robusta desenvolvida com Next.js (App Router), TypeScript e React 19 para listagem e adição de tarefas. O projeto foi estruturado seguindo boas práticas de arquitetura de software, separando componentes de servidor (Server Components), componentes de cliente (Client Components), hooks customizados e testes automatizados.

🛠️ Tecnologias Utilizadas
Framework: Next.js 15 (App Router)

Linguagem: TypeScript

Biblioteca Base: React 19

Ambiente de Testes: Jest & React Testing Library

Compilador e Transformador: Babel (@babel/preset-typescript e @babel/preset-react)

🚀 Como Executar o Projeto
1. Instalação das Dependências
A compatibilidade de dependências entre o React 19 e a Testing Library foi completamente ajustada no package.json. A instalação agora roda de forma limpa e direta, sem a necessidade de flags especiais (como --legacy-peer-deps ou --force):

npm install

2. Executar a Bateria de Testes
Para rodar a suíte completa de testes automatizados locais via Jest:

npm test

3. Build da Aplicação
O script de compilação padrão foi devidamente mapeado no package.json. Para gerar o build de produção da aplicação, execute:

npm run build

4. Executar em Modo de Desenvolvimento
Para levantar o servidor local de desenvolvimento em http://localhost:3000:

npm run dev

🧪 Cobertura de Testes Automatizados
Atendendo integralmente aos critérios e pontos de atenção da atividade, a configuração do Jest foi corrigida através do Babel para transformar e interpretar arquivos .tsx (JSX/TSX) corretamente.

Os testes passam de ponta a ponta sem erros de sintaxe e cobrem os seguintes escopos:

Server Components (Exigido): Teste assíncrono em src/app/page.test.tsx que simula e resolve o comportamento do Server Component principal (app/page.tsx), validando se a página carrega com sucesso os elementos e as tarefas iniciais simuladas.

Client Components: Testes unitários focados na renderização de elementos, manipulação de estado local e simulação de escrita no formulário do componente NovaTarefa.

Submissão de Formulários: Validação do disparo de eventos (fireEvent.submit), verificação se a função de callback foi chamada com os argumentos corretos e garantia de que o campo de input é limpo após o envio.

Custom Hooks: Teste isolado da lógica interna e do gerenciamento de estado do hook customizado useContadorDeTarefas utilizando renderHook e act().

Fluxo Integrado (Integração): Validação em tempo real do incremento do contador em tela e da injeção de novos elementos no DOM através do componente estrutural NovaTarefaWrapper.