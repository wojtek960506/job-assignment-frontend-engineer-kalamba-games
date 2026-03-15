import { ArticlePreviewHeader } from "./article-preview-header";
import "./ArticlePreview.css";
import { ArticlePreviewProps } from "./types";

export const ArticlePreview = ({ article }: ArticlePreviewProps): JSX.Element => {

  return (
    <li className="article-preview">
      <ArticlePreviewHeader article={article} />
      
      <h2>{article.title}</h2>
      <p>{article.description}</p>
    </li>
  )
}