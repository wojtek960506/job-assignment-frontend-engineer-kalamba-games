import { IProfile } from "api/profiles-api";
import { UseQueryResult } from "react-query";

type ProfileDetailsProps = {
  queryResult: UseQueryResult<IProfile, unknown>;
}

export const ProfileDetails = ({ queryResult }: ProfileDetailsProps): JSX.Element => {

  const { data, isLoading, isError, error } = queryResult;

  if (isLoading) return <div>Loading profile ...</div>
  if (isError) return <div>Error while loading profile: {error}</div>

  if (!data) return <div>No details of profile</div>

  return (
    <div>
      {data.username}
      {data.image ?? "image"}
      {data.bio}
      {data.following}
    </div>
  )
}