import { useRouteError } from 'react-router-dom';

function ErrorPage() {
  const { message } = useRouteError();

  return (
    <section>
      <h2 className="text-8xl font-bold">Error</h2>
      <p className="text-2xl ml-2">{message}</p>
    </section>
  );
}

export default ErrorPage;
