import { prisma } from "@/config";

async function findTicket(enrollmentId: number) {
  return prisma.ticket.findFirst({
    where: {
      enrollmentId: enrollmentId
    }
  });
}

async function findTicketType() {
  return prisma.ticketType.findMany();
}

async function findTicketTypeById(typeId: number) {
  return prisma.ticketType.findFirst({
    where: {
      id: typeId
    }
  });
}

function findEnrollmentId(userId: number) {
  return prisma.enrollment.findUnique({
    where: {
      userId: userId
    }
  });
}
const ticketRepository = {
  findTicket,
  findTicketType,
  findTicketTypeById,
  findEnrollmentId,
};

export default ticketRepository;
