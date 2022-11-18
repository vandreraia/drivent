import { getPayment } from "@/controllers/payment-controller";
import { Router } from "express";

const paymentRouter = Router();

paymentRouter.get("/", getPayment);

export { paymentRouter };
