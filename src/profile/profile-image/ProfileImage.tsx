import { useEffect, useState } from "react";
import { FiUser } from "react-icons/fi";

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

type ProfileImageProps = {
  imageURL: string,
  placeholderSize: number,
}

export const ProfileImage = ({
  imageURL,
  placeholderSize,
}: ProfileImageProps): JSX.Element => {

  const [isImageLoading, setIsImageLoading] = useState(true);
  const [isImageValid, setIsImageValid] = useState(false);

  useEffect(() => {
    const tmp = async () => {
      setIsImageValid(await checkImage(imageURL));
      setIsImageLoading(false);
    }

    tmp();
  }, [imageURL]);

  return <>
    {isImageLoading || !isImageValid
      ? <FiUser size={placeholderSize}/>
      : <img
        src={imageURL}
        alt="User avatar"
        style={{width: "100%", borderRadius: "inherit" }}
      />
    }
  </>
}
