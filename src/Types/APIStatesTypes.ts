export type StateType = {
  id: number;
  sigla: string;
  nome: string;
  regiao: Regiao;
}

export type Regiao = {
  id: number;
  sigla: string;
  nome: string;
}