import { api } from "./axios";

export type ArticleAuthor = {
  username: "string",
  bio: "string",
  image: "string",
  following: true
}

export interface IArticle {
  slug: string,
  title: string,
  description: string,
  body: string,
  createdAt: string,
  updatedAt: string,
  favorited: boolean,
  favoritesCount: number,
  author: ArticleAuthor,
  tagList: string[],
}

export const getArticles = async (author?: string): Promise<IArticle[]> => {
  
  const params = {
    ...(author && { author })
  }

  const response = await api.get("/articles", { params });
  return response.data["articles"]
}

export const favoriteArticle = async (slug: string): Promise<IArticle> => {
  const response = await api.post(`/articles/${slug}/favorite`);
  return response.data["article"];
}

export const unfavoriteArticle = async (slug: string): Promise<IArticle> => {
  const response = await api.delete(`/articles/${slug}/favorite`);
  return response.data["article"];
}
