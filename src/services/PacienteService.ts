import { Paciente } from "../models/Paciente";
import { GenericService } from "./GenericService";

export class PacienteService extends GenericService<Paciente> {
  public async getPacientes(): Promise<Paciente[]> {
    return this.get("pacientes");
  }

  public async getPaciente(id: number): Promise<Paciente | Paciente[]> {
    return this.get(`pacientes/${id}`);
  }

  public async postPaciente(body: Paciente): Promise<Paciente | void> {
    return this.post("pacientes", body);
  }

  public async putPaciente(id: number, paciente: Paciente): Promise<Paciente | void> {
    return this.put(`pacientes/${id}`, paciente);
  }

  public async deletePaciente(id: number): Promise<Paciente | void> {
    return this.delete(`pacientes/${id}`);
  }

  public async getPacientesByNome(nome: string): Promise<Paciente | Paciente[]> {
    return this.get(`pacientes/nome/${nome}`);
  }
}
