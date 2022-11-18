import { AuthenticatedRequest } from "@/middlewares";
import httpStatus from "http-status";
import { Response } from "express";
import paymentService from "@/services/payment-service";

export async function getPayment(req: AuthenticatedRequest, res: Response) {
  const { ticketId } = req.query;

  try {
    const result = await paymentService.findPayment(Number(ticketId));

    return res.status(httpStatus.OK).send(result);
  } catch (error) {
    if (error.name === "notFoundError") return (res.sendStatus(httpStatus.NOT_FOUND));
    return res.sendStatus(httpStatus.BAD_REQUEST);
  }
}
