import { getPayment, postPayment } from "@/controllers/payment-controller";
import { Router } from "express";

const paymentRouter = Router();

paymentRouter.get("/", getPayment)
  .post("/process", postPayment);

export { paymentRouter };
