import React from "react";
import axios from "axios";


export const getRequest = () => {
  const [error, setError] = React.useState(null);

  axios
    .get(URL)
    .then(result => handleResult(result))
    .catch((error) => {
      setError(error);
      console.log('we have received an error: ', error);
    })
}

{contect === baseUrl.users && (
  <div> </div>
  )}