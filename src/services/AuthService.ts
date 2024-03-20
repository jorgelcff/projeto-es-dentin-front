import AsyncStorage from "@react-native-async-storage/async-storage";
import { HttpHandle } from "./HttpHandle";
import axios from "axios";

export class AuthService {
  private loggedIn: boolean = false;
  private http: HttpHandle = new HttpHandle();
  private axios = axios.create({
    baseURL: "https://dentin.fly.dev/",
    headers: {
      "Content-Type": "application/json",
    },
  });
  async login(username: string, password: string): Promise<boolean> {
    const body = {
      email: username,
      senha: password,
      plataforma: "app",
    };

    console.log("body", JSON.stringify(body));
    console.log("getAxios", this.http.getAxios().getUri());

    try {
      const response = await this.axios.post("usuarios/login", body);
      console.log("response", response);
      if (response.status === 200) {
        await AsyncStorage.setItem("token", response.data.access_token);
        await AsyncStorage.setItem(
          "usuario",
          JSON.stringify(response.data.usuario)
        );
        this.loggedIn = true;
        return true;
      } else {
        return false;
      }
    } catch (error: any) {
      console.error("Error during login:", error);
      console.error("ErrorMessage:", error.message);
      console.error("ErrorCode:", error.code);
      return false;
    }
  }

  logout(): void {
    this.loggedIn = false;
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }
}
