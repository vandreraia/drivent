import { AuthenticatedRequest } from "@/middlewares";
import ticketService from "@/services/ticket-service";
import { Response } from "express";
import httpStatus from "http-status";

export async function getTicket(req: AuthenticatedRequest, res: Response) {
  // const { userId } = req;
  const userId = 765;
  try {
    const result = await ticketService.findTicket(userId);

    return res.status(httpStatus.OK).send(result);
  } catch (error) {
    if (error.name === "notFoundError") return (res.sendStatus(httpStatus.NOT_FOUND));
    return res.sendStatus(httpStatus.BAD_REQUEST);
  }
}

export async function getTicketTypes(req: AuthenticatedRequest, res: Response) {
  try {
    const result = await ticketService.findTicketType();

    return res.status(httpStatus.OK).send(result);
  } catch (error) {
    return res.sendStatus(httpStatus.BAD_REQUEST);
  }
}

export async function postTicket(req: AuthenticatedRequest, res: Response) {
  // const { userId } = req;
  const userId = 765;
  const { ticketTypeId } = req.body;
  try {
    const result = await ticketService.insertTicket(Number(ticketTypeId), userId);
    return res.status(httpStatus.CREATED).send(result);
  } catch (error) {
    console.log(error.message);
    if (error.name === "NotFoundError") return res.sendStatus(httpStatus.NOT_FOUND);
    return res.sendStatus(httpStatus.BAD_REQUEST);
  }
}
