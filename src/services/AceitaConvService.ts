import { AceitaConv } from "../models/AceitaConv";
import { GenericService } from "./GenericService";

export class AceitaConvService extends GenericService<AceitaConv> {
    public async getAceitaConvs(): Promise<AceitaConv[]> {
      return this.get("aceita");
    }
  
    public async getAceitaConv(id: number): Promise<AceitaConv | AceitaConv[]> {
      return this.get(`aceita/${id}`);
    }
  
    public async postAceitaConv(body: AceitaConv): Promise<AceitaConv | void> {
      return this.post("aceita", body);
    }
  
    public async putAceitaConv(id: number, AceitaConv: AceitaConv): Promise<AceitaConv | void> {
      return this.put(`aceita/${id}`, AceitaConv);
    }
  
    public async deleteAceitaConv(id: number): Promise<AceitaConv | void> {
      return this.delete(`aceita/${id}`);
    }
  
    public async getConveniosByDentista(dentistaId: number): Promise<AceitaConv | AceitaConv[]> {
      return this.get(`aceita/convenio/${dentistaId}`);
    }

    public async getDentistasByConvenio(convenioId: number): Promise<AceitaConv | AceitaConv[]> {
        return this.get(`aceita/dentistas/${convenioId}`);
      }
  }
  