import { Consultorio } from "../models/Consultorio";
import { GenericService } from "./GenericService";

export class ConsultorioService extends GenericService<Consultorio> {
  public async getConsultorios(): Promise<Consultorio[]> {
    return this.get("consultorios");
  }

  public async getConsultorio(id: number): Promise<Consultorio | Consultorio[]> {
    return this.get(`consultorios/${id}`);
  }

  public async postConsultorio(body: Consultorio): Promise<Consultorio | void> {
    return this.post("consultorios", body);
  }

  public async putConsultorio(id: number, Consultorio: Consultorio): Promise<Consultorio | void> {
    return this.put(`consultorios/${id}`, Consultorio);
  }

  public async deleteConsultorio(id: number): Promise<Consultorio | void> {
    return this.delete(`consultorios/${id}`);
  }
}
