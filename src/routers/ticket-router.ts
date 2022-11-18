import { getTicket, getTicketTypes } from "@/controllers/ticket-controller";
import { authenticateToken } from "@/middlewares";
import { Router } from "express";

const ticketRouter = Router();

ticketRouter
// .all("/*", authenticateToken)
  .get("/", getTicket)
  .get("/types", getTicketTypes);

export { ticketRouter };
