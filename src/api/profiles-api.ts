import { api } from "./axios";

export interface IProfile {
  username: string;
  bio: string;
  image: string;
  following: boolean;
}

export const getProfile = async (username: string): Promise<IProfile> => {
  const response = await api.get(`/profiles/${username}`);
  return response.data["profile"];
}
