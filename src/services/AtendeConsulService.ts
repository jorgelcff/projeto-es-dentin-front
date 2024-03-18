import { AtendeConsul } from "../models/AtendeConsul";
import { GenericService } from "./GenericService";

export class AtendeConsulService extends GenericService<AtendeConsul> {
  public async getAtendeConsuls(): Promise<AtendeConsul[]> {
    return this.get("atende");
  }

  public async getAtendeConsul(id: number): Promise<AtendeConsul | AtendeConsul[]> {
    return this.get(`atende/${id}`);
  }

  public async postAtendeConsul(body: AtendeConsul): Promise<AtendeConsul | void> {
    return this.post("atende", body);
  }

  public async putAtendeConsul(id: number, AtendeConsul: AtendeConsul): Promise<AtendeConsul | void> {
    return this.put(`atende/${id}`, AtendeConsul);
  }

  public async deleteAtendeConsul(id: number): Promise<AtendeConsul | void> {
    return this.delete(`atende/${id}`);
  }

  public async getDentistasByConsultorio(consultorio: number): Promise<AtendeConsul | AtendeConsul[]> {
    return this.get(`atende/dentistas/${consultorio}`);
  }

  public async getConsultoriosByDentista(dentista: number): Promise<AtendeConsul | AtendeConsul[]> {
    return this.get(`atende/consultorios/${dentista}`);
  }
}
