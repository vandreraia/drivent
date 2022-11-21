import { notFoundError, requestError, unauthorizedError } from "@/errors";
import { CardData } from "@/protocols";
import paymentRepository from "@/repositories/payment-repository";
import ticketRepository from "@/repositories/ticket-repository";
import { BAD_REQUEST } from "http-status";

async function findPayment(ticketId: number, userId: number) {
  await validate(ticketId, userId);

  const result = await paymentRepository.findPayment(ticketId);
  if (!result) throw notFoundError;

  return result;
}

async function insertPayment(userId: number, ticketId: number, cardData: CardData) {
  if (!ticketId || !cardData) throw BAD_REQUEST;

  await validate(ticketId, userId);
  const ticket = await ticketRepository.findTicketTypeById(ticketId);
  console.log(ticket);
  if (!ticket) throw notFoundError;

  await paymentRepository.insertPayment(ticketId, ticket.price, cardData);
  await ticketRepository.payTicket(ticketId);
}

async function validate(ticketId: number, userId: number) {
  const ticket = await ticketRepository.findTicketbyUserAndTicketId(ticketId, userId);
  if (!ticket) throw unauthorizedError();
}

const paymentService = {
  findPayment,
  insertPayment
};

export default paymentService;
