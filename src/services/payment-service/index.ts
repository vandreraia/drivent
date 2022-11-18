import { notFoundError, requestError, unauthorizedError } from "@/errors";
import paymentRepository from "@/repositories/payment-repository";
import ticketRepository from "@/repositories/ticket-repository";

async function findPayment(ticketId: number, userId: number) {
  const validadeTicket = await ticketRepository.findTicketbyUserAndTicketId(ticketId, userId);
  if (!validadeTicket) throw unauthorizedError();
  const result = await paymentRepository.findPayment(ticketId);

  if(!result) throw notFoundError;

  return result;
}

const paymentService = {
  findPayment
};

export default paymentService;
