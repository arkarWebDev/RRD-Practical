import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  let title = "Unknown Error.";

  if (error.status === 500) {
    title = error.data.message;
  }

  return (
    <section>
      <h1>{title}</h1>
      <Link to={"/"}>
        <button>Go back home</button>
      </Link>
    </section>
  );
};

export default Error;
