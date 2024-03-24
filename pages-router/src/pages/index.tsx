interface User {
  id: string;
  name: string;
  age: number;
}

export const getUser = async () => {
  const user: User = {
    id: "1",
    name: "John",
    age: 21,
  };
  return user;
};

export default function Home({ data }: { data: User }) {
  return (
    <div>
      <p>{data.name}</p>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/hello");
  const text = await res.text();
  const data = await getUser();
  return {
    props: {
      data,
    },
  };
}
