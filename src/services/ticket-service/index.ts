import { notFoundError } from "@/errors";
import ticketRepository from "@/repositories/ticket-repository";

async function findTicket(userId: number) {
  const enrollment = await ticketRepository.findEnrollmentId(userId);
  const ticket = await ticketRepository.findTicket(enrollment.id);
  const ticketType = await ticketRepository.findTicketTypeById(ticket.ticketTypeId);

  if (!ticket) throw notFoundError();
    
  const result = {
    id: ticket.id,
    status: ticket.status, //RESERVED | PAID
    ticketTypeId: ticket.ticketTypeId,
    enrollmentId: ticket.enrollmentId,
    TicketType: ticketType,
    createdAt: ticket.createdAt,
    updatedAt: ticket.updatedAt,
  };
  console.log(result);
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
