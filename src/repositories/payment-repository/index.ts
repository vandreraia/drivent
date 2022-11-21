import { prisma } from "@/config";
import { CardData } from "@/protocols";

async function findPayment(ticketId: number) {
  return prisma.payment.findFirst({
    where: {
      ticketId: ticketId
    }
  });
}

async function insertPayment(ticketId: number, value: number, cardData: CardData) {
  return prisma.payment.create({
    data: {
      ticketId,
      value: value,
      cardIssuer: cardData.issuer,
      cardLastDigits: cardData.number.toString().slice(-4)
    }
  });
}

const paymentRepository = {
  findPayment,
  insertPayment,
};

export default paymentRepository;
