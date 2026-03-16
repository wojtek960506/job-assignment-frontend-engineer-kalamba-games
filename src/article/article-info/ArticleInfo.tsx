import { Link } from "react-router-dom";
import "./ArticleInfo.css";
import { ArticlePreviewProps } from "article/article-preview/types";
import { ProfileImage } from "profile/profile-image";

export const ArticleInfo = ({ article }: ArticlePreviewProps): JSX.Element => {

  const { author, createdAt } = article;

  return (
    <div className="article-info">
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
  )
}