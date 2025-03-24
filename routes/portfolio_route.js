import { Router } from "express";
import { addForm } from "../controllers/portfolio_controller.js";

const portfolioRouter = Router();

portfolioRouter.post('/messages', addForm);

export default portfolioRouter;