import { getTicket, getTicketTypes } from "@/controllers/ticket-controller";
import { Router } from "express";

const ticketRouter = Router();

ticketRouter
  .get("/", getTicket)
  .get("/types", getTicketTypes);

export { ticketRouter };
