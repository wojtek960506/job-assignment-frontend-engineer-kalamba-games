import { IArticle } from "api/articles-api";
import "./ArticleDetails.css";
import { UseQueryResult } from "react-query";
import { ArticleInfo } from "article/article-info";
import { FollowProfileButton } from "profile/follow-profile-button";
import { FavoriteArticleButton } from "article/favorite-article-button";
import ReactMarkdown from "react-markdown";

type ArticleDetailsProps = {
  queryResult: UseQueryResult<IArticle, unknown>;
}

export const ArticleDetails = ({ queryResult }: ArticleDetailsProps): JSX.Element => {
  const { data, isLoading, isError, error } = queryResult;

  if (isLoading) return <div>Loading profile ...</div>
  if (isError) return <div>Error while loading profile: {error}</div>

  if (!data) return <div>No details of profile</div>
  
  const { title, author, slug, body } = data;

  return (
    <div className="article-details">
      
      <header className="article-header">
        <h1 className="article-title">{title}</h1>

        <div className="article-controls">
          <ArticleInfo article={data} />
          <FollowProfileButton profile={author} slug={slug} />
          <FavoriteArticleButton article={data} hasText />
        </div>
      </header>

      <div className="article-body"><ReactMarkdown>{body}</ReactMarkdown></div>
    </div>
  )
}
