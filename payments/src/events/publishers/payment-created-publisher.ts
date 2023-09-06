import {
  PaymentCreatedEvent,
  Publisher,
  Subjects,
} from "@harishkrishnan1993/common";

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
