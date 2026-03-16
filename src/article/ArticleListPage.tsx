import { getArticles } from "api/articles-api"
import { useQuery } from "react-query"
import { ArticleList } from "./article-list";

export const ArticleListPage = (): JSX.Element => {
  
  const queryResult = useQuery("articles", () => getArticles());
  
  return (<ArticleList queryResult={queryResult} />);
}
