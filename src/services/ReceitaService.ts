import { Receita } from "../models/Receita";
import { GenericService } from "./GenericService";

export class ReceitaService extends GenericService<Receita> {
  public async getReceitas(): Promise<Receita[]> {
    return this.get("receitas");
  }

  public async getReceita(id: number): Promise<Receita | Receita[]> {
    return this.get(`receitas/${id}`);
  }

  public async postReceita(body: Receita): Promise<Receita | void> {
    return this.post("receitas", body);
  }

  public async putReceita(id: number, Receita: Receita): Promise<Receita | void> {
    return this.put(`receitas/${id}`, Receita);
  }

  public async deleteReceita(id: number): Promise<Receita | void> {
    return this.delete(`receitas/${id}`);
  }
}
