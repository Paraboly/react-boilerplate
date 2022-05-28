import LogRocket from "logrocket";

const users = [{ username: "parabol", password: "parabol" }];
export default abstract class AuthService {
  static login(
    username: string,
    password: string
  ): Promise<Record<string, string>> {
    return new Promise((resolve, reject) =>
      setTimeout(() => {
        const user = users.find(
          (user) => user.username === username && user.password === password
        );
        if (user) {
          LogRocket.identify(username);
          localStorage.setItem("loginAt", new Date().toISOString());
          localStorage.setItem("user", username);
          resolve({ username, password });
        } else {
          reject(new Error("Invalid username or password"));
        }
      }, 1000)
    );
  }

  static logout(): Promise<void> {
    return new Promise((resolve) =>
      setTimeout(() => {
        localStorage.setItem("loginAt", new Date(1977).toISOString());
        resolve();
      }, 1000)
    );
  }

  static isLoggedIn(): boolean {
    const now = new Date().getTime();
    const lastLoggedIn =
      new Date(localStorage.getItem("loginAt")).getTime() || 0;
    const diff = (now - lastLoggedIn) / 1000 / 60 / 60;
    const expired = diff >= 3;
    return !expired;
  }
}
