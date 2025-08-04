import { createContext, useEffect, useState } from "react";
import pb from "../lib/db";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loadSession = async () => {
      if (pb.authStore.isValid) {
        setUser(pb.authStore.record);
      }
    };
    loadSession();
  }, []);

  async function login(username, password) {
    // console.log(JSON.stringify({username, password}));
    try {
      const userData = await pb
        .collection("users")
        .authWithPassword(username, password);
      setUser(userData.record);
    } catch (error) {
      console.error(`[Login]: ${error}`);
      throw error;
    }
  }

  async function register(handlename, username, password) {
    const data = {
      username,
      password,
      passwordConfirm: password,
      handlename,
    };

    try {
      const user = await pb.collection("users").create(data);
      await login(username, password);

      return user;
    } catch (error) {
      console.error(`[Register]: ${error}`);
      throw error;
    }
  }

  async function logout() {
    pb.authStore.clear();
    setUser(null);
  }

  return (
    <UserContext.Provider value={{ user, login, register, logout }}>
      {children}
    </UserContext.Provider>
  );
}
