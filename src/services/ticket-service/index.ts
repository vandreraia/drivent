import { notFoundError } from "@/errors";
import ticketRepository from "@/repositories/ticket-repository";

async function findTicket(userId: number) {
  const result = await ticketRepository.findTicket(userId);

  if (!result) throw notFoundError;

  return result;
}

async function findTicketType() {
  const result = await ticketRepository.findTicketType();

  return result;
}

const ticketService = {
  findTicket,
  findTicketType,
};

export default ticketService;
