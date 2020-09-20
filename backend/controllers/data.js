import { asyncHandler } from "../middleware/async";
import { User } from "../models/User";
import axios from "axios";

export const getCards = asyncHandler(async (req, res) => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );

  const posts = await axios.get("https://jsonplaceholder.typicode.com/posts");

  res.send({ usersList: response.data, posts: posts.data });
});

export const saveList = asyncHandler(async (req, res) => {
  const { savedList, email } = req.body;

  if (savedList.length) {
    await User.findOne({ email }).updateOne({ savedList });
  } else await User.findOne({ email }).updateOne({ savedList: [] });

  res.status(200).send();
});
