import { prisma } from "@/config";

async function findTicket() {
  return prisma.ticket.findMany();
}

async function findTicketType() {
  return prisma.ticketType.findMany();
}

const ticketRepository = {
  findTicket,
  findTicketType,
};

export default ticketRepository;
