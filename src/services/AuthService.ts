import AsyncStorage from "@react-native-async-storage/async-storage";
import { HttpHandle } from "./HttpHandle";
import axios from "axios";

export class AuthService {
  private loggedIn: boolean = false;
  private http: HttpHandle = new HttpHandle();
  private axios = axios.create({
    baseURL: "https://dummyjson.com/",
    headers: {
      "Content-Type": "application/json",
    },
  });
  async login(username: string, password: string): Promise<boolean> {
    const body = {
      username: "kminchelle",
      password: "0lelplR",
    };

    console.log("body", JSON.stringify(body));
    console.log("getAxios", this.http.getAxios().getUri());

    try {
      const response = await this.axios.post("auth/login", {
        body: JSON.stringify(body),
      });
      console.log("response", response);
      if (response.status === 200) {
        await AsyncStorage.setItem("token", response.data.token);
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
