import { followProfile, IProfile, unfollowProfile } from "api/profiles-api";
import classNames from "classnames";
import { Button } from "ui/button";
import { FaPlus } from "react-icons/fa";
import "./FollowProfileButton.css";
import { useAuth } from "login/context";
import { useHistory } from "react-router-dom";
import { useMutation, useQueryClient } from "react-query";

export const FollowProfileButton = ({ profile }: { profile: IProfile }): JSX.Element => {

  const { following, username } = profile;
  
  const { isAuthenticated } = useAuth();
  const history = useHistory();
  const queryClient = useQueryClient();

  const followMutation = useMutation(followProfile, {
      onSuccess: () => {
        queryClient.invalidateQueries(["profile", username]);
      }
    });
  
    const unfollowMutation = useMutation(unfollowProfile, {
      onSuccess: () => {
        queryClient.invalidateQueries(["profile", username]);
      }
    });

  const handleClick = () => {
    if (!isAuthenticated) history.push('/login');
    else {
      if (following) unfollowMutation.mutate(username);
      else followMutation.mutate(username);
    }
  }

  return (
    <Button
      className={classNames(
        "follow-button",
        following ? "" : "not-following-button",
      )}
      variant={following ? "muted-primary" : "muted-secondary"}
      onClick={handleClick}
    >
      <FaPlus />
      {`${following ? "Unfollow" : "Follow"} ${username}`}
    </Button>
  )
}
