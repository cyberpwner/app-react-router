import notFound from '../../public/not_found.png';

function NotFound() {
  return (
    <div className="grid grid-cols-1 place-items-center h-full my-7">
      <img className="rounded-3xl" src={notFound} alt="Not Found" />
    </div>
  );
}

export default NotFound;
