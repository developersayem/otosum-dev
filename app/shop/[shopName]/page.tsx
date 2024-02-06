interface shopProps {
  params: { shopName: string };
}
const userDetails = ({ params: { shopName } }: shopProps) => {
  return (
    <div>
      <h1 className="capitalize">{shopName}</h1>
    </div>
  );
};

export default userDetails;
