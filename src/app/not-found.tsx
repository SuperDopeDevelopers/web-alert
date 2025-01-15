import HomeTemplate from "@/components/template/home";

const NotFound = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) => {
  const { viewport, os } = await searchParams;

  return <HomeTemplate viewport={viewport} os={os} />;
};

export default NotFound;
