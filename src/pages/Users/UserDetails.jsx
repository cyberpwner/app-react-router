import { Link, useLoaderData } from 'react-router-dom';

function UserDetails() {
  const { name, username, email, website } = useLoaderData();

  return (
    <section className="w-2/3 bg-orange-500 dark:bg-orange-700 rounded-md p-8 text-white tracking-wide leading-6">
      <section className="bg-orange-600 dark:bg-orange-600 p-6 rounded-md">
        <h2 className="text-3xl font-bold mb-3">{name}</h2>
        <p>
          <strong>Username:</strong> {username}
        </p>
        <p>
          <strong>Email:</strong> {email}
        </p>
        <p>
          <strong>Website:</strong>{' '}
          <Link
            to={`https://${website}`}
            className="underline hover:pl-2 transition-all"
          >
            {' '}
            {website}
          </Link>
        </p>
      </section>
    </section>
  );
}

export default UserDetails;
