import Profile from "@/components/profile/profile";

export default async function Home() {
  const champApi = await fetch(
    "https://ddragon.leagueoflegends.com/cdn/15.5.1/data/ko_KR/champion.json"
  );
  const data = await champApi.json();
  console.log(Object.values(data.data));
  return (
    <div className="grid grid-cols-7 gap-2 justify-center">
      {Object.values(data.data).map((v: any) => (
        <Profile key={v.id} name={v.name} image={v.image.full} />
      ))}
    </div>
  );
}
