import { Link } from "react-router-dom";
import { ArticlePreviewProps } from "../types";
import "./ArticlePreviewHeader.css";
import { FavoriteArticleButton } from "article/favorite-article-button";
import { ProfileImage } from "profile/profile-image";

export const ArticlePreviewHeader = ({ article }: ArticlePreviewProps): JSX.Element => {

  const { author, createdAt } = article;

  return (
    <header className="article-preview-header">
      <div className="article-preview-info">
        <Link
          className="article-author-image"
          to={`/profile/${author.username}`}
        >
          <ProfileImage imageURL={author.image} placeholderSize={25} /> 
        </Link>
        <div className="article-preview-details">
          <Link
            className="article-author-username"
            to={`/profile/${author.username}`}
          >
            {author.username}
          </Link>
          <time className="article-preview-created-at">
            {new Date(createdAt).toLocaleDateString()}
          </time>
        </div>
      </div>
      <FavoriteArticleButton article={article} />
    </header>
  )
}