import { HttpHandle } from "./HttpHandle";

export class DentistaService {
  private http: HttpHandle = new HttpHandle();

  public async getDentistas(): Promise<any> {
    try {
      const response = await this.http.getAxios().get("dentistas");
      return response.data;
    } catch (error: any) {
      console.error("Error during getDentistas:", error);
      console.error("ErrorMessage:", error.message);
      console.error("ErrorCode:", error.code);
      return false;
    }
  }
}
