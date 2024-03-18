import { Consulta } from "../models/Consulta";
import { GenericService } from "./GenericService";

export class ConsultaService extends GenericService<Consulta> {
  public async getConsultas(): Promise<Consulta[]> {
    return this.get("consultas");
  }

  public async getConsulta(id: number): Promise<Consulta | Consulta[]> {
    return this.get(`consultas/${id}`);
  }

  public async postConsulta(body: Consulta): Promise<Consulta | void> {
    return this.post("consultas", body);
  }

  public async putConsulta(id: number, Consulta: Consulta): Promise<Consulta | void> {
    return this.put(`consultas/${id}`, Consulta);
  }

  public async deleteConsulta(id: number): Promise<Consulta | void> {
    return this.delete(`consultas/${id}`);
  }
}
