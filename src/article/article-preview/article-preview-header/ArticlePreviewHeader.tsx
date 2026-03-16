import { ArticlePreviewProps } from "../types";
import "./ArticlePreviewHeader.css";
import { FavoriteArticleButton } from "article/favorite-article-button";
import { ArticleInfo } from "article/article-info";

export const ArticlePreviewHeader = ({ article }: ArticlePreviewProps): JSX.Element => {

  return (
    <header className="article-preview-header">
      <ArticleInfo article={article} />
      <FavoriteArticleButton article={article} />
    </header>
  )
}