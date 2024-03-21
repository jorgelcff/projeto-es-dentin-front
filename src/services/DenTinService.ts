import { DenTin } from "../models/DenTin";
import { GenericService } from "./GenericService";

export class DenTinService extends GenericService<DenTin> {
  public async getDenTins(): Promise<DenTin[]> {
    return this.get("dentins");
  }

  public async getDenTinByPacienteId(pacienteId: number): Promise<DenTin | DenTin[]> {
    return this.get(`dentins/paciente/${pacienteId}`);
  }

  public async putDenTinByPacienteId(paciente: string, dentin: DenTin): Promise<DenTin | void> {
    return this.put(`dentins/paciente/${paciente}`, dentin);
  }
}
