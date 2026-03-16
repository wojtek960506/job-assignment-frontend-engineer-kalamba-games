import { IProfile } from "api/profiles-api";
import { ProfileImage } from "profile/profile-image";
import { UseQueryResult } from "react-query";
import "./ProfileDetails.css";
import { Button } from "ui/button";
import { FaPlus } from "react-icons/fa";
import classNames from "classnames";

type ProfileDetailsProps = {
  queryResult: UseQueryResult<IProfile, unknown>;
}

export const ProfileDetails = ({ queryResult }: ProfileDetailsProps): JSX.Element => {

  const { data, isLoading, isError, error } = queryResult;

  if (isLoading) return <div>Loading profile ...</div>
  if (isError) return <div>Error while loading profile: {error}</div>

  if (!data) return <div>No details of profile</div>

  const { following, image, bio, username } = data;

  // const someWorkingImageURL = "https://i.pravatar.cc/150?img=3"

  return (
    <div className="profile-details">
      <div className="profile-details-image">
        <ProfileImage imageURL={image} placeholderSize={60}/>
      </div>
      <h1 style={{fontSize: "1.75rem"}}>{username}</h1>
      <p className="profile-details-bio">{bio}</p>
      <Button
        className={classNames(
          "follow-button",
          following ? "" : "not-following-button",
        )}
        
        variant={following ? "muted-primary" : "muted-secondary"}
      >
        <FaPlus />
        {`${following ? "Unfollow" : "Follow"} ${username}`}
      </Button>
    </div>
  )
}