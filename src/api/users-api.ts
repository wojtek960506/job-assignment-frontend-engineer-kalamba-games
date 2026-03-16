import { api } from "./axios";

type UserCredentials = { email: string, password: string };
type User = {
  email: string;
  token: string;
  username: string;
  bio: string;
  image: string;
}

export const authenticateUser = async (data: UserCredentials): Promise<User> => {
  const response = await api.post("/users/login", { user: data });
  return response.data["user"];
}
