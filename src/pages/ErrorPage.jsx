import { useRouteError } from 'react-router-dom';

function ErrorPage() {
  const { message } = useRouteError();

  return (
    <section>
      <h2>Error</h2>
      <p>{message}</p>
    </section>
  );
}

export default ErrorPage;
