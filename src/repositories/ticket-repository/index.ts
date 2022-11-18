import { prisma } from "@/config";

async function findTicket(userId: number) {
  return prisma.ticket.findFirst({
    where: {
      Enrollment: {
        userId: userId,
      },
    },
    include: {
      TicketType: true,
    },
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

async function findEnrollmentId(userId: number) {
  return prisma.enrollment.findUnique({
    where: {
      userId: userId
    }
  });
}

async function insertTicket(ticketTypeId: number, enrollmentId: number) {
  console.log(ticketTypeId, enrollmentId);
  return prisma.ticket.create({
    data: {
      ticketTypeId: ticketTypeId,
      enrollmentId: enrollmentId,
      status: "RESERVED",
    },
  });
}

const ticketRepository = {
  findTicket,
  findTicketType,
  findTicketTypeById,
  findEnrollmentId,
  insertTicket,
};

export default ticketRepository;
