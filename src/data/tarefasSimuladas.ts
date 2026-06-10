export interface Tarefa {
  id: number;
  texto: string;
}

export const tarefasIniciais: Tarefa[] = [
  { id: 1, texto: "Estudar Métodos Multicritério (MAUT)" },
  { id: 2, texto: "Configurar Jest no Next.js 15" },
];