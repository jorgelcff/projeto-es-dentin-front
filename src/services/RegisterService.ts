import { GenericService } from "./GenericService";
import { PacienteCreate } from "../models/Paciente";

export class RegisterService extends GenericService<PacienteCreate> {
  public async getIsEmailAvailable(email: string) {
    return await this.get(`/user/available/${email}`);
  }

  public async registerUser(data: any) {
    console.log("Sending registration request:", data);
    const response = await this.post("/usuarios", data);
    console.log("Registration response:", response);
    return response;
  }
}
