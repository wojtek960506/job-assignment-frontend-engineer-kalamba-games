import { getArticle } from "api/articles-api";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { ArticleDetails } from "./article-details";

type ArticleParams = { slug: string }

export const ArticlePage = (): JSX.Element => {
  
  const { slug } = useParams<ArticleParams>();

  const queryResultArticle = useQuery(
    ["article", slug],
    () => getArticle(slug)
  )

  return (
    <ArticleDetails queryResult={queryResultArticle} />
  )
}
