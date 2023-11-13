import { useRouteError } from "react-router-dom";

//if for example type /anyname at end in URL , the error page will appear.

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      {/* <p><i>{error.statusText || error.message}</i></p> */}
    </div>
  );
}
