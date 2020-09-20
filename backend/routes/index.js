import route from "express-promise-router";
import { getCards, saveList } from "../controllers/data";
import { login } from "../controllers/googleLogin";

const router = route();

router.get("/", getCards);

router.post("/googlelogin", login);

router.post("/savelist", saveList);

export default router;
