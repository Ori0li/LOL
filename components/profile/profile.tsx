import Image from "next/image";

type Profile = {
  image: string;
  name: string;
};

const Profile = ({ image, name }: Profile) => {
  return (
    <div>
      <Image
        width={96}
        height={96}
        src={`https://ddragon.leagueoflegends.com/cdn/15.5.1/img/champion/${image}`}
        alt={name}
      />
      <span>{name}</span>
    </div>
  );
};

export default Profile;
