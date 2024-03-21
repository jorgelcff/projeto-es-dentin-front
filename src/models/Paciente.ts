export interface Paciente {
  cpf: string;
  nome: string;
  telefone: string;
  dataNasc: string;
  sexo: string;
  cidade: string;
  uf: string;
  bairro: string;
  rua: string;
  endereco: string;
  fkConvenio: number;
  cardiaco: boolean;
  diabetico: boolean;
  alergico: any;
  ID: number;
}

export interface PacienteCreate {
  cpf: string;
  nome: string;
  email: string;
  senha: string;
  telefone: string;
  dataNasc: string;
  sexo: string;
  cidade: string;
  uf: string;
  bairro: string;
  rua: string;
  endereco: string;
  fkConvenio: number;
  cardiaco: boolean;
  diabetico: boolean;
  alergico: any;
}
