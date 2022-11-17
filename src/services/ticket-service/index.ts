import ticketRepository from "@/repositories/ticket-repository";

async function findTicket() {
  const result  = await ticketRepository.findTicket();
    
  return result;
}

async function findTicketType() {
  const result  = await ticketRepository.findTicketType();

  return result;
}

const ticketService = {
  findTicket,
  findTicketType,
};

export default ticketService;
