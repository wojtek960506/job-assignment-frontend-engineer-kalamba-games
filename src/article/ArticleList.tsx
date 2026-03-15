import { getArticles } from "api/articles-api"
import { useQuery } from "react-query"
import { ArticlePreview } from "./article-preview";

export const ArticleList = (): JSX.Element => {
  
  const { data, isLoading, isError, error } = useQuery("articles", getArticles);
  
  if (isLoading) return <div>Loading articles ...</div>
  if (isError) return <div>Error while loading articles: {error}</div>

  return (
    <ul style={{ padding: "1rem 3rem" }}>
      {data?.map(article => (<ArticlePreview key={article.slug} article={article} />))}
    </ul>
  )
}
