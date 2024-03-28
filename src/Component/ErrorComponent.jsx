import { Link, useRouteError } from 'react-router-dom';

const ErrorComponent = () => {
             const error = useRouteError();
  return (
    <div className=" bg-black text-white h-[100vh] flex items-center justify-center">
      <div className=" ">
        <h3 className=" text-5xl">Opppos.....</h3>
        <p className="text-4xl mt-5">{error.statusText || error.message}</p>
       <div className='mt-5'>
       <Link to="/" >
          <button className="text-3xl bg-green-950 p-2 rounded-xl">
            Go to Home
          </button>
        </Link>
       </div>
      </div>
    </div>
  );
};

export default ErrorComponent;