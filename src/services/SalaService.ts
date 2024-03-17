import { Sala } from "../models/Sala";
import { GenericService } from "./GenericService";

export class SalaService extends GenericService<Sala> {
  public async getSalas(): Promise<Sala[]> {
    return this.get("salas");
  }

  public async getSala(id: number): Promise<Sala | Sala[]> {
    return this.get(`salassalas/${id}`);
  }

  public async postSala(body: Sala): Promise<Sala | void> {
    return this.post("salas", body);
  }

  public async putSala(id: number, Sala: Sala): Promise<Sala | void> {
    return this.put(`salas/${id}`, Sala);
  }

  public async deleteSala(id: number): Promise<Sala | void> {
    return this.delete(`salas/${id}`);
  }
}
