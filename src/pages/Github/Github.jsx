import { Link, useLoaderData } from 'react-router-dom';

function Github() {
  const {
    login,
    name,
    html_url: url,
    avatar_url: avatarUrl,
    bio,
  } = useLoaderData();

  return (
    <section className="w-1/2 bg-gray-50 dark:bg-gray-600 text-white p-8 border border-gray-500 rounded-md grid grid-cols-[auto,1fr] gap-10">
      <img
        src={avatarUrl}
        alt="Avatar"
        className="w-36 rounded-full border border-slate-400"
      />
      <section className="tracking-wider">
        <h2 className="text-2xl -mb-1 font-semibold">{name}</h2>
        <h3 className="text-gray-600 dark:text-gray-300">{login}</h3>
        <p className="mt-2">{bio}</p>
        <Link
          to={url}
          target="_blank"
          className="inline-block py-3 px-4 mt-4 bg-white dark:text-gray-800 border border-orange-700 hover:bg-orange-600 hover:text-white transition-all rounded-lg"
        >
          Visit Profile
        </Link>
      </section>
    </section>
  );
}

export default Github;
