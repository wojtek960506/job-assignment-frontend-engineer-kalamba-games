import { Link } from "react-router-dom";
import { ArticlePreviewProps } from "../types";
import "./ArticlePreviewHeader.css";
import { FavoriteArticleButton } from "article/favorite-article-button";
import { FiUser } from "react-icons/fi";
import { useEffect, useState } from "react";


const checkImage = (url: string): Promise<boolean> => {
  return new Promise(resolve => {
    const img = new Image();

    img.onload = () => {
      cleanup();
      resolve(true);
    }
    img.onerror = () => {
      cleanup();
      resolve(false);
    }

    function cleanup() {
      img.onload = null;
      img.onerror = null;
    }

    img.src = url;
  });
}

export const ArticlePreviewHeader = ({ article }: ArticlePreviewProps): JSX.Element => {

  const { author, createdAt } = article;

  const [isImageLoading, setIsImageLoading] = useState(true);
  const [isImageValid, setIsImageValid] = useState(false);

  const imageURL = author.image;

  useEffect(() => {
    const tmp = async () => {
      setIsImageValid(await checkImage(imageURL));
      setIsImageLoading(false);
    }

    tmp();
  }, [imageURL]);


  return (
    <header className="article-preview-header">
      <div className="article-preview-info">
        <Link
          className="article-author-image"
          to={`/profile/${author.username}`}  
        >
          {isImageLoading || !isImageValid
            ? <FiUser size={25}/>
            : <img
              src={imageURL}
              alt="User avatar"
              style={{width: "100%", borderRadius: "inherit" }}
            />
          }  
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