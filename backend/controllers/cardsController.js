import { asyncHandler } from "../middleware/async";
import axios from "axios";

export const getCards = asyncHandler(async (req, res) => {
  const response = await axios.get("https://jsonplaceholder.typicode.com/users");
  res.send(response.data);
});
