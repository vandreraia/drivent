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

async function insertTicket(ticketTypeId: number, userId: number) {
  const enrollmentId =  await ticketRepository.findEnrollmentId(userId);
  await ticketRepository.insertTicket(ticketTypeId, enrollmentId.id);

  const result = await findTicket(userId);
  
  return result;
}

const ticketService = {
  findTicket,
  findTicketType,
  insertTicket,
};

export default ticketService;
