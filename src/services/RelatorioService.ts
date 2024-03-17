import { Relatorio } from "../models/Relatorio";
import { GenericService } from "./GenericService";

export class RelatorioService extends GenericService<Relatorio> {
  public async getRelatorios(): Promise<Relatorio[]> {
    return this.get("relatorios");
  }

  public async getRelatorio(id: number): Promise<Relatorio | Relatorio[]> {
    return this.get(`relatorios/${id}`);
  }

  public async postRelatorio(body: Relatorio): Promise<Relatorio | void> {
    return this.post("relatorios", body);
  }

  public async putRelatorio(id: number, Relatorio: Relatorio): Promise<Relatorio | void> {
    return this.put(`relatorios/${id}`, Relatorio);
  }

  public async deleteRelatorio(id: number): Promise<Relatorio | void> {
    return this.delete(`relatorios/${id}`);
  }

  public async getRelatoriosByDenTin(dentinId: number): Promise<Relatorio | Relatorio[]> {
    return this.get(`relatorios/dentin/${dentinId}`);
  }

  public async deleteRelatoriosByDenTin(dentinId: number): Promise<Relatorio | void> {
    return this.delete(`relatorios/dentin/${dentinId}`);
  }
}
