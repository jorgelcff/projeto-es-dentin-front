import { Convenio } from "../models/Convenio";
import { GenericService } from "./GenericService";

export class ConvenioService extends GenericService<Convenio> {
  public async getConvenios(): Promise<Convenio[]> {
    return this.get("convenios");
  }

  public async getConvenio(id: number): Promise<Convenio | Convenio[]> {
    return this.get(`convenios/${id}`);
  }

  public async postConvenio(body: Convenio): Promise<Convenio | void> {
    return this.post("convenios", body);
  }

  public async putConvenio(id: number, Convenio: Convenio): Promise<Convenio | void> {
    return this.put(`convenios/${id}`, Convenio);
  }

  public async deleteConvenio(id: number): Promise<Convenio | void> {
    return this.delete(`convenios/${id}`);
  }
}
