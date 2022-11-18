import { notFoundError } from "@/errors";
import paymentRepository from "@/repositories/payment-repository";

async function findPayment(ticketId: number) {
  const result = await paymentRepository.findPayment(ticketId);

  if(!result) throw notFoundError;

  return result;
}

const paymentService = {
  findPayment
};

export default paymentService;
