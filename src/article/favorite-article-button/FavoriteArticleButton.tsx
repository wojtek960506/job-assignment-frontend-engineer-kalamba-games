import { Button } from "ui/button";
import { FaHeart } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import { useAuth } from "login/context";
import "./FavoriteArticleButton.css";
import { useMutation, useQueryClient } from "react-query";
import { favoriteArticle, unfavoriteArticle } from "api/articles-api";
import { ArticlePreviewProps } from "article/article-preview/types";


export const FavoriteArticleButton = ({ article }: ArticlePreviewProps): JSX.Element => {

  const { slug, favorited, favoritesCount } = article;

  const { isAuthenticated } = useAuth();
  const history = useHistory();
  const queryClient = useQueryClient();

  const favoriteMutation = useMutation(favoriteArticle, {
    onSuccess: () => {
      queryClient.invalidateQueries("articles");
    }
  });

  const unfavoriteMutation = useMutation(unfavoriteArticle, {
    onSuccess: () => {
      queryClient.invalidateQueries("articles");
    }
  });

  const handleClick = async () => {
    if (!isAuthenticated) history.push('/login');
    else {
      if (favorited) unfavoriteMutation.mutate(slug);
      else favoriteMutation.mutate(slug);
    }
  }

  return (
    <Button
      variant={favorited ? "primary" : "secondary"}
      className={favorited ? "" : "not-favorited-button"}
      onClick={handleClick}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}>
        <FaHeart />
        {favoritesCount}
      </div>
    </Button>
  )
}
