import { Router } from "express";
import { addForm } from "../controllers/portfolio_controller.js";

const portfolioRouter = Router();

portfolioRouter.post('/portfolio', addForm);

export default portfolioRouter;