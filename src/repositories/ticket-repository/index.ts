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

async function findTicketbyUserAndTicketId(ticketId: number, userId: number) {
  return prisma.ticket.findFirst({
    where: {
      Enrollment: {
        userId
      },
      id: ticketId
    }
  });
}

async function insertTicket(ticketTypeId: number, enrollmentId: number) {
  return prisma.ticket.create({
    data: {
      ticketTypeId: ticketTypeId,
      enrollmentId: enrollmentId,
      status: "RESERVED",
    },
  });
}

async function payTicket(ticketId: number) {
  return prisma.ticket.update({
    where: {
      id: ticketId
    },
    data: {
      status: "PAID"
    }
  });
}

const ticketRepository = {
  findTicket,
  findTicketType,
  findTicketTypeById,
  findEnrollmentId,
  insertTicket,
  findTicketbyUserAndTicketId,
  payTicket
};

export default ticketRepository;
