import { Button } from "ui/button";
import { FaHeart } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import { useAuth } from "login/context";
import "./FavoriteArticleButton.css";
import { useMutation, useQueryClient } from "react-query";
import { favoriteArticle, unfavoriteArticle } from "api/articles-api";
import { ArticlePreviewProps } from "article/article-preview/types";
import classNames from "classnames";


export const FavoriteArticleButton = ({
  article,
  hasText = false,
}: ArticlePreviewProps & { hasText?: boolean }): JSX.Element => {

  const { slug, favorited, favoritesCount } = article;

  const { isAuthenticated } = useAuth();
  const history = useHistory();
  const queryClient = useQueryClient();

  // this button can be used in both Article page and Articles' List page
  // so both queries must be invalidated to keep the data up to date
  const favoriteMutation = useMutation(favoriteArticle, {
    onSuccess: () => {
      queryClient.invalidateQueries("articles");
      queryClient.invalidateQueries(["article", slug]);
    }
  });

  const unfavoriteMutation = useMutation(unfavoriteArticle, {
    onSuccess: () => {
      queryClient.invalidateQueries("articles");
      queryClient.invalidateQueries(["article", slug]);
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
      className={classNames(
        "favorite-button",
        favorited ? "" : "not-favorited-button",
      )}
      onClick={handleClick}
    >
        <FaHeart />
        {
          hasText
          ? `${favorited ? "Unfavorite article" : "Favorite artice"} (${favoritesCount})`
          : favoritesCount
        }
    </Button>
  )
}
