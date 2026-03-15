import { Link } from "react-router-dom";
import { ArticlePreviewProps } from "../types";
import "./ArticlePreviewHeader.css";

export const ArticlePreviewHeader = ({ article }: ArticlePreviewProps): JSX.Element => {

  return (
    <header className="article-preview-header">
      <div className="article-preview-info">
        <div className="article-author-image">{article.author.image}</div>
        <div className="article-preview-details">
          <Link
            className="article-author-username"
            to={`/profile/${article.author.username}`}
          >
            {article.author.username}
          </Link>
          <time className="article-preview-created-at">
            {new Date(article.createdAt).toLocaleDateString()}
          </time>
        </div>
      </div>
      <div className="article-favorite-button">{article.favoritesCount}</div>
    </header>
  )
}