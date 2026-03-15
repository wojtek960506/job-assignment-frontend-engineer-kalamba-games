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

export const getArticles = async (): Promise<IArticle[]> => {
  const response = await api.get("/articles");
  return response.data["articles"]
}
