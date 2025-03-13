type DetailPageProps = {
  params: { champName: string };
};

const DetailPage = ({ params }: DetailPageProps) => {
  const { champName } = params;
  return <div>롤 챔프 : {champName}</div>;
};

export default DetailPage;
