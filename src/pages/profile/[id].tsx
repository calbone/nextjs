import useSWR from "swr";
import { useRouter } from "next/router";

function Profile() {
  const router = useRouter();
  const fetcher = async (url: string, id: string): Promise<any> =>
    await fetch(`https://jsonplaceholder.typicode.com/${url}/${id}`).then(
      (res) => res.json()
    );
  const { data, error } = useSWR(
    router.query.id ? ["posts", router.query.id] : null,
    fetcher
  );
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return <div>hello {data.title}!</div>;
}

export default Profile;
