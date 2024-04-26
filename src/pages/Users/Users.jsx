import { Link, useLoaderData } from 'react-router-dom';

function Users() {
  const users = useLoaderData();

  return (
    <section className="mx-auto w-1/2 grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
      {users.map(({ id, name, email }) => (
        <Link
          to={`${id}`}
          key={id}
          className="bg-orange-500 m-2 rounded-md text-white p-6 hover:bg-orange-600 hover:pl-8 transition-all"
        >
          <h3 className="text-2xl font-bold">{name}</h3>
          <p>{email}</p>
        </Link>
      ))}
    </section>
  );
}

export default Users;
