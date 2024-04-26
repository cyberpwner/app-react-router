const usersLoader = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');

  if (!response.ok) {
    throw new Error('Could not fetch users  from api.');
  }

  return response.json();
};

export default usersLoader;
