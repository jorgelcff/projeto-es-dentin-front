import { Dentista } from "../models/Dentista";
import { GenericService } from "./GenericService";

export class DentistaService extends GenericService<Dentista> {
  public async getDentistas(): Promise<Dentista[]> {
    return this.get("dentistas");
  }

  public async getDentista(id: number): Promise<Dentista | Dentista[]> {
    return this.get(`dentistas/${id}`);
  }

  public async postDentista(body: Dentista): Promise<Dentista | void> {
    return this.post("dentistas", body);
  }

  public async putDentista(id: number, dentista: Dentista): Promise<Dentista | void> {
    return this.put(`dentistas/${id}`, dentista);
  }

  public async deleteDentista(id: number): Promise<Dentista | void> {
    return this.delete(`dentistas/${id}`);
  }

  public async getDentistasByCidade(cidade: string): Promise<Dentista | Dentista[]> {
    return this.get(`dentistas/cidade/${cidade}`);
  }

  public async getDentistasByNome(nome: string): Promise<Dentista | Dentista[]> {
    return this.get(`dentistas/nome/${nome}`);
  }

  public async getDentistasByEspecialidade(especialidade: string): Promise<Dentista | Dentista[]> {
    return this.get(`dentistas/especialidade/${especialidade}`);
  }
}
