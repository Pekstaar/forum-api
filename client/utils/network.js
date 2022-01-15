import axios from "axios";

export async function makeRequest({ method, url, data }) {
  let response = null;

  switch (method.toLowerCase()) {
    case "get":
      response = await axios.get(url, data);

      break;

    case "post":
      response = await axios.post(url, data);

      break;

    case "patch":
      response = await axios.patch(url, data);

      break;

    case "delete":
      response = await axios.delete(url, data);

      break;

    default:
      break;
  }

  return response.data;
}
