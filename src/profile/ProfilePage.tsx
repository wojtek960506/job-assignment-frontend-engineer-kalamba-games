import { getArticles } from "api/articles-api";
import { getProfile } from "api/profiles-api";
import { ArticleList } from "article/article-list";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom"
import { ProfileDetails } from "./profile-details";

type ProfileParams = { username: string }

export const ProfilePage = (): JSX.Element => {
  const { username } = useParams<ProfileParams>();

  const queryResultArticles = useQuery(
    ["articles", username],
    () => getArticles(username)
  );

  const queryResultProfile = useQuery(
    ["profile", username],
    () => getProfile(username)
  )
  
  return (
    <div>
      <ProfileDetails queryResult={queryResultProfile} />
      <ArticleList queryResult={queryResultArticles} />
    </div>
  )
}
