import route from "express-promise-router";
import { getCards } from "../controllers/cardsController";

const router = route();

router.get('/', getCards)

export default router;
