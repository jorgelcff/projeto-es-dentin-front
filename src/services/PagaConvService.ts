import { PagaConv } from "../models/PagaConv";
import { GenericService } from "./GenericService";

export class PagaConvService extends GenericService<PagaConv> {
  public async getPagaConvs(): Promise<PagaConv[]> {
    return this.get("paga");
  }

  public async getPagaConv(id: number): Promise<PagaConv | PagaConv[]> {
    return this.get(`paga/${id}`);
  }

  public async postPagaConv(body: PagaConv): Promise<PagaConv | void> {
    return this.post("paga", body);
  }

  public async putPagaConv(id: number, PagaConv: PagaConv): Promise<PagaConv | void> {
    return this.put(`paga/${id}`, PagaConv);
  }

  public async deletePagaConv(id: number): Promise<PagaConv | void> {
    return this.delete(`paga/${id}`);
  }

  public async getPacientesByConvenio(convenioId: number): Promise<PagaConv | PagaConv[]> {
    return this.get(`paga/nome/${convenioId}`);
  }
}
