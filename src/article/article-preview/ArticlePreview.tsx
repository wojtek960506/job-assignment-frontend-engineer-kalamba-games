import { Link } from "react-router-dom";
import { ArticlePreviewHeader } from "./article-preview-header";
import "./ArticlePreview.css";
import { ArticlePreviewProps } from "./types";

export const ArticlePreview = ({ article }: ArticlePreviewProps): JSX.Element => {

  return (
    <li className="article-preview">
      <ArticlePreviewHeader article={article} />
      <Link
        to={`/${article.slug}`}
        className="article-preview-link"
      >
        <h2>{article.title}</h2>
        <p className="cde">{article.description}</p>
      </Link>
    </li>
  )
}
