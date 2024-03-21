export interface Consulta {
    fkPaciente: number;
    dataConsulta: string;
    horaConsulta: string;
    fkDentista: number;
    tipo: string;
    preco: number;
    sala: string;
    status: string;
    fkConsultorio: number;
    comentario: string;
    avaliacao: number;
  }
  