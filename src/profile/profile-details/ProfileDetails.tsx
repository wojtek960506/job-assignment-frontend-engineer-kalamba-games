import { IProfile } from "api/profiles-api";
import { ProfileImage } from "profile/profile-image";
import { UseQueryResult } from "react-query";
import "./ProfileDetails.css";
import { FollowProfileButton } from "profile/follow-profile-button";

type ProfileDetailsProps = {
  queryResult: UseQueryResult<IProfile, unknown>;
}

export const ProfileDetails = ({ queryResult }: ProfileDetailsProps): JSX.Element => {

  const { data, isLoading, isError, error } = queryResult;

  if (isLoading) return <div>Loading profile ...</div>
  if (isError) return <div>Error while loading profile: {error}</div>

  if (!data) return <div>No details of profile</div>

  const { image, bio, username } = data;

  // TODO context for profile should be created to avoid prop drilling in the components
  // nested in ProfileDetails
  return (
    <div className="profile-details">
      <div className="profile-details-image">
        <ProfileImage imageURL={image} placeholderSize={60}/>
      </div>
      <h1 style={{fontSize: "1.75rem"}}>{username}</h1>
      <p className="profile-details-bio">{bio}</p>
      <div style={{ alignSelf: "end" }}><FollowProfileButton profile={data} /></div>
    </div>
  )
}