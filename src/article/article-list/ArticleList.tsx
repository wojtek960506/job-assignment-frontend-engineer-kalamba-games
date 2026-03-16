import { IArticle } from "api/articles-api"
import { ArticlePreview } from "article/article-preview"
import { UseQueryResult } from "react-query"

type ArticleListProps = {
  queryResult: UseQueryResult<IArticle[], unknown>;
}

export const ArticleList = ({ queryResult }: ArticleListProps): JSX.Element => {
  
  const { data, isLoading, isError, error } = queryResult;

  if (isLoading) return <div>Loading articles ...</div>
  if (isError) return <div>Error while loading articles: {error}</div>

  if (!data || data.length === 0) return <div>No articles</div>
  
  // TODO context for article should be created to avoid prop drilling in the components
  // nested in each of ArticlePreview in the list
  return (
    <ul style={{ padding: "1rem 3rem" }}>
      {data.map(article => (<ArticlePreview key={article.slug} article={article} />))}
    </ul>
  )
}
