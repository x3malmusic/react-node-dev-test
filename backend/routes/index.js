import route from "express-promise-router";
import { getCards } from "../controllers/data";
import { login } from "../controllers/googleLogin";

const router = route();

router.get("/", getCards);

router.post("/googlelogin", login);

export default router;
