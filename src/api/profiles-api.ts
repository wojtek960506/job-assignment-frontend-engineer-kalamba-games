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

export const followProfile = async (username: string): Promise<IProfile> => {
  const response = await api.post(`/profiles/${username}/follow`);
  return response.data["profile"];
}

export const unfollowProfile = async (username: string): Promise<IProfile> => {
  const response = await api.delete(`/profiles/${username}/follow`);
  return response.data["profile"];
}
