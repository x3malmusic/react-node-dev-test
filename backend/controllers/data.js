import { asyncHandler } from "../middleware/async";
import axios from "axios";

export const getCards = asyncHandler(async (req, res) => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );

  const posts = await axios.get("https://jsonplaceholder.typicode.com/posts");

  res.send({ usersList: response.data, posts: posts.data });
});
