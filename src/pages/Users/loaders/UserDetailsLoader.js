const userDetailsLoader = async ({ params: { userid } }) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userid}`
  );

  if (!response.ok) {
    throw new Error('Could not fetch user.');
  }

  return response.json();
};

export default userDetailsLoader;
