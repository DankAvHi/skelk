import { Router } from "express";
import orderBackCallController from "../controllers/feedback/orderBackCall.controller";
import { ORDER_BACK_CALL_ROUTE } from "./../shared/api/feedback.api.shared";

const feedbackRouter = Router();

feedbackRouter.post(ORDER_BACK_CALL_ROUTE, orderBackCallController);

export default feedbackRouter;
