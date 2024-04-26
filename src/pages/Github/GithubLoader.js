const githubLoader = async () => {
  const response = await fetch('https://api.github.com/users/cyberpwner');

  if (!response.ok) {
    throw new Error('Could not fetch github user.');
  }

  return response.json();
};

export default githubLoader;
